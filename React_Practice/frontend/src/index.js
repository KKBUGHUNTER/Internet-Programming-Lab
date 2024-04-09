import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PaStudent from './ParseArg';
import Student from './AeroFunction';
import MyStudent from './JsxMap';
import StateExample from './StateExample';
import FunctionArg from './FunctionArg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <PaStudent name="Cyber Karthik" />
    <Student />
    <MyStudent />
    <StateExample />
    <FunctionArg />
  </React.StrictMode>
);
