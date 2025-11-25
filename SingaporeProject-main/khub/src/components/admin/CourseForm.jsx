import React, { useEffect, useState } from 'react';
import { uploadFile } from '../../api/uploadApi';

export default function CourseForm({ onCreate, editing, onUpdate, onCancel }) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [parts, setParts] = useState(1);
  const [coverFile, setCoverFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (editing) {
      setTitle(editing.title || ''); setPrice(editing.price || 0); setDescription(editing.description || ''); setParts(editing.parts || 1);
      if (editing.cover) setPreview(editing.cover);
    }
  }, [editing]);

  const submit = async (ev) => {
    ev.preventDefault();
    const payload = { title, price: Number(price), description, parts: Number(parts) };
    setUploading(true);
    try {
      if (coverFile) {
        const { url } = await uploadFile(coverFile);
        payload.cover = url;
        setPreview(url);
      }
    } catch (e) {
      // proceed even if upload fails (fallback)
      console.warn('Upload failed', e);
    } finally { setUploading(false); }
    if (editing) {
      onUpdate(editing.id, payload);
    } else {
      onCreate(payload);
    }
    setTitle(''); setPrice(0); setDescription('');
    setCoverFile(null);
    // reset preview only if creating new
    if (!editing) setPreview(null);
  };

  return (
    <form onSubmit={submit} className="space-y-2">
      <div className="flex gap-2">
        <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Course title" className="flex-1 px-2 py-1 rounded bg-white/5 text-white" required />
        <input value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Price" type="number" className="w-28 px-2 py-1 rounded bg-white/5 text-white" />
      </div>
      <div>
        <textarea value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Short description" className="w-full px-2 py-1 rounded bg-white/5 text-white" />
      </div>
      <div className="flex gap-2 items-center">
        <input value={parts} onChange={(e)=>setParts(e.target.value)} type="number" min={1} className="w-20 px-2 py-1 rounded bg-white/5 text-white" />
        <input type="file" accept="image/*,video/*" onChange={(e)=>{ const f=e.target.files[0]; setCoverFile(f); if (f && f.type.startsWith('image/')) setPreview(URL.createObjectURL(f)); }} className="text-sm text-white/70" />
        {uploading && <div className="text-sm text-white/60">Uploading...</div>}
      </div>
      {preview && (
        <div className="w-full max-w-sm">
          {/* show image preview; videos can be shown by browser if url points to data or blob */}
          {preview.startsWith('data:') || preview.startsWith('blob:') || preview.startsWith('http') ? (
            <img src={preview} alt="cover preview" className="w-full h-40 object-cover rounded" />
          ) : null}
        </div>
      )}
      <div className="flex gap-2">
        <button className="px-3 py-1 bg-green-600 rounded text-white" type="submit">{editing ? 'Update' : 'Create'}</button>
        {editing && <button type="button" onClick={onCancel} className="px-3 py-1 bg-gray-600 rounded text-white">Cancel</button>}
      </div>
    </form>
  );
}
