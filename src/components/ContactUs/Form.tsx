"use client";

import { ContactUs } from "@/types/ContactUs.type";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactUsSchema } from "@/schema/contactUs.schema";
import { toast } from "sonner";
import ErrorMessage from "./ErrorMessage";

export default function Form() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactUs>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (data: ContactUs) => {
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      toast.success("Sua mensagem foi enviada!");
      reset();
      return;
    } catch (error) {
      process.env.nodeEnv !== "production" && console.error(error);
      toast.error("Algo de errado aconteceu, tente novamente");
      return;
    }
  };

  return (
    <form
      className="flex w-full max-w-lg flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Input
          placeholder="Seu nome"
          type="text"
          className="bg-white text-black"
          {...register("name")}
        />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
      </div>
      <div>
        <Input
          placeholder="Sua empresa"
          type="text"
          className="bg-white text-black"
          {...register("company")}
        />
        <ErrorMessage>{errors.company?.message}</ErrorMessage>
      </div>
      <div>
        <Input
          placeholder="Seu e-mail"
          type="email"
          className="bg-white text-black"
          {...register("email")}
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      </div>
      <div>
        <Input
          placeholder="Seu telefone"
          type="phone"
          className="bg-white text-black"
          {...register("phone")}
        />
        <ErrorMessage>{errors.phone?.message}</ErrorMessage>
      </div>
      <div>
        <textarea
          className="h-28 w-full resize-none rounded-md border bg-background px-3 py-2 text-sm text-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Sua mensagem"
          {...register("message")}
        ></textarea>
        <ErrorMessage>{errors.message?.message}</ErrorMessage>
      </div>
      <Button
        type="submit"
        className="bg-secondary text-white hover:bg-[#e67100]"
        disabled={isSubmitting}
      >
        Quero ser parceira
      </Button>
    </form>
  );
}
