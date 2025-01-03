import * as simpleIcons from "simple-icons";
import Container from "./Container";
import { SimpleIcon } from "./SimpleIcon";

export default function WhereWeAre() {
  return (
    <section id="where" className="w-full bg-white py-12 md:py-24 lg:py-32">
      <Container>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-10 text-center">
            <h2 className="font-title text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
              Onde Estamos
            </h2>
            <p className="max-w-[600px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Acompanhe nossas aventuras e descubra o Espírito Santo conosco
              através das nossas redes sociais.
            </p>
            <div className="mt-8 flex flex-col gap-6 sm:flex-row">
              <a
                href="https://www.instagram.com/desroteiriza"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-secondary px-6 py-3 text-white transition-colors hover:bg-[#e67100]"
              >
                <SimpleIcon icon={simpleIcons.siInstagram} className="invert" />
                <span className="font-semibold">Siga no Instagram</span>
              </a>
              <a
                href="https://www.youtube.com/@desroteiriza"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-secondary px-6 py-3 text-white transition-colors hover:bg-[#e67100]"
              >
                <SimpleIcon icon={simpleIcons.siYoutube} className="invert" />
                <span className="font-semibold">Inscreva-se no YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
