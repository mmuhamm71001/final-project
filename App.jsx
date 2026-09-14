import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import "./App.css";

// The Paradise Nursery landing page itself: company name, tagline, and the
// "Get Started" call-to-action that takes shoppers to the product catalog.
function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <p className="landing-eyebrow">Welcome to</p>
        <h1 className="landing-title">Paradise Nursery</h1>
        <p className="landing-subtitle">
          Where you can find your favourite plants. Discover green,
          air-purifying, fragrant, and low-maintenance plants hand-picked to
          help your home flourish.
        </p>
        <button
          type="button"
          className="get-started-button"
          onClick={() => navigate("/products")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
