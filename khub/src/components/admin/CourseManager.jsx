import React, { useEffect, useState } from 'react';
import { listCourses, createCourse, updateCourse, deleteCourse, seedDemoCourses } from '../../api/coursesApi';
import CourseList from './CourseList';
import CourseForm from './CourseForm';

export default function CourseManager() {
  const [courses, setCourses] = useState([]);
  const [editing, setEditing] = useState(null);

  function load() { listCourses().then(setCourses); }

  useEffect(() => { load(); }, []);

  const handleCreate = (data) => createCourse(data).then(() => load());
  const handleUpdate = (id, patch) => updateCourse(id, patch).then(() => load());
  const handleDelete = (id) => deleteCourse(id).then(() => load());

  return (
    <div className="bg-white/5 p-4 rounded border border-white/10">
      <div className="flex justify-between items-center">
        <div className="text-white font-semibold">Course Manager</div>
        <div className="space-x-2">
          <button onClick={() => seedDemoCourses().then(()=>load())} className="px-2 py-1 bg-blue-600 rounded">Seed demo</button>
        </div>
      </div>

      <div className="mt-3">
        <CourseForm onCreate={handleCreate} editing={editing} onUpdate={(id, p)=>handleUpdate(id,p)} onCancel={()=>setEditing(null)} />
      </div>

      <div className="mt-4">
        <CourseList courses={courses} onEdit={(c)=>setEditing(c)} onDelete={handleDelete} />
      </div>
    </div>
  );
}
