"use client";

import { useEffect, useMemo, useState } from "react";
import "@/styles/menu.css";
import { addToCart, removeFromCart } from "@/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Leaf, Flame, Star, X } from "lucide-react";

import { menuItems } from "@/data/menuItem";

import type { MenuItem } from "@/types/menu";
import type { Categories } from "@/types/categories";
import { useNavigate } from "react-router-dom";

const categories: Categories[] = [
  { id: "all", name: "All Items" },
  { id: "appetizers", name: "Appetizers" },
  { id: "pasta", name: "Pasta" },
  { id: "pizza", name: "Pizza" },
  { id: "mains", name: "Main Courses" },
  { id: "desserts", name: "Desserts" },
  { id: "beverages", name: "Beverages" },
];

export default function Menu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [debounce, setDebounce] = useState(searchTerm);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const isItemInCart = (id: string) => {
    return cartItems.some((cartItem) => cartItem.id === id);
  };

  const handleCartToggle = (item: MenuItem): void => {
    if (isItemInCart(item.id)) {
      dispatch(removeFromCart(item.id));
    } else {
      dispatch(addToCart({ ...item, quantity: 1 }));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(debounce.toLowerCase()) ||
        item.description.toLowerCase().includes(debounce.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, debounce]);

  const isSearching = searchTerm !== debounce;

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case "vegetarian":
        return <Leaf className="h-3 w-3" />;
      case "spicy":
        return <Flame className="h-3 w-3" />;
      default:
        return null;
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "vegetarian":
        return "bg-green-100 text-green-800";
      case "spicy":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <motion.section
        className="relative py-20 text-white overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* 🌟 Rich Amber Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-700 to-yellow-500" />

        {/* 🌫 Optional Pattern Overlay (adjust opacity as needed) */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-repeat" />

        {/* ✨ Slight dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center z-10">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Menu
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover our authentic Italian dishes, crafted with traditional
            recipes and the finest ingredients.
          </motion.p>
        </div>
      </motion.section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 sticky top-0 z-10 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96 flex items-center bg-white rounded-md shadow-sm">
              {/* Search Icon */}
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />

              {/* Input Field */}
              <Input
                type="text"
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-8 bg-white text-sm focus:ring-orange-300 focus:border-blue-300 block w-full rounded-md"
              />

              {/* Clear Button */}

              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    activeCategory === category.id ? "default" : "outline"
                  }
                  onClick={() => setActiveCategory(category.id)}
                  className={
                    activeCategory === category.id
                      ? "bg-amber-600 hover:bg-amber-700 text-white"
                      : "border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent"
                  }
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Menu Items */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {isSearching ? (
            <p className="text-gray-400 text-base animate-pulse">
              Searching...
            </p>
          ) : filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border-0"
                >
                  {/* Image Section */}
                  <div className="relative group">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    {item.popular && (
                      <Badge className="absolute top-3 left-3 bg-amber-600 text-white text-xs px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        Popular
                      </Badge>
                    )}
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-base font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <span className="text-base font-bold text-amber-600">
                        ${item.price}
                      </span>
                    </div>

                    <p className="text-sm text-gray-500 mb-3 leading-snug">
                      {item.description}
                    </p>

                    {/* Badges */}
                    {item.badges.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.badges.map((badge, index) => (
                          <Badge
                            key={index}
                            className={`${getBadgeColor(
                              badge
                            )} flex items-center gap-1 text-xs rounded-full px-2 py-0.5`}
                          >
                            {getBadgeIcon(badge)}
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2">
                      <Button
                        onClick={() =>
                          handleCartToggle({
                            id: item.id,
                            name: item.name,
                            image: item.image,
                            price: item.price,
                            description: "",
                            category: "",
                            badges: [],
                          })
                        }
                        className={`flex-1 ${
                          isItemInCart(item.id)
                            ? "bg-red-600 hover:bg-red-700"
                            : "bg-amber-600 hover:bg-amber-700"
                        } text-white rounded-full text-xs h-8`}
                      >
                        {isItemInCart(item.id) ? "Remove" : "Add to cart"}
                      </Button>

                      <Button
                        variant="outline"
                        onClick={() => navigate("/menu/" + item.id)}
                        className="bg-amber-600 hover:bg-amber-700 text-white rounded-full text-xs h-8"
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No items found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the authentic taste of Italy. Make a reservation or order
            online for pickup and delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8"
            >
              Make Reservation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent px-8"
            >
              Order Online
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <span className="text-xl font-bold">Bella Vista</span>
            </div>
            <p className="text-gray-400 mb-4">
              Authentic Italian Cuisine Since 1985
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Bella Vista Restaurant. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
