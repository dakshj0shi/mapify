import { Link } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import ProgressBar from "../components/ProgressBar";

const mock = {
  xp: 40, streak: 2, badges: ["Starter", "5 Tasks"],
  roadmaps: [
    { id: "demo-ai", goal: "Become AI Engineer", progress: 30 },
    { id: "demo-cyber", goal: "Learn Cybersecurity Basics", progress: 10 },
  ],
};

export default function Dashboard() {
  return (
    <AppLayout>
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <div className="rounded-xl border bg-white p-4">
          <div className="text-sm text-gray-500">XP</div>
          <div className="text-3xl font-bold">{mock.xp}</div>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <div className="text-sm text-gray-500">Streak</div>
          <div className="text-3xl font-bold">{mock.streak} days</div>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <div className="text-sm text-gray-500">Badges</div>
          <div className="mt-2 flex gap-2">
            {mock.badges.map(b => (
              <span key={b} className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 border">{b}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border bg-white p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Your Roadmaps</h3>
          <Link to="/roadmap/new" className="text-sm text-blue-600 hover:underline">+ New Goal</Link>
        </div>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          {mock.roadmaps.map(r => (
            <Link key={r.id} to={`/roadmap/${r.id}`} className="block rounded-lg border p-4 hover:shadow-sm">
              <div className="font-medium">{r.goal}</div>
              <div className="mt-2">
                <ProgressBar value={r.progress} />
                <div className="mt-1 text-xs text-gray-500">{r.progress}% complete</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
