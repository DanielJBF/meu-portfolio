export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-500 text-sm py-6 text-center">
      <p>© {new Date().getFullYear()} - Desenvolvido com Next.js, TypeScript & Tailwind CSS.</p>
    </footer>
  );
}