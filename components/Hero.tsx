import { portfolioData } from '@/data/portfolioData';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-slate-950 text-white px-6">
      <div className="max-w-3xl text-center">
        <div className="relative mb-8 w-40 h-40 mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-600 to-sky-400 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
        
          <Image
            src="/foto-perfil.png"
            alt={`Foto de perfil de ${portfolioData.name}`}
            width={160}
            height={160}
            className="relative rounded-full border-4 border-slate-900 object-cover shadow-2xl"
            priority
          />
        </div>
        <span className="text-sky-400 font-medium text-sm uppercase tracking-wider">Olá, meu nome é</span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-2 mb-4">
          {portfolioData.name}
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 font-medium mb-6">
          {portfolioData.role}
        </p>
        <p className="text-slate-300 text-base md:text-lg mb-8 max-w-2xl mx-auto">
          {portfolioData.bio}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="#projects"
            className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Ver Projetos
          </Link>
          <Link
            href="#contact"
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium px-6 py-3 rounded-lg border border-slate-700 transition-colors"
          >
            Entre em Contato
          </Link>
        </div>
      </div>
    </section>
  );
}