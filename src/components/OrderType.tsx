import { RadioGroup } from "@radix-ui/react-radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { MapPin, ShoppingCart, Users } from "lucide-react";

const OrderType = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Type</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={orderType}
          onValueChange={setOrderType}
          className="grid grid-cols-3 gap-4"
        >
          <div className="flex items-center space-x-2 border rounded-lg p-4">
            <RadioGroupItem value="delivery" id="delivery" />
            <Label
              htmlFor="delivery"
              className="flex items-center space-x-2 cursor-pointer"
            >
              <MapPin className="h-4 w-4" />
              <span>Delivery</span>
            </Label>
          </div>
          <div className="flex items-center space-x-2 border rounded-lg p-4">
            <RadioGroupItem value="pickup" id="pickup" />
            <Label
              htmlFor="pickup"
              className="flex items-center space-x-2 cursor-pointer"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Pickup</span>
            </Label>
          </div>
          <div className="flex items-center space-x-2 border rounded-lg p-4">
            <RadioGroupItem value="dine-in" id="dine-in" />
            <Label
              htmlFor="dine-in"
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Users className="h-4 w-4" />
              <span>Dine-in</span>
            </Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default OrderType;
