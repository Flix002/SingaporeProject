import React, { useEffect, useState } from 'react';
import CourseManager from './CourseManager';
import NotificationsPanel from './NotificationsPanel';
import TeacherManager from './TeacherManager';
import UploadManager from './UploadManager';
import { listCourses } from '../../api/coursesApi';

export default function AdminDashboard({ user }) {
  const [stats, setStats] = useState({ totalCourses: 0, totalUsers: 0 });

  useEffect(() => {
    listCourses().then((cs) => {
      setStats({ totalCourses: cs.length, totalUsers: Math.max(0, cs.reduce((s,c)=>s+(c.subscribers?c.subscribers.length:0),0)) });
    });
  }, []);

  return (
    <div className="space-y-4">
      <div className="card-futuristic">
        <div className="card-title">Admin Analytics</div>
        <div className="small muted mt-2">Total courses: {stats.totalCourses}</div>
        <div className="small muted">Total subscribers: {stats.totalUsers}</div>
      </div>

      <CourseManager />

  <UploadManager />

      <TeacherManager />

      <NotificationsPanel />
    </div>
  );
}
