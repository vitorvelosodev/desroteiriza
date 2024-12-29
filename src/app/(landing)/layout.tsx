import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full min-h-dvh flex-col">
      <Header />
      <div className="mt-14 flex-1">{children}</div>
      <Footer />
    </div>
  );
}
