import React from "react";
import Title from "../Title";
import SimpleDetailsNewCard from "./items/SimpleDetailsNewCard";
import NewsCard from "./items/NewsCard";

const DetailsNewsRow = () => {
  const newsItems = [
    {
      title: "२६ खर्बमा उक्लियो सार्वजनिक ऋण",
      category: "अर्थव्यवस्था",
      date: "२०८९ माघ",
      writer: "किरण गौतम",
      image: "https://www.shutterstock.com/image-vector/docktor-profesor-character-vector-600w-1676446882.jpg",
      description: "यो समाचार नेपालमा हालै घटेको महत्वपूर्ण घटनासँग सम्बन्धित छयो समाचार नेपालमा हालै घटेको महत्वपूर्ण घटनासँग सम्बन्धित छयो समाचार नेपालमा हालै घटेको महत्वपूर्ण घटनासँग सम्बन्धित छयो समाचार नेपालमा हालै घटेको महत्वपूर्ण घटनासँग सम्बन्धित छ।",
      link: "#",
      slug: "26-kharab-public-loan",
    },
    {
      title: "नेपालमा नयाँ प्रविधिको विकास",
      category: "प्रविधि",
      date: "२०८९ चैत",
      writer: "सिता अधिकारी",
      image: "https://www.shutterstock.com/image-illustration/fake-news-danger-sign-black-260nw-565412857.jpg",
      link: "#",
      slug: "nepal-new-tech-development",
    },
    {
      title: "शिक्षा क्षेत्रमा सुधारको आवश्यकता",
      category: "शिक्षा",
      date: "२०८९ असार",
      writer: "राजेश शर्मा",
      image: "https://www.21kschool.com/np/wp-content/uploads/sites/29/2021/01/rptgtpxd-1396254731.jpg",
      link: "#",
      slug: "education-reform-needed",
    },
    {
      title: "नेपालमा पर्यटनको सम्भावना",
      category: "पर्यटन",
      date: "२०८९ भाद्र",
      writer: "पूनम राई",
      image: "https://barbadostoday.bb/wp-content/uploads/2023/06/Our-modern-education-system-is-failing-us-scaled-1.jpeg",
      link: "#",
      slug: "tourism-potential-nepal",
    },
    {
      title: "नेपालका नयाँ कृषि नीति",
      category: "कृषि",
      date: "२०८९ असोज",
      writer: "निरंजन भट्टराई",
      image: "https://worldbank.scene7.com/is/image/worldbankprod/Digital-Pathways-AI-Education-Day-780x439?wid=780&hei=439&qlt=85,0&resMode=sharp",
      link: "#",
      slug: "new-agriculture-policy-nepal",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-[14px] pr-2">
      <Title title={"स्वतन्त्र समाचार"} />
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

export default DetailsNewsRow;
