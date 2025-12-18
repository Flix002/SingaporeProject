import React, { useState } from 'react';
import { setUser, setAuth } from '../utils/auth';
import { signIn as apiSignIn } from '../api/authApi';

/**
 * SignIn component
 * Props:
 *  - onSignIn(user) optional callback called with { username, email, role }
 *
 * Behavior:
 *  - Validates required fields (username, valid gmail address, password >= 6)
 *  - Persists user object to localStorage under key 'khub_user'
 */
export default function SignIn({ onSignIn }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function isGmailAddress(e) {
    // simple check: endsWith @gmail.com and basic email pattern
    return /^\S+@gmail\.com$/i.test(e);
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setError('');

    if (!username.trim()) {
      setError('Please enter a username.');
      return;
    }
    if (!isGmailAddress(email)) {
      setError('Please enter a valid Gmail address (example@gmail.com).');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);

    // Call auth API (server sets httpOnly cookie). Response returns user object.
    apiSignIn(email.trim().toLowerCase(), password)
      .then((resp) => {
        const userFromServer = resp.user || resp; // server may return { user } or user
        const finalUser = { ...userFromServer, username: username.trim(), role };
        // keep user in localStorage for UI state; token is handled via cookie
        setAuth(undefined, finalUser);
        setUser(finalUser);
        setLoading(false);
        if (typeof onSignIn === 'function') onSignIn(finalUser);
      })
      .catch((err) => {
        setLoading(false);
        setError(err?.message || 'Sign-in failed');
      });
  };

  return (
    <div className="max-w-md mx-auto p-8">
      <div className="relative backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 shadow-[0_0_40px_rgba(8,_112,_184,_0.7)] p-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <h2 className="text-3xl font-bold text-white mb-6 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
        Sign In
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
        <div className="group">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
          placeholder="Username"
          required
        />
        </div>

        <div className="group">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
          placeholder="you@gmail.com"
          type="email"
          required
        />
        </div>

        <div className="group">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
          placeholder="Password (min 6 chars)"
          type="password"
          required
        />
        </div>

        <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
        >
        <option value="admin">Admin</option>
        <option value="teacher">Teacher</option>
        <option value="user">User</option>
        </select>

        {error && <div className="text-sm text-red-400 font-medium">{error}</div>}

        <div className="flex items-center justify-between pt-2">
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium disabled:opacity-60 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 backdrop-blur-md relative overflow-hidden group"
          disabled={loading}
        >
          <span className="relative z-10">{loading ? 'Signing in...' : 'Sign In'}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        <button
          type="button"
          onClick={() => {
          setUsername('Teacher Jane');
          setEmail('teacher.example@gmail.com');
          setPassword('password123');
          setRole('teacher');
          }}
          className="text-sm text-white/70 hover:text-white transition-colors duration-300"
        >
          Fill demo
        </button>
        </div>
      </form>
      </div>
    </div>
  );
}
