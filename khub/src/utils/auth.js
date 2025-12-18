// small auth helpers to centralize localStorage access
const USER_KEY = 'khub_user';
const AUTH_KEY = 'khub_auth';

export function getUser() {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

export function setUser(user) {
  try {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    return true;
  } catch (e) {
    return false;
  }
}

export function clearUser() {
  try {
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(AUTH_KEY);
    return true;
  } catch (e) {
    return false;
  }
}

export function setAuth(token, user) {
  // With cookie-based auth the token is httpOnly and not available to JS.
  // We keep a lightweight record of the user for UI state in localStorage.
  try {
    if (user) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      // store a minimal auth marker (no token)
      localStorage.setItem(AUTH_KEY, JSON.stringify({ user: user }));
    }
    return true;
  } catch (e) {
    return false;
  }
}

export function getAuth() {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

export function getAuthToken() {
  // Token is stored in httpOnly cookie in production; unavailable to JS
  return null;
}
