import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaChevronDown, FaChevronUp, FaTimes, FaEllipsisH, FaCheck } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { usdToIqd, formatIQD, SHIPPING_COST_IQD } from '../data/stores';
import './CartPage.css';

const CartPage = () => {
  const navigate = useNavigate();
  const { items, totalItems, totalUSD, removeFromCart, updateQuantity, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [showNotice, setShowNotice] = useState(true);

  const subtotalIQD = usdToIqd(totalUSD);
  const shippingIQD = items.length > 0 ? SHIPPING_COST_IQD : 0;
  const discountIQD = couponApplied ? Math.round(shippingIQD * 0.5) : 0;
  const totalIQD = subtotalIQD + shippingIQD - discountIQD;

  const itemsNeededForDiscount = Math.max(0, 10 - totalItems);
  const progressPercent = Math.min(100, (totalItems / 10) * 100);

  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      setCouponApplied(true);
    }
  };

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-header">
          <button className="continue-btn" onClick={() => navigate('/')}>مواصلة التسوق</button>
          <div className="cart-header-logo">
            <div className="mini-logo">سما</div>
            <span>الرئيسية</span>
          </div>
        </div>
        <div className="empty-cart">
          <div className="empty-icon">🛒</div>
          <h3>سلة التسوق فارغة</h3>
          <p>ابدأ بإضافة منتجات من المتاجر العالمية</p>
          <button className="shop-now-btn" onClick={() => navigate('/')}>تسوق الآن</button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      {/* Header */}
      <div className="cart-header">
        <button className="continue-btn" onClick={() => navigate(-1)}>مواصلة التسوق</button>
        <div className="cart-header-logo" onClick={() => navigate('/')}>
          <div className="mini-logo">سما</div>
          <span>الرئيسية</span>
        </div>
      </div>

      {/* Cart Toolbar */}
      <div className="cart-toolbar">
        <div className="toolbar-right">
          <span>يتم الشحن إلى</span>
          <span>›</span>
        </div>
        <div className="toolbar-left">
          <FaTimes className="toolbar-icon" onClick={() => navigate(-1)} />
          <FaEllipsisH className="toolbar-icon" />
        </div>
      </div>

      {/* Select All */}
      <div className="select-all-bar">
        <span>حقيبة التسوق({totalItems})</span>
        <div className="select-all-check">
          <FaCheck />
          <span>جميع</span>
        </div>
      </div>

      {/* Shipping Notice */}
      {showNotice && (
        <div className="cart-notice">
          <button className="notice-close" onClick={() => setShowNotice(false)}>✕</button>
          <div className="notice-header">
            <span>🚚</span>
            <span>تنبيه بخصوص طلبات شي إن</span>
          </div>
          <p>
            يسعدنا إبلاغكم بأن خدمة التوصيل من "شي إن" قد عادت للمنطقة. نظراً للأوضاع اللوجستية الراهنة، نود التنويه بأن مدة التوصيل قد تستغرق ما بين 30 إلى 50 يوماً. نحن نبذل قصارى جهدنا لضمان وصول طلبكم، وفي حال تجاوزت المدة المتوقعة، سنقوم بإعادة المبلغ بالكامل لكم.
          </p>
          <p className="notice-small">
            ملاحظة: عند الدفع باستخدام البطاقات الائتمانية أو المحافظ الالكترونية وفي حال تم إلغاء منتج أو طلب وتم إصدار استرداد سيتم تحويل المبلغ المسترد إلى محفظة سما الخاصة بك.
          </p>
        </div>
      )}

      {/* Cart Items */}
      <div className="cart-items">
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-check">
              <FaCheck />
            </div>
            <div className="cart-item-image">
              <img src={item.image} alt={item.name} onError={(e) => { e.target.src = ''; e.target.style.background = '#f0f0f0'; }} />
            </div>
            <div className="cart-item-details">
              <h4>{item.name}</h4>
              <div className="cart-item-meta">
                <span>رقم القطعة: {item.sku}</span>
                <span>الحجم: مقاس واحد</span>
              </div>
              <div className="cart-item-price-row">
                <div className="cart-item-qty">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    <FaChevronDown />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <FaChevronUp />
                  </button>
                </div>
                <div className="cart-item-price">
                  <span className="item-price-iqd">{formatIQD(usdToIqd(item.price))} IQD</span>
                  {item.discount > 0 && (
                    <span className="item-discount">-{item.discount}%</span>
                  )}
                </div>
              </div>
            </div>
            <button className="cart-item-delete" onClick={() => removeFromCart(item.id)}>
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      {/* Order Details */}
      <div className="order-details">
        <h3>تفاصيل الطلب</h3>
        <div className="order-row">
          <span>{totalItems}</span>
          <span>عدد القطع</span>
        </div>
        <div className="order-row">
          <span>{formatIQD(subtotalIQD)} IQD</span>
          <span>المجموع</span>
        </div>
        <div className="order-row">
          <span>{formatIQD(shippingIQD)} IQD</span>
          <span>أجور الشحن</span>
        </div>
        {couponApplied && (
          <div className="order-row discount-row">
            <span>-{formatIQD(discountIQD)} IQD</span>
            <span>خصم الكوبون</span>
          </div>
        )}
      </div>

      {/* Shipping Discount Progress */}
      <div className="shipping-discount-bar">
        <p>أضف {itemsNeededForDiscount} قطع أخرى للحصول على 50% خصم على رسوم الشحن!</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
        </div>
        <span className="progress-label">{totalItems} / 10</span>
      </div>

      {/* Coupon */}
      <div className="coupon-section">
        <button
          className={`coupon-apply-btn ${couponApplied ? 'applied' : ''}`}
          onClick={handleApplyCoupon}
        >
          {couponApplied ? 'تم التفعيل' : 'تفعيل'}
        </button>
        <input
          type="text"
          placeholder="هل لديك كود خصم؟"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          disabled={couponApplied}
        />
      </div>

      {/* Total & Checkout */}
      <div className="checkout-bar">
        <button className="checkout-btn" onClick={() => navigate('/')}>
          <span>←</span>
          <span>متابعة الطلب</span>
        </button>
        <div className="checkout-total">
          <span className="total-label">المجموع الكلي</span>
          <span className="total-amount">{formatIQD(totalIQD)} IQD</span>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
