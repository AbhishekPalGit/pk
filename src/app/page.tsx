import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Products />
      <About />
      <Testimonials />
      <LeadForm />
      <Contact />
      <Footer />
    </main>
  );
}
