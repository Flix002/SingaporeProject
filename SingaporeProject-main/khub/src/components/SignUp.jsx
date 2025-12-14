import React, { useState } from 'react';
import PasswordHasher from './PasswordHasher';
import { signUp as apiSignUp } from '../api/authApi';
import { setAuth, setUser } from '../utils/auth';

export default function SignUp({ onSignUp }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClientHashSubmit = async (hash) => {
    setError('');
    setLoading(true);
    try {
      const resp = await apiSignUp({ username, email, password: hash, role, clientHashed: true });
      const userFromServer = resp.user || resp;
      setAuth(undefined, userFromServer);
      setUser(userFromServer);
      if (typeof onSignUp === 'function') onSignUp(userFromServer);
    } catch (err) {
      setError(err?.message || 'Sign up failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 mt-8">
      <div className="relative backdrop-blur-lg bg-gradient-to-br from-white/6 to-white/3 rounded-2xl border border-white/10 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Sign Up</h2>

        <div className="space-y-4">
          <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Username" className="w-full px-3 py-2 rounded bg-white/5 text-white" />
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@gmail.com" type="email" className="w-full px-3 py-2 rounded bg-white/5 text-white" />

          <select value={role} onChange={e=>setRole(e.target.value)} className="w-full px-3 py-2 rounded bg-white/5 text-white">
            <option value="user">User</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>

          <div>
            <PasswordHasher onSubmit={handleClientHashSubmit} />
          </div>

          {error && <div className="text-sm text-red-400">{error}</div>}
          {loading && <div className="text-sm text-white/70">Processing...</div>}
        </div>
      </div>
    </div>
  );
}
