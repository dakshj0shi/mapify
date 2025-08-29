import { useParams } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import { useEffect, useState } from "react";

export default function Roadmap() {
  const { id } = useParams();
  const [steps] = useState([
    { id: "s1", title: "Learn Python basics", description: "Variables, loops, functions.", completed: false },
    { id: "s2", title: "Git & GitHub", description: "Branching, PRs, issues.", completed: false },
    { id: "s3", title: "Build mini project", description: "CLI tool or small web app.", completed: false },
  ]);

  useEffect(()=>{ document.title = `Roadmap: ${id}`; }, [id]);

  return (
    <AppLayout>
      <h2 className="text-2xl font-semibold">Roadmap: {id}</h2>
      <div className="mt-4 grid gap-3">
        {steps.map(s => (
          <div key={s.id} className="rounded-xl border bg-white p-4">
            <div className="font-medium">{s.title}</div>
            <div className="text-sm text-gray-600">{s.description}</div>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}
