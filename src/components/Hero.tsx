import Image from "next/image";
import { Button } from "./ui/button";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="w-full bg-primary py-12 text-white md:py-24 lg:py-32 xl:py-48">
      <Container>
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_400px]">
            <div className="flex flex-col items-center space-y-4 text-center lg:items-start lg:text-left">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Desroteiriza: Redescobrindo o Espírito Santo
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  Um convite para explorar o extraordinário e revelar as
                  maravilhas escondidas do Espírito Santo.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="bg-secondary text-white hover:bg-secondary/80">
                  Seja uma Parceira
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/20"
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="As duas amigas fundadoras da Desroteiriza"
                width={400}
                height={400}
                className="rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
