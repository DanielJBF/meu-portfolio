import { portfolioData } from '@/data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Vamos Trabalhar Juntos?</h2>
        <p className="text-slate-400 mb-8">
          Estou sempre aberto a novos desafios e oportunidades. Sinta-se à vontade para entrar em contato por e-mail ou redes sociais.
        </p>
        <a
          href={`mailto:${portfolioData.socials.email}`}
          className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-8 py-3 rounded-lg inline-block transition-colors"
        >
          Enviar um E-mail
        </a>
      </div>
    </section>
  );
}