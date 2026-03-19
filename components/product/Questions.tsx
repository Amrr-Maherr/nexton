"use client";
import { useState } from "react";
import { Plus, MessageSquare, User, Calendar, CheckCircle } from "lucide-react";
import { AddQuestion } from "./AddQuestion";

interface Question {
  _id: string;
  question: string;
  answer?: string;
  user: {
    _id: string;
    name: string;
  };
  createdAt: string;
}

interface QuestionsProps {
  questions?: Question[];
}

export default function Questions({ questions }: QuestionsProps) {
  const [showAddQuestion, setShowAddQuestion] = useState(false);

  const handleAddQuestion = (newQuestion: {
    question: string;
    name?: string;
    email?: string;
  }) => {
    console.log("New question:", newQuestion);
    setShowAddQuestion(false);
  };

  return (
    <div className="border rounded-xl p-5 md:p-6 bg-card shadow-sm h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          <h2 className="text-lg md:text-xl font-bold">
            Q&A {questions && questions.length > 0 && `(${questions.length})`}
          </h2>
        </div>
        <button
          onClick={() => setShowAddQuestion(true)}
          className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity shrink-0"
        >
          <Plus className="h-5 w-5" />
          Ask Question
        </button>
      </div>

      {/* Add Question Form */}
      {showAddQuestion && (
        <div className="mb-6">
          <AddQuestion
            onClose={() => setShowAddQuestion(false)}
            onSubmit={handleAddQuestion}
          />
        </div>
      )}

      {/* Questions List */}
      {questions && questions.length > 0 ? (
        <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
          {questions.map((q) => (
            <div
              key={q._id}
              className={`border rounded-xl p-4 transition-colors ${
                q.answer
                  ? "bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800"
                  : "bg-secondary/30 hover:bg-secondary/50"
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                    {q.user.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5 text-muted-foreground" />
                      <p className="font-semibold text-sm">
                        {q.user.name || "Anonymous"}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                      <Calendar className="h-3 w-3" />
                      {new Date(q.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>

                {/* Answered Badge */}
                {q.answer && (
                  <div className="flex items-center gap-1 bg-green-500 text-white px-2 py-1 rounded-full shrink-0">
                    <CheckCircle className="h-3 w-3" />
                    <span className="text-xs font-semibold">Answered</span>
                  </div>
                )}
              </div>

              {/* Question Text */}
              <div className="flex gap-2 mb-2">
                <MessageSquare className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <p className="text-sm leading-relaxed">{q.question}</p>
              </div>

              {/* Answer */}
              {q.answer && (
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3 ml-6 mt-2">
                  <p className="font-semibold text-xs mb-1 text-primary">
                    Store Response:
                  </p>
                  <p className="text-sm opacity-70">{q.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/50 flex items-center justify-center">
            <MessageSquare className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No questions yet</h3>
          <p className="text-muted-foreground">
            Be the first to ask a question!
          </p>
        </div>
      )}
    </div>
  );
}
