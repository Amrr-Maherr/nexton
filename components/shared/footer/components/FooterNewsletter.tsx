import { memo, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterNewsletterProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
}

const FooterNewsletter = memo(function FooterNewsletter({
  title = "Newsletter",
  description = "Subscribe to get special offers and updates.",
  placeholder = "Your email",
  buttonText = "Subscribe",
}: FooterNewsletterProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
        />
        <Button type="submit" size="lg" className="w-full h-11">
          {buttonText}
          <Send className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </div>
  );
});

export default FooterNewsletter;
