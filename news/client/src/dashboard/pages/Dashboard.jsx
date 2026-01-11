import React from 'react';
import AnalyticsChart from "../components/layout/AnalyticsChart";

const Dashboard = () => {
  // Sample statistics data
  const stats = [
    { title: "कुल समाचारहरू", value: "543", icon: "📰", color: "bg-blue-100 text-blue-800" },
    { title: "आजको समाचारहरू", value: "12", icon: "🔔", color: "bg-green-100 text-green-800" },
    { title: "कुल लेखकहरू", value: "24", icon: "✍️", color: "bg-purple-100 text-purple-800" },
    { title: "कुल पाठकहरू", value: "10.5K", icon: "👥", color: "bg-amber-100 text-amber-800" },
  ];

  // Recent news list
  const recentNews = [
    { title: "नेपालले एसिया कपमा ऐतिहासिक जित निकाल्यो", category: "खेलकुद", date: "१० मिनेट अघि" },
    { title: "काठमाडौंमा विद्युतीय सवारी साधनको प्रयोग बढ्दो", category: "प्रविधि", date: "३० मिनेट अघि" },
    { title: "नेपाल सरकारले नयाँ शैक्षिक नीति ल्यायो", category: "शिक्षा", date: "१ घण्टा अघि" },
    { title: "उद्योग मन्त्रालयले नयाँ औद्योगिक नीति घोषणा गर्यो", category: "अर्थ", date: "२ घण्टा अघि" },
    { title: "काठमाडौंमा नयाँ फिल्म फेस्टिवल हुने", category: "मनोरञ्जन", date: "३ घण्टा अघि" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">हाम्रो सूचना एडमिन ड्यासबोर्ड</h1>
      
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-6 ${stat.color} border border-gray-200 rounded-lg shadow-sm`}
          >
            <div className="flex items-center">
              <span className="text-3xl mr-4">{stat.icon}</span>
              <div>
                <h3 className="text-lg font-medium">{stat.title}</h3>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Recent News and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent News */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4">हालैका समाचारहरू</h2>
          <div className="space-y-4">
            {recentNews.map((news, index) => (
              <div key={index} className="flex items-center border-b border-gray-100 pb-3">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full mr-4">
                  <span className="text-lg">📰</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{news.title}</h3>
                  <div className="flex text-sm text-gray-500 mt-1">
                    <span className="mr-3">{news.category}</span>
                    <span>{news.date}</span>
                  </div>
                </div>
                <button className="text-blue-500 hover:text-blue-600">
                  सम्पादन
                </button>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-center text-blue-600 hover:text-blue-800">
            सबै समाचारहरू हेर्नुहोस्
          </button>
        </div>
        
        {/* Quick Actions */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4">द्रुत कार्यहरू</h2>
          <div className="space-y-4">
            <button className="w-full bg-blue-600 text-white rounded-lg py-3 px-4 hover:bg-blue-700 transition shadow-sm">
              नयाँ समाचार थप्नुहोस्
            </button>
            <button className="w-full bg-green-600 text-white rounded-lg py-3 px-4 hover:bg-green-700 transition shadow-sm">
              नयाँ लेखक थप्नुहोस्
            </button>
            <button className="w-full bg-purple-600 text-white rounded-lg py-3 px-4 hover:bg-purple-700 transition shadow-sm">
              क्याटेगोरीहरू व्यवस्थापन गर्नुहोस्
            </button>
            <button className="w-full bg-amber-600 text-white rounded-lg py-3 px-4 hover:bg-amber-700 transition shadow-sm">
              समाचार पूर्वावलोकन गर्नुहोस्
            </button>
          </div>
        </div>
      </div>

      {/* Analytics Chart */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">विश्लेषण</h2>
        <AnalyticsChart />
      </div>
    </div>
  );
};

export default Dashboard;