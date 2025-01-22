"use client";
import React, { useState } from "react";

interface Question {
  id: string;
  question: string;
  options: { value: string; label: string }[];
  correctAnswer: string;
}

type RadioProps = {
  name: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  selectedAnswer?: string;
  showCorrectAnswer: boolean;
  correctAnswer: string;
};

const Radio: React.FC<RadioProps> = ({ name, options, onChange, selectedAnswer, showCorrectAnswer, correctAnswer }) => {
  return (
    <div className="space-y-4">
      {options.map((option) => {
        const isSelected = selectedAnswer === option.value;
        const isCorrect = showCorrectAnswer && option.value === correctAnswer;
        const isIncorrect = showCorrectAnswer && option.value === selectedAnswer && selectedAnswer !== correctAnswer;
        const isUnanswered = !selectedAnswer && showCorrectAnswer;

        return (
          <label
            key={option.value}
            className={`flex items-center space-x-3 cursor-pointer p-3 rounded-lg transition-all duration-300 ${
              isSelected ? "bg-blue-50" : "bg-gray-100"
            } ${isCorrect ? "border-2 border-green-500 text-green-800" : ""} ${isIncorrect ? "border-2 border-red-500 text-red-800" : ""} ${
              isUnanswered ? "border-2 border-yellow-400 text-yellow-600" : ""
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              onChange={() => onChange(option.value)}
              className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
              disabled={showCorrectAnswer} // Disable after submission
            />
            <span
              className={`text-lg ${isSelected ? "font-semibold" : "font-medium"} ${
                isCorrect ? "text-green-800" : isIncorrect ? "text-red-800" : "text-gray-700"
              }`}
            >
              {option.label}
            </span>
          </label>
        );
      })}
    </div>
  );
};

const questions: Question[] = [
  {
    id: "qn-1",
    question: "1. What is the multiplier of orange color code resistor?",
    options: [
      { value: "a: 1 KOhm", label: "a: 1 KOhm" },
      { value: "b: 10 Ohm", label: "b: 10 Ohm" },
      { value: "c: 10 KOhm", label: "c: 10 KOhm" },
      { value: "d: 1 GOhm", label: "d: 1 GOhm" },
    ],
    correctAnswer: "c: 10 KOhm",
  },
  {
    id: "qn-2",
    question: "2. What is the multiplier of blue color code resistor?",
    options: [
      { value: "a: 1 KOhm", label: "a: 1 KOhm" },
      { value: "b: 10 Ohm", label: "b: 10 Ohm" },
      { value: "c: 1 MOhm", label: "c: 1 MOhm" },
      { value: "d: 1 GOhm", label: "d: 1 GOhm" },
    ],
    correctAnswer: "c: 1 MOhm",
  },
  {
    id: "qn-3",
    question: "3. What is the tolerance of gold color code resistor?",
    options: [
      { value: "a: 2", label: "a: 2" },
      { value: "b: 5", label: "b: 5" },
      { value: "c: 1", label: "c: 1" },
      { value: "d: 0", label: "d: 0" },
    ],
    correctAnswer: "a: 2",
  },
];

const Page: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({});
  const [score, setScore] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionId: string, selectedOption: string) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const calculateScore = () => {
    let correctCount = 0;

    questions.forEach((question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });

    setScore(correctCount);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-blue-100 to-green-50 p-8">
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-8">
          Resistor Color Code Quiz
        </h2>
        <div className="space-y-8">
          {questions.map((question) => (
            <div key={question.id} className="flex flex-col space-y-4">
              <label htmlFor={question.id} className="font-semibold text-xl text-gray-800">
                {question.question}
              </label>
              <Radio
                name={question.id}
                options={question.options}
                onChange={(value) => handleAnswerChange(question.id, value)}
                selectedAnswer={userAnswers[question.id]}
                showCorrectAnswer={submitted}
                correctAnswer={question.correctAnswer}
              />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none transition-all duration-300"
            onClick={calculateScore}
          >
            Submit Quiz
          </button>
        </div>
        {submitted && (
          <div className="mt-6 text-center">
            <p className="text-2xl font-semibold text-gray-800">
              Your score: {score} / {questions.length}
            </p>
            {score === questions.length ? (
              <p className="text-green-600 mt-4 text-lg font-semibold">Awesome! You got everything right!</p>
            ) : (
              <p className="text-red-600 mt-4 text-lg font-semibold">Oops! Some answers are wrong, try again!</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
