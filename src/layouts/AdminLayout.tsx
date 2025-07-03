
// import { Outlet, Link, useLocation } from "react-router-dom";
// import {
//   Home,
//   LayoutDashboard,
//   ClipboardList,
//   Utensils,
//   Users,
// } from "lucide-react";
// import clsx from "clsx";

// interface NavLink {
//   name: string;
//   path: string;
//   icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
// }

// const navLinks:NavLink[] = [
//   { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
//   { name: "Orders", path: "/admin/orders", icon: ClipboardList },
//   { name: "Manage Food", path: "/admin/food", icon: Utensils },
//   { name: "Users", path: "/admin/users", icon: Users },
// ];

// export default function AdminLayout() {
//   const location = useLocation();

//   return (
//     <div className="min-h-screen flex bg-gray-50 font-sans">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-md p-4 hidden md:block">
//         <div className="flex items-center space-x-2 mb-8">
//           <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
//             <span className="text-white font-bold text-lg">A</span>
//           </div>
//           <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
//         </div>

//         <nav className="space-y-2">
//           {navLinks.map((link) => {
//             const Icon = link.icon;
//             const isActive = location.pathname === link.path;

//             return (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={clsx(
//                   "flex items-center px-4 py-2 rounded-lg font-medium text-sm transition",
//                   isActive
//                     ? "bg-amber-100 text-amber-700"
//                     : "text-gray-700 hover:bg-gray-100"
//                 )}
//               >
//                 <Icon className="w-4 h-4 mr-2" />
//                 {link.name}
//               </Link>
//             );
//           })}
//         </nav>

//         <div className="mt-8 border-t pt-4">
//           <Link
//             to="/"
//             className="flex items-center text-sm text-amber-700 hover:text-amber-800"
//           >
//             <Home className="w-4 h-4 mr-2" />
//             Back to Home
//           </Link>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 p-4 md:p-6">
//         <Outlet />
//       </div>
//     </div>
//   );
// }


"use client";

import { Outlet, Link, useLocation } from "react-router-dom";
import {
  Home,
  LayoutDashboard,
  ClipboardList,
  Utensils,
  Users,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

interface NavLink {
  name: string;
  path: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const navLinks: NavLink[] = [
  { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { name: "Orders", path: "/admin/orders", icon: ClipboardList },
  { name: "Manage Food", path: "/admin/food", icon: Utensils },
  { name: "Users", path: "/admin/users", icon: Users },
];

export default function AdminLayout() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 font-sans relative">
      {/* Mobile Navbar */}
      <div className="flex items-center justify-between p-4 bg-white shadow-md md:hidden">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-amber-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <h1 className="text-lg font-bold text-gray-800">Admin Panel</h1>
        </div>
        <button
          onClick={toggleSidebar}
          className="text-gray-700 focus:outline-none"
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={clsx(
          "bg-white shadow-md w-64 p-4 z-20 transition-transform duration-300",
          "fixed top-0 left-0 h-full md:relative md:translate-x-0 md:block",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeSidebar}
                className={clsx(
                  "flex items-center px-4 py-2 rounded-lg font-medium text-sm transition",
                  isActive
                    ? "bg-amber-100 text-amber-700"
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <Icon className="w-4 h-4 mr-2" />
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Back to Home */}
        <div className="mt-8 border-t pt-4">
          <Link
            to="/"
            onClick={closeSidebar}
            className="flex items-center text-sm text-amber-700 hover:text-amber-800"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </aside>

      {/* Backdrop Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-10 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 mt-16 md:mt-0">
        <Outlet />
      </div>
    </div>
  );
}
