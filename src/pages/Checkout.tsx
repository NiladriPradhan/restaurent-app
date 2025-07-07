"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  ShoppingCart,
  MapPin,
  Clock,
  Calendar,
  Tag,
} from "lucide-react";
import OrderTypeSelector from "@/components/checkout/OrderTypeSelector";
import OrderSummary from "@/components/checkout/OrderSummary";
import CouponSection from "@/components/checkout/CouponSection";
import OrderConfirmation from "@/components/checkout/OrderConfirmation";
import PaymentSection from "@/components/checkout/PaymentSection";


type Coupon = {
  code: string;
  discount: number;
};


export default function Checkout() {
  const [orderType, setOrderType] = useState("delivery");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);

  
  // Sample cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Margherita Pizza",
      price: 18,
      quantity: 2,
      image: "/placeholder.svg?height=80&width=80",
      specialInstructions: "",
    },
    {
      id: 2,
      name: "Spaghetti Carbonara",
      price: 22,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
      specialInstructions: "Extra cheese",
    },
    {
      id: 3,
      name: "Tiramisu",
      price: 12,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
      specialInstructions: "",
    },
  ]);

  // User information
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    specialInstructions: "",
  });

  // Reservation details
  const [reservationInfo, setReservationInfo] = useState({
    date: "",
    time: "",
    guests: "2",
    specialRequests: "",
  });

  // Payment information
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  });

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const taxRate = 0.08;
  const tax = subtotal * taxRate;
  const deliveryFee = orderType === "delivery" ? 5 : 0;
  const discount = appliedCoupon ? subtotal * 0.1 : 0; // 10% discount
  const total = subtotal + tax + deliveryFee - discount;

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "welcome10") {
      setAppliedCoupon({ code: "WELCOME10", discount: 10 });
      setCouponCode("");
    }
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return <OrderConfirmation total={total} orderType={orderType} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Order Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Type Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <OrderTypeSelector
                    orderType={orderType}
                    setOrderType={setOrderType}
                  />
                </CardContent>
              </Card>

              {/* Reservation Details (for dine-in) */}
              {orderType === "dine-in" && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5" />
                      <span>Table Reservation</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Date</Label>
                        <Input
                          id="date"
                          type="date"
                          value={reservationInfo.date}
                          onChange={(e) =>
                            setReservationInfo({
                              ...reservationInfo,
                              date: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Time</Label>
                        <Select
                          value={reservationInfo.time}
                          onValueChange={(value) =>
                            setReservationInfo({
                              ...reservationInfo,
                              time: value,
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="6:00 PM">6:00 PM</SelectItem>
                            <SelectItem value="6:30 PM">6:30 PM</SelectItem>
                            <SelectItem value="7:00 PM">7:00 PM</SelectItem>
                            <SelectItem value="7:30 PM">7:30 PM</SelectItem>
                            <SelectItem value="8:00 PM">8:00 PM</SelectItem>
                            <SelectItem value="8:30 PM">8:30 PM</SelectItem>
                            <SelectItem value="9:00 PM">9:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="guests">Number of Guests</Label>
                      <Select
                        value={reservationInfo.guests}
                        onValueChange={(value) =>
                          setReservationInfo({
                            ...reservationInfo,
                            guests: value,
                          })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                          <SelectItem value="3">3 Guests</SelectItem>
                          <SelectItem value="4">4 Guests</SelectItem>
                          <SelectItem value="5">5 Guests</SelectItem>
                          <SelectItem value="6">6+ Guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="specialRequests">Special Requests</Label>
                      <Textarea
                        id="specialRequests"
                        placeholder="Any special seating preferences or requests..."
                        value={reservationInfo.specialRequests}
                        onChange={(e) =>
                          setReservationInfo({
                            ...reservationInfo,
                            specialRequests: e.target.value,
                          })
                        }
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Customer Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={userInfo.firstName}
                        onChange={(e) =>
                          setUserInfo({
                            ...userInfo,
                            firstName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={userInfo.lastName}
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, lastName: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={userInfo.email}
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, email: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={userInfo.phone}
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Address (for delivery orders) */}
              {orderType === "delivery" && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5" />
                      <span>Delivery Address</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="address">Street Address</Label>
                      <Input
                        id="address"
                        value={userInfo.address}
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, address: e.target.value })
                        }
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={userInfo.city}
                          onChange={(e) =>
                            setUserInfo({ ...userInfo, city: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input
                          id="zipCode"
                          value={userInfo.zipCode}
                          onChange={(e) =>
                            setUserInfo({
                              ...userInfo,
                              zipCode: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="deliveryInstructions">
                        Delivery Instructions
                      </Label>
                      <Textarea
                        id="deliveryInstructions"
                        placeholder="e.g., Leave at door, Ring doorbell, etc."
                        value={userInfo.specialInstructions}
                        onChange={(e) =>
                          setUserInfo({
                            ...userInfo,
                            specialInstructions: e.target.value,
                          })
                        }
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Payment Method */}
              <PaymentSection
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
                paymentInfo={paymentInfo}
                setPaymentInfo={setPaymentInfo}
              />
            </div>

            {/* Right Column - Order Summary */}
            <div className="space-y-6">
              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <ShoppingCart className="h-5 w-5" />
                    <span>Order Summary</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <OrderSummary
                    cartItems={cartItems}
                    updateQuantity={updateQuantity}
                    removeItem={removeItem}
                  />
                </CardContent>
              </Card>

              {/* Coupon Code */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Tag className="h-5 w-5" />
                    <span>Promo Code</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CouponSection
                    applyCoupon={applyCoupon}
                    appliedCoupon={appliedCoupon}
                    setCouponCode={setCouponCode}
                    couponCode={couponCode}
                  />
                </CardContent>
              </Card>

              {/* Price Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Total</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  {orderType === "delivery" && (
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                  )}
                  {appliedCoupon && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({appliedCoupon.discount}%)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Place Order Button */}
              <Button
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg"
                onClick={handlePlaceOrder}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  `Place Order - $${total.toFixed(2)}`
                )}
              </Button>

              {/* Estimated Time */}
              <div className="text-center text-sm text-gray-600">
                <Clock className="h-4 w-4 inline mr-1" />
                Estimated{" "}
                {orderType === "delivery"
                  ? "delivery"
                  : orderType === "pickup"
                  ? "pickup"
                  : "seating"}{" "}
                time:{" "}
                {orderType === "delivery"
                  ? "45-60 min"
                  : orderType === "pickup"
                  ? "20-30 min"
                  : "Upon arrival"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
