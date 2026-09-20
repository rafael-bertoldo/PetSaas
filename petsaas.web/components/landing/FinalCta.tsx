import Link from "next/link";

export function FinalCta() {
  return (
    <section className="border-t border-zinc-900 bg-zinc-950 px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl rounded-3xl border border-purple-500/20 bg-purple-500/5 px-6 py-12 text-center sm:px-8 sm:py-16">
        <span className="text-sm font-medium uppercase tracking-wider text-purple-400">
          Comece agora
        </span>

        <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Mais organização para você cuidar do que realmente importa.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
          Centralize a operação do seu negócio pet em uma plataforma pensada
          para crescer com você.
        </p>

        <div className="mt-8">
          <Link
            href="/register"
            className="cursor-pointer rounded-xl bg-purple-600 px-6 py-3 font-medium text-white transition hover:bg-purple-500"
          >
            Começar agora
          </Link>
        </div>
      </div>
    </section>
  );
}