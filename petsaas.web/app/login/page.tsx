import Link from "next/link";

import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout
      title="Entrar na sua conta"
      description="Acesse o SisBixo e continue gerenciando seu negócio."
      footer={
        <>
          Ainda não tem uma conta?{" "}
          <Link
            href="/register"
            className="font-medium text-purple-400 transition hover:text-purple-300"
          >
            Criar conta
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthLayout>
  );
}