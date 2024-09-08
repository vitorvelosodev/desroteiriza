import { contactUsSchema } from "@/schema/contactUs.schema";
import { z } from "zod";

export type ContactUs = z.infer<typeof contactUsSchema>;
