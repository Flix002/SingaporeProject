import React from 'react';
import { clearUser } from '../utils/auth';

/**
 * SignOut button component
 * Props:
 *  - onSignOut() optional callback called after sign-out
 */
export default function SignOut({ onSignOut }) {
  const handleSignOut = () => {
    clearUser();
    if (typeof onSignOut === 'function') onSignOut();
  };

  return (
    <button
      onClick={handleSignOut}
      className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded"
    >
      Sign Out
    </button>
  );
}
