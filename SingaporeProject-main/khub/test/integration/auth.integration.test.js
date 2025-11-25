import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import fetch from 'node-fetch';
import { startServer } from '../../server/index.js';

let server;
let baseUrl;

beforeAll(() => {
  // start server on ephemeral port
  server = startServer(0);
  const addr = server.address();
  const port = addr.port;
  baseUrl = `http://127.0.0.1:${port}`;
});

afterAll(() => {
  server.close();
});

describe('mock auth server', () => {
  it('signs in valid user and validates token', async () => {
    const res = await fetch(`${baseUrl}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'admin.example@gmail.com', password: 'adminpass' }),
    });

    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toHaveProperty('token');
    expect(body).toHaveProperty('user');
    expect(body.user.role).toBe('admin');

    // validate token
    const val = await fetch(`${baseUrl}/validate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: body.token }),
    });
    expect(val.status).toBe(200);
    const vbody = await val.json();
    expect(vbody.valid).toBe(true);
    expect(vbody.user.role).toBe('admin');
  });

  it('rejects invalid credentials', async () => {
    const res = await fetch(`${baseUrl}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'noone@example.com', password: 'x' }),
    });
    expect(res.status).toBe(401);
  });
});
