import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Header.css";

function Header() {
  const { totalItems } = useCart();

  return (
    <header className="site-header">
      <Link to="/" className="brand">
        <span className="brand-icon" aria-hidden="true">
          🌿
        </span>
        <span className="brand-name">Paradise Nursery</span>
      </Link>

      <nav className="site-nav">
        <Link to="/about">About Us</Link>
        <Link to="/products">Plants</Link>
        <Link to="/cart" className="cart-link">
          <span aria-hidden="true">🛒</span>
          <span className="cart-count">{totalItems}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
