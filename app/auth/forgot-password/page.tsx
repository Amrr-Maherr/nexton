"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Forgot Password:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/10 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo/Title */}
        <div className="text-center mb-8">
          {!isSubmitted ? (
            <>
              <h1 className="text-3xl font-bold mb-2">Forgot Password?</h1>
              <p className="text-muted-foreground">
                No worries, we&apos;ll send you reset instructions
              </p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Check Your Email</h1>
              <p className="text-muted-foreground">
                We&apos;ve sent a reset link to{" "}
                <span className="text-primary font-medium">{email}</span>
              </p>
            </>
          )}
        </div>

        {/* Forgot Password Card */}
        <div className="border rounded-2xl bg-card p-6 md:p-8 shadow-lg">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full h-12 text-base">
                Reset Password
              </Button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="bg-secondary/50 rounded-xl p-4 text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  Didn&apos;t receive the email?
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Click to resend
                </Button>
              </div>
            </div>
          )}

          {/* Back to Login */}
          <Link
            href="/auth/login"
            className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
