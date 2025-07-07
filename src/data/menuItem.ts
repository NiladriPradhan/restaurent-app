import Bruschetta from "@/assets/images/Bruschetta.png";
import Antipasto from "@/assets/images/Antipasto.png";
import Calamari from "@/assets/images/Calamari.png";
import Caprese from "@/assets/images/Caprese.png";
import Spaghetti from "@/assets/images/Spaghetti.png";
import Fettuccine from "@/assets/images/Fettuccine.png";
import Penne from "@/assets/images/Penne.png";
import Lasagna from "@/assets/images/Lasagna.png";
import Margherita from "@/assets/images/Margherita.png";
import Pepperoni from "@/assets/images/Pepperoni.png";
import Quattro from "@/assets/images/Quattro.png";
import Prosciutto from "@/assets/images/Prosciutto.png";
import Osso from "@/assets/images/Osso.png";
import Chicken from "@/assets/images/Chicken.png";
import Branzino from "@/assets/images/Branzino.png";
import Eggplant from "@/assets/images/Eggplant.png";
import Tiramisu from "@/assets/images/Tiramisu.png";
import Panna from "@/assets/images/PannaCotta.png";
import Cannoli from "@/assets/images/Cannoli_Siciliani.png";
import Gelato from "@/assets/images/Gelato.png";
import Espresso from "@/assets/images/Espresso.png";
import Cappuccino from "@/assets/images/Cappuccino.png";
import San from "@/assets/images/San.png";
import type { MenuItem } from "@/types/menu";

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: "1",
    name: "Bruschetta Classica",
    description:
      "Toasted bread topped with fresh tomatoes, basil, garlic, and extra virgin olive oil",
    price: 12,
    category: "appetizers",
    image: Bruschetta,
    badges: ["vegetarian"],
    popular: true,
  },
  {
    id: "2",
    name: "Antipasto Platter",
    description:
      "Selection of cured meats, cheeses, olives, and marinated vegetables",
    price: 18,
    category: "appetizers",
    image: Antipasto,
    badges: [],
  },
  {
    id: "3",
    name: "Calamari Fritti",
    description:
      "Crispy fried squid rings served with marinara sauce and lemon",
    price: 15,
    category: "appetizers",
    image: Calamari,
    badges: [],
  },
  {
    id: "4",
    name: "Caprese Salad",
    description:
      "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze",
    price: 14,
    category: "appetizers",
    image: Caprese,
    badges: ["vegetarian"],
  },

  // Pasta
  {
    id: "5",
    name: "Spaghetti Carbonara",
    description:
      "Classic Roman pasta with eggs, pancetta, pecorino cheese, and black pepper",
    price: 22,
    category: "pasta",
    image: Spaghetti,
    badges: [],
    popular: true,
  },
  {
    id: "6",
    name: "Fettuccine Alfredo",
    description:
      "Fresh fettuccine in creamy parmesan sauce with butter and herbs",
    price: 20,
    category: "pasta",
    image: Fettuccine,
    badges: ["vegetarian"],
  },
  {
    id: "7",
    name: "Penne Arrabbiata",
    description:
      "Penne pasta in spicy tomato sauce with garlic, red peppers, and fresh basil",
    price: 18,
    category: "pasta",
    image: Penne,
    badges: ["vegetarian", "spicy"],
  },
  {
    id: "8",
    name: "Lasagna della Casa",
    description:
      "Layers of pasta, meat sauce, ricotta, and mozzarella baked to perfection",
    price: 24,
    category: "pasta",
    image: Lasagna,
    badges: [],
  },

  // Pizza
  {
    id: "9",
    name: "Margherita",
    description:
      "San Marzano tomatoes, fresh mozzarella, basil, and extra virgin olive oil",
    price: 18,
    category: "pizza",
    image: Margherita,
    badges: ["vegetarian"],
    popular: true,
  },
  {
    id: "10",
    name: "Pepperoni",
    description: "Classic pepperoni with mozzarella cheese and tomato sauce",
    price: 20,
    category: "pizza",
    image: Pepperoni,
    badges: [],
  },
  {
    id: "11",
    name: "Quattro Stagioni",
    description:
      "Four seasons pizza with mushrooms, artichokes, ham, and olives",
    price: 24,
    category: "pizza",
    image: Quattro,
    badges: [],
  },
  {
    id: "12",
    name: "Prosciutto e Funghi",
    description: "Prosciutto di Parma, mushrooms, mozzarella, and truffle oil",
    price: 26,
    category: "pizza",
    image: Prosciutto,
    badges: [],
  },

  // Main Courses
  {
    id: "13",
    name: "Osso Buco",
    description: "Braised veal shanks with saffron risotto and gremolata",
    price: 32,
    category: "mains",
    image: Osso,
    badges: [],
    popular: true,
  },
  {
    id: "14",
    name: "Chicken Parmigiana",
    description:
      "Breaded chicken breast with marinara sauce and melted mozzarella",
    price: 26,
    category: "mains",
    image: Chicken,
    badges: [],
  },
  {
    id: "15",
    name: "Branzino al Sale",
    description:
      "Mediterranean sea bass baked in sea salt with herbs and lemon",
    price: 28,
    category: "mains",
    image: Branzino,
    badges: [],
  },
  {
    id: "16",
    name: "Eggplant Parmigiana",
    description:
      "Layers of eggplant, marinara sauce, and cheese baked until golden",
    price: 22,
    category: "mains",
    image: Eggplant,
    badges: ["vegetarian"],
  },

  // Desserts
  {
    id: "17",
    name: "Tiramisu",
    description:
      "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone",
    price: 12,
    category: "desserts",
    image: Tiramisu,
    badges: ["vegetarian"],
    popular: true,
  },
  {
    id: "18",
    name: "Panna Cotta",
    description: "Silky vanilla custard with berry compote",
    price: 10,
    category: "desserts",
    image: Panna,
    badges: ["vegetarian"],
  },
  {
    id: "19",
    name: "Cannoli Siciliani",
    description: "Crispy shells filled with sweet ricotta and chocolate chips",
    price: 11,
    category: "desserts",
    image: Cannoli,
    badges: ["vegetarian"],
  },
  {
    id: "20",
    name: "Gelato Selection",
    description:
      "Three scoops of artisanal gelato - vanilla, chocolate, and pistachio",
    price: 9,
    category: "desserts",
    image: Gelato,
    badges: ["vegetarian"],
  },

  // Beverages
  {
    id: "21",
    name: "Espresso",
    description: "Rich and bold Italian coffee",
    price: 4,
    category: "beverages",
    image: Espresso,
    badges: [],
  },
  {
    id: "22",
    name: "Cappuccino",
    description: "Espresso with steamed milk and foam",
    price: 5,
    category: "beverages",
    image: Cappuccino,
    badges: [],
  },

  {
    id: "24",
    name: "San Pellegrino",
    description: "Sparkling mineral water",
    price: 4,
    category: "beverages",
    image: San,
    badges: [],
  },
];
