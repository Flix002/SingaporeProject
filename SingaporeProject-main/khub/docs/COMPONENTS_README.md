# Components: FAQ and PasswordHasher

This document explains the newly added `FAQ` and `PasswordHasher` React components and how to use them.

## FAQ

Location: `khub/src/components/FAQ.jsx`

Purpose: Provide a lightweight, deterministic FAQ helper that searches course titles and descriptions and answers common intents (price, parts, enrollment). It first attempts local keyword/intent matching against course data (via `listCourses`) and falls back to a featured-course list.

Usage:

- Import and render where you want users to ask questions about courses:

```jsx
import FAQ from './components/FAQ';

function Page() {
  return <FAQ />;
}
```

Notes & limitations:
- This component does simple keyword matching. For high-quality natural language answers you can integrate an LLM (OpenAI, Anthropic, etc.) or a vector-search index.
- `listCourses` must be implemented and return `{ id, title, description, price, parts }` objects.

## PasswordHasher

Location: `khub/src/components/PasswordHasher.jsx`

Purpose: Computes a client-side SHA-256 hex of the provided password and calls an optional `onSubmit(hash)` callback with the resulting hash. This can be used to avoid sending raw plaintext over the wire, but it is NOT a substitute for server-side hashing and salting.

Usage example (signup flow):

```jsx
import PasswordHasher from './components/PasswordHasher';

function Signup() {
  const handleHash = async (clientHash) => {
    // Send clientHash to server as `password` and set `clientHashed: true`
    await fetch(import.meta.env.VITE_API_URL + '/auth/signup', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'me', email: 'me@gmail.com', password: clientHash, clientHashed: true })
    });
  };

  return <PasswordHasher onSubmit={handleHash} />;
}
```

Security best practices (required):
- Always re-hash and salt the received password server-side using a slow adaptive algorithm such as `bcrypt` or `argon2`.
- Treat client-side hashing as defense-in-depth only. Do not rely on it for password storage or authentication correctness.
- Use HTTPS in production so client-side hashing is not used to compensate for lack of TLS.

## Where to look
- Frontend components: `khub/src/components/FAQ.jsx`, `khub/src/components/PasswordHasher.jsx`, `khub/src/components/SignUp.jsx`.
- API wrappers: `khub/src/api/authApi.js`.
- Server behavior: see `khub/server/src/routes/auth.js` for `clientHashed` handling and server-side re-hashing notes.

## Next steps / improvements
- Add an LLM-backed fallback for `FAQ` with rate limits and cost controls.
- Add unit tests for `PasswordHasher` and the signup API path.
- Add server-side validation to explicitly reject unsigned client hashes if desired.

