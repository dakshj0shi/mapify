// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Roadmap from "./pages/Roadmap";
import NewGoal from "./pages/NewGoal";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      {/* Navbar will always show */}
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">MAPIFY 🚀</h1>
        <div className="space-x-4">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/dashboard" className="hover:text-blue-600">Dashboard</a>
          <a href="/roadmap" className="hover:text-blue-600">Roadmap</a>
          <a href="/newgoal" className="hover:text-blue-600">New Goal</a>
          <a href="/login" className="hover:text-blue-600">Login</a>
          <a href="/register" className="hover:text-blue-600">Register</a>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/newgoal" element={<NewGoal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}
