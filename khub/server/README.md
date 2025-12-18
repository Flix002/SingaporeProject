# Mock API Server

This folder contains a small Express-based mock API server used for local development. It implements authentication (JWT) and simple REST endpoints for courses, teachers, notifications and subscriptions. Data is persisted to JSON files under `server/data/`.

Run (PowerShell):

```powershell
cd .\khub\server
npm install
npm start
```

By default the server listens on port 4000. Endpoints of interest:
- POST /signin { email, password }
- POST /validate { token }
- GET /api/courses
- POST /api/courses (requires Authorization: Bearer <token> for teacher/admin)
- PUT /api/courses/:id
- DELETE /api/courses/:id (admin only)
- GET /api/notifications
- POST /api/notifications
- GET /api/teachers
- POST /api/teachers (admin only)
- GET /api/subscriptions
- POST /api/subscriptions
- POST /api/subscriptions/:id/pay
- POST /api/seed (dev only) — populate demo data

Demo users are created in `server/data/users.json` when you run the server:
- admin.example@gmail.com / adminpass (admin)
- teacher.example@gmail.com / teacherpass (teacher)
- user.example@gmail.com / userpass (user)

Note: This server is for local development/demo only. Passwords are stored in cleartext. Do not deploy to production.
Mock Auth Server

Run a tiny Express-based mock auth server for local testing.

Install and start:

```powershell
cd khub/server; npm install; npm start
```

The server exposes:
- POST /signin { email, password } -> { token, user }
- POST /validate { token } -> { valid: boolean, user? }

The server uses `JWT_SECRET` from `.env` if provided; otherwise a dev secret is used.
