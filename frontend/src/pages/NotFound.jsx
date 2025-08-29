import { Link } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";

export default function NotFound() {
  return (
    <AppLayout>
      <div className="text-center py-24">
        <h2 className="text-3xl font-semibold">404</h2>
        <p className="text-gray-600 mt-2">Page not found.</p>
        <Link to="/" className="mt-4 inline-block px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
          Go Home
        </Link>
      </div>
    </AppLayout>
  );
}
