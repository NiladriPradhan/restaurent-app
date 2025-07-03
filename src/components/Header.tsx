
"use client";

import { useState } from "react";
import { Menu, Phone, MapPin, Clock, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useClerk,
  useUser,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { signOut } = useClerk();
  const { user } = useUser();

  const isAdmin = user?.publicMetadata?.role === "admin";

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Cart", href: "/cart" },
    { name: "Checkout", href: "/checkout" },
  ];

  if (isAdmin) {
    navigationItems.push({ name: "Admin", href: "/admin" });
  }

  return (
    <header className="w-full bg-white shadow-sm border-b">
      {/* Top Bar */}
      <div className="bg-amber-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm text-amber-800">
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Food Street, City, ST 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Open: 11AM - 10PM</span>
              </div>
            </div>
            <div className="ml-auto">
              <Button
                size="sm"
                className="bg-amber-600 hover:bg-amber-700 text-white"
              >
                Order Online
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Bella Vista</h1>
              <p className="text-sm text-gray-600">
                Authentic Italian Cuisine
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-amber-600 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <Button className="bg-amber-600 text-white">Sign In</Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            
          </div>

          {/* Mobile Menu Button */}
          <Button
            onClick={() => setIsOpen(true)}
            variant="ghost"
            size="icon"
            className="lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Custom Sidebar Drawer */}
      {isOpen && (
        <aside className="fixed top-0 right-0 z-50 w-[300px] sm:w-[400px] h-full bg-white shadow-lg p-6 flex flex-col gap-6 transition-transform">
          {/* Close button */}
          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Logo */}
          <div className="flex items-center space-x-2 border-b pb-4">
            <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">B</span>
            </div>
            <div>
              <h2 className="font-bold text-gray-900">Bella Vista</h2>
              <p className="text-sm text-gray-600">
                Authentic Italian Cuisine
              </p>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="flex flex-col gap-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-amber-600 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth Area */}
          <div className="pt-4 border-t space-y-3">
            <SignedOut>
              <SignInButton mode="modal">
                <Button className="w-full bg-amber-600 text-white">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center gap-3">
                <UserButton afterSignOutUrl="/" />
                <Button
                  onClick={() => {
                    signOut();
                    setIsOpen(false);
                  }}
                  className="bg-red-600 text-white hover:bg-red-700"
                >
                  Logout
                </Button>
              </div>
              
            </SignedIn>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 pt-4 border-t text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>123 Food Street, City, ST 12345</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Open: 11AM - 10PM</span>
            </div>
          </div>
        </aside>
      )}
    </header>
  );
}
