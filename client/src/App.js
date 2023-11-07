import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from './Components/SignUpPage';
import LoginPage from './Components/LoginPage';
import WelcomePage from './Components/WelcomePage';
import AddTaskForm from "./Components/AddTaskForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage login={LoginPage} />} />
        <Route path="/register" element={<SignUpPage register={SignUpPage} />} />
        <Route path="/welcome" element={<WelcomePage welcome={WelcomePage}/>}/>
        <Route path="/create" element={<AddTaskForm create={AddTaskForm}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
