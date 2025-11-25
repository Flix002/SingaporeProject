import React, { useEffect, useState } from 'react';
import { listUploads, deleteUpload, clearUploads } from '../../api/uploadApi';

export default function UploadManager() {
  const [uploads, setUploads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    refresh();
  }, []);

  async function refresh() {
    setLoading(true);
    const u = await listUploads();
    setUploads(u || []);
    setLoading(false);
  }

  async function handleDelete(filename) {
    await deleteUpload(filename);
    refresh();
  }

  async function handleClear() {
    if (!confirm('Clear all stored uploads?')) return;
    await clearUploads();
    refresh();
  }

  return (
    <div className="space-y-3">
      <div className="card-futuristic">
        <div className="card-title">Upload Manager</div>
        <div className="small muted">Stored uploads (data URLs and server uploads cached locally)</div>
        <div className="mt-2">
          <button onClick={handleClear} className="btn-neon px-3 py-1">Clear all</button>
        </div>
      </div>

      {loading ? <div className="muted">Loading...</div> : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {uploads.length === 0 && <div className="muted">No uploads</div>}
          {uploads.map((u) => (
            <div key={u.filename} className="card-futuristic flex gap-3 items-center">
              <div className="w-28 h-20 rounded-image overflow-hidden">
                {/* handle images/video/data URLs */}
                {u.url && <img src={u.url} alt={u.originalName || u.filename} className="w-full h-full object-cover" />}
              </div>
              <div className="flex-1">
                <div className="font-medium text-white">{u.originalName || u.filename}</div>
                <div className="small muted">{new Date(u.createdAt).toLocaleString()}</div>
              </div>
              <div className="flex flex-col gap-2">
                <button onClick={() => handleDelete(u.filename)} className="px-2 py-1 bg-red-600 rounded text-white text-sm">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
