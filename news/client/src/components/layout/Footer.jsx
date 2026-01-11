import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { Toaster, toast } from 'react-hot-toast';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() === '') {
      toast.error('कृपया वैध इमेल प्रविष्ट गर्नुहोस्!');
      return;
    }
    toast.success('सदस्यता सफलतापूर्वक गरियो!');
    setEmail('');
  };

  return (
    <footer className="bg-blue-900 text-white py-6">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-bold text-[#ffff]">हाम्रो सूचना</h3>
            <p className="text-gray-400 text-sm">
              हाम्रो सूचना नेपालको अग्रणी समाचार पोर्टल हो।
            </p>
            <div className="flex space-x-3 mt-2">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube].map((Icon, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-[#c80000] transition">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#ffff]">द्रुत लिंकहरू</h3>
            <ul className="text-sm space-y-2">
              {['राजनीति', 'अर्थ', 'खेलकुद', 'प्रविधि', 'स्वास्थ्य'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-[#ffff] transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#ffffff]">सम्पर्क</h3>
            <div className="text-sm space-y-2">
              <div className="flex items-center space-x-2">
                <MdLocationOn className="text-[#ffff]" size={18} />
                <p className="text-gray-400">काठमाडौं, नेपाल</p>
              </div>
              <div className="flex items-center space-x-2">
                <MdPhone className="text-[#ffff]" size={18} />
                <p className="text-gray-400">+९७७ ९८०१२३४५६७</p>
              </div>
              <div className="flex items-center space-x-2">
                <MdEmail className="text-[##ffff]" size={18} />
                <p className="text-gray-400">info@hamrosuchana.com</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#ffff]">समाचार पत्रिका</h3>
            <form className="mt-2 space-y-2" onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="तपाईंको इमेल"
                className="w-full px-3 py-1.5 rounded bg-[#bdbfd6] text-[#040305] text-sm placeholder-white focus:ring-2 focus:ring-[#ffff]"
              />
              <button
                type="submit"
                className="w-full bg-[#45ad5d] text-white py-1.5 rounded hover:bg-[#797373] transition cursor-pointer"
              >
                सदस्यता लिनुहोस्
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-4 pt-3 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} हाम्रो सूचना | <a href="#" className="text-[#ffff] hover:underline">गोपनीयता नीति</a> | <a href="#" className="text-[#ffff] hover:underline">सेवा सर्तहरू</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;