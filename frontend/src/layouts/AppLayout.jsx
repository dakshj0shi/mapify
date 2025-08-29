import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-6 flex-1">{children}</main>
      <Footer />
    </div>
  );
}
