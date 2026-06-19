# TODO - Admin realtime analytics

- [ ] Create Node/Express backend (`server.js`) with:
  - [ ] POST `/track` to accept `page_view` + `heartbeat`
  - [ ] GET `/analytics` to return metrics
  - [ ] In-memory TTL store for active sessions & counters
  - [ ] Simple admin auth using header token
- [ ] Add env/config notes (`ADMIN_TOKEN`) to README (optional)
- [ ] Add `analytics.js` to track visitors (session id + heartbeats)
- [ ] Create `admin.html` dashboard UI and `admin.js`
- [x] Update all site pages to include `analytics.js`
- [x] Update `package.json` with start command
- [x] Run and test locally
  - [ ] Start server
  - [ ] Open 2-3 browser tabs; verify online counter changes
  - [x] Open admin page with token; verify counters

