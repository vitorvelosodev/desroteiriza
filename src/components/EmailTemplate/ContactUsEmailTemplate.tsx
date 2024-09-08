import { ContactUs } from "@/types/ContactUs.type";

export default function ContactUsEmailTemplate({
  name,
  company,
  email,
  phone,
}: ContactUs) {
  return (
    <div>
      <h1>Novo contato recebido!</h1>
      <p>Nome: {name}</p>
      <p>Email: {email}</p>
      <p>Company: {company}</p>
      <p>Telefone: {phone}</p>
    </div>
  );
}
