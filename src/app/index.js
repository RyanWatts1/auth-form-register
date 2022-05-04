import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Canvas } from "./components";
import Login from "../login";
import Register from "../register";

function App() {
  return (
    <Canvas>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </Canvas>
  );
}

export default App;
