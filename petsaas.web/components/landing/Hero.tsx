import Link from "next/link";

export function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-3xl">
        <span className="mb-6 inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
          Gestão inteligente para negócios pet
        </span>

        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Tudo o que seu negócio pet precisa,
          <span className="text-purple-400"> em um só lugar.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
          Gerencie clientes, animais, agenda, serviços e muito mais em uma
          plataforma criada para clínicas veterinárias, petshops, banho e
          tosa.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/register"
            className="cursor-pointer rounded-xl bg-purple-600 px-6 py-3 text-center font-medium transition hover:bg-purple-500"
          >
            Começar agora
          </Link>

          <Link
            href="/login"
            className="cursor-pointer rounded-xl border border-zinc-700 px-6 py-3 text-center font-medium text-zinc-200 transition hover:border-zinc-500"
          >
            Já tenho uma conta
          </Link>
        </div>
      </div>
    </section>
  );
}