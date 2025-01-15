import Image from "next/image";
import Container from "./Container";
import Link from "next/link";

import profilePic1 from "public/hero/profile.jpg";
import profilePic2 from "public/hero/praia-cut.jpg";
import profilePic3 from "public/hero/IMG_7395.jpg";

export default function Hero() {
  return (
    <section className="w-full bg-gray-500/30 py-8 text-gray-800 md:py-12">
      <Container className="">
        <div className="grid items-center gap-12 md:grid-cols-[58%_auto]">
          <div className="flex w-full flex-col items-center space-y-6 text-center md:w-[60%] md:items-start md:text-left">
            <div className="space-y-4 md:max-w-[37.5rem]">
              <h1 className="font-title text-2xl font-thin tracking-tighter sm:text-5xl">
                Bem-vindo a <br />
                <span className="bg-gradient-to-r from-secondary via-primary/70 to-tertiary bg-clip-text text-5xl font-bold text-transparent lg:text-8xl">
                  Desroteiriza
                </span>
              </h1>
              <p className="max-w-[37.5rem] text-lg font-light md:text-xl">
                Descubra o Espírito Santo como nunca antes: lugares únicos,
                experiências autênticas e histórias que merecem ser contadas.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#about"
                className="grid min-w-[10rem] place-items-center bg-secondary px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-secondary/80"
              >
                Saiba Mais
              </Link>
              <Link
                href="#contact-us"
                className="grid min-w-[10rem] place-items-center border-2 border-primary px-6 py-3 text-lg font-medium text-primary transition-colors hover:bg-white/10"
              >
                Seja Parceiro
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-2">
              <Image
                src={profilePic1}
                alt="Primeira imagem da Desroteiriza"
                className="col-span-2 aspect-[4/3] object-cover object-[50%_40%] shadow-2xl"
                priority
              />
              <Image
                src={profilePic2}
                alt="Segunda imagem da Desroteiriza"
                className="aspect-[3/2] object-cover shadow-2xl"
                priority
              />
              <Image
                src={profilePic3}
                alt="Terceira imagem da Desroteiriza"
                className="aspect-[3/2] object-cover object-[50%_40%] shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
