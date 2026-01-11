import React, { useState, useEffect } from 'react';
import { FaMoon } from 'react-icons/fa';
import { getNepaliDateAndTime, getNepaliMonthName, getNepaliDayName } from '../../utils/nepaliDate';
import { SlCalender } from "react-icons/sl";

const Header = () => {
  const [nepaliDate, setNepaliDate] = useState('');
  const [nepaliTime, setNepaliTime] = useState('');

  // Update the date and time every second
  useEffect(() => {
    const updateDateTime = () => {
      const { formattedDate, formattedTime } = getNepaliDateAndTime();
      const [year, month, day] = formattedDate.split('-');
      const dayOfWeek = new Date().getDay(); // 0 (Sunday) to 6 (Saturday)

      // Format the date as "YYYY बैशाख DD, दिन"
      const formattedNepaliDate = `${year} ${getNepaliMonthName(parseInt(month))} ${day}, ${getNepaliDayName(dayOfWeek)}`;
      setNepaliDate(formattedNepaliDate);
      setNepaliTime(formattedTime);
    };

    // Update immediately
    updateDateTime();

    // Update every second
    const interval = setInterval(updateDateTime, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      {/* Top Bar with Date and Time */}
      <div className="bg-blue-900 text-white py-2 w-full">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4 text-sm">
          <div className="w-full sm:w-auto text-center sm:text-left">
            {nepaliDate} | स्थानीय समय: {nepaliTime}
            <SlCalender className="inline-block ml-3 " />
          </div>
          <div className="flex items-center justify-center sm:justify-end w-full sm:w-auto mt-2 sm:mt-0 space-x-4">
            <FaMoon className="text-lg cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="bg-white text-[#303D7B] py-4">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold py-1 tracking-wide">
            हाम्रो सूचना
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;