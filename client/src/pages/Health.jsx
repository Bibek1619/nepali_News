import React from 'react';
import CategoryPageTemplate from "../components/layout/CategoryPageTemplate";

const Health = () => {
  // Health news data
  const healthNews = [
    {
      title: "नेपालमा स्वास्थ्य बीमा प्रणाली लागू, सबैको पहुँचमा",
      category: "स्वास्थ्य",
      date: "२०८० बैशाख १५",
      writer: "सविना तामाङ",
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixid=MXxwYXJrX3NjZWR8MHx8Y2F0ZWdvcnl8ZW58MHx8fHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      link: "/health/health-insurance",
      description:
        "नेपाल सरकारले स्वास्थ्य बीमा प्रणाली लागू गरेको छ, जसले सबै नागरिकको स्वास्थ्य सेवा पहुँच सुनिश्चित गर्ने लक्ष्य राखेको छ।",
    },
    {
      title: "नयाँ स्वास्थ्य नीति लागू, स्वास्थ्य सेवा सुलभ बनाइने",
      category: "स्वास्थ्य",
      date: "२०८० बैशाख १०",
      writer: "रमेश थापा",
      image:
        "https://images.unsplash.com/photo-1531497614383-85ec30ac5d71?ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      link: "/health/new-health-policy",
      description:
        "सरकारले नयाँ स्वास्थ्य नीति लागू गरेको छ जसले स्वास्थ्य सेवा सबैको पहुँचमा ल्याउने लक्ष्य राखेको छ।",
    },
    {
      title: "मानसिक स्वास्थ्यका लागि जनचेतना अभियान सुरु",
      category: "स्वास्थ्य",
      date: "२०८० बैशाख ५",
      writer: "कृष्ण पोखरेल",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoJTIwaW5zdXJhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      link: "/health/mental-health-awareness",
      description:
        "मानसिक स्वास्थ्यका लागि जनचेतना अभियान सुरु गरिएको छ, जसले मानसिक समस्याबारे खुलेर कुरा गर्ने वातावरण बनाउन मद्दत पुर्याउने छ।",
    },
    {
      title: "दुर्गम क्षेत्रमा स्वास्थ्य शिविर आयोजना",
      category: "स्वास्थ्य",
      date: "२०८० बैशाख १",
      writer: "सुष्मा शर्मा",
      image:
        "https://images.unsplash.com/photo-1512678080530-7760d81faba6?ixid=MXxwYXJrX3NjZWR8MHx8c3BpcnR8ZW58MHx8fHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      link: "/health/health-camp-in-remote-areas",
      description:
        "दुर्गम क्षेत्रमा स्वास्थ्य शिविर आयोजना गरिएको छ। यसले स्वास्थ्य सेवाको पहुँच नभएका नागरिकहरूलाई सेवा प्रदान गर्ने लक्ष्य राखेको छ।",
    },
    {
      title: "स्वस्थ जीवनशैलीका टिप्स: दिनचर्या सुधार गर्ने उपाय",
      category: "स्वास्थ्य",
      date: "२०८० चैत २८",
      writer: "माया श्रेष्ठ",
      image:
        "https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixid=MXxwYXJrX3NjZWR8MHx8c3BpcnR8ZW58MHx8fHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      link: "/health/healthy-lifestyle-tips",
      description:
        "स्वस्थ जीवनशैलीका लागि नियमित व्यायाम, राम्रो आहार र मानसिक शान्ति महत्त्वपूर्ण हुन्छ।",
    },
    // You can add more articles as needed
  ];

  return (
    <CategoryPageTemplate 
      title="स्वास्थ्य" 
      description="स्वास्थ्य सम्बन्धी ताजा समाचारहरू" 
      newsItems={healthNews} 
    />
  );
};

export default Health;
