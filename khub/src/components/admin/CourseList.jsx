import React from 'react';
import CourseCard from './CourseCard';

export default function CourseList({ courses = [], onEdit, onDelete }) {
  if (!courses || courses.length === 0) return <div className="text-white/70">No courses yet.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {courses.map((c) => (
        <CourseCard key={c.id} course={c} onEdit={()=>onEdit(c)} onDelete={()=>onDelete(c.id)} />
      ))}
    </div>
  );
}
