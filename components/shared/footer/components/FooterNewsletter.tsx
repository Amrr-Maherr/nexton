import { memo, useState } from "react";

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
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm opacity-70">{description}</p>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-secondary/50 border border-border px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
        />
        <button
          type="submit"
          className="bg-primary text-primary-foreground px-4 py-2.5 rounded-lg font-medium hover:opacity-90 transition-colors duration-300 text-sm"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
});

export default FooterNewsletter;
