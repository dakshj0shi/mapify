import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import { useAppStore } from "../lib/store";

export default function NewGoal() {
  const [title, setTitle] = useState("");
  const addGoal = useAppStore(s => s.addGoal);
  const nav = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const id = addGoal(title.trim());
    nav(`/roadmap/${id}`);
  };

  return (
    <AppLayout>
      <div className="max-w-lg mx-auto bg-white p-6 rounded-xl border shadow-sm">
        <h2 className="text-2xl font-semibold">Create a new goal</h2>
        <form onSubmit={onSubmit} className="mt-4 space-y-3">
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="e.g., Become a Data Scientist"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Generate starter roadmap
          </button>
        </form>
      </div>
    </AppLayout>
  );
}
