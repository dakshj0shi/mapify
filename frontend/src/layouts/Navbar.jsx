import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight">
          <span className="text-blue-600">AI</span> Learning Path
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/" className="text-sm hover:text-blue-600">Home</Link>
          {isAuthenticated && (
            <Link to="/dashboard" className="text-sm hover:text-blue-600">Dashboard</Link>
          )}
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="text-sm px-3 py-1.5 rounded border hover:bg-gray-50">Login</Link>
              <Link to="/register" className="text-sm px-3 py-1.5 rounded bg-blue-600 text-white hover:bg-blue-700">Sign up</Link>
            </>
          ) : (
            <>
              <span className="text-sm text-gray-600">Hi, {user?.name}</span>
              <button onClick={logout} className="text-sm px-3 py-1.5 rounded border hover:bg-gray-50">Logout</button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
