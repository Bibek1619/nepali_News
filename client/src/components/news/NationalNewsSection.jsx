import React from "react";
import Title from "../Title";
import SimpleNewsCard from "./items/SimpleNewsCard";
import { Link } from "react-router-dom";
import newsData from "../../data/newsData";

const NationalNewsSection = () => {
  // Filter and set only first category
  const nationalNews = newsData
    .filter((item) => item.category.includes("राष्ट्रिय"))
    .map((item) => ({
      ...item,
      category: [item.category[0]], // pass only first category
    }));

  return (
    <div className="w-full lg:w-6/12 mt-5 lg:mt-0">
      <div className="flex flex-col gap-4 lg:pl-0">
        <Title title="राष्ट्रिय" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {nationalNews.map((item) => (
            <SimpleNewsCard key={item.slug} item={item} type="national" />
          ))}
        </div>
        <div className="flex justify-end">
          <Link
            to="/all-news/national"
            className="text-blue-600 font-bold hover:text-blue-800 transition"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NationalNewsSection;
