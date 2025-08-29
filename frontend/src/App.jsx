// src/App.jsx
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">MAPIFY 🚀</h1>
        <div className="space-x-4">
          <button onClick={() => setPage("home")} className="hover:text-blue-600">
            Home
          </button>
          <button onClick={() => setPage("about")} className="hover:text-blue-600">
            About
          </button>
          <button onClick={() => setPage("contact")} className="hover:text-blue-600">
            Contact
          </button>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-1 p-6">
        {page === "home" && (
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Welcome to Mapify</h2>
            <p className="mt-2 text-gray-600">
              Your personalized learning roadmap builder.
            </p>
          </div>
        )}

        {page === "about" && (
          <div>
            <h2 className="text-3xl font-semibold">About Mapify</h2>
            <p className="mt-2 text-gray-600">
              Mapify helps you create AI-powered learning paths, track progress,
              and gamify your journey 🚀
            </p>
          </div>
        )}

        {page === "contact" && (
          <div>
            <h2 className="text-3xl font-semibold">Contact Us</h2>
            <p className="mt-2 text-gray-600">
              Reach out at <span className="font-medium">support@mapify.com</span>
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

