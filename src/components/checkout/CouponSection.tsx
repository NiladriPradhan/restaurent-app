import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CouponSection({
  couponCode,
  setCouponCode,
  applyCoupon,
  appliedCoupon
}: {
  couponCode: string;
  setCouponCode: (val: string) => void;
  applyCoupon: () => void;
  appliedCoupon: any;
}) {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Input
          placeholder="Enter coupon code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <Button variant="outline" onClick={applyCoupon}>Apply</Button>
      </div>
      {appliedCoupon && (
        <div className="mt-2">
          <Badge className="bg-green-100 text-green-800">
            {appliedCoupon.code} - {appliedCoupon.discount}% off applied!
          </Badge>
        </div>
      )}
    </div>
  );
}
