// App.js
import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Login from "./views/Login";
import Signup from "./views/Signup";
import Dashboard from "./views/appview/Dashboard";
import Profile from "./views/appview/Profile";
import MainTestPage from "./views/appview/testpage/MainTestPage.js";
import Cookies from 'js-cookie';

function App() {
  const [redirected, setRedirected] = useState(false);
  const storedToken = Cookies.get('token');
  const location = useLocation();

  

  useEffect(() => {
    if (!redirected) {
      if (location.pathname === '/' || location.pathname === '/signup') {
        if (storedToken) {
          setRedirected(true);
          window.location.href = '/dashboard';
        }
      } else if (location.pathname === '/dashboard') {
        if (!storedToken) {
          setRedirected(true);
          window.location.href = '/';
        }
      }
    }
  }, [storedToken, redirected, location]);

  return (
    <Routes>
      {/* Stage 1 */}
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<Signup />} />

      {/* Stage 2 */}
      <Route path="/dashboard" element={<Dashboard />} /> 
      <Route path="/profile" element={<Profile />} />


      {/* Stage 3 */}
      <Route path="/test" element={<MainTestPage />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
