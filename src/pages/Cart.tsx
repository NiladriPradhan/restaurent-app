import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { Button } from "@/components/ui/button";
import { removeFromCart } from "@/features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-40 h-40 object-cover rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>

                  <Button className="bg-red-400 text-white" onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove
                  </Button>
                </div>
              </div>
              <p className="font-semibold text-amber-600">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          {/* Total Summary */}
          <div className="flex justify-between mt-6 pt-6 border-t font-semibold text-lg">
            <span>Total Items: {cart.totalQuantity}</span>
            <span>Total: ${cart.totalAmount.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
