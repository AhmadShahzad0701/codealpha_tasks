import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import FeaturedSection from "@/components/home/FeaturedSection";
import PromoBanner from "@/components/home/PromoBanner";
import ValueProps from "@/components/home/ValueProps";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <div className="space-y-4">
      <HeroSection />
      <ValueProps />
      <CategorySection />
      <FeaturedSection />
      <PromoBanner />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}

