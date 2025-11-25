import React from 'react';

export default function CourseCard({ course, onEdit, onDelete }) {
  return (
    <div className="card-futuristic">
      <div className="flex gap-3 items-center">
        {course.cover && (
          <div className="w-20 h-20 rounded-image overflow-hidden">
            <img src={course.cover} alt="cover" className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <div className="card-title">{course.title}</div>
              <div className="small muted">{course.description}</div>
            </div>
            <div className="text-sm accent">${course.price}</div>
          </div>
        </div>
      </div>
      <div className="mt-2 flex gap-2">
        <button onClick={onEdit} className="px-2 py-1 btn-neon text-sm">Edit</button>
        <button onClick={onDelete} className="px-2 py-1 bg-red-600 rounded text-white text-sm">Delete</button>
      </div>
    </div>
  );
}
