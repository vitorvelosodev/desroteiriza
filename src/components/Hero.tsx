import Image from "next/image";
import { Button } from "./ui/button";
import Container from "./Container";
import Link from "next/link";

import profilePic from "public/profile.jpg";

export default function Hero() {
  return (
    <section className="w-full bg-primary py-12 text-white md:py-24 lg:py-32 xl:py-48">
      <Container>
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_400px]">
            <div className="flex flex-col items-center space-y-4 text-center lg:items-start lg:text-left">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Desroteiriza: A Cada Lugar, Um Novo Olhar
                </h1>
                <p className="max-w-[37.5rem] text-gray-500 md:text-xl">
                  Um convite para explorar o extraordinário e revelar as
                  maravilhas escondidas do Espírito Santo.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#about"
                  className="grid place-items-center rounded-md bg-secondary p-2 text-white hover:bg-secondary/80"
                >
                  Saiba Mais
                </Link>
                <Link
                  href="#contact-us"
                  className="grid place-items-center rounded-md border-2 border-white p-2 text-white hover:bg-white/20"
                >
                  Seja Parceiro
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src={profilePic}
                alt="As duas amigas fundadoras da Desroteiriza"
                className="aspect-square rounded-full border-4 border-white object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
