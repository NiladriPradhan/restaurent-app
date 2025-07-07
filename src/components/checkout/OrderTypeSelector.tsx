import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { MapPin, ShoppingCart, Users } from "lucide-react";

export default function OrderTypeSelector({ orderType, setOrderType }: {
  orderType: string;
  setOrderType: (value: string) => void;
}) {
  return (
    <RadioGroup value={orderType} onValueChange={setOrderType} className="grid grid-cols-3 gap-4">
      {[
        { value: "delivery", icon: MapPin, label: "Delivery" },
        { value: "pickup", icon: ShoppingCart, label: "Pickup" },
        { value: "dine-in", icon: Users, label: "Dine-in" },
      ].map(({ value, icon: Icon, label }) => (
        <div key={value} className="flex items-center space-x-2 border rounded-lg p-4">
          <RadioGroupItem value={value} id={value} />
          <Label htmlFor={value} className="flex items-center space-x-2 cursor-pointer">
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
