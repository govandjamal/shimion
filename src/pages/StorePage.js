import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaSearch, FaCamera, FaHeart, FaEnvelope, FaBars, FaInfoCircle, FaShoppingCart } from 'react-icons/fa';
import stores from '../data/stores';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import './StorePage.css';

const StorePage = () => {
  const { storeId } = useParams();
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const store = stores.find(s => s.id === storeId);
  const [activeCategory, setActiveCategory] = useState('كل');
  const [searchTerm, setSearchTerm] = useState('');

  if (!store) {
    return (
      <div className="store-not-found">
        <h2>المتجر غير موجود</h2>
        <button onClick={() => navigate('/')}>العودة للرئيسية</button>
      </div>
    );
  }

  const filteredProducts = store.products.filter(p => {
    const matchCategory = activeCategory === 'كل' || p.category === activeCategory;
    const matchSearch = !searchTerm || p.name.includes(searchTerm);
    return matchCategory && matchSearch;
  });

  return (
    <div className="store-page">
      {/* Store Header */}
      <div className="store-header">
        <div className="store-header-top">
          <div className="store-header-left" onClick={() => navigate('/')}>
            <div className="store-mini-logo">سما</div>
            <span>الرئيسية</span>
          </div>
          <div className="store-header-right">
            <FaInfoCircle />
            <span>عن المتجر</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="store-search">
        <FaHeart className="search-action" />
        <div className="search-input-wrapper">
          <FaSearch className="search-icon" />
          <FaCamera className="camera-icon" />
          <input
            type="text"
            placeholder="البحث"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <FaEnvelope className="search-action" />
        <FaBars className="search-action" />
      </div>

      {/* Category Tabs */}
      <div className="category-tabs">
        {store.categories.map(cat => (
          <button
            key={cat}
            className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Shipping Info */}
      <div className="shipping-info-bar">
        <div className="shipping-item">
          <span className="shipping-label">شحن مجاني</span>
          <span className="shipping-desc">اشتر $89.00 أكثر للحصول على</span>
        </div>
        <div className="shipping-divider" />
        <div className="shipping-item">
          <span className="shipping-label">أسعار منخفضة</span>
          <span className="shipping-desc">أقل من 9$</span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} storeName={store.name} />
          ))
        ) : (
          <div className="no-products">
            <p>لا توجد منتجات في هذه الفئة</p>
          </div>
        )}
      </div>

      {/* Floating Cart Button */}
      {totalItems > 0 && (
        <button className="floating-cart-btn" onClick={() => navigate('/cart')}>
          <FaShoppingCart />
          <span>عرض العربة</span>
          <span className="floating-cart-count">{totalItems}</span>
        </button>
      )}
    </div>
  );
};

export default StorePage;
