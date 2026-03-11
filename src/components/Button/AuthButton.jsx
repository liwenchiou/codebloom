import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom"; // 引入 Portal
import { Modal } from "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import axios from "axios";
import md5 from "blueimp-md5";
import person from "../../assets/images/Ellipse 3.png";
import { useToast } from "../Toast/ToastContext";
import { useAuth } from "../../context/AuthContext";
import "./AuthButton.scss";

const API_BASE = import.meta.env.VITE_API_BASE;

function AuthButton() {
  const loginModalRef = useRef(null);
  const registerModalRef = useRef(null);
  const modalInstances = useRef({ login: null, register: null });

  const { isAuth, userName, login, logout } = useAuth();
  const [loginData, setLoginData] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  const [registerData, setregisterData] = useState({
    registerName: "",
    registerEmail: "",
    registerPassword: "",
  });

  // 使用全域的 Toast
  const { showToast } = useToast();

  useEffect(() => {
    // 確保 DOM 已經掛載後再初始化

    // 確保 DOM 已經掛載後再初始化
    if (loginModalRef.current) {
      modalInstances.current.login = new Modal(loginModalRef.current);
    }
    if (registerModalRef.current) {
      modalInstances.current.register = new Modal(registerModalRef.current);
    }

    const openRegisterHandler = () => {
      if (modalInstances.current.register) {
        modalInstances.current.register.show();
      }
    };

    const openLoginHandler = () => {
      if (modalInstances.current.login) {
        modalInstances.current.login.show();
      }
    };

    window.addEventListener("openRegisterModal", openRegisterHandler);
    window.addEventListener("openLoginModal", openLoginHandler);

    return () => {
      // 銷毀實體，避免切換頁面時遮罩殘留
      window.removeEventListener("openRegisterModal", openRegisterHandler);
      window.removeEventListener("openLoginModal", openLoginHandler);
      modalInstances.current.login?.dispose();
      modalInstances.current.register?.dispose();
    };
  }, []);

  const handleOpenLoginModal = () => modalInstances.current.login?.show();
  const handleCloseLoginModal = () => modalInstances.current.login?.hide();
  const handleOpenRegisterModal = () => modalInstances.current.register?.show();
  const handleCloseRegisterModal = () =>
    modalInstances.current.register?.hide();

  // --- API 邏輯：使用 JSON Server REST API ---
  const userLogin = async () => {
    try {
      // 用 email 查詢使用者
      const res = await axios.get(`${API_BASE}/users`, {
        params: { email: loginData.loginEmail },
      });

      const users = res.data;

      if (!Array.isArray(users) || users.length === 0) {
        showToast("帳號密碼錯誤", "error");
        return;
      }

      // 比對 MD5 加密後的密碼
      const user = users.find(
        (u) => u.password === md5(loginData.loginPassword),
      );

      if (user) {
        showToast(`歡迎回來，${user.name} 👋`, "success");
        login(user.id, user.name);
        handleCloseLoginModal();
        // 清空表單
        setLoginData({ loginEmail: "", loginPassword: "" });
      } else {
        showToast("帳號密碼錯誤", "error");
      }
    } catch (error) {
      console.error("登入失敗:", error);
      showToast("登入失敗，請稍後再試", "error");
    }
  };

  const userRegister = async () => {
    try {
      // 先檢查 email 是否已被註冊
      const checkRes = await axios.get(`${API_BASE}/users`, {
        params: { email: registerData.registerEmail },
      });

      if (Array.isArray(checkRes.data) && checkRes.data.length > 0) {
        showToast("此 Email 已被註冊", "warning");
        return;
      }

      // 註冊新使用者
      const res = await axios.post(`${API_BASE}/users`, {
        name: registerData.registerName,
        email: registerData.registerEmail,
        password: md5(registerData.registerPassword),
      });

      const newUser = res.data;
      showToast("註冊成功！歡迎加入 ✨", "success");
      login(newUser.id, registerData.registerName);
      handleCloseRegisterModal();
      // 清空表單
      setregisterData({
        registerName: "",
        registerEmail: "",
        registerPassword: "",
      });
    } catch (error) {
      console.error("註冊失敗:", error);
      showToast("註冊失敗，請稍後再試", "error");
    }
  };

  // --- UI 部分 ---
  return (
    <>
      {/* 1. 按鈕部分：留在 Navbar 原位 */}
      {isAuth ? (
        <div className="d-flex align-items-center">
          <img src={person}
            alt="person"
            width={34}
            className="me-3 rounded-circle"
           loading="lazy" />
          <Link className="auth-nav-dashboard me-2" to="/Dashboard">
            創作中心
          </Link>
          <button
            className="auth-nav-logout"
            onClick={logout}
          >
            登出
          </button>
        </div>
      ) : (
        <div className="d-flex align-items-center">
          <button
            className="auth-nav-register me-2"
            onClick={handleOpenRegisterModal}
          >
            註冊
          </button>
          <button className="auth-nav-login" onClick={handleOpenLoginModal}>
            登入
          </button>
        </div>
      )}

      {/* 2. Portal 部分：將 Modal 傳送到 body，解決 Navbar 遮罩問題 */}
      {createPortal(
        <div className="auth-modals-container">
          {/* Login Modal */}
          <div
            ref={loginModalRef}
            className="modal fade auth-modal"
            tabIndex="-1"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">歡迎回來 👋</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="關閉"
                    onClick={handleCloseLoginModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <p className="auth-subtitle">
                    登入你的 Code匠心 帳號，繼續你的創作之旅
                  </p>

                  <div className="auth-icon-row">
                    <div className="auth-icon-circle">🔐</div>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      userLogin();
                    }}
                  >
                    <div className="auth-field">
                      <label className="auth-label" htmlFor="login-email">
                        Email
                      </label>
                      <input
                        type="email"
                        id="login-email"
                        className="auth-input"
                        placeholder="請輸入你的 Email"
                        value={loginData.loginEmail}
                        onChange={(e) =>
                          setLoginData({
                            ...loginData,
                            loginEmail: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="auth-field">
                      <label className="auth-label" htmlFor="login-password">
                        密碼
                      </label>
                      <input
                        type="password"
                        id="login-password"
                        className="auth-input"
                        placeholder="請輸入密碼"
                        value={loginData.loginPassword}
                        onChange={(e) =>
                          setLoginData({
                            ...loginData,
                            loginPassword: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <button type="submit" className="auth-submit-btn">
                      登入
                    </button>
                  </form>

                  <div className="auth-divider">
                    <span>OR</span>
                  </div>

                  <div className="auth-switch">
                    還沒有帳號？
                    <button
                      type="button"
                      onClick={() => {
                        handleCloseLoginModal();
                        setTimeout(() => handleOpenRegisterModal(), 300);
                      }}
                    >
                      立即註冊
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Register Modal */}
          <div
            ref={registerModalRef}
            className="modal fade auth-modal"
            tabIndex="-1"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">加入 Code匠心 ✨</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="關閉"
                    onClick={handleCloseRegisterModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <p className="auth-subtitle">
                    建立帳號，開始展示你的作品、與社群交流
                  </p>

                  <div className="auth-icon-row">
                    <div className="auth-icon-circle">🚀</div>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      userRegister();
                    }}
                  >
                    <div className="auth-field">
                      <label className="auth-label" htmlFor="register-name">
                        姓名
                      </label>
                      <input
                        type="text"
                        id="register-name"
                        className="auth-input"
                        placeholder="輸入你的名字"
                        value={registerData.registerName}
                        onChange={(e) =>
                          setregisterData({
                            ...registerData,
                            registerName: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="auth-field">
                      <label className="auth-label" htmlFor="register-email">
                        Email
                      </label>
                      <input
                        type="email"
                        id="register-email"
                        className="auth-input"
                        placeholder="請輸入你的 Email"
                        value={registerData.registerEmail}
                        onChange={(e) =>
                          setregisterData({
                            ...registerData,
                            registerEmail: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="auth-field">
                      <label className="auth-label" htmlFor="register-password">
                        密碼
                      </label>
                      <input
                        type="password"
                        id="register-password"
                        className="auth-input"
                        placeholder="設定密碼（至少 6 位）"
                        value={registerData.registerPassword}
                        onChange={(e) =>
                          setregisterData({
                            ...registerData,
                            registerPassword: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <button type="submit" className="auth-submit-btn">
                      建立帳號
                    </button>
                  </form>

                  <div className="auth-divider">
                    <span>OR</span>
                  </div>

                  <div className="auth-switch">
                    已經有帳號了？
                    <button
                      type="button"
                      onClick={() => {
                        handleCloseRegisterModal();
                        setTimeout(() => handleOpenLoginModal(), 300);
                      }}
                    >
                      前往登入
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body, // 關鍵點：渲染到 body 節點下
      )}
    </>
  );
}

export default AuthButton;
