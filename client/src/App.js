import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from './Components/SignUpPage';
import LoginPage from './Components/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage login={LoginPage} />} />
        <Route path="/register" element={<SignUpPage register={SignUpPage} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
