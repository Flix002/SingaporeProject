cPanel Node.js App — setup and deployment

This guide explains how to deploy the `khub` application to z.com (cPanel) using the built-in Node.js app feature. It assumes you will deploy the frontend and backend into the `khub` folder on cPanel and that Cloudflare R2 will be used for file storage.

Prerequisites
- A z.com account with cPanel access
- cPanel username: `Admin`
- Domain: `knowledgehubmm.com`
- Cloudflare account with R2 bucket `khubvideos` and R2 keys
- MongoDB connection (Atlas or accessible DB)
- Node.js >= 18 installed on cPanel (cPanel Node.js selector)

Environment variables (set these in the cPanel Node.js app or place a secure `.env` in the app folder)
- `MONGODB_URI` — MongoDB connection string
- `PORT` — (optional) Node server port; cPanel sets this for you
- `USE_R2=true` — enable Cloudflare R2 integration
- `CF_ACCOUNT_ID` — Cloudflare account id (e.g. `e86299bf709f164c49c7743f56829687`)
- `R2_BUCKET` — `khubvideos`
- `R2_ACCESS_KEY_ID` — R2 access key id
- `R2_SECRET_ACCESS_KEY` — R2 secret key

MongoDB connection string (example)
- Template (replace `<username>` and `<password>` with your Atlas user and password):

```
mongodb+srv://<username>:<password>@cluster0.p61y84z.mongodb.net/khub?retryWrites=true&w=majority
```

- Important: do NOT commit this string to source control. If your password contains special characters (e.g. `@`, `:`), percent-encode them.

How to add environment variables in cPanel
1. In cPanel, open "Setup Node.js App" for the `khub` application.
2. Click the application to edit it, then find the "Environment Variables" section.
3. Add a new variable with **Name** `MONGODB_URI` and **Value** set to your full Atlas connection string (example above).
4. Add the Cloudflare R2 variables as separate entries: `CF_ACCOUNT_ID`, `R2_BUCKET`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`.
5. Save the changes and restart the application from the cPanel app manager.

If you prefer, create a secure `.env` file in the `khub` app folder on the server (not committed to Git) with these variables instead.

Steps — create Node.js app in cPanel
1. Log in to cPanel for `knowledgehubmm.com` as `Admin`.
2. Open "Setup Node.js App" (or "Application Manager" → "Setup Node.js App").
3. Click "Create Application".
   - Node.js version: choose `18.x`
   - Application mode: `Production`
   - Application root: `khub` (this is where the project will be extracted)
   - Application startup file: `server/src/index.js`
4. Save the application. cPanel will show environment variables input — add the variables listed above.

Deployment using `deploy-cpanel.sh` (from your local machine)
1. Make sure `scp` and `ssh` are available from your machine and that your cPanel account accepts SSH connections.
2. From repository root run:

```bash
# Build and create deploy package, upload to cPanel and deploy
bash deploy-cpanel.sh
```

What the script does
- Builds the frontend (`khub`) and prepares the backend (`khub/server`).
- Creates `deploy.zip` containing `khub/build`, `server`, and `package.json`.
- Copies `deploy.zip` to `~/khub` on the cPanel server.
- SSHs into the server, extracts the zip, runs `npm install --production`, and starts/restarts the app (script uses `pm2` if available).

Post-deploy checks
- Open `https://knowledgehubmm.com` to see the frontend.
- API endpoints will be served by the Node app; check the cPanel app URL or configured domain.
- Check logs in cPanel "Application Manager" or `error_log`/`access_log`.

Notes & tips
- If `pm2` is not available on the server, cPanel's built-in Node app manager handles starting the process. If using PM2, install it globally (`npm i -g pm2`) in your cPanel account and configure a process name.
- Add your `.env` variables in cPanel UI rather than committing them to the repo.
- Ensure R2 keys have limited scope and are kept secret.

If you want, I can also:
- Add a `ecosystem.config.js` for PM2 and update the deploy script to use it.
- Modify frontend upload code to use the `POST /api/uploads/presign` endpoint for direct R2 uploads.

---
File locations changed by scripts
- `deploy-cpanel.sh` (root) — updated to deploy into `khub`.
- `khub/deploy-cpanel.sh` — updated to deploy into `khub` and to use `Admin` as username.
- `khub/server/.env.example` — example env already provided; copy values into cPanel app settings.

If you want me to add PM2 config or make the deploy script more robust (checks, error handling), tell me and I'll implement it.