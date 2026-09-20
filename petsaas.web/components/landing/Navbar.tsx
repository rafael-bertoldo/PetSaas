import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border-zinc-900 bg-zinc-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white"
        >
          Sis<span className="text-purple-400">Bixo</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/login"
            className="cursor-pointer px-3 py-2 text-sm font-medium text-zinc-300 transition hover:text-white sm:px-4"
          >
            Entrar
          </Link>

          <Link
            href="/register"
            className="cursor-pointer rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-purple-500 sm:px-5"
          >
            Começar agora
          </Link>
        </div>
      </nav>
    </header>
  );
}