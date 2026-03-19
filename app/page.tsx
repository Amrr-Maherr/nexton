import {
  HeroSection,
  FeaturesSection,
  CategoriesSection,
  ProductsSection,
  BrandsSection,
  CTASection,
} from "./home";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <ProductsSection />
      <BrandsSection />
      <CTASection />
    </div>
  );
}
