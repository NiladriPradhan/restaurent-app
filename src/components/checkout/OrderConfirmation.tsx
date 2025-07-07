import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OrderConfirmation({ total, orderType }: {
  total: number;
  orderType: string;
}) {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your order. We've received your request and will process it shortly.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="font-semibold mb-2">Order Details:</h3>
            <p><strong>Order ID:</strong> #BV-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            <p><strong>Total:</strong> ${total.toFixed(2)}</p>
            <p><strong>Estimated Time:</strong> {orderType === "delivery" ? "45-60 min" : orderType === "pickup" ? "20-30 min" : "Table reserved"}</p>
          </div>
          <Button onClick={() => (window.location.href = "/")} className="bg-amber-600 hover:bg-amber-700">
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
