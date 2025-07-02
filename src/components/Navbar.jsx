// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-primary">🍽️ Resto</Link>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
        <Link to="/menu" className="text-gray-700 hover:text-primary">Menu</Link>
        <Link to="/cart" className="text-gray-700 hover:text-primary">Cart</Link>
        <Link to="/checkout" className="text-gray-700 hover:text-primary">Checkout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
