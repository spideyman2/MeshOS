import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Compare from "./pages/Compare";
import Planner from "./pages/Planner";
import Research from "./pages/Research";
import Documents from "./pages/Documents";
import Report from "./pages/Report";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/research" element={<Research />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </BrowserRouter>
  );
}
