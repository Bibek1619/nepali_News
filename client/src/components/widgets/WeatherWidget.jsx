import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Cloud, CloudRain, CloudSnow, Wind, Droplets, CloudLightning } from "lucide-react";

const WeatherWidget = () => {
  const [city, setCity] = useState("काठमाडौं");

  const weatherData = {
    current: {
      temperature: 28,
      condition: "सफा",
      icon: "sun",
      humidity: 65,
      wind: 12,
    },
    forecast: [
      { day: "आज", tempHigh: 28, tempLow: 18, icon: "sun" },
      { day: "भोलि", tempHigh: 27, tempLow: 17, icon: "cloud" },
      { day: "परसि", tempHigh: 25, tempLow: 16, icon: "cloud-rain" },
      { day: "निपर्सि", tempHigh: 26, tempLow: 17, icon: "cloud" },
    ],
  };

  const renderWeatherIcon = (icon) => {
    switch (icon) {
      case "sun":
        return <Sun className="h-8 w-8 text-yellow-500" />;
      case "cloud":
        return <Cloud className="h-8 w-8 text-gray-400" />;
      case "cloud-rain":
        return <CloudRain className="h-8 w-8 text-blue-400" />;
      case "cloud-snow":
        return <CloudSnow className="h-8 w-8 text-blue-200" />;
      case "cloud-lightning":
        return <CloudLightning className="h-8 w-8 text-purple-500" />;
      default:
        return <Sun className="h-8 w-8 text-yellow-500" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="overflow-hidden border-none shadow-md rounded-md">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4">
          <div className="flex justify-between items-center">
            <span>मौसम पूर्वानुमान</span>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="text-sm bg-blue-600 rounded px-2 py-1 backdrop-blur-sm"
            >
              <option value="काठमाडौं">काठमाडौं</option>
              <option value="पोखरा">पोखरा</option>
              <option value="धरान">धरान</option>
              <option value="नेपालगंज">नेपालगंज</option>
            </select>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              {renderWeatherIcon(weatherData.current.icon)}
              <div>
                <p className="text-3xl font-bold">{weatherData.current.temperature}°C</p>
                <p className="text-gray-500">{weatherData.current.condition}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end text-gray-500 mb-1">
                <Droplets className="h-4 w-4 mr-1" />
                <span className="text-sm">{weatherData.current.humidity}%</span>
              </div>
              <div className="flex items-center justify-end text-gray-500">
                <Wind className="h-4 w-4 mr-1" />
                <span className="text-sm">{weatherData.current.wind} km/h</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 pt-4 border-t border-gray-100">
            {weatherData.forecast.map((day, index) => (
              <div
                key={index}
                className="text-center p-2 border rounded-md hover:shadow-lg transition-shadow"
              >
                <p className="text-xs text-gray-500 mb-1">{day.day}</p>
                {renderWeatherIcon(day.icon)}
                <div className="mt-1 text-xs flex justify-center space-x-1">
                  <span className="font-medium">{day.tempHigh}°</span>
                  <span className="text-gray-400">{day.tempLow}°</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherWidget;
