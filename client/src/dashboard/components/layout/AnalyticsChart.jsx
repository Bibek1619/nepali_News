import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", views: 4000 },
  { name: "Feb", views: 3000 },
  { name: "Mar", views: 5000 },
  { name: "Apr", views: 4500 },
];

const AnalyticsChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">वेबसाइट विश्लेषण</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="views" stroke="#ef4444" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;