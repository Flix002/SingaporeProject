import React from 'react';
import SignOut from './SignOut';
import AdminDashboard from './admin/AdminDashboard';

export default function AdminPanel({ user, onSignOut }) {
  return (
    <div className="mt-6">
      <div className="mb-3 bg-white/5 p-4 rounded-lg border border-white/10">
        <div className="text-lg font-semibold text-white">Admin Panel</div>
        <div className="text-sm text-white/70 mt-2">Hello {user?.username}, you have admin access.</div>
        <div className="mt-3"><SignOut onSignOut={onSignOut} /></div>
      </div>

      <AdminDashboard user={user} />
    </div>
  );
}
