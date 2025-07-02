import { Button } from "@/components/ui/button";
import { ArrowUpDown, Eye } from "lucide-react";
import { useState } from "react";

type OrderStatus = "Pending" | "Preparing" | "Delivered" | "Cancelled";

type Order = {
  id: string;
  customer: string;
  total: string;
  status: OrderStatus;
  date: string;
};

const orders: Order[] = [
  {
    id: "ORD001",
    customer: "Ravi Sharma",
    total: "₹1,250",
    status: "Pending",
    date: "2025-07-02",
  },
  {
    id: "ORD002",
    customer: "Anita Singh",
    total: "₹890",
    status: "Delivered",
    date: "2025-07-01",
  },
  {
    id: "ORD003",
    customer: "Kunal Roy",
    total: "₹1,530",
    status: "Preparing",
    date: "2025-06-30",
  },
  {
    id: "ORD004",
    customer: "Meena Patel",
    total: "₹640",
    status: "Cancelled",
    date: "2025-06-29",
  },
];

const statusStyles: Record<OrderStatus, string> = {
  Pending: "bg-yellow-100 text-yellow-800",
  Preparing: "bg-blue-100 text-blue-800",
  Delivered: "bg-green-100 text-green-800",
  Cancelled: "bg-red-100 text-red-800",
};

export default function ManageOrders() {
  const [sortAsc, setSortAsc] = useState<boolean>(true);

  const sortedOrders = [...orders].sort((a, b) =>
    sortAsc
      ? new Date(a.date).getTime() - new Date(b.date).getTime()
      : new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="p-6 font-sans">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Manage Orders</h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow-md">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-700 uppercase tracking-wide text-xs font-semibold">
            <tr>
              <th className="px-5 py-4">Order ID</th>
              <th className="px-5 py-4">Customer</th>
              <th className="px-5 py-4">Total</th>
              <th className="px-5 py-4">
                <div className="flex items-center gap-1">
                  Date
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSortAsc(!sortAsc)}
                    className="h-6 w-6"
                  >
                    <ArrowUpDown className="h-4 w-4" />
                  </Button>
                </div>
              </th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {sortedOrders.map((order, index) => (
              <tr
                key={order.id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-amber-50 transition duration-150`}
              >
                <td className="px-5 py-4 font-medium text-gray-800">
                  {order.id}
                </td>
                <td className="px-5 py-4">{order.customer}</td>
                <td className="px-5 py-4">{order.total}</td>
                <td className="px-5 py-4">{order.date}</td>
                <td className="px-5 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <Button size="sm" variant="outline" className="gap-1">
                    <Eye className="h-4 w-4" />
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
