import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./views/Login";
import Signup from "./views/Signup";
import Dashboard from "./views/appview/Dashboard";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/dashboard" component={Dashboard} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
