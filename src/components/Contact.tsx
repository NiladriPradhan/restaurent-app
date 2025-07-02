import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <>
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Visit Us Today</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-amber-400" />
                  <span>123 Food Street, City, ST 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-amber-400" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-amber-400" />
                  <span>info@bellavista.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-amber-400" />
                  <div>
                    <p>Mon-Thu: 11AM - 10PM</p>
                    <p>Fri-Sat: 11AM - 11PM</p>
                    <p>Sunday: 12PM - 9PM</p>
                  </div>
                </div>
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                Get Directions
              </Button>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Make a Reservation</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
                  />
                  <select className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white">
                    <option>6:00 PM</option>
                    <option>6:30 PM</option>
                    <option>7:00 PM</option>
                    <option>7:30 PM</option>
                    <option>8:00 PM</option>
                  </select>
                </div>
                <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white">
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5+ Guests</option>
                </select>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3">
                  Book Table
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    </>
  );
};

export default Contact;
