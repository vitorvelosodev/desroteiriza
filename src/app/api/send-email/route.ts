import { Resend } from "resend";
import { type NextRequest, NextResponse } from "next/server";
import { type ContactUs } from "@/types/ContactUs.type";
import ContactUsEmailTemplate from "@/components/EmailTemplate/ContactUsEmailTemplate";
import { contactUsSchema } from "@/schema/contactUs.schema";
import { env } from "@/env";

const resend = new Resend(env.RESEND_API_KEY);
const RESEND_TO_EMAIL_ARRAY = JSON.parse(env.RESEND_TO_EMAIL_ARRAY) as string[];

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactUs;
    const parsedBody = contactUsSchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json({ error: parsedBody.error }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: `Contato Desroteiriza <${env.RESEND_FROM_EMAIL}>`,
      to: RESEND_TO_EMAIL_ARRAY,
      subject: "Novo Contato - Site Desroteiriza",
      react: ContactUsEmailTemplate({ ...parsedBody.data }),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
