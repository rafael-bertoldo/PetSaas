import { RegisterForm } from "@/components/auth/RegisterForm";

export default function RegisterPage() {
    return (
        <main className="min-h-screen bg-zinc-900 px-4 py-16 text-white sm:px-6">
            <div className="mx-auto w-full max-w-md">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold tracking-tight">
                        Criar sua conta
                    </h1>

                    <p className="mt-3 text-zinc-400">
                        Comece a gerenciar seu negócio com o SisBixo.
                    </p>
                </div>

                <RegisterForm />
            </div>
        </main>
    )
}