const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000';
const API_URL = `${API_BASE}/api/courses`;

export async function listCourses() {
  const res = await fetch(API_URL, { credentials: 'include' });
  if (!res.ok) {
    throw new Error('Failed to fetch courses');
  }
  return res.json();
}

export async function getCourse(id) {
  const res = await fetch(`${API_URL}/${id}`, { credentials: 'include' });
  if (!res.ok) {
    throw new Error('Failed to fetch course');
  }
  return res.json();
}

export async function createCourse(course) {
  const res = await fetch(API_URL, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(course)
  });
  
  if (!res.ok) {
    const error = await res.json().catch(()=>({ message: 'Failed to create course' }));
    throw new Error(error.message || 'Failed to create course');
  }
  
  return res.json();
}

export async function updateCourse(id, patch) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patch)
  });
  
  if (!res.ok) {
    const error = await res.json().catch(()=>({ message: 'Failed to update course' }));
    throw new Error(error.message || 'Failed to update course');
  }
  
  return res.json();
}

export async function deleteCourse(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    credentials: 'include'
  });
  
  if (!res.ok) {
    const error = await res.json().catch(()=>({ message: 'Failed to delete course' }));
    throw new Error(error.message || 'Failed to delete course');
  }
  
  return res.json();
}
