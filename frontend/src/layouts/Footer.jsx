export default function Footer() {
  return (
    <footer className="mt-12 border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-500 flex items-center justify-between">
        <span>© {new Date().getFullYear()} AI Learning Path Builder</span>
        <a href="https://github.com/your-username/ai-learning-path-builder" className="hover:text-gray-700">
          GitHub
        </a>
      </div>
    </footer>
  );
}
