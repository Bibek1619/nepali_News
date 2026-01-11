import React, { useState } from "react";

const PollWidget = ({ question, options }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  // Dummy results - in a real app, these would come from a database
  const [results, setResults] = useState(options.map(() => Math.floor(Math.random() * 50) + 10));

  const totalVotes = results.reduce((sum, current) => sum + current, 0);

  const handleVote = () => {
    if (selectedOption !== null) {
      const newResults = [...results];
      const index = options.indexOf(selectedOption);
      newResults[index] += 1;
      setResults(newResults);
      setHasVoted(true);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">जनमत सर्वेक्षण</h2>
      <p className="text-gray-700 mb-4">{question}</p>

      {!hasVoted ? (
        <>
          <div className="space-y-3 mb-4">
            {options.map((option, index) => (
              <label key={index} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="poll"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => setSelectedOption(option)}
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>

          <button
            onClick={handleVote}
            disabled={!selectedOption}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            मतदान गर्नुहोस्
          </button>
        </>
      ) : (
        <div className="space-y-4">
          {options.map((option, index) => {
            const percentage = Math.round((results[index] / totalVotes) * 100);
            return (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{option}</span>
                  <span>{percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
                </div>
                <p className="text-xs text-gray-500">{results[index]} मत</p>
              </div>
            );
          })}
          <p className="text-sm text-center text-gray-600">कुल मतदान: {totalVotes}</p>
        </div>
      )}
    </div>
  );
};

export default PollWidget;
