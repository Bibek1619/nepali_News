import React from "react";
import Title from "../Title";
import SimpleDetailsNewCard from "./items/SimpleDetailsNewCard";
import NewsCard from "./items/NewsCard";

const InternationalNewsRow = () => {
  // Defining the international news directly within this component
  const newsItems = [
    {
      title: "संयुक्त राष्ट्र संघले जलवायु परिवर्तनबारे नयाँ रिपोर्ट जारी गर्यो",
      category: "अन्तर्राष्ट्रिय",
      date: "२०८९ माघ",
      writer: "सिमा थापा",
      image:
        "https://www.shutterstock.com/image-photo/international-united-nations-globe-600w-1740040054.jpg",
      description: "यो समाचार विश्वभरिका जलवायु परिवर्तन सम्बन्धी नयाँ तथ्यांकहरू समेटेको छ।",
      link: "#",
    },
    {
      title: "अमेरिकामा नयाँ राष्ट्रपति चयन प्रक्रिया शुरू",
      category: "अन्तर्राष्ट्रिय",
      date: "२०८९ चैत",
      writer: "राहुल शर्मा",
      image:
        "https://www.shutterstock.com/image-photo/american-flag-white-house-600w-1127452124.jpg",
      link: "#",
    },
    {
      title: "यूरोपीय संघले अफ्रिका देशसँग व्यापार सम्झौतामा हस्ताक्षर गर्यो",
      category: "अन्तर्राष्ट्रिय",
      date: "२०८९ असार",
      writer: "सोनम खरेल",
      image:
        "https://www.shutterstock.com/image-photo/european-union-sign-international-relations-600w-1268967357.jpg",
      link: "#",
    },
    {
      title: "चीन र भारतबीच सीमा विवाद समाधानको लागि वार्ता सुरु",
      category: "अन्तर्राष्ट्रिय",
      date: "२०८९ भाद्र",
      writer: "सारिका गिरी",
      image:
        "https://www.shutterstock.com/image-photo/china-india-border-600w-99830578.jpg",
      link: "#",
    },
    {
      title: "संयुक्त राष्ट्र संघले अफगानिस्तानमा शान्ति प्रयास तिव्र पार्ने घोषणा गर्यो",
      category: "अन्तर्राष्ट्रिय",
      date: "२०८९ असोज",
      writer: "अर्चना पोखरेल",
      image:
        "https://www.shutterstock.com/image-photo/united-nations-global-peace-600w-2111921297.jpg",
      link: "#",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-[14px] pr-2">
      <Title title="अन्तर्राष्ट्रिय समाचार" />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
        {/* Big News Item */}
        <SimpleDetailsNewCard news={newsItems[0]} type="details-news" />

        {/* Smaller News Cards */}
        <div className="grid grid-cols-1 gap-y-1">
          {newsItems.slice(1).map((news, index) => (
            <NewsCard key={index} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternationalNewsRow;
