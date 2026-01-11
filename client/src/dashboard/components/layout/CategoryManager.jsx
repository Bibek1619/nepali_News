import { useState } from "react";
import toast from "react-hot-toast";

const CategoryManager = () => {
  const [categories, setCategories] = useState(["राजनीति", "अर्थ", "खेलकुद"]);
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
      toast.success("श्रेणी थपियो!");
    } else {
      toast.error("श्रेणी पहिले नै छ वा खाली छ!");
    }
  };

  const handleDeleteCategory = (category) => {
    setCategories(categories.filter((cat) => cat !== category));
    toast.success("श्रेणी हटाइयो!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">श्रेणी व्यवस्थापन</h2>
      <form onSubmit={handleAddCategory} className="mb-4 flex gap-2">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="नयाँ श्रेणी"
          className="flex-1 px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          थप्नुहोस्
        </button>
      </form>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li
            key={category}
            className="flex justify-between items-center p-2 bg-gray-100 rounded-lg"
          >
            <span>{category}</span>
            <button
              onClick={() => handleDeleteCategory(category)}
              className="text-red-500 hover:text-red-700"
            >
              हटाउनुहोस्
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryManager;