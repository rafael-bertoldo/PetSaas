import Link from "next/link"
import type { ReactNode } from "react"

interface AuthLayoutProps {
    title: string
    description: string
    children: ReactNode
    footer: ReactNode
}

export function AuthLayout({
    title,
    description,
    children,
    footer
}: AuthLayoutProps) {
    return (
        <main className="min-h-svh bg-zinc-950 px-4 py-8 text-white sm:px-6 sm:py-12">
            <div className="mx-auto w-full max-w-md">
                <div className="mb-6 flex items-center justify-between">
                    <Link
                        href="/"
                        className="cursor-pointer text-sm text-zinc-400 transition hover:text-white"
                    >
                        ← Voltar para o início
                    </Link>

                    <Link
                        href="/"
                        className="text-lg font-bold tracking-tight text-white"
                    >
                        Sis<span className="text-purple-400">Bixo</span>
                    </Link>
                </div>

                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-2xl shadow-black/20 sm:p-8">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>

                        <p className="mt-3 text-sm leading-6 text-zinc-400">
                            {description}
                        </p>
                    </div>

                    {children}
                </div>

                <div className="mt-6 text-center text-sm text-zinc-500">
                    {footer}
                </div>
            </div>
        </main>
    );
}