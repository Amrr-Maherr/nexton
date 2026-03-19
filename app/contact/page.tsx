import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Users,
  Target,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@nexton.com",
      href: "mailto:info@nexton.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 234 567 8900",
      href: "tel:+12345678900",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "123 Business Street, City, Country",
      href: "#",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon - Fri: 9:00 AM - 6:00 PM",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10 py-12 px-4">
      <div className="main_container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or just want to say hi? We&apos;d love to hear from
            you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="border rounded-2xl bg-card p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">{item.title}</p>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="border rounded-2xl bg-card p-6 shadow-lg">
              <div className="aspect-video rounded-xl bg-secondary/50 flex items-center justify-center">
                <MapPin className="h-12 w-12 text-muted-foreground" />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Interactive map would go here
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border rounded-2xl bg-card p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-12 text-base">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          <div className="border rounded-2xl bg-card p-6 shadow-lg text-center">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">10,000+</h3>
            <p className="text-muted-foreground">Happy Customers</p>
          </div>
          <div className="border rounded-2xl bg-card p-6 shadow-lg text-center">
            <Target className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">500+</h3>
            <p className="text-muted-foreground">Products</p>
          </div>
          <div className="border rounded-2xl bg-card p-6 shadow-lg text-center">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">10+</h3>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}
