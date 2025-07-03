
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  Home,
  LayoutDashboard,
  ClipboardList,
  Utensils,
  Users,
} from "lucide-react";
import clsx from "clsx";

interface NavLink {
  name: string;
  path: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const navLinks:NavLink[] = [
  { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { name: "Orders", path: "/admin/orders", icon: ClipboardList },
  { name: "Manage Food", path: "/admin/food", icon: Utensils },
  { name: "Users", path: "/admin/users", icon: Users },
];

export default function AdminLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4 hidden md:block">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
        </div>

        <nav className="space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
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

        <div className="mt-8 border-t pt-4">
          <Link
            to="/"
            className="flex items-center text-sm text-amber-700 hover:text-amber-800"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6">
        <Outlet />
      </div>
    </div>
  );
}
