import { create } from "zustand";
import { nanoid } from "nanoid/non-secure"; // or String(Date.now())

export const useAppStore = create((set, get) => ({
  goals: [],             // [{id, title, progress}]
  stepsByGoal: {},       // { [goalId]: [{id,title,description,completed}] }

  addGoal: (title) => {
    const id = typeof nanoid === "function" ? nanoid() : String(Date.now());

    const steps = [
      { id: "s1", title: "Learn Python basics", description: "Variables, loops, functions.", completed: false },
      { id: "s2", title: "Git & GitHub", description: "Branching, PRs, issues.", completed: false },
      { id: "s3", title: "Mini project", description: "CLI tool or small web app.", completed: false },
    ];

    set((state) => ({
      goals: [{ id, title, progress: 0 }, ...state.goals],
      stepsByGoal: { ...state.stepsByGoal, [id]: steps }
    }));

    return id;
  },

  toggleStep: (goalId, stepId) => {
    const map = { ...get().stepsByGoal };
    const steps = map[goalId]?.map(s =>
      s.id === stepId ? { ...s, completed: !s.completed } : s
    ) || [];
    map[goalId] = steps;

    const done = steps.filter(s => s.completed).length;
    const progress = steps.length ? Math.round((done / steps.length) * 100) : 0;

    set((state) => ({
      stepsByGoal: map,
      goals: state.goals.map(g =>
        g.id === goalId ? { ...g, progress } : g
      )
    }));
  }
}));
