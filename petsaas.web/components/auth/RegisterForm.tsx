"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import axios from "axios"

import {
    createUser,
    type CreateUserRequest
} from "@/lib/api/users"

const registerSchema = z
    .object({
        firstName: z.string().min(1, "Informe seu nome."),
        lastName: z.string().min(1, "Informe seu sobrenome."),
        email: z
            .string()
            .min(1, "Informe seu e-mail.")
            .email("Informe um e-mail válido."),
        password: z
            .string()
            .min(8, "A senha deve ter pelo menos 8 caracteres.")
            .regex(/[A-Z]/, "A senha deve conter uma letra maiúscula.")
            .regex(/[a-z]/, "A senha deve conter uma letra minúscula.")
            .regex(/[0-9]/, "A senha deve conter um número.")
            .regex(
                /[^a-zA-Z0-9]/,
                "A senha deve conter um caractere especial.",
            ),
        confirmPassword: z.string().min(1, "Confirme sua senha."),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "As senhas não coincidem.",
        path: ["confirmPassword"],
    });

type RegisterFormData = z.infer<typeof registerSchema>

export function RegisterForm() {
    "use no memo"
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        mode: "onBlur",
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    })

    const mutation = useMutation({
        mutationFn: (data: CreateUserRequest) => createUser(data),

        onSuccess: () => {
            toast.success("Conta criada com sucesso.")
            reset()
        },

        onError: (error) => {
            if (axios.isAxiosError(error) && error.response?.status === 409) {
                toast.error("Este e-mail já está cadastrado.")
                return
            }

            toast.error("Não foi possível criar a conta.")
        }
    })

    const onSubmit = (data: RegisterFormData) => {
        mutation.mutate({
            email: data.email,
            password: data.password,
            firstName: data.firstName,
            lastName: data.lastName
        })
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
        >
            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label
                        htmlFor="firstName"
                        className="mb-2 block text-sm font-medium text-zinc-200"
                    >
                        Nome
                    </label>

                    <input
                        id="firstName"
                        type="text"
                        {...register("firstName")}
                        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500"
                        placeholder="Seu nome"
                    />

                    {errors.firstName && (
                        <p className="mt-2 text-sm text-red-400">
                            {errors.firstName.message}
                        </p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="lastName"
                        className="mb-2 block text-sm font-medium text-zinc-200"
                    >
                        Sobrenome
                    </label>

                    <input
                        id="lastName"
                        type="text"
                        {...register("lastName")}
                        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500"
                        placeholder="Seu sobrenome"
                    />

                    {errors.lastName && (
                        <p className="mt-2 text-sm text-red-400">
                            {errors.lastName.message}
                        </p>
                    )}
                </div>
            </div>

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
                    {...register("email")}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500"
                    placeholder="voce@exemplo.com"
                />

                {errors.email && (
                    <p className="mt-2 text-sm text-red-400">
                        {errors.email.message}
                    </p>
                )}
            </div>

            <div>
                <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-zinc-200"
                >
                    Senha
                </label>

                <input
                    id="password"
                    type="password"
                    {...register("password")}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500"
                    placeholder="Sua senha"
                />

                <p className="mt-2 text-xs leading-5 text-zinc-500">
                    Mínimo de 8 caracteres, com maiúscula, minúscula, número e
                    caractere especial.
                </p>

                {errors.password && (
                    <p className="mt-2 text-sm text-red-400">
                        {errors.password.message}
                    </p>
                )}
            </div>

            <div>
                <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-medium text-zinc-200"
                >
                    Confirmar senha
                </label>

                <input
                    id="confirmPassword"
                    type="password"
                    {...register("confirmPassword")}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500"
                    placeholder="Repita sua senha"
                />

                {errors.confirmPassword && (
                    <p className="mt-2 text-sm text-red-400">
                        {errors.confirmPassword.message}
                    </p>
                )}
            </div>

            <button
                type="submit"
                disabled={mutation.isPending}
                className="w-full cursor-pointer rounded-xl bg-purple-600 px-6 py-3 font-medium text-white transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
                {mutation.isPending ? "Criando conta..." : "Criar conta"}
            </button>
        </form>
    )
}