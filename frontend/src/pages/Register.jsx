import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // for now, treat register as login; partner wires real signup
  const nav = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });
    nav("/dashboard");
  };

  return (
    <AppLayout>
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl border shadow-sm">
        <h2 className="text-2xl font-semibold">Create account</h2>
        <form onSubmit={onSubmit} className="mt-4 space-y-3">
          <input className="w-full border rounded px-3 py-2" placeholder="Email" type="email"
                 value={email} onChange={(e)=>setEmail(e.target.value)} required />
          <input className="w-full border rounded px-3 py-2" placeholder="Password" type="password"
                 value={password} onChange={(e)=>setPassword(e.target.value)} required />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Sign up</button>
        </form>
      </div>
    </AppLayout>
  );
}
