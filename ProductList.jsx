import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categories, products } from "./data/products";
import { addItem, updateQuantity } from "./CartSlice";
import "./ProductList.css";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.id === product.id)
  );

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  const handleIncrement = () => {
    dispatch(
      updateQuantity({ id: product.id, quantity: cartItem.quantity + 1 })
    );
  };

  const handleDecrement = () => {
    dispatch(
      updateQuantity({ id: product.id, quantity: cartItem.quantity - 1 })
    );
  };

  return (
    <div className="product-card">
      <div
        className="product-thumb"
        style={{ backgroundColor: product.color }}
      >
        <span aria-hidden="true">{product.emoji}</span>
      </div>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>

      {cartItem ? (
        <div className="quantity-controls">
          <button
            type="button"
            onClick={handleDecrement}
            aria-label={`Decrease quantity of ${product.name}`}
          >
            &minus;
          </button>
          <span>{cartItem.quantity}</span>
          <button
            type="button"
            onClick={handleIncrement}
            aria-label={`Increase quantity of ${product.name}`}
          >
            +
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="add-to-cart-button"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

function ProductList() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const currentCategory = categories.find((c) => c.id === activeCategory);
  const visibleProducts = products.filter((p) => p.category === activeCategory);

  return (
    <main className="product-list-page">
      <h1>Shop Our Plants</h1>
      <p className="page-intro">
        Browse plants by category and add your favorites to the cart.
      </p>

      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`category-tab ${
              category.id === activeCategory ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <section className="category-section">
        <h2>{currentCategory.name}</h2>
        <p className="category-description">{currentCategory.description}</p>

        <div className="product-grid">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProductList;
