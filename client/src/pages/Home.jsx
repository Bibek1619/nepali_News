import React from "react";
import TrendingTopics from "../components/news/TrendingTopics";
import Headline from "../components/layout/Headline";
import LatestNews from "../components/news/LatestNews";

import VideoNewsSection from "../components/news/VideoNewsSection";
import { Link } from "react-router-dom";
import PopularNews from "../components/news/PopularNews";
import NationalNewsSection from "../components/news/NationalNewsSection";
import DetailsNewsRow from "../components/news/DetailsNewsRow";

import DetailsNewsCol from "../components/news/DetailsNewsCol";
import WeatherWidget from "../components/widgets/WeatherWidget";
import PollWidget from "../components/widgets/PollWidget";
import BusinessNewsSection from "../components/news/BusinessNewsSection";
import TechnologyNewsSection from "../components/news/TechnologyNewsSection";
import Advertisement from "../components/widgets/Advertisement";
import ProvinceNewsSection from "../components/news/ProvinceNewsSection";
import InternationalNewsRow from "../components/news/InternationalNewsRow";


const Home = () => {
  return (
    <div className="bg-white">
      {/* Trending Topics and Headline */}
      <TrendingTopics />
      <Headline />

      {/* Main Content Section */}
      <div className="bg-slate-100 px-4 md:px-8 py-8">
        <div className="flex flex-wrap">
          {/* Latest News and National News */}
          <div className="w-full lg:w-6/12">
            <LatestNews />
          </div>
          <NationalNewsSection />
        </div>
        <PopularNews type="" />

        <div className="w-full px-4 md:px-2 py-8">
          <div className="flex flex-wrap">
            {/* Sports News Details */}
            <div className="w-full lg:w-8/12">
              <DetailsNewsRow
                category="खेलकुद"
                type="details-news"
             
              />
              <ProvinceNewsSection />
              <img
                className="w-full h-[150px] mt-2 mb-5 object-fill"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzdjVb1ct7yt630_lVLbcceq4Saf3oedJoQ&s"
                alt="ad"
              />
            </div>

            {/* Right Sidebar with News and Widgets */}
            <div className="w-full lg:w-4/12">
              <DetailsNewsCol />

              <div className="mt-8">
                <WeatherWidget />
              </div>
              <div className="mt-8">
                <PollWidget
                  question="के नेपालमा चाँडै निर्वाचन हुनुपर्छ?"
                  options={["हो", "होइन", "थाहा छैन"]}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Business and Technology News */}
        <div className="flex flex-wrap gap-6 mt-8">
          <div className="w-full lg:w-6/12">
            <BusinessNewsSection />
          </div>
          <div className="w-full lg:w-5/12">
            <TechnologyNewsSection />
          </div>
        </div>

        {/* Advertisement Section */}
        <div className="w-full my-8">
          <Advertisement type="banner" />
        </div>

        {/* International News Section */}
        <div className="w-full lg:w-8/12">
          <InternationalNewsRow
           // Passing news data to the component
          />
        </div>

        {/* Video News Section */}
        <div className="flex flex-wrap space-x-8">
          <div className="w-full lg:w-8/12">
            <VideoNewsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
