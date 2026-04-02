import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaStore, FaWallet, FaUser } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import './BottomNav.css';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalItems } = useCart();

  const tabs = [
    { path: '/account', label: 'حسابي', icon: <FaUser /> },
    { path: '/wallet', label: 'المحفظة', icon: <FaWallet /> },
    { path: '/', label: 'تسوق', icon: <FaStore /> },
  ];

  return (
    <nav className="bottom-nav">
      {tabs.map(tab => (
        <button
          key={tab.path}
          className={`nav-tab ${location.pathname === tab.path ? 'active' : ''}`}
          onClick={() => navigate(tab.path)}
        >
          <div className="nav-icon">
            {tab.icon}
            {tab.path === '/' && totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </div>
          <span className="nav-label">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
