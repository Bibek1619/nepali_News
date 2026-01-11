import React from "react";
import Title from "../Title";
import SimpleDetailsNewCard from "./items/SimpleDetailsNewCard";
import newsData from "../../data/newsData";  // Import all newsData
import { Link } from "react-router-dom";

const PopularNews = () => {
  // Filter news with 'लोकप्रिय' category
  const popularNews = newsData.filter((item) => item.category.includes("लोकप्रिय"))
  .map((item) => ({
    ...item,
    category: [item.category[0]], // pass only first category
  }));


  return (
    <div className="mt-5 md:px-1 w-full pb-8">
      <div className="flex flex-col w-full gap-y-[14px]">
        <Title title="लोकप्रिय खबर" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularNews.map((news) => (
            <SimpleDetailsNewCard key={news.slug} news={news} />
          ))}
        </div>
        <div className="flex justify-end">
          <Link
            to="/all-news/popular"
            className="text-blue-600 font-bold hover:text-blue-800 transition"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularNews;
