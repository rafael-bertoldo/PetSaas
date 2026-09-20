const features = [
  {
    title: "Gestão de clientes",
    description:
      "Mantenha informações, contatos e histórico dos clientes organizados.",
  },
  {
    title: "Prontuário dos animais",
    description:
      "Tenha acesso rápido ao histórico, vacinas, consultas e informações clínicas.",
  },
  {
    title: "Agenda inteligente",
    description:
      "Organize consultas, serviços e profissionais em uma agenda centralizada.",
  },
  {
    title: "Gestão financeira",
    description:
      "Acompanhe vendas, pagamentos e os principais números do seu negócio.",
  },
];

export function Features() {
  return (
    <section className="border-t border-zinc-900 bg-zinc-950 px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-wider text-purple-400">
            Tudo conectado
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Ferramentas para cuidar do negócio e dos pets.
          </h2>

          <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            Uma plataforma pensada para centralizar a operação do seu negócio
            sem complicar o dia a dia.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 transition hover:border-purple-500/30 sm:p-6"
            >
              <h3 className="text-xl font-semibold">{feature.title}</h3>

              <p className="mt-3 leading-7 text-zinc-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}