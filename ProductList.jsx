import { useState } from "react";
import { categories, products } from "../data/products";
import { useCart } from "../context/CartContext";
import "./ProductList.css";

function ProductCard({ product }) {
  const { items, addToCart, increaseQuantity, decreaseQuantity } = useCart();
  const cartItem = items.find((item) => item.id === product.id);

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
            onClick={() => decreaseQuantity(product.id)}
            aria-label={`Decrease quantity of ${product.name}`}
          >
            &minus;
          </button>
          <span>{cartItem.quantity}</span>
          <button
            type="button"
            onClick={() => increaseQuantity(product.id)}
            aria-label={`Increase quantity of ${product.name}`}
          >
            +
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="add-to-cart-button"
          onClick={() => addToCart(product)}
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
