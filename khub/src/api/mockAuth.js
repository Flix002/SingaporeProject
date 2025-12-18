// Simple in-memory mock authentication - DO NOT use in production.
// Accepts email/password and returns a fake token + user object.

const MOCK_USERS = [
  { username: 'Admin User', email: 'admin.example@gmail.com', password: 'adminpass', role: 'admin' },
  { username: 'Teacher Jane', email: 'teacher.example@gmail.com', password: 'teacherpass', role: 'teacher' },
  { username: 'Regular Joe', email: 'user.example@gmail.com', password: 'userpass', role: 'user' },
];

export function signIn({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const found = MOCK_USERS.find((u) => u.email.toLowerCase() === (email || '').toLowerCase() && u.password === password);
      if (!found) return reject({ status: 401, message: 'Invalid credentials' });

      // create fake token
      const token = `mock-token-${btoa(found.email)}`;
      const user = { username: found.username, email: found.email, role: found.role };
      resolve({ token, user });
    }, 400);
  });
}

export function validateToken(token) {
  // very naive: decode email from token and check it's one of the mock users
  try {
    const parts = token.split('mock-token-');
    if (parts.length !== 2) return null;
    const email = atob(parts[1]);
    const found = MOCK_USERS.find((u) => u.email === email);
    return found ? { username: found.username, email: found.email, role: found.role } : null;
  } catch (e) {
    return null;
  }
}
