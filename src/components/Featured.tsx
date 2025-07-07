import { Badge } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Margherita from "@/assets/featured/Margherita.png";
import Margherita2 from "@/assets/featured/Margherita2.png";
import Osso from "@/assets/featured/Osso.png";
import Osso2 from "@/assets/featured/osso2.png";
import Tiramisu from "@/assets/featured/Tiramisu.png";
import Tiramisu2 from "@/assets/featured/Tiramisu2.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const featuredDishes = [
  {
    name: "Margherita Pizza",
    description: "Fresh mozzarella, basil, and our signature tomato sauce",
    price: "$18",
    image: Margherita,
    hoverImage: Margherita2,
    badge: "Popular",
  },
  {
    name: "Osso Buco",
    description: "Braised veal shanks with saffron risotto",
    price: "$32",
    image: Osso,
    hoverImage: Osso2,
    badge: "Chef's Special",
  },
  {
    name: "Tiramisu",
    description: "Classic Italian dessert with espresso and mascarpone",
    price: "$12",
    image: Tiramisu,
    hoverImage: Tiramisu2,
    badge: "Signature",
  },
];


const Featured = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Featured Dishes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular dishes, crafted with love and the finest
            ingredients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredDishes.map((dish, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              // variants={cardVariants}
            >
              <Card className="border-none rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white overflow-hidden">
                <div className="relative group h-40 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover absolute inset-0 z-10 transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    src={dish.hoverImage || dish.image}
                    alt={`${dish.name} hover`}
                    className="w-full h-full object-cover absolute inset-0 z-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  {dish.badge && (
                    <Badge className="absolute top-3 left-3 bg-amber-600 text-white text-xs px-2 py-1 rounded-full shadow-sm z-20">
                      {dish.badge}
                    </Badge>
                  )}
                </div>

                {/* Content Section */}
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-base font-semibold text-gray-800 line-clamp-1">
                      {dish.name}
                    </h3>
                    <span className="text-base font-bold text-amber-600">
                      {dish.price}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {dish.description}
                  </p>

                  <Button onClick={() => navigate("/order")} className="w-full bg-amber-600 hover:bg-amber-700 text-white text-sm rounded-full">
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Button
            onClick={() => navigate("/menu")}
            variant="outline"
            size="lg"
            className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent cursor-pointer"
          >
            View Full Menu
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Featured;
