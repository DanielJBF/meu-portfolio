import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white hover:text-sky-400 transition-colors">
          Portfólio<span className="text-sky-400">.</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
          <Link href="#about" className="hover:text-white transition-colors">Sobre</Link>
          <Link href="#projects" className="hover:text-white transition-colors">Projetos</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contato</Link>
        </nav>
      </div>
    </header>
  );
}