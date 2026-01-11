import { useState } from "react";
import toast from "react-hot-toast";

const Settings = () => {
  const [portalName, setPortalName] = useState("हाम्रो सूचना");

  const handleSave = (e) => {
    e.preventDefault();
    toast.success("सेटिङहरू सफलतापूर्वक बचत गरियो!");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">सेटिङहरू</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">सामान्य सेटिङहरू</h2>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              पोर्टलको नाम
            </label>
            <input
              type="text"
              value={portalName}
              onChange={(e) => setPortalName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
          >
            बचत गर्नुहोस्
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;