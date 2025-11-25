
import React, { useEffect, useState } from "react";

import SignIn from "./components/SignIn";

const BANNER_KEY = 'khub_hide_test_banner_v1';

function App() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(BANNER_KEY);
      setHide(!!v);
    } catch (e) { /* ignore */ }
  }, []);

  function dismiss() {
    try {
      localStorage.setItem(BANNER_KEY, '1');
    } catch (e) {}
    setHide(true);
  }

  return (
    <>
      {/* Temporary Tailwind test banner - remove after verification */}
      {!hide && (
        <div className="p-6 mb-4 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-black text-center font-semibold flex items-center justify-center gap-4">
          <span>Tailwind test banner — if this is green/blue, Tailwind is working</span>
          <button onClick={dismiss} className="ml-4 px-3 py-1 rounded bg-black/10 text-black text-sm">Hide</button>
        </div>
      )}
      <SignIn />
    </>
  );
}

export default App;
