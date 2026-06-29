import Hero from "@/components/hero";
import FeaturedCollections from "@/components/featured-collections";
import FeaturedProducts from "@/components/featured-products";
import Testimonials from "@/components/testimonials";
import WhyChooseUs from "@/components/why-choose-us";
import BrandStats from "@/components/brand-stats";
import Newsletter from "@/components/newsletter";

export default function HomePage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* Hero */}
      <Hero />

      {/* Brand Stats */}
      <BrandStats />

      {/* Collections */}
      <FeaturedCollections />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
}