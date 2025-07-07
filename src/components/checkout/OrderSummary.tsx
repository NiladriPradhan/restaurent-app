import { Button } from "@/components/ui/button";
import { Plus, Minus, Trash2 } from "lucide-react";

export default function OrderSummary({
  cartItems,
  updateQuantity,
  removeItem
}: {
  cartItems: any[];
  updateQuantity: (id: number, qty: number) => void;
  removeItem: (id: number) => void;
}) {
  return (
    <>
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center space-x-3 pb-4 border-b last:border-b-0">
          <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
          <div className="flex-1">
            <h4 className="font-medium">{item.name}</h4>
            <p className="text-sm text-gray-600">${item.price} each</p>
            {item.specialInstructions && (
              <p className="text-xs text-amber-600">Note: {item.specialInstructions}</p>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <Button size="icon" variant="outline" className="h-8 w-8"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}>
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center">{item.quantity}</span>
            <Button size="icon" variant="outline" className="h-8 w-8"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              <Plus className="h-3 w-3" />
            </Button>
            <Button size="icon" variant="outline" className="h-8 w-8 text-red-500"
              onClick={() => removeItem(item.id)}>
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}
