import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import StorePage from './pages/StorePage';
import CartPage from './pages/CartPage';
import WalletPage from './pages/WalletPage';
import AccountPage from './pages/AccountPage';
import './App.css';

function AppContent() {
  const location = useLocation();
  const hideNav = location.pathname === '/cart';

  return (
    <div className="app-container">
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store/:storeId" element={<StorePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </div>
      {!hideNav && <BottomNav />}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </CartProvider>
  );
}
