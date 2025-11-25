import React, { useEffect, useState } from 'react';
import { listTeachers, createTeacher, seedDemoTeachers } from '../../api/teachersApi';

export default function TeacherManager() {
  const [teachers, setTeachers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function load() { listTeachers().then(setTeachers); }
  useEffect(()=>{ load(); }, []);

  const add = (ev) => {
    ev.preventDefault();
    if (!name || !email) return;
    createTeacher({ name, email, permitted: true }).then(()=>{ setName(''); setEmail(''); load(); });
  };

  return (
    <div className="mt-4 bg-white/5 p-4 rounded border border-white/10">
      <div className="text-white font-semibold">Teacher Accounts</div>
      <div className="text-sm text-white/70 mt-2">Create teacher accounts and grant permission to create courses.</div>

      <form onSubmit={add} className="mt-3 flex gap-2">
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" className="px-2 py-1 rounded bg-white/5 text-white" />
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="px-2 py-1 rounded bg-white/5 text-white" />
        <button className="px-2 py-1 bg-green-600 rounded text-white">Create</button>
        <button type="button" onClick={()=>seedDemoTeachers().then(()=>load())} className="px-2 py-1 bg-blue-600 rounded text-white">Seed</button>
      </form>

      <div className="mt-3 space-y-2">
        {teachers.map(t=> (
          <div key={t.id} className="flex justify-between items-center p-2 bg-white/3 rounded">
            <div>
              <div className="text-white">{t.name}</div>
              <div className="text-sm text-white/70">{t.email} • {t.permitted? 'Permitted' : 'Not permitted'}</div>
            </div>
            <div className="text-sm text-white/70">{new Date(t.createdAt).toLocaleDateString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
