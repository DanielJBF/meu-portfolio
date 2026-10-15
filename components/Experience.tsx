import { portfolioData } from '@/data/portfolioData';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-950 text-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 border-l-4 border-sky-400 pl-4 flex items-center gap-3">
          <Briefcase className="text-sky-400" size={32} />
          Experiência Profissional
        </h2>

        <div className="space-y-6 border-l-2 border-slate-800 ml-4 pl-6 relative">
          {portfolioData.experiences.map((item) => (
            <div key={item.id} className="relative group">
              {/* Marcador da linha do tempo */}
              <div className="absolute -left-7.75 top-1.5 w-4 h-4 rounded-full bg-sky-500 border-4 border-slate-950 group-hover:scale-125 transition-transform" />
              
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-sky-500/50 transition-all">
                <span className="text-xs font-semibold bg-sky-950 text-sky-300 px-3 py-1 rounded-full border border-sky-800/50 inline-block mb-3">
                  {item.period}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                <h4 className="text-sky-400 font-medium text-sm mb-3">{item.company}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}