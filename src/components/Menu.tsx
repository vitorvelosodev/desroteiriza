import { Compass } from "lucide-react";
import Link from "next/link";
import Container from "./Container";

export default function Menu() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-primary text-white">
      <Container className="flex h-14 w-full items-center">
        <Link className="flex items-center justify-center" href="#">
          <Compass className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">Desroteiriza</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="/#contact-us"
          >
            Contato
          </Link>
        </nav>
      </Container>
    </header>
  );
}
