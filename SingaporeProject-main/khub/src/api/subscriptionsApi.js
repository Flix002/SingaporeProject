// NOTE: production should call server-side endpoints. This file previously implemented a localStorage mock
// For now we keep demo helpers but prefer server API. If you want server-backed subscriptions, replace calls
// with fetch to `${API_BASE}/api/subscriptions`.

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000';
const API_URL = `${API_BASE}/api/subscriptions`;

export async function listSubscriptions() {
  const res = await fetch(API_URL, { credentials: 'include' });
  if (!res.ok) throw new Error('Failed to fetch subscriptions');
  return res.json();
}

export async function getSubscription(id) {
  const res = await fetch(`${API_URL}/${id}`, { credentials: 'include' });
  if (!res.ok) return null;
  return res.json();
}

export async function subscribe(courseId, userEmail, paymentPlan = 'full') {
  const res = await fetch(API_URL, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ courseId, userEmail, paymentPlan })
  });
  if (!res.ok) {
    const error = await res.json().catch(()=>({ message: 'Subscribe failed' }));
    throw new Error(error.message || 'Subscribe failed');
  }
  return res.json();
}

export async function makePayment(subscriptionId) {
  const res = await fetch(`${API_URL}/${subscriptionId}/pay`, {
    method: 'POST',
    credentials: 'include'
  });
  if (!res.ok) {
    const error = await res.json().catch(()=>({ message: 'Payment failed' }));
    throw new Error(error.message || 'Payment failed');
  }
  return res.json();
}

// keep seed helper as a client-side convenience only for dev
export async function seedDemoSubscriptions() {
  // optional: call a server-side seed endpoint if present
  const res = await fetch(`${API_BASE}/api/seed`, { method: 'POST', credentials: 'include' });
  if (!res.ok) return [];
  return res.json();
}
