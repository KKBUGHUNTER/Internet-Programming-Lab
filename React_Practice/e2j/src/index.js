import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StudentForms from "./forms/StudentForms";
import App from './App';
// import Login from './pages/login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <StudentForms />
    {/* <Login /> */}
  </React.StrictMode>
);
