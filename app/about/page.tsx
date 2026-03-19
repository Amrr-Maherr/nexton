import {
  Users,
  Target,
  Award,
  Heart,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  Package,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our top priority",
    },
    {
      icon: Award,
      title: "Quality Products",
      description: "Only the best products make it to our store",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers worldwide",
    },
    {
      icon: Zap,
      title: "Fast Service",
      description: "Quick delivery and responsive support",
    },
  ];

  const stats = [
    { icon: Users, value: "50,000+", label: "Happy Customers" },
    { icon: Package, value: "1,000+", label: "Products" },
    { icon: Award, value: "15+", label: "Awards Won" },
    { icon: Globe, value: "30+", label: "Countries" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="main_container max-w-6xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-primary">Nexton</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We&apos;re on a mission to provide exceptional products and
              outstanding service to customers worldwide.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" className="h-12 px-8">
                  Browse Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="h-12 px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-y bg-card/50 backdrop-blur">
        <div className="main_container max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main_container max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with a vision to revolutionize online shopping, Nexton
                has grown from a small startup to a trusted global marketplace.
              </p>
              <p>
                We believe in quality over quantity, which is why every product
                in our catalog is carefully selected to meet our high standards.
                Our team works tirelessly to ensure you get the best shopping
                experience possible.
              </p>
              <p>
                Today, we serve customers in over 30 countries, and we&apos;re
                just getting started. Our commitment to excellence drives
                everything we do.
              </p>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary/50 flex items-center justify-center">
            <Target className="h-32 w-32 text-muted-foreground opacity-50" />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="border rounded-2xl bg-card p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="border rounded-2xl bg-card p-8 md:p-12 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose Nexton?
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We&apos;re committed to providing you with the best shopping
            experience possible.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Quality Guaranteed",
                desc: "Every product is verified for authenticity and quality",
              },
              {
                title: "Secure Payments",
                desc: "Your transactions are protected with bank-level security",
              },
              {
                title: "24/7 Support",
                desc: "Our team is always here to help you",
              },
              {
                title: "Fast Shipping",
                desc: "Quick delivery to your doorstep",
              },
              {
                title: "Easy Returns",
                desc: "30-day hassle-free return policy",
              },
              {
                title: "Best Prices",
                desc: "Competitive pricing with regular discounts",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
