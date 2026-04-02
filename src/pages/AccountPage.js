import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaBox, FaHeart, FaMapMarkerAlt, FaCog, FaQuestionCircle, FaSignOutAlt, FaArrowLeft, FaEdit } from 'react-icons/fa';
import './AccountPage.css';

const AccountPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: 'المستخدم',
    phone: '+964 xxx xxx xxxx',
    city: 'بغداد، العراق'
  });
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState(user.name);
  const [editPhone, setEditPhone] = useState(user.phone);

  const handleSave = () => {
    setUser({ ...user, name: editName, phone: editPhone });
    setEditing(false);
  };

  const menuItems = [
    { icon: <FaBox />, label: 'طلباتي', desc: 'عرض جميع الطلبات', action: () => {} },
    { icon: <FaHeart />, label: 'المفضلة', desc: 'المنتجات المحفوظة', action: () => {} },
    { icon: <FaMapMarkerAlt />, label: 'العناوين', desc: 'إدارة عناوين التوصيل', action: () => {} },
    { icon: <FaCog />, label: 'الإعدادات', desc: 'اللغة والإشعارات', action: () => {} },
    { icon: <FaQuestionCircle />, label: 'المساعدة', desc: 'الأسئلة الشائعة والدعم', action: () => {} },
  ];

  return (
    <div className="account-page">
      <div className="account-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          <FaArrowLeft />
        </button>
        <h2>حسابي</h2>
        <div style={{ width: 36 }} />
      </div>

      {/* Profile Card */}
      <div className="profile-card">
        <div className="profile-avatar">
          <FaUser size={32} />
        </div>
        {!editing ? (
          <div className="profile-info">
            <h3>{user.name}</h3>
            <p>{user.phone}</p>
            <p className="profile-city">{user.city}</p>
            <button className="edit-profile-btn" onClick={() => setEditing(true)}>
              <FaEdit /> تعديل الملف الشخصي
            </button>
          </div>
        ) : (
          <div className="profile-edit-form">
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              placeholder="الاسم"
            />
            <input
              type="tel"
              value={editPhone}
              onChange={(e) => setEditPhone(e.target.value)}
              placeholder="رقم الهاتف"
            />
            <div className="edit-buttons">
              <button className="save-btn" onClick={handleSave}>حفظ</button>
              <button className="cancel-btn" onClick={() => setEditing(false)}>إلغاء</button>
            </div>
          </div>
        )}
      </div>

      {/* Menu Items */}
      <div className="account-menu">
        {menuItems.map((item, idx) => (
          <button key={idx} className="menu-item" onClick={item.action}>
            <div className="menu-item-right">
              <div className="menu-icon">{item.icon}</div>
              <div className="menu-text">
                <span className="menu-label">{item.label}</span>
                <span className="menu-desc">{item.desc}</span>
              </div>
            </div>
            <span className="menu-arrow">‹</span>
          </button>
        ))}
      </div>

      {/* Logout */}
      <button className="logout-btn">
        <FaSignOutAlt />
        <span>تسجيل الخروج</span>
      </button>
    </div>
  );
};

export default AccountPage;
