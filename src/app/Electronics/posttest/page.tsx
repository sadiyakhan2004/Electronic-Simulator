"use client"
import React, { useState } from "react";
import Resistor from "@/components/electronics/Resistor";

const Page: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "qn-1",
      question: "For the below resistance, find out the resistance and tolerance value.",
      bands: [4, 7, 3, 10],
      options: [
        "a: 47 Kohm, 5",
        "b: 4 Kohm, 7",
        "c: 17 Kohm, 1",
        "d: 41 Kohm, 5",
      ],
      correctAnswer: "a: 47 Kohm, 5",
    },
    {
      id: "qn-2",
      question: "For the below resistance, find out the resistance and tolerance value.",
      bands: [1, 5, 8, 9, 2],
      options: [
        "a: 2 KOhm, 3",
        "b: 1.58 KOhm, 2",
        "c: 1.58 Ohm, 2",
        "d: 5 Ohm, 5",
      ],
      correctAnswer: "b: 1.58 KOhm, 2",
    },
  ];

  const handleAnswerChange = (questionId: string, answer: string) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    return questions.reduce((score, question) => {
      return score + (userAnswers[question.id] === question.correctAnswer ? 1 : 0);
    }, 0);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-8">
        Resistor Value and Tolerance Quiz
      </h1>
      <div className="max-w-4xl mx-auto space-y-8">
        {questions.map((question) => (
          <div key={question.id} className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {question.question}
            </h2>
            <div className="flex justify-center mb-4">
              <Resistor bands={question.bands} />
            </div>
            <div className="space-y-2">
              {question.options.map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={question.id}
                    value={option}
                    checked={userAnswers[question.id] === option}
                    onChange={() => handleAnswerChange(question.id, option)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    disabled={showResults}
                  />
                  <span
                    className={`text-gray-700 ${
                      showResults && option === question.correctAnswer
                        ? "text-green-600 font-bold"
                        : showResults && userAnswers[question.id] === option && option !== question.correctAnswer
                        ? "text-red-600"
                        : ""
                    }`}
                  >
                    {option}
                  </span>
                </label>
              ))}
            </div>
            {showResults && !userAnswers[question.id] && (
              <p className="text-yellow-500 font-semibold mt-2">You skipped this question.</p>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        {!showResults ? (
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Submit Answers
          </button>
        ) : (
          <div>
            <p className="text-lg font-bold text-green-600">
              Your score: {calculateScore()} / {questions.length}
            </p>
            <button
              onClick={() => setShowResults(false)}
              className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-lg shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
