import Title from "../Title"
import NewsCard from "./items/NewsCard"
import { Link } from "react-router-dom"

const TechnologyNewsSection = () => {
  // Technology news data
  const newsItems = [
    {
      title: "नेपालमा ५जी सेवा सुरु हुँदै",
      category: "प्रविधि",
      date: "२०८० बैशाख ५",
      writer: "सुरज पौडेल",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8NWd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      link: "/technology/5g-service",
    },
    {
      title: "नेपाली युवाद्वारा विकसित नयाँ मोबाइल एप",
      category: "प्रविधि",
      date: "२०८० बैशाख ६",
      writer: "अनिल खड्का",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      link: "/technology/nepali-mobile-app",
    },
    {
      title: "कृत्रिम बुद्धिमत्ता (AI) को प्रयोग बढ्दो",
      category: "प्रविधि",
      date: "२०८० बैशाख ७",
      writer: "सुमन श्रेष्ठ",
      image:
        "https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWklMjBhcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      link: "/technology/ai-usage",
    },
    {
      title: "साइबर सुरक्षा: नेपालमा बढ्दो चुनौती",
      category: "प्रविधि",
      date: "२०८० बैशाख ८",
      writer: "प्रकाश गिरी",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXIlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      link: "/technology/cyber-security",
    },
  ]

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4">
        <Title title="प्रविधि" />
        <div className="grid grid-cols-1 gap-4">
          {newsItems.map((news, index) => (
            <NewsCard key={index} news={news} />
          ))}
        </div>
        <div className="flex justify-end">
          <Link to="/technology" className="text-blue-600 font-bold hover:text-blue-800 transition">
            थप हेर्नुहोस्
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TechnologyNewsSection

