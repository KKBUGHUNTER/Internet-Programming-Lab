import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./view/Login";
import Signup from "./view/Signup";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
