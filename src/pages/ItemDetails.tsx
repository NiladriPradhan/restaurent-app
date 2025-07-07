import { useState } from "react";
import { menuItems } from "@/data/menuItem";
import { addToCart, removeFromCart } from "@/features/cart/cartSlice";
import type { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OrderModal from "@/components/OrderModal";

const ItemDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const item = menuItems.find((item) => item.id.toString() === id);

  if (!item) {
    return <p className="text-center mt-10 text-gray-600">Item not found.</p>;
  }

  const isInCart = cartItems.some((cartItem) => cartItem.id.toString() === id);

  const handleToggleCart = () => {
    if (isInCart) {
      dispatch(removeFromCart(item.id));
    } else {
      dispatch(addToCart({ ...item, quantity: 1 }));
    }
  };

  const handleOrderNow = () => {
    setShowModal(true);
  };

  const confirmOrder = () => {
    setShowModal(false);
    alert("✅ Order placed successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
      <p className="text-gray-600 mb-4">{item.description}</p>
      <p className="text-xl font-semibold text-amber-700 mb-6">
        ${item.price.toFixed(2)}
      </p>

      <div className="flex gap-4">
        <button
          onClick={handleToggleCart}
          className={`${
            isInCart
              ? "bg-red-600 hover:bg-red-700"
              : "bg-amber-600 hover:bg-amber-700"
          } text-white px-6 py-2 rounded`}
        >
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </button>

        <button
          onClick={handleOrderNow}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Order Now
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <OrderModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          item={item}
        />
      )}
    </div>
  );
};

export default ItemDetails;
