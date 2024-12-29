import { type contactUsSchema } from "@/schema/contactUs.schema";
import { type z } from "zod";

export type ContactUs = z.infer<typeof contactUsSchema>;
