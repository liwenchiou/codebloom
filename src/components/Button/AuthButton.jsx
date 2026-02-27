import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom"; // 引入 Portal
import { Modal } from "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import axios from "axios";
import md5 from "blueimp-md5";
import person from "../../assets/images/Ellipse 3.png";

const API_BASE = "https://codebloom-api.zeabur.app";

function AuthButton() {
  const loginModalRef = useRef(null);
  const registerModalRef = useRef(null);
  const modalInstances = useRef({ login: null, register: null });

  const [isAuth, setIsAuth] = useState(false);
  const [userName, setUserName] = useState("");
  const [loginData, setLoginData] = useState({ loginEmail: "", loginPassword: "" });
  const [registerData, setregisterData] = useState({ registerName: "", registerEmail: "", registerPassword: "" });

  useEffect(() => {
    // 確保 DOM 已經掛載後再初始化
    if (loginModalRef.current) {
      modalInstances.current.login = new Modal(loginModalRef.current);
    }
    if (registerModalRef.current) {
      modalInstances.current.register = new Modal(registerModalRef.current);
    }

    return () => {
      // 銷毀實體，避免切換頁面時遮罩殘留
      modalInstances.current.login?.dispose();
      modalInstances.current.register?.dispose();
    };
  }, []);

  const handleOpenLoginModal = () => modalInstances.current.login?.show();
  const handleCloseLoginModal = () => modalInstances.current.login?.hide();
  const handleOpenRegisterModal = () => modalInstances.current.register?.show();
  const handleCloseRegisterModal = () => modalInstances.current.register?.hide();

  // --- API 邏輯：使用 JSON Server REST API ---
  const userLogin = async () => {
    try {
      // 用 email 查詢使用者
      const res = await axios.get(`${API_BASE}/users`, {
        params: { email: loginData.loginEmail },
      });

      const users = res.data;

      if (!Array.isArray(users) || users.length === 0) {
        alert("帳號密碼錯誤");
        return;
      }

      // 比對 MD5 加密後的密碼
      const user = users.find(
        (u) => u.password === md5(loginData.loginPassword)
      );

      if (user) {
        alert(`歡迎 ${user.name}`);
        setUserName(user.name);
        setIsAuth(true);
        localStorage.setItem("userId", user.id);
        handleCloseLoginModal();
        // 清空表單
        setLoginData({ loginEmail: "", loginPassword: "" });
      } else {
        alert("帳號密碼錯誤");
      }
    } catch (error) {
      console.error("登入失敗:", error);
      alert("登入失敗，請稍後再試");
    }
  };

  const userRegister = async () => {
    try {
      // 先檢查 email 是否已被註冊
      const checkRes = await axios.get(`${API_BASE}/users`, {
        params: { email: registerData.registerEmail },
      });

      if (Array.isArray(checkRes.data) && checkRes.data.length > 0) {
        alert("此 Email 已被註冊");
        return;
      }

      // 註冊新使用者
      const res = await axios.post(`${API_BASE}/users`, {
        name: registerData.registerName,
        email: registerData.registerEmail,
        password: md5(registerData.registerPassword),
      });

      const newUser = res.data;
      alert("註冊成功");
      setUserName(registerData.registerName);
      setIsAuth(true);
      localStorage.setItem("userId", newUser.id);
      handleCloseRegisterModal();
      // 清空表單
      setregisterData({ registerName: "", registerEmail: "", registerPassword: "" });
    } catch (error) {
      console.error("註冊失敗:", error);
      alert("註冊失敗，請稍後再試");
    }
  };

  // --- UI 部分 ---
  return (
    <>
      {/* 1. 按鈕部分：留在 Navbar 原位 */}
      {isAuth ? (
        <div className="d-flex align-items-center">
          <img src={person} alt="person" width={36} className="me-2" />
          <Link className="btn btn-outline-light btn-sm" to="/Dashboard">創作中心</Link>
          <button className="btn btn-sm text-white-50 ms-2" onClick={() => { setIsAuth(false); localStorage.removeItem("userId"); }}>登出</button>
        </div>
      ) : (
        <div className="d-flex align-items-center">
          <button className="btn btn-link text-white text-decoration-none me-2" onClick={handleOpenRegisterModal}>註冊</button>
          <button className="btn btn-primary btn-sm px-4" onClick={handleOpenLoginModal}>登入</button>
        </div>
      )}

      {/* 2. Portal 部分：將 Modal 傳送到 body，解決 Navbar 遮罩問題 */}
      {createPortal(
        <div className="auth-modals-container">
          {/* Login Modal */}
          <div ref={loginModalRef} className="modal fade" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content text-dark">
                <div className="modal-header border-0">
                  <h5 className="modal-title fw-bold">登入 Code匠心</h5>
                  <button type="button" className="btn-close" onClick={handleCloseLoginModal}></button>
                </div>
                <div className="modal-body p-4">
                  <div className="row g-4">
                    <div className="col-md-6 d-none d-md-block">
                      <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400" className="img-fluid rounded-3" alt="login" />
                    </div>
                    <div className="col-md-6">
                      <form onSubmit={(e) => { e.preventDefault(); userLogin(); }}>
                        <div className="mb-3">
                          <label className="form-label small">Email</label>
                          <input type="email" className="form-control" value={loginData.loginEmail} onChange={(e) => setLoginData({ ...loginData, loginEmail: e.target.value })} required />
                        </div>
                        <div className="mb-3">
                          <label className="form-label small">密碼</label>
                          <input type="password" className="form-control" value={loginData.loginPassword} onChange={(e) => setLoginData({ ...loginData, loginPassword: e.target.value })} required />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 py-2">登入</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Register Modal */}
          <div ref={registerModalRef} className="modal fade" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content text-dark">
                <div className="modal-header border-0">
                  <h5 className="modal-title fw-bold">加入會員</h5>
                  <button type="button" className="btn-close" onClick={handleCloseRegisterModal}></button>
                </div>
                <div className="modal-body p-4">
                  <div className="row g-4">
                    <div className="col-md-6 d-none d-md-block">
                      <img src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=400" className="img-fluid rounded-3" alt="register" />
                    </div>
                    <div className="col-md-6">
                      <form onSubmit={(e) => { e.preventDefault(); userRegister(); }}>
                        <div className="mb-3">
                          <label className="form-label small">姓名</label>
                          <input type="text" className="form-control" value={registerData.registerName} onChange={(e) => setregisterData({ ...registerData, registerName: e.target.value })} required />
                        </div>
                        <div className="mb-3">
                          <label className="form-label small">Email</label>
                          <input type="email" className="form-control" value={registerData.registerEmail} onChange={(e) => setregisterData({ ...registerData, registerEmail: e.target.value })} required />
                        </div>
                        <div className="mb-3">
                          <label className="form-label small">密碼</label>
                          <input type="password" className="form-control" value={registerData.registerPassword} onChange={(e) => setregisterData({ ...registerData, registerPassword: e.target.value })} required />
                        </div>
                        <button type="submit" className="btn btn-success w-100 py-2">註冊</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body // 關鍵點：渲染到 body 節點下
      )}
    </>
  );
}

export default AuthButton;