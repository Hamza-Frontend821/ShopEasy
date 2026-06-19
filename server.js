import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// ---- Config ----
// Set this to protect /admin and /analytics.
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'change-me';

// For local dev convenience: allow admin token to be sent via query ?token=... too.
// (Still protected for non-matching tokens.)




// ---- Middleware ----
app.use(express.json({ limit: '256kb' }));

// Serve static frontend
app.use(express.static(path.join(__dirname)));

// ---- Simple in-memory TTL store ----
// sessionId -> { lastSeenTs, path, firstSeenTs }
const sessions = new Map();
// path -> page views count
const pageViews = new Map();

const ONLINE_WINDOW_MS = 60_000; // last 60s considered online
const SESSION_TTL_MS = 10 * 60_000; // keep session for 10 minutes

function now() {
    return Date.now();
}

function cleanupExpiredSessions() {
    const t = now();
    for (const [sessionId, s] of sessions.entries()) {
        if (t - s.lastSeenTs > SESSION_TTL_MS) {
            sessions.delete(sessionId);
        }
    }
}

function auth(req, res, next) {
    const token = req.headers['x-admin-token'];
    if (!token || token !== ADMIN_TOKEN) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
}

// ---- Tracking endpoint ----
app.post('/track', (req, res) => {
    try {
        const { type, ts, path: pagePath, sessionId } = req.body || {};
        if (!type || !sessionId) return res.status(400).json({ error: 'Missing type or sessionId' });

        const t = typeof ts === 'number' ? ts : now();

        cleanupExpiredSessions();

        const existing = sessions.get(sessionId);

        if (!existing) {
            sessions.set(sessionId, {
                firstSeenTs: t,
                lastSeenTs: t,
                path: pagePath || '/',
            });
        } else {
            existing.lastSeenTs = t;
            if (pagePath) existing.path = pagePath;
        }

        if (type === 'page_view') {
            const key = pagePath || '/';
            pageViews.set(key, (pageViews.get(key) || 0) + 1);
        }

        if (type !== 'heartbeat' && type !== 'page_view') {
            return res.status(400).json({ error: 'Invalid event type' });
        }

        return res.json({ ok: true });
    } catch (e) {
        return res.status(500).json({ error: 'Server error' });
    }
});

// ---- Admin / analytics ----
app.get('/analytics', auth, (req, res) => {
    cleanupExpiredSessions();

    const t = now();
    const onlineNow = Array.from(sessions.values()).filter(s => t - s.lastSeenTs <= ONLINE_WINDOW_MS).length;

    // Approximate unique visitors:
    // - treat a session as a "visitor" at firstSeenTs
    // - count sessions whose firstSeenTs is within last 24h
    const last24hStart = t - 24 * 60 * 60 * 1000;
    const last24hVisitors = Array.from(sessions.values()).filter(s => s.firstSeenTs >= last24hStart).length;

    // Today's visitors (local time)
    const d = new Date();
    const startOfToday = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
    const todayVisitors = Array.from(sessions.values()).filter(s => s.firstSeenTs >= startOfToday).length;

    res.json({
        onlineNow,
        todayVisitors,
        last24hVisitors,
        serverTs: t,
    });
});

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Admin analytics server listening on http://localhost:${PORT}`);
    // eslint-disable-next-line no-console
    console.log(`ADMIN_TOKEN=${ADMIN_TOKEN}`);
});

