import type { MenuItem } from "@/types/menu";
import React from "react";
import { toast } from "react-toastify";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem | null;
};

const OrderModal: React.FC<Props> = ({ isOpen, onClose, item }) => {
  if (!isOpen || !item) return null;
  const handlePlaceOrder = () => {
    toast.success(`✅ Order placed for ${item.name}`);
    onClose();
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">
          Complete Your Order
        </h2>

        <div className="mb-4 text-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-32 h-32 object-cover mx-auto rounded-lg"
          />
          <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
        </div>

        <div className="space-y-3">
          <label className="block">
            <input
              type="radio"
              name="payment"
              className="mr-2"
              defaultChecked
            />
            UPI
          </label>
          <label className="block">
            <input type="radio" name="payment" className="mr-2" />
            Credit / Debit Card
          </label>
          <label className="block">
            <input type="radio" name="payment" className="mr-2" />
            Cash on Delivery
          </label>
        </div>

        <button
          onClick={handlePlaceOrder}
          className="mt-6 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg"
        >
          Pay & Confirm
        </button>
      </div>
    </div>
  );
};

export default OrderModal;
