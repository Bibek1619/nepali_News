import React from 'react';

const UserList = ({ writersList }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {writersList.map((writer) => (
        <div key={writer.id} className="overflow-hidden border border-gray-200 rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-4">
            <img
              src={writer.avatar}
              alt={writer.name}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="text-lg font-bold">{writer.name}</h3>
              <p className="text-gray-600 text-sm">{writer.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <p className="text-sm text-gray-600">लेखहरू</p>
              <p className="text-xl font-bold text-blue-700">{writer.articles}</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <p className="text-sm text-gray-600">स्थिति</p>
              <p
                className={`text-lg font-bold ${
                  writer.status === 'सक्रिय' ? 'text-green-700' : 'text-red-700'
                }`}
              >
                {writer.status}
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-4">
            सदस्यता मिति: {writer.joined}
          </p>

          <div className="flex space-x-3">
            <button className="flex-1 bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition">
              प्रोफाइल हेर्नुहोस्
            </button>
            <button className="flex-1 bg-gray-200 text-gray-800 rounded-lg py-2 hover:bg-gray-300 transition">
              सम्पादन
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;