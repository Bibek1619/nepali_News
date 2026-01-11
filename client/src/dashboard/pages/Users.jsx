import React, { useState } from 'react';
import UserList from '../components/layout/UserList';
import { Link } from 'react-router-dom';

const Users = () => {
  // Sample writers data
  const writersList = [
    {
      id: 1,
      name: "रवि लामिछाने",
      email: "ravi@example.com",
      articles: 32,
      joined: "२०७९ मंसिर",
      status: "सक्रिय",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      name: "सरिता थापा",
      email: "sarita@example.com",
      articles: 28,
      joined: "२०७९ मंसिर",
      status: "सक्रिय",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
      id: 3,
      name: "अनिल शर्मा",
      email: "anil@example.com",
      articles: 15,
      joined: "२०८० बैशाख",
      status: "सक्रिय",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    {
      id: 4,
      name: "सुमन तामाङ",
      email: "suman@example.com",
      articles: 22,
      joined: "२०७९ चैत्र",
      status: "सक्रिय",
      avatar: "https://i.pravatar.cc/150?img=7"
    },
    {
      id: 5,
      name: "प्रकाश पौडेल",
      email: "prakash@example.com",
      articles: 45,
      joined: "२०७८ भदौ",
      status: "सक्रिय",
      avatar: "https://i.pravatar.cc/150?img=4"
    },
    {
      id: 6,
      name: "रमेश बस्नेत",
      email: "ramesh@example.com",
      articles: 19,
      joined: "२०७९ असार",
      status: "निष्क्रिय",
      avatar: "https://i.pravatar.cc/150?img=6"
    }
  ];

  // State for search and filter
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("सबै");

  // Filtered writers list
  const filteredWriters = writersList.filter((writer) => {
    const matchesName = writer.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "सबै" || writer.status === statusFilter;
    return matchesName && matchesStatus;
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">लेखक व्यवस्थापन</h1>
        <Link to="/dashboard/writer/add" className="bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition shadow-sm">
          नयाँ लेखक थप्नुहोस्
        </Link>
      </div>

      {/* Search and Filter */}
      <div className="p-4 mb-6 bg-gray-100 rounded-lg">
        <div className="flex flex-wrap gap-4">
          {/* Search by Name */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="लेखकको नाम खोज्नुहोस्..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Filter by Status */}
          <div className="w-full md:w-auto">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="सबै">सबै स्थिति</option>
              <option value="सक्रिय">सक्रिय</option>
              <option value="निष्क्रिय">निष्क्रिय</option>
            </select>
          </div>
        </div>
      </div>

      {/* User List */}
      <UserList writersList={filteredWriters} />

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            &laquo;
          </button>
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            1
          </button>
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            2
          </button>
          <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            &raquo;
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Users;