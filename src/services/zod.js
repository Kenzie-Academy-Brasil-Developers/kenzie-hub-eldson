import { z } from "zod";

export const zodSchema = z.object({
    name: z.string().nonempty("Nome é obrigatório"),
    email: z.string().nonempty("E-mail é obrigatorio").email("Forneça um e-mail válido"),
    password: z
        .string()
        .nonempty("Senha é obrigatória")
        .min(8, "É necessário pelo menos oito caracteres.")
        .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
        .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
        .regex(/(?=.*?[!@#$%^&*])/, "É necessário pelo menos um caractere especial (!@#$%^&*)."),
    confirmPassword: z.string()
        .nonempty("É necessário confirmar a senha")
        .refine(data => data.password === data.confirmPassword, {
            message: "As senhas não coincidem",
        }),
    bio: z.string().nonempty("Digite uma biografia"),
    contact: z.string().nonempty("Informe uma forma de contato"),
    module: z.string().nonempty("Selecione um modulo")
})

export const zodSchemaLogin = z.object({
    email: z.string().nonempty("E-mail é obrigatorio").email("Forneça um e-mail válido"),
    password: z
        .string()
        .nonempty("Senha é obrigatória")
})


