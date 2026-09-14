import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
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
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </div>
  );
}

export default App;
