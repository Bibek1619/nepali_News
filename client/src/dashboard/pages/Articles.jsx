// pages/Articles.jsx
import React, { useState } from "react";
import ArticleList from "../components/layout/ArticleList";
import toast from "react-hot-toast";

const Articles = () => {
  const [articles, setArticles] = useState([
    { 
      id: 1,
      title: "नेपालले एसिया कपमा ऐतिहासिक जित निकाल्यो", 
      category: "खेलकुद", 
      date: "२०८० बैशाख ५", 
      author: "रवि लामिछाने",
      status: "प्रकाशित",
      description: "नेपाली फुटबल टिमले एसिया कपमा ऐतिहासिक जित हासिल गर्यो।"
    },
    { 
      id: 2,
      title: "काठमाडौंमा विद्युतीय सवारी साधनको प्रयोग बढ्दो", 
      category: "प्रविधि", 
      date: "२०८० बैशाख ५", 
      author: "अनिल शर्मा",
      status: "प्रकाशित",
      description: "काठमाडौंमा विद्युतीय सवारी साधनको प्रयोग बढ्दो छ।"
    },
    { 
      id: 3,
      title: "नेपाल सरकारले नयाँ शैक्षिक नीति ल्यायो", 
      category: "शिक्षा", 
      date: "२०८० बैशाख ४", 
      author: "सरिता थापा",
      status: "प्रकाशित",
      description: "नेपाल सरकारले नयाँ शैक्षिक नीति ल्याएको छ।"
    },
    { 
      id: 4,
      title: "उद्योग मन्त्रालयले नयाँ औद्योगिक नीति घोषणा गर्यो", 
      category: "अर्थ", 
      date: "२०८० बैशाख ४", 
      author: "प्रकाश पौडेल",
      status: "ड्राफ्ट",
      description: "उद्योग मन्त्रालयले नयाँ औद्योगिक नीति घोषणा गरेको छ।"
    },
    { 
      id: 5,
      title: "काठमाडौंमा नयाँ फिल्म फेस्टिवल हुने", 
      category: "मनोरञ्जन", 
      date: "२०८० बैशाख ३", 
      author: "सुमन तामाङ",
      status: "प्रकाशित",
      description: "काठमाडौंमा नयाँ फिल्म फेस्टिवल हुनेछ।"
    },
    { 
      id: 6,
      title: "नेपालमा नयाँ पर्यटन नीति लागू", 
      category: "पर्यटन", 
      date: "२०८० बैशाख ३", 
      author: "रमेश बस्नेत",
      status: "समीक्षा",
      description: "नेपालमा नयाँ पर्यटन नीति लागू गरिएको छ।"
    },
    { 
      id: 7,
      title: "नेपाली फुटबल टिमले नयाँ प्रशिक्षक नियुक्त गर्यो", 
      category: "खेलकुद", 
      date: "२०८० बैशाख २", 
      author: "बिमल घले",
      status: "प्रकाशित",
      description: "नेपाली फुटबल टिमले नयाँ प्रशिक्षक नियुक्त गरेको छ।"
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);

  // Handle Delete
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("के तपाईं यो लेख हटाउन निश्चित हुनुहुन्छ?");
    if (confirmDelete) {
      setArticles(articles.filter((article) => article.id !== id));
      toast.success("लेख हटाइयो!");
    }
  };

  // Handle Edit
  const handleEdit = (article) => {
    setCurrentArticle(article);
    setIsModalOpen(true);
  };

  // Handle Save (Add/Edit)
  const handleSave = (article) => {
    if (article.id) {
      // Edit existing article
      setArticles(articles.map((a) => (a.id === article.id ? article : a)));
      toast.success("लेख सम्पादन गरियो!");
    } else {
      // Add new article
      const newArticle = { ...article, id: articles.length + 1 };
      setArticles([...articles, newArticle]);
      toast.success("नयाँ लेख थपियो!");
    }
    setIsModalOpen(false);
    setCurrentArticle(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">समाचार व्यवस्थापन</h1>
        <button
          onClick={() => {
            setCurrentArticle(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition shadow-sm"
        >
          नयाँ समाचार थप्नुहोस्
        </button>
      </div>

      {/* ArticleList Component */}
      <ArticleList
        articles={articles}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Add/Edit Article Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              {currentArticle ? "लेख सम्पादन गर्नुहोस्" : "नयाँ लेख थप्नुहोस्"}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const newArticle = {
                  id: currentArticle?.id,
                  title: formData.get("title"),
                  category: formData.get("category"),
                  date: formData.get("date"),
                  author: formData.get("author"),
                  status: formData.get("status"),
                  description: formData.get("description"),
                };
                handleSave(newArticle);
              }}
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">शीर्षक</label>
                  <input
                    type="text"
                    name="title"
                    defaultValue={currentArticle?.title}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">श्रेणी</label>
                  <input
                    type="text"
                    name="category"
                    defaultValue={currentArticle?.category}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">लेखक</label>
                  <input
                    type="text"
                    name="author"
                    defaultValue={currentArticle?.author}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">मिति</label>
                  <input
                    type="text"
                    name="date"
                    defaultValue={currentArticle?.date}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">स्थिति</label>
                  <select
                    name="status"
                    defaultValue={currentArticle?.status}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="प्रकाशित">प्रकाशित</option>
                    <option value="ड्राफ्ट">ड्राफ्ट</option>
                    <option value="समीक्षा">समीक्षा</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">विवरण</label>
                  <textarea
                    name="description"
                    defaultValue={currentArticle?.description}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  रद्द गर्नुहोस्
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  बचत गर्नुहोस्
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Articles;