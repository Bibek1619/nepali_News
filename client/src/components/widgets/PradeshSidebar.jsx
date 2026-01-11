"use client"
import { Link } from "react-router-dom"

const PradeshSidebar = ({ activePradesh, onPradeshChange }) => {
  const pradeshList = [
    { id: 0, name: "सबै प्रदेश", link: "/pradesh/all" },
    { id: 1, name: "प्रदेश १", link: "/pradesh/1" },
    { id: 2, name: "मधेश प्रदेश", link: "/pradesh/2" },
    { id: 3, name: "बागमती प्रदेश", link: "/pradesh/3" },
    { id: 4, name: "गण्डकी प्रदेश", link: "/pradesh/4" },
    { id: 5, name: "लुम्बिनी प्रदेश", link: "/pradesh/5" },
    { id: 6, name: "कर्णाली प्रदेश", link: "/pradesh/6" },
    { id: 7, name: "सुदूरपश्चिम प्रदेश", link: "/pradesh/7" },
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-8">
      <h3 className="text-xl font-bold mb-4 text-[#c80000]">प्रदेश चयन गर्नुहोस्</h3>
      <ul className="space-y-2">
        {pradeshList.map((pradesh) => (
          <li key={pradesh.id} className="border-b border-gray-100 last:border-b-0 py-2">
            <Link
              to={pradesh.link}
              onClick={() => onPradeshChange && onPradeshChange(pradesh)}
              className={`block transition-all duration-200 hover:text-[#c80000] hover:pl-2 ${
                activePradesh === pradesh.id
                  ? "text-[#c80000] font-semibold pl-2 border-l-4 border-[#c80000]"
                  : "text-gray-700"
              }`}
            >
              {pradesh.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PradeshSidebar
