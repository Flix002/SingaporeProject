import React, { useEffect, useState } from 'react';
import { listNotifications, updateNotification, seedDemoNotifications } from '../../api/notificationsApi';

export default function NotificationsPanel() {
  const [notes, setNotes] = useState([]);

  function load(){ listNotifications().then(setNotes); }
  useEffect(()=>{ load(); }, []);

  const handleMark = (id) => updateNotification(id, { handled: true }).then(()=>load());

  return (
    <div className="mt-4 bg-white/5 p-4 rounded border border-white/10">
      <div className="flex justify-between items-center">
        <div className="text-white font-semibold">Notifications</div>
        <button className="px-2 py-1 bg-blue-600 rounded" onClick={()=>seedDemoNotifications().then(()=>load())}>Seed</button>
      </div>

      <div className="mt-3 space-y-2">
        {notes.length === 0 && <div className="text-white/70">No notifications</div>}
        {notes.map(n=> (
          <div key={n.id} className="p-2 bg-white/3 rounded flex justify-between items-start">
            <div>
              <div className="text-white font-medium">{n.type}</div>
              <div className="text-sm text-white/70">{n.message || n.title} — from {n.from}</div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="text-sm text-white/60">{new Date(n.createdAt).toLocaleString()}</div>
              {!n.handled && <button onClick={()=>handleMark(n.id)} className="px-2 py-1 bg-green-600 rounded text-white text-sm">Mark handled</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
