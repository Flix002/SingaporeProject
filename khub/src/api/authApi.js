const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000';
const API_URL = `${API_BASE}/auth`;

export async function signIn(email, password) {
  const res = await fetch(`${API_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Sign in failed' }));
    throw new Error(error.message || 'Sign in failed');
  }

  // Server returns user object (cookie set httpOnly)
  return res.json();
}

export async function validateToken() {
  const res = await fetch(`${API_URL}/validate`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  });

  if (!res.ok) {
    return { valid: false };
  }

  return res.json();
}
