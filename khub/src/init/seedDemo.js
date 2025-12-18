import { listCourses, seedDemoCourses } from '../api/coursesApi';
import { listTeachers, seedDemoTeachers } from '../api/teachersApi';
import { listNotifications, seedDemoNotifications } from '../api/notificationsApi';
import { listSubscriptions, seedDemoSubscriptions } from '../api/subscriptionsApi';

export async function ensureSeed() {
  try {
    const courses = await listCourses();
    if (!courses || courses.length === 0) {
      await seedDemoCourses();
    }
    const teachers = await listTeachers();
    if (!teachers || teachers.length === 0) await seedDemoTeachers();
    const notes = await listNotifications();
    if (!notes || notes.length === 0) await seedDemoNotifications();
    const subs = await listSubscriptions();
    if (!subs || subs.length === 0) await seedDemoSubscriptions();
  } catch (e) {
    // ignore - localStorage-based APIs should not throw
    console.warn('Seeding check failed', e);
  }
}
