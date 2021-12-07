import { Routes, Route } from "react-router";
import dotenv from "dotenv";

import { Header } from "./components/Header";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

dotenv.config();

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/LogIn" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
