import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeItem, updateQuantity } from "./CartSlice";
import "./CartItem.css";

// CartItem.jsx renders the full Shopping Cart page: every plant currently
// in the cart, per-item quantity controls, a running total, and navigation
// back to shopping or on to checkout.
function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculates the combined cost of every item in the cart
  // (unit price * quantity, summed across all items).
  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Calculates the total number of individual plants in the cart.
  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
  };

  const handleContinueShopping = () => {
    navigate("/products");
  };

  const handleCheckout = () => {
    alert("Checkout is coming soon! Thanks for shopping with Paradise Nursery.");
  };

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <h1>Your Cart</h1>
        <p>Your cart is empty.</p>
        <button
          type="button"
          className="continue-shopping-button"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <h1>Your Cart</h1>

      <ul className="cart-items">
        {cartItems.map((item) => (
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
                onClick={() => handleDecrement(item)}
                aria-label={`Decrease quantity of ${item.name}`}
              >
                &minus;
              </button>
              <span>{item.quantity}</span>
              <button
                type="button"
                onClick={() => handleIncrement(item)}
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
              onClick={() => handleRemove(item)}
              aria-label={`Remove ${item.name} from cart`}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="cart-summary">
        <p className="cart-total-items">
          Total Items: {calculateTotalItems()}
        </p>
        <p className="cart-total">
          Total: ${calculateTotalAmount().toFixed(2)}
        </p>
        <div className="cart-actions">
          <button
            type="button"
            className="continue-shopping-button"
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </button>
          <button
            type="button"
            className="checkout-button"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </main>
  );
}

export default CartItem;
