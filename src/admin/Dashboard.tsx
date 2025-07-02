import { DollarSign, ShoppingCart, Users, Utensils } from "lucide-react";
import AdminCard from "./components/AdminCard";

export default function Dashboard() {
  // Fake stats (replace with real data from backend/API)
  const stats = [
    {
      title: "Total Revenue",
      value: "₹42,000",
      icon: DollarSign,
    },
    {
      title: "Total Orders",
      value: "128",
      icon: ShoppingCart,
    },
    {
      title: "Food Items",
      value: "25",
      icon: Utensils,
    },
    {
      title: "Registered Users",
      value: "320",
      icon: Users,
    },
  ];

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Admin Dashboard</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <AdminCard
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}
