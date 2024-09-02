"use client";

import Container from "./Container";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function ContactUs() {
  return (
    <section
      id="contact-us"
      className="w-full bg-primary py-12 text-white md:py-24 lg:py-32"
    >
      <Container>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Fale com a gente
              </h2>
              <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Seja para uma dúvida ou para juntar-se a nós nesta jornada de
                descoberta e promoção do Espírito Santo. Nos mande uma mensagem
                para fazer parte desta história única.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-2">
                <Input
                  placeholder="Seu nome"
                  type="text"
                  className="bg-white"
                />
                <Input
                  placeholder="Sua empresa"
                  type="text"
                  className="bg-white"
                />
                <Input
                  placeholder="Seu e-mail"
                  type="email"
                  className="bg-white"
                />
                <Button
                  type="submit"
                  className="bg-secondary text-white hover:bg-[#e67100]"
                >
                  Quero ser parceira
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
