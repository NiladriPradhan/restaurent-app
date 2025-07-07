import type { MenuItem } from "@/types/menu";

type OrderModalProps = {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem | null;
};

const OrderModal = ({ isOpen, onClose, item }: OrderModalProps) => {
  if (!isOpen || !item) return null; // Prevent render if closed or item is null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black">
          ×
        </button>
        <img src={item.image} alt={item.name} className="rounded-lg mb-4" />
        <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
        <p className="text-gray-600 mb-4">${item.price.toFixed(2)}</p>
        <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default OrderModal;
