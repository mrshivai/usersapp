import "./App.css";
import CreateUser from "./pages/CreateUser/CreateUser";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from "./pages/EditUser/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/CreateUser" element={<CreateUser/>}/>
        <Route path="/EditUser/:userId" element={<EditUser/>}/>
        <Route path="*" element={<h1>404 Page not found </h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
