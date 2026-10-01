"use client";

import { login, type LoginRequest } from "@/lib/api/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Informe seu e-mail.")
    .email("Informe um e-mail válido."),

  password: z.string().min(1, "Informe sua senha."),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  "use no memo";

  const queryClient = useQueryClient()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: LoginRequest) =>
      login(data),

    onSuccess: (data) => {
      queryClient.setQueryData(
        ["auth", "me"],
        data.user
      )

      toast.success("Login realizado com sucesso.")
      router.replace("/dashboard")
    },

    onError: (error) => {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        toast.error("Falha ao realizar o login, verifique as informações e tente novamente.")
        return
      }

      toast.error("Não foi possível realizar o login. Verifique as informações e tente novamente, ou crie uma conta.")
    }
  })

  const onSubmit = (data: LoginFormData) => {
    mutation.mutate({
      email: data.email,
      password: data.password
    })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-zinc-200"
        >
          E-mail
        </label>

        <input
          id="email"
          type="email"
          autoComplete="email"
          {...register("email")}
          className="h-11 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
          placeholder="voce@exemplo.com"
        />

        {errors.email && (
          <p className="mt-2 text-sm text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between gap-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-zinc-200"
          >
            Senha
          </label>

          <Link
            href="/forgot-password"
            className="text-sm text-zinc-500 transition hover:text-zinc-300"
          >
            Esqueci minha senha
          </Link>
        </div>

        <input
          id="password"
          type="password"
          autoComplete="current-password"
          {...register("password")}
          className="h-11 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
          placeholder="Sua senha"
        />

        {errors.password && (
          <p className="mt-2 text-sm text-red-400">
            {errors.password.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={mutation.isPending}
        className="h-11 w-full cursor-pointer rounded-xl bg-purple-600 px-6 text-sm font-semibold text-white transition hover:bg-purple-500"
      >
        {mutation.isPending ? "Entrando...": "Entrar"}
      </button>
    </form>
  );
}