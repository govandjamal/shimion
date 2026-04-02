import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { usdToIqd, formatIQD } from '../data/stores';
import { FaShoppingCart, FaCheck } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product, storeName }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product, storeName);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="product-image-placeholder">
            <FaShoppingCart size={32} color="#ccc" />
          </div>
        )}
        {product.discount > 0 && (
          <span className="discount-badge">-{product.discount}%</span>
        )}
      </div>
      <div className="product-info">
        <h4 className="product-name">{product.name}</h4>
        <div className="product-pricing">
          <span className="product-price">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="product-original">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        <div className="product-price-iqd">
          {formatIQD(usdToIqd(product.price))} IQD
        </div>
        {product.sold && (
          <span className="product-sold">{product.sold} تم شراؤها</span>
        )}
        <button
          className={`add-to-cart-btn ${added ? 'added' : ''}`}
          onClick={handleAdd}
        >
          {added ? (
            <>
              <FaCheck /> تمت الإضافة
            </>
          ) : (
            <>
              <FaShoppingCart /> أضف للسلة
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
