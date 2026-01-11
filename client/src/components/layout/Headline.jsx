import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Headline = () => {
  const [isPaused, setIsPaused] = useState(false);

  const headlineNews = [
    { title: 'मुम्बईले जित्यो आइ पी एल २०२४', link: '/sports/news-1' },
    { title: 'नेपालको कृषि क्षेत्रमा नयाँ प्रविधिको प्रयोग बढ्दो', link: '/economy/news-2' },
    { title: 'काठमाडौंमा आयोजित अन्तर्राष्ट्रिय सम्मेलनमा १२ देशका प्रतिनिधिहरू सहभागी', link: '/national/news-3' },
    { title: 'सरकारले ल्यायो नयाँ शैक्षिक नीति, विद्यार्थीहरूलाई डिजिटल माध्यममा जोड्ने लक्ष्य', link: '/education/news-4' }
  ];

  // Function to pause the marquee when hovering over the title
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <motion.div
      className='bg-white shadow-md flex flex-wrap'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className='flex md:w-[170px] w-full bg-news-lightGray relative'>
        <div className='md:pl-8 pl-4 w-full py-3 flex justify-start items-center gap-x-2'>
          <motion.div
            className="w-3 h-3 bg-red-600 rounded-full" // Updated to Tailwind's bg-red-500
            animate={{
              scale: [1.5, 1.2, 1], // Animating the dot to grow and shrink
            }}
            transition={{
              repeat: Infinity, // Repeats indefinitely
              duration: 1.5, // The duration for each cycle of animation
            }}
          />
          <h2 className='text-news-darkGray font-semibold text-lg'>शीर्ष समाचार</h2>
        </div>
        {/* Triangle shape after the Headlines tag */}
        <div className="hidden md:block absolute right-0 top-0 h-full w-5 overflow-hidden">
          <div className="absolute bg-news-lightGray h-full w-8 transform rotate-12 origin-top-left"></div>
        </div>
      </div>

      <div className='flex md:w-[calc(100%-170px)] w-full'>
        <div className='flex w-full justify-start items-center'>
          <Marquee
            speed={50}
            pauseOnHover={true}
            gradient={false}
          >
            {headlineNews.map((headline, i) => (
              <Link
                key={i}
                className='py-3 px-8 block font-semibold hover:text-news-red transition-colors mr-12'
                to={headline.link}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {headline.title}
              </Link>
            ))}
          </Marquee>
        </div>
      </div>
    </motion.div>
  );
};

export default Headline;
