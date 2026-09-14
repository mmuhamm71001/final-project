import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const {
    items,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalCost,
  } = useCart();

  if (items.length === 0) {
    return (
      <main className="cart-page">
        <h1>Your Cart</h1>
        <p>Your cart is empty.</p>
        <Link to="/products" className="continue-shopping">
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <h1>Your Cart</h1>

      <ul className="cart-items">
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <div
              className="cart-item-thumb"
              style={{ backgroundColor: item.color }}
            >
              <span aria-hidden="true">{item.emoji}</span>
            </div>

            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)} each</p>
            </div>

            <div className="quantity-controls">
              <button
                type="button"
                onClick={() => decreaseQuantity(item.id)}
                aria-label={`Decrease quantity of ${item.name}`}
              >
                &minus;
              </button>
              <span>{item.quantity}</span>
              <button
                type="button"
                onClick={() => increaseQuantity(item.id)}
                aria-label={`Increase quantity of ${item.name}`}
              >
                +
              </button>
            </div>

            <p className="cart-item-subtotal">
              ${(item.price * item.quantity).toFixed(2)}
            </p>

            <button
              type="button"
              className="remove-button"
              onClick={() => removeFromCart(item.id)}
              aria-label={`Remove ${item.name} from cart`}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="cart-summary">
        <p className="cart-total">Total: ${totalCost.toFixed(2)}</p>
        <div className="cart-actions">
          <Link to="/products" className="continue-shopping">
            Continue Shopping
          </Link>
          <button type="button" className="checkout-button" disabled>
            Checkout (coming soon)
          </button>
        </div>
      </div>
    </main>
  );
}

export default Cart;
