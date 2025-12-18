import React, { useEffect, useState } from 'react';
import { listSubscriptions, makePayment } from '../../api/subscriptionsApi';
import { listNotifications } from '../../api/notificationsApi';

export default function TeacherDashboard({ user }) {
  const [subs, setSubs] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(()=>{ listSubscriptions().then(setSubs); listNotifications().then(setNotes); }, []);

  const handleRespond = (id) => {
    // simple acknowledgement flow: mark notification handled via local API
    // in practice teacher would respond via notificationsApi
    alert('Respond to user (demo): ' + id);
  };

  return (
    <div className="space-y-4">
      <div className="bg-white/5 p-4 rounded border border-white/10">
        <div className="text-white font-semibold">Teacher Dashboard</div>
        <div className="text-sm text-white/70 mt-2">Hello {user?.username}</div>
      </div>

      <div className="bg-white/5 p-4 rounded border border-white/10">
        <div className="text-white font-semibold">Incoming Appointments</div>
        {notes.length===0 && <div className="text-white/70 mt-2">No appointments</div>}
        {notes.map(n=> (
          <div key={n.id} className="mt-2 p-2 bg-white/3 rounded flex justify-between items-center">
            <div>
              <div className="text-white">{n.message}</div>
              <div className="text-sm text-white/70">From: {n.from}</div>
            </div>
            <div>
              <button onClick={()=>handleRespond(n.id)} className="px-2 py-1 bg-green-600 rounded text-white">Respond</button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white/5 p-4 rounded border border-white/10">
        <div className="text-white font-semibold">Subscriptions (demo)</div>
        {subs.map(s=> (
          <div key={s.id} className="mt-2 p-2 bg-white/3 rounded">
            <div className="text-white">{s.userEmail} — {s.paymentPlan}</div>
            <div className="text-sm text-white/70">Status: {s.active? 'Full access' : 'Partial access'}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
