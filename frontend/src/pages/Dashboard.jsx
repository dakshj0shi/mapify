import { Link } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import ProgressBar from "../components/ProgressBar";
import { useAppStore } from "../lib/store";

export default function Dashboard() {
  const goals = useAppStore(s => s.goals);

  return (
    <AppLayout>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <Link to="/roadmap/new" className="text-sm px-3 py-1.5 rounded bg-blue-600 text-white hover:bg-blue-700">
          + New Goal
        </Link>
      </div>

      {goals.length === 0 ? (
        <div className="mt-6 rounded-xl border bg-white p-6">
          <p className="text-gray-700">No roadmaps yet.</p>
          <Link to="/roadmap/new" className="mt-3 inline-block text-blue-600 hover:underline">
            Create your first goal →
          </Link>
        </div>
      ) : (
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {goals.map(g => (
            <Link key={g.id} to={`/roadmap/${g.id}`} className="block rounded-xl border bg-white p-4 hover:shadow-sm">
              <div className="font-medium">{g.title}</div>
              <div className="mt-2">
                <ProgressBar value={g.progress} />
                <div className="mt-1 text-xs text-gray-500">{g.progress}% complete</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </AppLayout>
  );
}
