import { useState, ChangeEvent } from "react";
import { Pencil, Trash, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

type FoodItem = {
  id: number;
  name: string;
  category: string;
  price: number;
};

const initialFoods: FoodItem[] = [
  { id: 1, name: "Margherita Pizza", category: "Pizza", price: 499 },
  { id: 2, name: "Pasta Alfredo", category: "Pasta", price: 399 },
  { id: 3, name: "Garlic Bread", category: "Starter", price: 199 },
];

export default function ManageFood() {
  const [foods, setFoods] = useState<FoodItem[]>(initialFoods);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [newItem, setNewItem] = useState<Omit<FoodItem, "id" | "price"> & { price: string }>({
    name: "",
    category: "",
    price: "",
  });

  const handleDelete = (id: number) => {
    setFoods((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAdd = () => {
    const { name, category, price } = newItem;
    if (!name || !category || !price) return;

    setFoods((prev) => [
      ...prev,
      { id: Date.now(), name, category, price: parseFloat(price) },
    ]);

    setNewItem({ name: "", category: "", price: "" });
    setDialogOpen(false);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: "name" | "category" | "price"
  ) => {
    setNewItem((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <section className="p-6 font-sans">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Manage Food Items</h2>
        <Button
          onClick={() => setDialogOpen(true)}
          className="bg-amber-600 text-white hover:bg-amber-700"
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Add New Item
        </Button>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow-md">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-700 font-semibold uppercase text-xs tracking-wide">
            <tr>
              <th className="px-5 py-4">Name</th>
              <th className="px-5 py-4">Category</th>
              <th className="px-5 py-4">Price</th>
              <th className="px-5 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((item, index) => (
              <tr
                key={item.id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-amber-50 transition duration-150`}
              >
                <td className="px-5 py-3 font-medium text-gray-900">{item.name}</td>
                <td className="px-5 py-3 text-gray-700">{item.category}</td>
                <td className="px-5 py-3 text-gray-800 font-semibold">
                  ₹{item.price.toFixed(2)}
                </td>
                <td className="px-5 py-3 flex items-center gap-2">
                  <Button size="sm" variant="outline">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(item.id)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Food Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="bg-white border-none">
          <DialogHeader>
            <DialogTitle className="text-lg">Add New Food Item</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-2">
            <div className="grid gap-2">
              <Label>Name</Label>
              <Input
                value={newItem.name}
                onChange={(e) => handleChange(e, "name")}
                placeholder="Enter food name"
                className="focus:ring-blue-200 focus:border-none focus:outline-none focus:ring-offset-0"
              />
            </div>
            <div className="grid gap-2">
              <Label>Category</Label>
              <Input
                value={newItem.category}
                onChange={(e) => handleChange(e, "category")}
                placeholder="e.g., Pizza, Pasta"
                className="focus:ring-blue-200 focus:border-none focus:outline-none focus:ring-offset-0"
              />
            </div>
            <div className="grid gap-2">
              <Label>Price (₹)</Label>
              <Input
                type="number"
                value={newItem.price}
                onChange={(e) => handleChange(e, "price")}
                placeholder="Price in INR"
                className="focus:ring-blue-200 focus:border-none focus:outline-none focus:ring-offset-0"
              />
            </div>
          </div>
          <Button
            onClick={handleAdd}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white"
          >
            Add Item
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
