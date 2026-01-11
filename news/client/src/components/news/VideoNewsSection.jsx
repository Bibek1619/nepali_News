import { motion } from "framer-motion";
import Title from "../Title";
import { Play } from "lucide-react";
import { useState } from "react";

const VideoNewsSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  
  // Video news data
  const videoNews = [
    {
      id: 1,
      title: "सगरमाथामा नयाँ हिमताल पत्ता लाग्यो",
      thumbnail: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnQlMjBldmVyZXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      duration: "5:32",
      date: "२०८० बैशाख ६",
      videoId: "video1"
    },
    {
      id: 2,
      title: "राष्ट्रिय फुटबल टिमका लागि नयाँ प्रशिक्षक नियुक्त",
      thumbnail: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGwlMjBjb2FjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      duration: "3:45",
      date: "२०८० बैशाख ५",
      videoId: "video2"
    },
    {
      id: 3,
      title: "साहित्य महोत्सवमा युवा लेखकहरूको सहभागिता बढ्दो",
      thumbnail: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGl0ZXJhdHVyZSUyMGZlc3RpdmFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      duration: "4:21",
      date: "२०८० बैशाख ४",
      videoId: "video3"
    },
    {
      id: 4,
      title: "नयाँ प्रविधिले किसानहरूलाई सहयोग गर्दै",
      thumbnail: "https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhcm1lciUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      duration: "6:10",
      date: "२०८० बैशाख ३",
      videoId: "video4"
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div 
      className="w-full py-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Title title="भिडियो" />
      </motion.div>
      
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Featured video */}
        <motion.div 
          className="lg:col-span-2 relative rounded-xl overflow-hidden group"
          variants={itemVariants}
        >
          <div className="aspect-video w-full relative">
            <img 
              src={videoNews[activeVideo].thumbnail} 
              alt={videoNews[activeVideo].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
            
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/40 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Play className="h-8 w-8 text-white fill-white" />
              </motion.div>
            </div>
            
            {/* Duration badge */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
              {videoNews[activeVideo].duration}
            </div>
          </div>
          
          {/* Video title */}
          <div className="p-4 bg-white">
            <h3 className="text-xl font-bold mb-2">{videoNews[activeVideo].title}</h3>
            <p className="text-gray-600 text-sm">{videoNews[activeVideo].date}</p>
          </div>
        </motion.div>
        
        {/* Video list */}
        <motion.div 
          className="flex flex-col space-y-4"
          variants={itemVariants}
        >
          <h3 className="text-lg font-bold">अन्य भिडियोहरू</h3>
          
          <div className="space-y-4">
            {videoNews.map((video, index) => (
              <motion.div 
                key={video.id}
                className={`flex space-x-3 p-2 rounded-lg cursor-pointer transition-colors ${
                  activeVideo === index ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
                onClick={() => setActiveVideo(index)}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Thumbnail */}
                <div className="relative w-24 h-16 rounded-md overflow-hidden flex-shrink-0">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 right-1 bg-black/70 text-white px-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                
                {/* Title and date */}
                <div className="flex flex-col">
                  <h4 className="text-sm font-medium line-clamp-2">{video.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{video.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <a 
            href="#" 
            className="text-news-blue font-medium hover:text-news-darkBlue transition-colors mt-2 flex items-center"
          >
            सबै भिडियोहरू हेर्नुहोस्
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VideoNewsSection;
