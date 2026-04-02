import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWallet, FaPlus, FaHistory, FaGift, FaArrowLeft } from 'react-icons/fa';
import './WalletPage.css';

const WalletPage = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const [showRecharge, setShowRecharge] = useState(false);
  const [rechargeAmount, setRechargeAmount] = useState('');

  const amounts = [5000, 10000, 25000, 50000, 100000];

  const transactions = [
    { id: 1, type: 'recharge', amount: 25000, date: '2024-03-15', desc: 'شحن المحفظة' },
    { id: 2, type: 'purchase', amount: -8602, date: '2024-03-16', desc: 'شراء من شي إن' },
    { id: 3, type: 'refund', amount: 3000, date: '2024-03-18', desc: 'استرداد رسوم شحن' },
  ];

  const handleRecharge = () => {
    const amount = parseInt(rechargeAmount);
    if (amount > 0) {
      setBalance(prev => prev + amount);
      setRechargeAmount('');
      setShowRecharge(false);
    }
  };

  return (
    <div className="wallet-page">
      <div className="wallet-pg-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          <FaArrowLeft />
        </button>
        <h2>المحفظة</h2>
        <div style={{ width: 36 }} />
      </div>

      {/* Balance Card */}
      <div className="balance-card">
        <div className="balance-icon">
          <FaWallet size={32} />
        </div>
        <span className="balance-label">رصيدك الحالي</span>
        <div className="balance-amount">
          <span className="balance-number">{balance.toLocaleString()}</span>
          <span className="balance-currency">IQD</span>
        </div>
        <button className="recharge-btn" onClick={() => setShowRecharge(!showRecharge)}>
          <FaPlus /> شحن المحفظة
        </button>
      </div>

      {/* Recharge Modal */}
      {showRecharge && (
        <div className="recharge-section">
          <h4>اختر مبلغ الشحن</h4>
          <div className="amount-grid">
            {amounts.map(amt => (
              <button
                key={amt}
                className={`amount-btn ${rechargeAmount === String(amt) ? 'selected' : ''}`}
                onClick={() => setRechargeAmount(String(amt))}
              >
                {amt.toLocaleString()} IQD
              </button>
            ))}
          </div>
          <div className="custom-amount">
            <input
              type="number"
              placeholder="أو أدخل مبلغ مخصص"
              value={rechargeAmount}
              onChange={(e) => setRechargeAmount(e.target.value)}
            />
          </div>
          <button className="confirm-recharge-btn" onClick={handleRecharge}>
            تأكيد الشحن
          </button>
        </div>
      )}

      {/* Features */}
      <div className="wallet-features-grid">
        <div className="feature-card">
          <FaGift className="feature-icon" />
          <span>عروض حصرية</span>
        </div>
        <div className="feature-card">
          <FaHistory className="feature-icon" />
          <span>نقاط إضافية</span>
        </div>
        <div className="feature-card">
          <FaWallet className="feature-icon" />
          <span>خصومات التوصيل</span>
        </div>
      </div>

      {/* Transactions */}
      <div className="transactions-section">
        <h3>سجل المعاملات</h3>
        {transactions.map(tx => (
          <div key={tx.id} className="transaction-item">
            <div className="tx-info">
              <span className="tx-desc">{tx.desc}</span>
              <span className="tx-date">{tx.date}</span>
            </div>
            <span className={`tx-amount ${tx.amount > 0 ? 'positive' : 'negative'}`}>
              {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString()} IQD
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletPage;
