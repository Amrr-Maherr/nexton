"use client";
import { useState } from "react";
import { Plus, MessageSquare } from "lucide-react";
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

export function Questions({ questions }: QuestionsProps) {
  const [showAddQuestion, setShowAddQuestion] = useState(false);

  const handleAddQuestion = (newQuestion: { 
    question: string; 
    name?: string; 
    email?: string 
  }) => {
    console.log("New question:", newQuestion);
    setShowAddQuestion(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">
          Questions & Answers {questions && questions.length > 0 && `(${questions.length})`}
        </h2>
        <button
          onClick={() => setShowAddQuestion(true)}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          <Plus className="h-5 w-5" />
          Ask a Question
        </button>
      </div>

      {showAddQuestion && (
        <div className="mb-6">
          <AddQuestion
            onClose={() => setShowAddQuestion(false)}
            onSubmit={handleAddQuestion}
          />
        </div>
      )}

      {questions && questions.length > 0 ? (
        <div className="space-y-4">
          {questions.map((q) => (
            <div key={q._id} className="border rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">
                        {q.user.name || "Anonymous"}
                      </span>
                      {q.answer && (
                        <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded">
                          Answered
                        </span>
                      )}
                    </div>
                    <span className="text-xs opacity-50">
                      {new Date(q.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="opacity-90 mb-3">{q.question}</p>
                  {q.answer && (
                    <div className="bg-secondary/50 rounded-lg p-3 ml-4">
                      <p className="font-semibold text-sm mb-1">
                        <span className="text-primary">Store Response:</span>
                      </p>
                      <p className="opacity-70 text-sm">{q.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 opacity-70">
          <MessageSquare className="h-12 w-12 mx-auto mb-3 opacity-50" />
          <p>No questions yet. Be the first to ask!</p>
        </div>
      )}
    </div>
  );
}
