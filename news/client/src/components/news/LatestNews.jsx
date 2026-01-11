import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SimpleNewsCard from "./items/SimpleNewsCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import newsData from "../../data/newsData"; // newsData import

const LatestNews = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  // ताजा खबर मात्रै filter
  const tajaKhabar = newsData.filter((news) =>
    news.category.includes("ताजा खबर")
  );

  const ButtonGroup = ({ next, previous }) => (
    <div className="flex justify-between items-center">
      <div className="text-xl font-bold text-[#333] relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
        ताजा खबर
      </div>
      <div className="flex gap-x-3">
        <button
          onClick={previous}
          className="w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full hover:bg-gray-300 transition cursor-pointer"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={next}
          className="w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full hover:bg-gray-300 transition cursor-pointer"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col-reverse gap-3 pr-0 lg:pr-2">
      <Carousel
        autoPlay
        arrows={false}
        renderButtonGroupOutside
        customButtonGroup={<ButtonGroup />}
        responsive={responsive}
        infinite
        transitionDuration={500}
      >
        {tajaKhabar.map((item) => (
    <SimpleNewsCard
      key={item.slug}
      item={{ ...item, category: item.category[0] }} // only first category
      type="latest"
    />
  ))}
      </Carousel>
    </div>
  );
};

export default LatestNews;
