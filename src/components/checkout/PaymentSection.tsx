import { CreditCard, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

// ✅ Define proper prop types
interface PaymentSectionProps {
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
  paymentInfo: {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    cardName: string;
  };
  setPaymentInfo: (info: any) => void;
}

const PaymentSection = ({
  paymentMethod,
  setPaymentMethod,
  paymentInfo,
  setPaymentInfo,
}: PaymentSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <CreditCard className="h-5 w-5" />
          <span>Payment Method</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
          {[
            { value: "card", label: "Credit/Debit Card", icon: CreditCard },
            { value: "cod", label: "Cash on Delivery", icon: Wallet },
            { value: "upi", label: "UPI/Digital Wallet", icon: Wallet },
          ].map(({ value, label, icon: Icon }) => (
            <div key={value} className="flex items-center space-x-2 border rounded-lg p-4">
              <RadioGroupItem value={value} id={value} />
              <Label htmlFor={value} className="flex items-center space-x-2 cursor-pointer">
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>

        {paymentMethod === "card" && (
          <div className="mt-6 space-y-4">
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={paymentInfo.cardNumber}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input
                  id="expiryDate"
                  placeholder="MM/YY"
                  value={paymentInfo.expiryDate}
                  onChange={(e) => setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  placeholder="123"
                  value={paymentInfo.cvv}
                  onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="cardName">Name on Card</Label>
              <Input
                id="cardName"
                value={paymentInfo.cardName}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, cardName: e.target.value })}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PaymentSection;
