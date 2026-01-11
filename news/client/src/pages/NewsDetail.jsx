import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, User, Share2, MessageSquare, ThumbsUp, ArrowLeft, Eye } from "lucide-react";
import newsData from "../data/newsData";
import Advertisement from "../components/widgets/Advertisement";

const NewsDetail = () => {
  const { slug } = useParams();
  const newsItem = newsData.find((item) => item.slug === slug);

  if (!newsItem) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 text-xl mb-4">समाचार भेटिएन!</div>
        <Link to="/" className="text-blue-500 hover:underline">
          गृहपृष्ठमा फिर्ता जानुहोस्
        </Link>
      </div>
    );
  }

  // Get related and popular news
  const relatedNews = newsData
    .filter(item => item.category === newsItem.category && item.slug !== slug)
    .slice(0, 3);

  const popularNews = newsData
    .filter(item => item.slug !== slug)
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Mobile/Tablet Layout (applies to both small and medium screens) */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Content - Full width on medium screens */}
        <motion.div 
          className="w-full lg:w-8/12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center mb-4">
            <ArrowLeft className="h-5 w-5 mr-2 text-blue-500" />
            <span className="text-blue-500 font-medium">फिर्ता जानुहोस्</span>
          </Link>
          
          {/* Article Header */}
          <div className="mb-5">
            {newsItem?.category && (
              <span className="inline-block bg-red-600 text-white text-sm px-2 py-1 rounded-sm mb-3">
                {newsItem.category}
              </span>
            )}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              {newsItem.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-500 text-sm gap-3">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{newsItem.date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{newsItem.writer}</span>
              </div>
            </div>
          </div>

          {/* News Image */}
          <img 
            src={newsItem.image} 
            alt={newsItem.title} 
            className="w-full rounded-lg mb-5 object-cover max-h-[400px]"
          />

          {/* News Content */}
          <div className="text-gray-800 text-base leading-relaxed space-y-4">
            {newsItem.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Social Sharing and Stats */}
          <div className="flex flex-wrap justify-between items-center border-t border-b border-gray-200 py-3 my-6">
            <button className="flex items-center text-gray-600 text-sm p-2">
              <Share2 className="h-4 w-4 mr-1" />
              <span>साझा गर्नुहोस्</span>
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-600 text-sm">
                <Eye className="h-4 w-4 mr-1" />
                <span>{newsItem.views || 0}</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <MessageSquare className="h-4 w-4 mr-1" />
                <span>{newsItem.comments || 0}</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <ThumbsUp className="h-4 w-4 mr-1" />
                <span>{newsItem.likes || 0}</span>
              </div>
            </div>
          </div>

          {/* Related News - Single column on medium screens */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              सम्बन्धित समाचार
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {relatedNews.map((news, index) => (
                <Link 
                  key={index} 
                  to={`/news/${news.slug}`}
                  className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <h4 className="font-medium text-gray-800">
                    {news.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Sidebar - Hidden on medium screens, shown on large screens */}
        <motion.div 
          className=" lg:block w-full lg:w-4/12"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-gray-50 rounded-lg p-5 mb-6">
          <h2 className="text-[20px] font-bold mb-3 text-gray-700 ">
  लोकप्रिय समाचार
</h2>
<div className="space-y-3">
  {popularNews.map((news, index) => (
    <Link 
      key={index} 
      to={`/news/${news.slug}`} 
      className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-100"

    >
      <div className="flex items-start gap-3">
        <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-medium">
          {index + 1}
        </span>
        <span className="text-gray-800 font-normal text-[20px] ">
          {news.title}
        </span>
      </div>
    </Link>
  ))}
</div>
          </div>
          
          <Advertisement type="sidebar" />
        </motion.div>
      </div>
    </div>
  );
};

export default NewsDetail;