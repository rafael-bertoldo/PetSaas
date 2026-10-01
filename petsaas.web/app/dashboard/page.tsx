"use client";

import { useAuth } from "@/hooks/useAuth";

export default function DashboardPage() {
  const {
    user,
    isPending,
    isAuthenticated,
  } = useAuth();

  if (isPending) {
    return (
      <main className="min-h-svh bg-zinc-950 p-6 text-white">
        <p className="text-zinc-400">Carregando...</p>
      </main>
    );
  }

  if (!isAuthenticated) {
    return (
      <main className="min-h-svh bg-zinc-950 p-6 text-white">
        <p className="text-zinc-400">
          Você não está autenticado.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-svh bg-zinc-950 p-6 text-white">
      <h1 className="text-3xl font-bold">
        Olá, {user?.firstName}!
      </h1>

      <p className="mt-2 text-zinc-400">
        Bem-vindo ao SisBixo.
      </p>
    </main>
  );
}