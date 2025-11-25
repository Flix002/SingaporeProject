# cPanel Production Setup (z.com ProL) — Knowledge Hub

This document contains concrete production steps to deploy the `khub` React frontend and the Node/Express backend (`server`) to z.com ProL (cPanel) using the Node.js App feature and managed MongoDB (or MongoDB Atlas).

1) Summary / Assumptions
- Your hosting: z.com ProL (Node.js supported)
- Node version: 18.x
- You will use a managed MongoDB instance (z.com or MongoDB Atlas)
- Backend serves API on `/auth` and `/api/*` and handles uploads
- We use httpOnly cookies for auth (server sets cookie on signin)

2) Environment variables (add these in cPanel Node.js App or Application Manager)
- MONGODB_URI — your MongoDB connection string (mongodb+srv://...)
- JWT_SECRET — a long random secret for signing tokens
- NODE_ENV=production
- DOMAIN — your frontend domain (e.g. khub.your-domain.z.com)
- CORS_ORIGIN — https://your-frontend-domain (for CORS if needed)
- Z_STORAGE_* — storage credentials if using z.com object storage

3) Steps to provision MongoDB
A. If z.com provides managed MongoDB in your dashboard
  1. Provision the DB (choose plan)
  2. Create a database user with a strong password (role: readWrite for app DB)
  3. Copy the TLS-enabled connection string (mongodb+srv://...)
  4. In cPanel, add `MONGODB_URI` with that connection string

B. If using MongoDB Atlas
  1. Create a cluster and database user
  2. Set Network Access (whitelist z.com IPs or 0.0.0.0/0 for testing)
  3. Get the connection string and set `MONGODB_URI` in cPanel

4) Uploading code and dependencies
- You can either upload via git/SSH or use the cPanel File Manager.
- Recommended: upload project ZIP, extract into user's home or a subfolder.
- Use the cPanel "Setup Node.js App":
  - Application root: `/home/youruser/khub` (path where `package.json` is)
  - Application startup file: `server/src/index.js` (or `server/dist` if built)
  - Node.js version: 18.x
  - Environment variables: add the keys above

5) Install dependencies and build
- Via SSH (recommended):

```powershell
cd ~/path/to/khub
# frontend
cd khub
npm install --production
npm run build
# backend
cd ../server
npm install --production
```

If you cannot run npm on the server, build locally and upload the `khub/dist` static folder to `public_html` and run only the backend on Node in cPanel.

6) Auth cookie and security
- The server sets an httpOnly cookie named `token` on signin
- Cookie options: httpOnly, secure (production), sameSite=lax
- Frontend calls must include credentials (fetch `credentials: 'include'`) — client code in `khub/src/api` is already configured for this.

7) File uploads
- Prefer object storage (z.com storage or S3-compatible). Store only references in MongoDB.
- If using the filesystem, store uploads under `/home/youruser/public_html/uploads` and protect sensitive files.

8) SSL
- Enable AutoSSL in cPanel (SSL/TLS Status)
- Force HTTPS via `.htaccess` (already present in `khub/.htaccess`)

9) Process manager
- cPanel's Node.js App uses Passenger or similar; follow the Node.js App UI to start/stop the app.
- If you have SSH and PM2 available, you can use PM2 for process management, but cPanel-managed app is usually sufficient.

10) Backups & Monitoring
- Enable automated DB backups (z.com or Atlas)
- Keep at least 7 days of backups
- Monitor logs via cPanel > Metrics > Errors and custom app logs

11) Quick sanity checklist after deployment
- Visit the site over https
- Sign up / Sign in — verify cookie present in browser (devtools -> Application -> Cookies)
- Test protected endpoints (admin flows)
- Test uploads
- Check server logs for errors

12) Notes
- Do not commit secrets to the repo.
- Demo seed data was archived to `server/dev-data/` — you can use it locally but do not use in production.

If you'd like, I can produce a small `deploy.sh` (PowerShell) for your local machine that builds the frontend, zips `dist`, and uploads to the server via `scp`/rsync. Let me know and I will add it.
