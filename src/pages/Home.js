import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBell, FaQuestionCircle, FaStar } from 'react-icons/fa';
import StoreCard from '../components/StoreCard';
import stores from '../data/stores';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Header */}
      <div className="home-header">
        <div className="header-icons">
          <button className="icon-btn"><FaQuestionCircle /></button>
          <button className="icon-btn notification"><FaBell /></button>
          <button className="icon-btn"><FaStar /></button>
        </div>
        <div className="header-logo">
          <span className="app-title">أهلاً!</span>
          <div className="logo-icon">سما</div>
        </div>
      </div>

      {/* Banner */}
      <div className="banner-section">
        <div className="promo-banner">
          <div className="banner-content">
            <h2>مبروووك يا ابطال!!</h2>
            <div className="banner-discount">
              <span className="discount-number">50%</span>
              <span className="discount-text">حسم على الشحن</span>
            </div>
            <button className="banner-btn">احتفل ويانا</button>
          </div>
          <div className="banner-badge">على المتاجر التركية</div>
        </div>
      </div>

      {/* Wallet Section */}
      <div className="wallet-section">
        <div className="wallet-header">
          <div className="wallet-logo">سما</div>
          <h3>ابدأ التوفير مع محفظة سما</h3>
        </div>
        <div className="wallet-features">
          <span>عروض حصرية</span>
          <span>•</span>
          <span>نقاط اضافية</span>
          <span>•</span>
          <span>خصومات على الطلب والتوصيل</span>
        </div>
        <button className="wallet-btn" onClick={() => navigate('/wallet')}>
          اشحن محفظتك الآن
        </button>
      </div>

      {/* Stores Section */}
      <div className="stores-section">
        <div className="section-header">
          <button className="see-more-btn">مشاهدة المزيد</button>
          <h3>المتاجر العالمية</h3>
        </div>
        <div className="stores-grid">
          {stores.map(store => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </div>

      {/* PUBG Banner */}
      <div className="game-banner">
        <div className="game-banner-content">
          <h3>وين البطل؟</h3>
          <p>اشتري الفاوتشر · سجّل · اربح</p>
          <div className="prize-amount">
            <span>للي يفوز</span>
            <span className="prize-number">150,000</span>
            <span>د.ع</span>
          </div>
          <button className="game-btn">سجّل هسّه</button>
        </div>
      </div>

      {/* Shipping Notice */}
      <div className="shipping-notice">
        <div className="notice-icon">🚚</div>
        <h4>تنبيه بخصوص طلبات شي إن</h4>
        <p>
          يسعدنا إبلاغكم بأن خدمة التوصيل من "شي إن" قد عادت للمنطقة. نظراً للأوضاع اللوجستية الراهنة، نود التنويه بأن مدة التوصيل قد تستغرق ما بين 30 إلى 50 يوماً.
        </p>
        <p className="notice-en">
          We are pleased to announce that Shein deliveries to our region have resumed. Shipping is currently taking 30 to 50 days. We offer a full refund if your delivery exceeds this timeframe.
        </p>
        <button className="order-btn" onClick={() => navigate('/store/shein')}>اطلب هنا</button>
      </div>
    </div>
  );
};

export default Home;
