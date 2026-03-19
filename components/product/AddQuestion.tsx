"use client";
import { useState } from "react";
import { X, Send } from "lucide-react";

interface AddQuestionProps {
  onClose?: () => void;
  onSubmit?: (question: { question: string; name?: string; email?: string }) => void;
}

export function AddQuestion({ onClose, onSubmit }: AddQuestionProps) {
  const [questionText, setQuestionText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionText.trim()) return;
    
    onSubmit?.({ question: questionText, name, email });
    setQuestionText("");
    setName("");
    setEmail("");
  };

  return (
    <div className="border rounded-lg p-6 bg-secondary/30">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">Ask a Question</h3>
        {onClose && (
          <button
            onClick={onClose}
            className="p-1 hover:bg-secondary rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Question Text */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Your Question <span className="text-red-500">*</span>
          </label>
          <textarea
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            placeholder="What would you like to know about this product?"
            rows={4}
            className="w-full bg-secondary border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            required
          />
          <p className="text-xs opacity-70 mt-1">
            {questionText.length} characters
          </p>
        </div>

        {/* Name (Optional) */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Your Name <span className="opacity-70">(optional)</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full bg-secondary border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Email (Optional) */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Email <span className="opacity-70">(for notifications)</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full bg-secondary border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Submit Button */}
        <div className="flex gap-2">
          <button
            type="submit"
            disabled={!questionText.trim()}
            className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Send className="h-4 w-4" />
            Submit Question
          </button>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-border rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
