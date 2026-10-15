import { portfolioData } from '@/data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900 text-white px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 border-l-4 border-sky-400 pl-4">Sobre mim</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            {portfolioData.about}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-sky-400">Tecnologias & Habilidades</h3>
          <div className="flex flex-wrap gap-2">
            {portfolioData.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-slate-800 text-slate-200 text-sm font-medium px-3 py-1.5 rounded-md border border-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}