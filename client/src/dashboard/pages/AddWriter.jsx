import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddWriter = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    bio: '',
    role: 'writer',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('कृपया सबै आवश्यक फिल्डहरू भर्नुहोस्।');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('पासवर्ड र पुष्टि पासवर्ड मेल खाँदैन।');
      return;
    }

    // Mock form submission - in a real app, this would call an API
    setSuccess(true);

    // Reset form after success
    setTimeout(() => {
      navigate('/dashboard/users');
    }, 3000);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">नयाँ लेखक थप्नुहोस्</h1>

      <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-sm">
        {success ? (
          <div className="text-center py-8">
            <div className="text-green-500 text-5xl mb-4">✓</div>
            <h2 className="text-2xl font-bold mb-2">लेखक सफलतापूर्वक थपियो!</h2>
            <p className="text-gray-600 mb-6">
              नयाँ लेखक थपिएको छ र उनीहरूलाई लगइन निर्देशनहरू सहित एउटा इमेल पठाइएको छ।
            </p>
            <button
              onClick={() => navigate('/dashboard/users')}
              className="bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition shadow-sm"
            >
              सबै लेखकहरू हेर्नुहोस्
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6" role="alert">
                <span className="block sm:inline">{error}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  नाम <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  इमेल <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  पासवर्ड <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  पासवर्ड पुष्टि <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  फोन नम्बर
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  भूमिका
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                >
                  <option value="writer">लेखक</option>
                  <option value="editor">सम्पादक</option>
                  <option value="admin">प्रशासक</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                परिचय
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={4}
                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              ></textarea>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => navigate('/dashboard/users')}
                className="bg-gray-200 text-gray-800 rounded-lg py-2 px-4 hover:bg-gray-300 transition"
              >
                रद्द गर्नुहोस्
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition shadow-sm"
              >
                लेखक थप्नुहोस्
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddWriter;
