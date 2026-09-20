const steps = [
  {
    number: "01",
    title: "Cadastre seu negócio",
    description:
      "Configure sua empresa, unidades, profissionais, serviços e as informações necessárias para começar.",
  },
  {
    number: "02",
    title: "Organize sua operação",
    description:
      "Gerencie clientes, animais, agenda e serviços em um único lugar, com informações sempre acessíveis.",
  },
  {
    number: "03",
    title: "Cuide do seu negócio",
    description:
      "Acompanhe atendimentos, vendas e resultados para tomar decisões melhores no dia a dia.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-t border-zinc-900 bg-zinc-950 px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-purple-400">
            Como funciona
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Simples de começar. Completo para crescer.
          </h2>

          <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            O SisBixo acompanha sua operação desde os primeiros cadastros até
            uma gestão mais completa do negócio.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <article
              key={step.number}
              className="relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 sm:p-6"
            >
              <span className="text-sm font-semibold text-purple-400">
                {step.number}
              </span>

              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>

              <p className="mt-3 leading-7 text-zinc-400">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}