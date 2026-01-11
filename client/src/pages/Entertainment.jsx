import React, { useState } from "react";
import CategoryPageTemplate from "../components/layout/CategoryPageTemplate";

/* ✅ ADD THIS AT THE TOP */
const entertainmentNews = [
  {
    id: 1,
    title: "नयाँ नेपाली चलचित्रले बक्स अफिसमा कीर्तिमान बनायो",
    description: "नयाँ रिलिज भएको नेपाली चलचित्रले पहिलो हप्तामै राम्रो व्यापार गरेको छ।",
    image: "https://i.ytimg.com/vi/tmJVKsxH7lI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCJk4wRagP_3ZG_eRyMepHS8tscmQ",
    category: "मनोरञ्जन",
    date: "2026-01-11",
  },
  {
    id: 2,
    title: "लोकप्रिय गायकको नयाँ गीत सार्वजनिक",
    description: "नेपाली संगीत क्षेत्रमा नयाँ गीतले चर्चा पाएको छ।",
    image: "https://i.ytimg.com/vi/ltsHEqe2oLk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAJMnKEk8XGHQGkVmS4e9kHrjRAxg",
    category: "मनोरञ्जन",
    date: "2026-01-10",
  },
  {
    id: 3,
    title: "नेपाली वेब सिरिजको ट्रेलर सार्वजनिक",
    description: "प्रतीक्षित नेपाली वेब सिरिजको ट्रेलर सार्वजनिक भएको छ।",
    image: "https://i.ytimg.com/vi/inErGSSvaAI/sddefault.jpg",
    category: "मनोरञ्जन",
    date: "2026-01-09",
  },
];

const Entertainment = () => {
  // Quiz Section
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const quizQuestions = [
    {
      question: "नेपाली चलचित्र 'कबड्डी कबड्डी' को निर्देशक को हुन्?",
      options: ["दीपक राय", "निश्चल बस्नेत", "प्रकाश सायमी", "राम बाबु गुरुङ"],
      correctAnswer: "निश्चल बस्नेत",
    },
    {
      question: "नेपाली गायक नारायण गोपालको जन्म कहाँ भएको थियो?",
      options: ["काठमाडौं", "पोखरा", "धरान", "भरतपुर"],
      correctAnswer: "काठमाडौं",
    },
  ];

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">मनोरञ्जन</h1>
      <p className="text-lg text-gray-600 mb-6">
        नेपाल र विश्वभरका मनोरञ्जन सम्बन्धी ताजा समाचारहरू
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Quiz Section */}
        <div className="md:col-span-1 bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            🎯 मनोरञ्जन प्रश्नोत्तरी
          </h2>

          {showScore ? (
            <div className="text-center">
              <p className="text-xl">
                तपाईंले {score} मध्ये {quizQuestions.length} प्रश्नहरू सही गर्नुभयो!
              </p>
              <button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={() => {
                  setCurrentQuestion(0);
                  setScore(0);
                  setShowScore(false);
                }}
              >
                फेरि खेल्नुहोस्
              </button>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                प्रश्न {currentQuestion + 1}:{" "}
                {quizQuestions[currentQuestion].question}
              </h3>
              <div className="flex flex-col space-y-3">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    onClick={() => handleAnswerClick(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* News Section */}
        <div className="md:col-span-2">
          <CategoryPageTemplate
            title="मनोरञ्जन"
            description="नेपाल र विश्वभरका मनोरञ्जन सम्बन्धी ताजा समाचारहरू"
            newsData={entertainmentNews}
          />
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
