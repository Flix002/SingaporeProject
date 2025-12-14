import React, { useState } from 'react';

async function sha256Hex(value) {
  const enc = new TextEncoder();
  const data = enc.encode(value);
  const hash = await crypto.subtle.digest('SHA-256', data);
  const bytes = new Uint8Array(hash);
  return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
}

export default function PasswordHasher({ onSubmit }) {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [hashed, setHashed] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleHash = async (e) => {
    e && e.preventDefault();
    setError('');
    if (!password) { setError('Enter a password'); return; }
    if (password !== confirm) { setError('Passwords do not match'); return; }
    setLoading(true);
    try {
      const h = await sha256Hex(password);
      setHashed(h);
      if (typeof onSubmit === 'function') {
        // pass the client-side hash to caller (do NOT skip server-side hashing)
        await onSubmit(h);
      }
    } catch (err) {
      setError('Hashing failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleHash} className="max-w-md bg-white/5 p-4 rounded">
      <h4 className="text-lg font-medium text-white mb-2">Password hasher (client-side)</h4>
      <p className="text-sm text-white/60 mb-3">This hashes the password client-side (SHA-256) before sending. Always also hash on the server using bcrypt/argon2.</p>

      <div className="mb-2">
        <label className="block text-sm text-white/80">New password</label>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full px-2 py-1 rounded bg-white/5 text-white" />
      </div>
      <div className="mb-2">
        <label className="block text-sm text-white/80">Confirm password</label>
        <input type="password" value={confirm} onChange={e=>setConfirm(e.target.value)} className="w-full px-2 py-1 rounded bg-white/5 text-white" />
      </div>

      {error && <div className="text-sm text-red-400 mb-2">{error}</div>}

      <div className="flex gap-2">
        <button type="submit" disabled={loading} className="px-3 py-1 bg-green-600 rounded text-white">Hash & Send</button>
        <button type="button" onClick={()=>{ setPassword(''); setConfirm(''); setHashed(''); setError(''); }} className="px-3 py-1 bg-gray-600 rounded text-white">Reset</button>
      </div>

      {loading && <div className="text-white/70 mt-2">Hashing...</div>}
      {hashed && (
        <div className="mt-3 text-sm text-white/80">
          <div className="font-medium">Client-side hash (SHA-256)</div>
          <pre className="break-words bg-white/2 p-2 rounded mt-1">{hashed}</pre>
        </div>
      )}
    </form>
  );
}
