import { Instagram, Mail, Youtube } from "lucide-react";
import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-primary px-4 py-6 text-white md:px-6">
      <Container className="flex shrink-0 flex-col items-center gap-2 sm:flex-row">
        <p className="text-xs">
          © 2024 Desroteiriza. Todos os direitos reservados.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Política de Privacidade
          </Link>
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Termos de Serviço
          </Link>
        </nav>
        <div className="mt-4 flex gap-4 sm:mt-0">
          <Link
            href="https://www.instagram.com/desroteiriza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.youtube.com/desroteiriza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="h-6 w-6" />
          </Link>
          <Link href="mailto:contato@desroteiriza.com">
            <Mail className="h-6 w-6" />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
