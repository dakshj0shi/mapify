import { useParams } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import { useAppStore } from "../lib/store";

export default function Roadmap() {
  const { id } = useParams();

  // selectors must return the same reference if unchanged
  const steps = useAppStore(s => s.stepsByGoal[id]) || [];
  const toggle = useAppStore(s => s.toggleStep);
  const goal = useAppStore(s => s.goals.find(g => g.id === id));

  return (
    <AppLayout>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">{goal?.title || "Roadmap"}</h2>
        <div className="text-sm text-gray-600">{goal?.progress ?? 0}% complete</div>
      </div>

      <div className="mt-4 grid gap-3">
        {steps.map(s => (
          <label
            key={s.id}
            className="rounded-xl border bg-white p-4 flex gap-3 items-start cursor-pointer"
          >
            <input
              type="checkbox"
              className="mt-1"
              checked={s.completed}
              onChange={() => toggle(id, s.id)}
            />
            <div>
              <div className="font-medium">{s.title}</div>
              <div className="text-sm text-gray-600">{s.description}</div>
            </div>
          </label>
        ))}
      </div>
    </AppLayout>
  );
}
