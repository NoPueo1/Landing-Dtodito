import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import HowToOrder from "@/components/HowToOrder";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0c0a] text-white selection:bg-[#22c55e] selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <HowToOrder />
      <CTASection />
      <Footer />
      <Cart />
    </main>
  );
}
