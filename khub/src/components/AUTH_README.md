SignIn / SignOut usage

This file documents the small auth components included in this project.

Files
- `SignIn.jsx`: simple sign-in form (username, Gmail address, password, role selector).
- `SignOut.jsx`: simple sign-out button that clears auth state.

Local storage
- Key: `khub_user`
- Shape: { username: string, email: string, role: 'admin' | 'teacher' | 'user' }

Authentication API (mock)
- A small mock API is provided at `src/api/mockAuth.js` and wrapped by `src/api/authApi.js`.
- Use it for local testing only; it returns a `{ token, user }` pair when credentials match one of the mock users.

Auth storage (new)
- Key: `khub_auth` stores `{ token: string, user: { username, email, role } }`.
- `khub_user` is still used to store the plain user object for compatibility.

Props
- SignIn
  - `onSignIn(user)` optional callback. `user` will be the stored object: { username, email, role }.

- SignOut
  - `onSignOut()` optional callback invoked after clearing `khub_user` from localStorage.

Example usage (React)

```jsx
import SignIn from './SignIn';
import SignOut from './SignOut';

function MyApp() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const raw = localStorage.getItem('khub_user');
    if (raw) setUser(JSON.parse(raw));
  }, []);

  return (
    <div>
      {!user ? (
        <SignIn onSignIn={(u) => setUser(u)} />
      ) : (
        <div>
          <div>{user.username} — {user.role}</div>
          <SignOut onSignOut={() => setUser(null)} />
        </div>
      )}
    </div>
  );
}
```

Notes
- The current SignIn is a demo/local store implementation. Replace the simulated sign-in with your real authentication API as needed.
- Email validation currently requires a `@gmail.com` domain by design (per project requirement). Modify `SignIn.jsx`'s `isGmailAddress` if you want other domains.

Running the demo
- Install dependencies and run the `khub` app using the existing scripts in `khub/package.json`.

Windows PowerShell example:

```powershell
cd khub; npm install; npm run dev
```

Then open `http://localhost:5173` (Vite default) and you'll see the KHub intro with the sign-in form.

Role demo
- Use the role selector in the sign-in form to sign in as `admin`, `teacher`, or `user`. The UI will show role-specific content and an `Admin Panel` for admins.
