import z from "zod";

export const contactUsSchema = z.object({
  name: z
    .string()
    .min(3, "Por favor, insira mais caracteres")
    .max(255, "Este campo aceita no máximo 255 caracteres"),
  company: z.string().max(255, "Este campo aceita no máximo 255 caracteres"),
  email: z.string().email("Por favor, insira um e-mail válido"),
  phone: z
    .string()
    .min(8, "Por favor, insira um telefone válido")
    .max(16, "Por favor, insira um telefone válido"),
  message: z
    .string()
    .min(10, "Por favor, insira no mínimo 10 caracteres")
    .max(5000, "Este campo aceita no máximo 5000 caracteres"),
});
