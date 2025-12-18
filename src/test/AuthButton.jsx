import React, { useEffect, useState, useRef } from "react"
import { Modal } from "bootstrap/dist/js/bootstrap.bundle.min"

function AuthButton() {
  const anthModalRef = useRef(null)

  //登入表單
  const defaultLogin = {
    loginEmail: "",
    loginPassword: "",
  }
  const [loginData, setLoginData] = useState(defaultLogin)

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target
    setLoginData({
      ...loginData,
      [name]: value,
    })
  }

  //註冊表單
  const defaultRegister = {
    registerName: "",
    registerEmail: "",
    registerPassword: "",
  }
  const [registerData, setregisterData] = useState(defaultRegister)

  const handleRegisterInputChange = (e) => {
    const { name, value } = e.target
    setregisterData({
      ...registerData,
      [name]: value,
    })
  }

  useEffect(() => {
    new Modal(anthModalRef.current)
  }, [])

  //開啟modal
  const handleOpenAuthModal = () => {
    const modalInstance = Modal.getInstance(anthModalRef.current)
    modalInstance.show()
  }

  return (
    <>
      {/* <!-- Button trigger modal --> */}
      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        登入/註冊
      </button> */}
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleOpenAuthModal}
      >
        JS 開啟modal
      </button>

      {/* <!-- Modal --> */}
      <div
        ref={anthModalRef}
        className="modal fade"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          {/* 加大寬度 */}
          <div className="modal-content">
            {/* <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                註冊 / 登入
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div> */}
            <div className="modal-body">
              <div className="row">
                {/* 左邊欄：範例圖 */}
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="範例圖"
                    className="img-fluid rounded"
                  />
                </div>

                {/* 右邊欄：分頁 */}
                <div className="col-md-6">
                  <ul className="nav nav-tabs" id="authTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="login-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#login"
                        type="button"
                        role="tab"
                        aria-controls="login"
                        aria-selected="true"
                      >
                        登入
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="register-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#register"
                        type="button"
                        role="tab"
                        aria-controls="register"
                        aria-selected="false"
                      >
                        註冊
                      </button>
                    </li>
                  </ul>

                  <div className="tab-content mt-3" id="authTabsContent">
                    {/* 登入表單 */}
                    <div
                      className="tab-pane fade show active"
                      id="login"
                      role="tabpanel"
                      aria-labelledby="login-tab"
                    >
                      <form>
                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            name="loginEmail"
                            value={loginData.loginEmail}
                            onChange={handleLoginInputChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">密碼</label>
                          <input
                            type="password"
                            className="form-control"
                            name="loginPassword"
                            value={loginData.loginPassword}
                            onChange={handleLoginInputChange}
                          />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                          登入
                        </button>
                      </form>
                    </div>

                    {/* 註冊表單 */}
                    <div
                      className="tab-pane fade"
                      id="register"
                      role="tabpanel"
                      aria-labelledby="register-tab"
                    >
                      <form>
                        <div className="mb-3">
                          <label className="form-label">使用者名稱</label>
                          <input
                            type="text"
                            className="form-control"
                            name="registerName"
                            value={registerData.registerName}
                            onChange={handleRegisterInputChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            name="registerEmail"
                            value={registerData.registerEmail}
                            onChange={handleRegisterInputChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">密碼</label>
                          <input
                            type="password"
                            className="form-control"
                            name="registerPassword"
                            value={registerData.registerPassword}
                            onChange={handleRegisterInputChange}
                          />
                        </div>
                        <button type="submit" className="btn btn-success w-100">
                          註冊
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                關閉
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthButton
