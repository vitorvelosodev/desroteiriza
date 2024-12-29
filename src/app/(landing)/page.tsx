import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import WhereWeAre from "@/components/WhereWeAre";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Mission />
      <WhereWeAre />
      <ContactUs />
    </main>
  );
}
