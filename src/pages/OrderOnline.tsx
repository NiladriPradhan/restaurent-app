import { useState } from "react";
import { menuItems } from "@/data/menuItem";
import OrderModal from "@/components/OrderModal"; // Import modal

const OrderOnline = () => {
  const [selectedItem, setSelectedItem] = useState<null | typeof menuItems[0]>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item: typeof menuItems[0]) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Order Online</h1>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
            >
              <img
                src={item.image}
                alt={item.name}
                className="rounded-xl h-48 w-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">${item.price.toFixed(2)}</p>
              <button
                onClick={() => openModal(item)}
                className="mt-auto bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={closeModal} item={selectedItem} />
    </div>
  );
};

export default OrderOnline;
