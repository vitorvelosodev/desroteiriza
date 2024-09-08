import { Compass } from "lucide-react";
import Link from "next/link";
import Container from "./Container";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-primary px-4 text-white lg:px-6">
      <Container className="flex h-14 w-full items-center">
        <Link className="flex items-center justify-center" href="#">
          <Compass className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">Desroteiriza</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#about"
          >
            Sobre
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#mission"
          >
            Missão
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#where"
          >
            Onde Estamos
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#contact-us"
          >
            Fale com a gente
          </Link>
        </nav>
      </Container>
    </header>
  );
}
