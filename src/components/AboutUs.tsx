import { Compass, MapPin, Users } from "lucide-react";
import Container from "./Container";
import Image from "next/image";
import weAreCapixabas from "public/wearecapixabas.jpg";

export default function AboutUs() {
  return (
    <section id="about" className="w-full bg-white py-12 md:py-24 lg:py-32">
      <Container>
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <Image
              alt="Fundadoras da Desroteiriza na placa de Somos Capixabas na Praia de Camburi"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              src={weAreCapixabas}
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-gray-200 sm:text-5xl">
                  Sobre a Desroteiriza
                </h2>
                <p className="max-w-[600px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A Desroteiriza nasce da paixão de duas amigas pelo Espírito
                  Santo. Nossa missão é revelar o pouco explorado, o pouco
                  conhecido e o incomum neste estado fascinante.
                </p>
              </div>
              <ul className="grid gap-2 py-4">
                <li className="flex items-center gap-2 text-tertiary">
                  <MapPin className="h-4 w-4" />
                  <span>Explorando destinos únicos</span>
                </li>
                <li className="flex items-center gap-2 text-tertiary">
                  <Users className="h-4 w-4" />
                  <span>Conectando com comunidades locais</span>
                </li>
                <li className="flex items-center gap-2 text-tertiary">
                  <Compass className="h-4 w-4" />
                  <span>Redescobrindo o familiar com um novo olhar</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
