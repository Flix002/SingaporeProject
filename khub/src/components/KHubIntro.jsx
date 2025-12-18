import React, { useEffect, useState } from 'react';
import KnowledgeHubLogoIntro from '../../../../SingaporeProject-main/khub/src/components/KnowledgeHubLogoIntro';
import SignIn from './SignIn';
import SignOut from './SignOut';
import AdminPanel from './AdminPanel';
import TeacherDashboard from './teacher/TeacherDashboard';
import UserDashboard from './user/UserDashboard';
import { getUser } from '../utils/auth';

export default function KHubIntro() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = getUser();
    if (u) setUser(u);
  }, []);

  const handleSignIn = (u) => setUser(u);
  const handleSignOut = () => setUser(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#021428] via-[#041e34] to-[#081624]">
      <div className="p-6 rounded-xl neon-glow shadow-xl mb-6">
        <KnowledgeHubLogoIntro />
      </div>

      <div className="absolute bottom-10 w-full flex justify-center">
        <div className="w-full max-w-3xl px-4">
          {!user ? (
            <div className="glass p-4 rounded-lg">
              <SignIn onSignIn={handleSignIn} />
            </div>
          ) : (
            <div className="space-y-4">
              <div className="glass p-4 rounded-lg neon-accent">
                <div className="text-white font-semibold">Welcome, {user.username}</div>
                <div className="text-sm text-white/70">Role: {user.role}</div>
                <div className="text-sm text-white/70">Email: {user.email}</div>
              </div>

              {user.role === 'admin' ? (
                <AdminPanel user={user} onSignOut={handleSignOut} />
              ) : user.role === 'teacher' ? (
                <div>
                  <TeacherDashboard user={user} />
                  <div className="mt-3"><SignOut onSignOut={handleSignOut} /></div>
                </div>
              ) : (
                <div>
                  <UserDashboard user={user} />
                  <div className="mt-3"><SignOut onSignOut={handleSignOut} /></div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
