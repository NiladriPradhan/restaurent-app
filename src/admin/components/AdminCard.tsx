
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { SVGProps } from "react";


type AdminCardProps = {
  title: string;
  value: string | number;
  icon?: React.ComponentType<SVGProps<SVGSVGElement>>; // ✅ Correct SVG icon type
  className?: string;
};

const AdminCard: React.FC<AdminCardProps> = ({
  title,
  value,
  icon: Icon,
  className,
}) => {
  return (
    <Card
      className={cn(
        "bg-white hover:shadow-xl transition-shadow duration-300 rounded-2xl border border-gray-200",
        className
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-1">
          <CardTitle className="text-sm font-semibold text-gray-500 tracking-wide uppercase">
            {title}
          </CardTitle>
        </div>
        {Icon && (
          <div className="p-2 rounded-full bg-amber-100">
            <Icon className="h-5 w-5 text-amber-600" />
          </div>
        )}
      </CardHeader>

      <CardContent>
        <div className="text-3xl font-bold text-gray-900">{value}</div>
      </CardContent>
    </Card>
  );
};

export default AdminCard;
