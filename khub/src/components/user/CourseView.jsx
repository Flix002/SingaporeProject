import React from 'react';

export default function CourseView({ course, subscription }) {
  const completion = subscription?.progress || 0;
  const access = subscription?.active ? 'Full access' : (subscription?.paymentPlan === 'two' ? 'Partial access' : 'Full access');
  const parts = course.parts || 1;
  const allowedParts = subscription ? (subscription.active ? parts : Math.ceil(parts / 2)) : 0;

  return (
    <div className="p-4 bg-white/5 rounded border border-white/10">
      <div className="text-white font-semibold">{course.title}</div>
      <div className="text-sm text-white/70">{course.description}</div>
      {course.cover && <img src={course.cover} alt="cover" className="w-full h-48 object-cover rounded mt-3" />}
      <div className="mt-2 text-sm text-white/70">Access: {access}</div>
      <div className="mt-2 text-sm text-white/70">Completion: {completion}%</div>
      <div className="mt-3 text-sm text-white/70">Visible parts: {allowedParts} / {parts}</div>
    </div>
  );
}
