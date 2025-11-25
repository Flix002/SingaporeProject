const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000';
const API_URL = `${API_BASE}/api/teachers`;

export async function listTeachers() {
  const res = await fetch(API_URL, { credentials: 'include' });
  
  if (!res.ok) {
    throw new Error('Failed to fetch teachers');
  }
  
  return res.json();
}

export async function createTeacher(profile) {
  const res = await fetch(API_URL, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(profile)
  });
  
  if (!res.ok) {
    const error = await res.json().catch(()=>({ message: 'Failed to create teacher' }));
    throw new Error(error.message || 'Failed to create teacher');
  }
  
  return res.json();
}

export async function getTeacher(id) {
  const res = await fetch(`${API_URL}/${id}`, { credentials: 'include' });
  
  if (!res.ok) {
    throw new Error('Failed to fetch teacher');
  }
  
  return res.json();
}

export async function updateTeacher(id, patch) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patch)
  });
  
  if (!res.ok) {
    const error = await res.json().catch(()=>({ message: 'Failed to update teacher' }));
    throw new Error(error.message || 'Failed to update teacher');
  }
  
  return res.json();
}
