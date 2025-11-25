import React, { useEffect, useState } from 'react';
import { listCourses } from '../../api/coursesApi';
import { listSubscriptions, subscribe, makePayment } from '../../api/subscriptionsApi';
import CourseView from './CourseView';

export default function UserDashboard({ user }) {
  const [courses, setCourses] = useState([]);
  const [subs, setSubs] = useState([]);

  useEffect(()=>{ listCourses().then(setCourses); listSubscriptions().then(setSubs); }, []);

  const handleSubscribe = (courseId, plan) => {
    subscribe(courseId, user.email, plan).then(()=>{ listSubscriptions().then(setSubs); alert('Subscribed (demo)'); });
  };

  const handlePay = (subscriptionId) => {
    makePayment(subscriptionId).then(()=>{ listSubscriptions().then(setSubs); alert('Payment recorded (demo)'); });
  };

  return (
    <div className="space-y-4">
      <div className="bg-white/5 p-4 rounded border border-white/10">
        <div className="text-white font-semibold">Welcome, {user?.username}</div>
      </div>

      <div className="bg-white/5 p-4 rounded border border-white/10">
        <div className="text-white font-semibold">Available Courses</div>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
          {courses.map(c=> (
            <div key={c.id} className="p-3 bg-white/3 rounded glass">
              <div className="flex gap-3 items-center">
                {c.cover && <img src={c.cover} alt="cover" className="w-20 h-20 object-cover rounded" />}
                <div className="flex-1">
                  <div className="text-white font-medium">{c.title}</div>
                  <div className="text-sm text-white/70">{c.description}</div>
                  <div className="text-sm text-white/60 mt-1">Parts: {c.parts || 1}</div>
                </div>
                <div className="flex flex-col gap-2">
                  <button onClick={()=>handleSubscribe(c.id,'full')} className="px-2 py-1 btn-neon rounded">Full ${c.price}</button>
                  <button onClick={()=>handleSubscribe(c.id,'two')} className="px-2 py-1 bg-yellow-600 rounded text-white">2-part</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/5 p-4 rounded border border-white/10">
        <div className="text-white font-semibold">Your Subscriptions</div>
        {subs.length===0 && <div className="text-white/70 mt-2">You have no subscriptions.</div>}
        {subs.map(s=> (
          <div key={s.id} className="mt-2 p-2 bg-white/3 rounded">
            <div className="text-white">Course: {s.courseId}</div>
            <div className="text-sm text-white/70">Plan: {s.paymentPlan} • Status: {s.active? 'Full access' : 'Partial access'}</div>
            {!s.active && <div className="mt-2"><button onClick={()=>handlePay(s.id)} className="px-2 py-1 bg-blue-600 rounded text-white">Make next payment</button></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
