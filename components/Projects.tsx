import { portfolioData } from '@/data/portfolioData';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-950 text-white px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 border-l-4 border-sky-400 pl-4">Projetos em Destaque</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-sky-500/50 transition-all flex flex-col justify-between"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-sky-950 text-sky-300 px-2.5 py-1 rounded border border-sky-800/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
                >
                  Repositório / Código <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}