import BestSeller from "@/components/home/BestSeller";
import ContactSection from "@/components/home/ContactSection";
import CTASection from "@/components/home/CTASection";
import HeroSection from "@/components/home/HeroSection";
import PopularProducts from "@/components/home/PopularProducts";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <WhyChooseUs />
      <PopularProducts />
      <BestSeller />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
