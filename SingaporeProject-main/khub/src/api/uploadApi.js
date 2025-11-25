const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000';
const API_URL = `${API_BASE}/api/uploads`;

export async function uploadFile(file) {
  if (!file) return null;
  
  const formData = new FormData();
  formData.append('file', file);

  const res = await fetch(API_URL, {
    method: 'POST',
    credentials: 'include',
    body: formData
  });

  if (!res.ok) {
    const error = await res.json().catch(()=>({ message: 'Upload failed' }));
    throw new Error(error.message || 'Upload failed');
  }

  return res.json();
}

export async function listUploads() {
  const res = await fetch(API_URL, { credentials: 'include' });

  if (!res.ok) {
    throw new Error('Failed to fetch uploads');
  }

  return res.json();
}

export async function deleteUpload(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    credentials: 'include'
  });

  if (!res.ok) {
    const error = await res.json().catch(()=>({ message: 'Failed to delete upload' }));
    throw new Error(error.message || 'Failed to delete upload');
  }

  return res.json();
}
