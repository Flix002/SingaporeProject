const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000';
const API_URL = `${API_BASE}/api/notifications`;

export async function listNotifications() {
  const res = await fetch(API_URL, { credentials: 'include' });
  
  if (!res.ok) {
    throw new Error('Failed to fetch notifications');
  }
  
  return res.json();
}

export async function createNotification(note) {
  const res = await fetch(API_URL, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note)
  });
  
  if (!res.ok) {
    const error = await res.json().catch(()=>({ message: 'Failed to create notification' }));
    throw new Error(error.message || 'Failed to create notification');
  }
  
  return res.json();
}

export async function markRead(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ handled: true })
  });
  
  if (!res.ok) {
    const error = await res.json().catch(()=>({ message: 'Failed to update notification' }));
    throw new Error(error.message || 'Failed to update notification');
  }
  
  return res.json();
}
