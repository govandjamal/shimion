import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StoreCard.css';

const StoreCard = ({ store }) => {
  const navigate = useNavigate();

  return (
    <div className="store-card" onClick={() => navigate(`/store/${store.id}`)}>
      <div className="store-logo-wrapper">
        <img
          src={store.logo}
          alt={store.nameEn}
          className="store-logo"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="store-logo-fallback" style={{ display: 'none', background: store.color }}>
          {store.nameEn.charAt(0)}
        </div>
      </div>
      <span className="store-name">{store.name}</span>
    </div>
  );
};

export default StoreCard;
