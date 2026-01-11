// components/layout/ArticleList.jsx
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ArticleList = ({ articles, onEdit, onDelete }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchField, setSearchField] = useState("title"); // Default search by title
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  // Handle Search
  const filteredArticles = articles.filter((article) => {
    const fieldValue = article[searchField].toLowerCase();
    return fieldValue.includes(searchQuery.toLowerCase());
  });

  // Pagination Logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      {/* Search Bar and Filter */}
      <div className="mb-4 flex flex-wrap gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="खोज्नुहोस्..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div className="w-full md:w-auto">
          <select
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="title">शीर्षक</option>
            <option value="category">श्रेणी</option>
            <option value="author">लेखक</option>
          </select>
        </div>
      </div>

      {/* Articles Table */}
      <table className="w-full text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3">शीर्षक</th>
            <th className="p-3">श्रेणी</th>
            <th className="p-3">लेखक</th>
            <th className="p-3">मिति</th>
            <th className="p-3">स्थिति</th>
            <th className="p-3">विवरण</th>
            <th className="p-3">कार्य</th>
          </tr>
        </thead>
        <tbody>
          {currentArticles.map((article) => (
            <tr key={article.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{article.title}</td>
              <td className="p-3">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                  {article.category}
                </span>
              </td>
              <td className="p-3">{article.author}</td>
              <td className="p-3">{article.date}</td>
              <td className="p-3">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  article.status === 'प्रकाशित' ? 'bg-green-100 text-green-800' : 
                  article.status === 'ड्राफ्ट' ? 'bg-gray-100 text-gray-800' : 
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {article.status}
                </span>
              </td>
              <td className="p-3 max-w-xs truncate">{article.description}</td>
              <td className="p-3 flex space-x-2">
                <button
                  onClick={() => onEdit(article)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => onDelete(article.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        {Array.from({ length: Math.ceil(filteredArticles.length / articlesPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded-lg ${
                currentPage === index + 1
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default ArticleList;