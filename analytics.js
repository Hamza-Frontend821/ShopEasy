(function () {
    // ---- Real-time visitor tracking for admin analytics ----
    // Creates a per-tab/session id, sends page_view once per page load,
    // and heartbeat every 10 seconds.

    const TRACK_URL = '/track';
    const HEARTBEAT_EVERY_MS = 10_000;

    function getSessionId() {
        // Keep stable for this browser tab session
        let id = sessionStorage.getItem('narfi_session_id');
        if (!id) {
            id = 's_' + Math.random().toString(16).slice(2) + '_' + Date.now().toString(16);
            sessionStorage.setItem('narfi_session_id', id);
        }
        return id;
    }

    function safeSend(payload) {
        // Fire-and-forget; do not block UI
        try {
            navigator.sendBeacon?.(TRACK_URL, JSON.stringify(payload));
        } catch (e) {
            // ignore
        }

        // Fallback for older browsers
        if (!navigator.sendBeacon) {
            fetch(TRACK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                keepalive: true,
            }).catch(() => { });
        }
    }

    const sessionId = getSessionId();
    const pagePath = location.pathname + (location.search || '');
    const t = Date.now();

    // page_view once per load
    safeSend({ type: 'page_view', ts: t, path: pagePath, sessionId });

    // heartbeat
    setInterval(() => {
        safeSend({ type: 'heartbeat', ts: Date.now(), path: pagePath, sessionId });
    }, HEARTBEAT_EVERY_MS);
})();

