import { Link } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";

export default function Home() {
  return (
    <AppLayout>
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold leading-tight">
            Build your <span className="text-blue-600">AI-powered roadmap</span> with gamification.
          </h1>
          <p className="mt-4 text-gray-600">
            Set a goal, get a personalized learning path, track progress, and showcase projects.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/register" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
              Get Started
            </Link>
            <Link to="/login" className="px-4 py-2 rounded border hover:bg-gray-50">
              I already have an account
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="h-48 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 grid place-items-center">
            <span className="text-blue-600 font-semibold">Preview</span>
          </div>
          <p className="mt-4 text-sm text-gray-500">You’ll see progress charts and skills mapping here.</p>
        </div>
      </section>
    </AppLayout>
  );
}
