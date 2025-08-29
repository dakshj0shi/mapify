import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const onSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password }); // stubbed; partner will replace
    nav(from, { replace: true });
  };

  return (
    <AppLayout>
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl border shadow-sm">
        <h2 className="text-2xl font-semibold">Login</h2>
        <form onSubmit={onSubmit} className="mt-4 space-y-3">
          <input className="w-full border rounded px-3 py-2" placeholder="Email" type="email"
                 value={email} onChange={(e)=>setEmail(e.target.value)} required />
          <input className="w-full border rounded px-3 py-2" placeholder="Password" type="password"
                 value={password} onChange={(e)=>setPassword(e.target.value)} required />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Sign in</button>
        </form>
        <p className="mt-3 text-sm text-gray-600">
          No account? <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
        </p>
      </div>
    </AppLayout>
  );
}
