import { Routes, Route } from "react-router";
import dotenv from "dotenv";

import { Header } from "./components/Header";
import { Register } from "./pages/Register";

dotenv.config();

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
