import { useState } from "react";
import SimpleDetailsNewCard from "../news/items/SimpleDetailsNewCard";
import Title from "../Title";
import NewsCard from "../news/items/NewsCard";

// Pagination button generator
const PaginationButton = ({ onClick, disabled, children }) => (
  <button
    className={`px-4 py-2 border border-gray-300 rounded-md transition ${
      disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
    }`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

const CategoryPageTemplate = ({
  title,
  description,
  newsData = [],
  latestNews = [],
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 6; // Adjust the number of news per page
  const totalPages = Math.ceil(newsData.length / newsPerPage);

  // Paginate news
  const paginatedNews = newsData.slice(
    (currentPage - 1) * newsPerPage,
    currentPage * newsPerPage
  );

  // Handle if no news data is available
  if (!newsData || newsData.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">खोइ, केही समाचार छैन!</h2>
          <p>हालको समयमा कुनै समाचार उपलब्ध छैन। कृपया पछि प्रयास गर्नुहोस्।</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        {/* Main Content Section */}
        <div className="w-full lg:w-8/12 px-4 order-2 lg:order-1">
          {/* Page Title and Description */}
          <div className="mb-8">
            <Title title={title} />
            {description && <p className="text-gray-600 mt-2">{description}</p>}
          </div>

          {/* Featured News (First News Item) */}
          {paginatedNews.length > 0 && (
            <div className="mb-8">
              <SimpleDetailsNewCard
                news={paginatedNews[0]}
                type="details-news"
                className="h-[300px]"
              />
            </div>
          )}

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paginatedNews.slice(1).map((news) => (
              <SimpleDetailsNewCard
                key={news.id} // Ensure each item has a unique key
                news={news}
                type="details-news"
                className="h-[200px]"
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-10">
              <div className="flex gap-2">
                <PaginationButton
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  पछिल्लो
                </PaginationButton>
                {Array.from({ length: totalPages }, (_, i) => (
                  <PaginationButton
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    disabled={currentPage === i + 1}
                  >
                    {i + 1}
                  </PaginationButton>
                ))}
                <PaginationButton
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  अर्को
                </PaginationButton>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar: Advertisements & Latest News (Fixed) */}
        <div className="w-full lg:w-4/12 px-4 order-3 lg:order-2">
          {/* Advertisement Section */}
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-bold mb-4">विज्ञापन</h3>
            <div className="h-48 bg-gray-300 flex items-center justify-center rounded-lg">
              <p className="text-gray-600">विज्ञापन स्थान</p>
            </div>
          </div>

          {/* Latest News Section (Fixed) */}
          <div className="bg-white p-4 rounded-lg shadow-md sticky top-[90px]">
            <h3 className="text-lg font-bold mb-4">ताजा समाचार</h3>
            <div className="space-y-4">
              {latestNews.length > 0 ? (
                latestNews.map((news) => (
                  <NewsCard key={news.id} news={news} /> // Ensure each item has a unique key
                ))
              ) : (
                <p>ताजा समाचारहरू उपलब्ध छैनन्।</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPageTemplate;
