// src/admin/ManageUsers.tsx
import { useState } from "react";
import { Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "customer";
  joined: string;
}

const initialUsers: User[] = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
    joined: "2023-09-10",
  },
  {
    id: 2,
    name: "Ravi Kumar",
    email: "ravi@gmail.com",
    role: "customer",
    joined: "2024-02-14",
  },
  {
    id: 3,
    name: "Nikita Roy",
    email: "nikita@outlook.com",
    role: "customer",
    joined: "2025-01-05",
  },
];

const roleColor = {
  admin: "bg-purple-100 text-purple-800",
  customer: "bg-green-100 text-green-800",
};

export default function ManageUsers() {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const handleDelete = (id: number) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <section className="p-6 font-sans">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Manage Users</h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-gray-200">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 font-semibold text-xs uppercase tracking-wide">
            <tr>
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3">Email</th>
              <th className="px-5 py-3">Role</th>
              <th className="px-5 py-3">Joined</th>
              <th className="px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`transition duration-150 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-amber-50`}
              >
                <td className="px-5 py-4 font-medium text-gray-800">
                  {user.name}
                </td>
                <td className="px-5 py-4 text-gray-700">{user.email}</td>
                <td className="px-5 py-4">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${roleColor[user.role]}`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-5 py-4 text-gray-600">{user.joined}</td>
                <td className="px-5 py-4 flex items-center gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(user.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
