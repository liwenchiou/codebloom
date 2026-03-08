import React from "react";
import "./LoginModal.scss";
import modalImg from "../../assets/images/loginimg.png";

const LoginModal = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="login-modal-content">
        <button className="btn-close-modal" onClick={onClose}>
          <i className="bi bi-x-lg"></i>
        </button>

        <div className="img-container">
          <img src={modalImg} alt="Login Required" className="modal-image" />
        </div>

        <h3 className="modal-title">讓您的技術知識綻放光芒</h3>
        <p className="modal-subtitle">
          登入 CodeBloom，紀錄學習歷程，將您的開發經驗分享給更多人
        </p>

        <button
          className="btn-login"
          onClick={() => {
            onClose();
            window.dispatchEvent(new Event("openLoginModal"));
          }}
        >
          登入
        </button>

        <button
          className="btn-register"
          onClick={() => {
            onClose();
            window.dispatchEvent(new Event("openRegisterModal"));
          }}
        >
          註冊
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
