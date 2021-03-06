import { Routes, Route } from "react-router";
import dotenv from "dotenv";

import { Header } from "./components/Header";
import { Todos } from "./pages/Todos";
import { AllTodos } from "./pages/AllTodos";
import { AllUsers } from "./pages/AllUsers";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

dotenv.config();

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/todos" element={<Todos />} />
        <Route path="/allTodos" element={<AllTodos />} />
        <Route path="/allUsers" element={<AllUsers />} />
        <Route path="/register" element={<Register />} />
        <Route path="/LogIn" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
