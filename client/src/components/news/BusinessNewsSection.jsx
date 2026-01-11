import { Link } from "react-router-dom";
import Title from "../Title";
import NewsCard from "./items/NewsCard";
import newsData from "../../data/newsData";;

const BusinessNewsSection = () => {
  // Filter business news
  const businessNews = newsData.filter((news) => news.category === "अर्थ/व्यापार");

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4">
        {/* Section Title */}
        <Title title="अर्थ/व्यापार" />

        {/* Business News Grid */}
        <div className="grid grid-cols-1 gap-4">
          {businessNews.map((news, index) => (
            <NewsCard key={index} news={news} />
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-end">
          <Link 
            to="/economy" 
            className="text-blue-600 font-bold hover:text-blue-800 transition"
          >
            थप हेर्नुहोस्
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessNewsSection;