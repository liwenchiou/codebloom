import { useState, useEffect } from "react";
import axios from "axios";
import { useToast } from "../Toast/ToastContext";
import bgpng from "../../assets/images/index/section1BG.png";
import avatars from "../../assets/images/avatars.png";

const API_BASE = "https://codebloom-api.zeabur.app";

function EditProfile() {
  const { showToast } = useToast();

  // 表單資料 state
  const [profile, setProfile] = useState({
    name: "",
    bio: "",
    email: "",
    tel: "",
    telPrivacy: "private",
    location: "",
    gender: "",
    jobTitle: "",
    birthday: "",
    jobStatus: "",
    skills: "",
    socialGithub: "",
    socialLinkedin: "",
    socialWebsite: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [userId, setUserId] = useState(null);

  // 頁面載入時取得使用者資料
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
      fetchUserProfile(storedUserId);
    } else {
      setIsLoading(false);
    }
  }, []);

  // 從 API 取得使用者詳細資料
  const fetchUserProfile = async (id) => {
    try {
      const res = await axios.get(`${API_BASE}/users/${id}`);
      const data = res.data;

      setProfile({
        name: data.name || "",
        bio: data.bio || "",
        email: data.email || "",
        tel: data.tel || "",
        telPrivacy: data.telPrivacy || "private",
        location: data.location || "",
        gender: data.gender || "",
        jobTitle: data.jobTitle || "",
        birthday: data.birthday || "",
        jobStatus: data.jobStatus || "",
        skills: data.skills || "",
        socialGithub: data.socialGithub || "",
        socialLinkedin: data.socialLinkedin || "",
        socialWebsite: data.socialWebsite || "",
      });
    } catch (error) {
      console.error("取得使用者資料失敗:", error);
      showToast("無法取得使用者資料，請重新登入", "error");
    } finally {
      setIsLoading(false);
    }
  };

  // 統一處理 input 變更
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  // 儲存變更 - 使用 PATCH 更新使用者資料
  const handleSave = async () => {
    if (!userId) {
      showToast("請先登入", "warning");
      return;
    }

    setIsSaving(true);
    try {
      await axios.patch(`${API_BASE}/users/${userId}`, profile);
      showToast("儲存成功！", "success");
    } catch (error) {
      console.error("儲存失敗:", error);
      showToast("儲存失敗，請稍後再試", "error");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center py-5">
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">載入中...</span>
        </div>
      </div>
    );
  }

  if (!userId) {
    return (
      <div className="text-center text-neutral-white py-5">
        <h5>請先登入後再編輯個人資料</h5>
      </div>
    );
  }

  return (
    <>
      <div
        className="confild-fulid px-12px pt-80px mx-auto bg-neutral-700"
        style={{
          backgroundImage: `url(${bgpng})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container p-0 EditProfile-container">
          <img
            src={avatars}
            alt="person"
            width={84}
            height={84}
            className="mb-4 d-md-block mx-md-auto"
          />
          <div className="row mb-56px">
            <div className="mb-4 col-md-6">
              <label
                htmlFor="userName"
                className="form-label text-base text-neutral-white"
              >
                姓名
              </label>
              <input
                type="text"
                className="form-control text-base text-neutral-50 bg-neutral-500 EditProfile-input"
                id="userName"
                name="name"
                placeholder="輸入姓名"
                value={profile.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label
                htmlFor="userBio"
                className="form-label text-base text-neutral-white"
              >
                簡介
              </label>
              <input
                type="text"
                className="form-control text-base text-neutral-50 bg-neutral-500 EditProfile-input"
                id="userBio"
                name="bio"
                placeholder="輸入簡介"
                value={profile.bio}
                onChange={handleChange}
              />
            </div>
          </div>

          <hr className="text-neutral-400 mb-56px" />

          <div className="mb-56px">
            <h3 className="h5 text-neutral-white text-center mb-36px">
              基本資料
            </h3>

            <div className="row mb-28px">
              <div className="col-md-6 mb-4">
                <label
                  htmlFor="userEmail"
                  className="form-label text-base text-neutral-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control text-base text-neutral-50 bg-neutral-500 EditProfile-input"
                  id="userEmail"
                  name="email"
                  placeholder="輸入Email"
                  value={profile.email}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-4">
                <span className="d-flex justify-content-between align-items-center mb-4px">
                  <label
                    htmlFor="userTel"
                    className="form-label text-base text-neutral-white m-0"
                  >
                    電話
                  </label>
                  <select
                    className="form-select mb-1"
                    name="telPrivacy"
                    id="telPrivacy"
                    style={{ width: "150px" }}
                    value={profile.telPrivacy}
                    onChange={handleChange}
                  >
                    <option value="private">僅自己可見</option>
                  </select>
                </span>

                <input
                  type="tel"
                  className="form-control text-base text-neutral-50 bg-neutral-500 EditProfile-input"
                  id="userTel"
                  name="tel"
                  placeholder="輸入電話"
                  value={profile.tel}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-28px">
              <div className="col-12 mb-4 col-md-6">
                <label
                  htmlFor="userLocation"
                  className="form-label text-base text-neutral-white "
                >
                  所在地
                </label>
                <select
                  id="userLocation"
                  name="location"
                  className="form-select bg-neutral-500 text-neutral-200 text-base"
                  value={profile.location}
                  onChange={handleChange}
                >
                  <option value="">選擇所在地</option>
                  <option value="台北市">台北市</option>
                  <option value="新北市">新北市</option>
                  <option value="桃園市">桃園市</option>
                  <option value="台中市">台中市</option>
                  <option value="台南市">台南市</option>
                  <option value="高雄市">高雄市</option>
                  <option value="基隆市">基隆市</option>
                  <option value="新竹市">新竹市</option>
                  <option value="新竹縣">新竹縣</option>
                  <option value="苗栗縣">苗栗縣</option>
                  <option value="彰化縣">彰化縣</option>
                  <option value="南投縣">南投縣</option>
                  <option value="雲林縣">雲林縣</option>
                  <option value="嘉義市">嘉義市</option>
                  <option value="嘉義縣">嘉義縣</option>
                  <option value="屏東縣">屏東縣</option>
                  <option value="宜蘭縣">宜蘭縣</option>
                  <option value="花蓮縣">花蓮縣</option>
                  <option value="台東縣">台東縣</option>
                  <option value="澎湖縣">澎湖縣</option>
                  <option value="金門縣">金門縣</option>
                  <option value="連江縣">連江縣</option>
                  <option value="海外">海外</option>
                </select>
              </div>

              <fieldset className="col-md-6">
                <legend className="form-label text-base text-neutral-white mb-4px">
                  性別
                </legend>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input text-neutral-100 bg-neutral-500 me-12px"
                    type="radio"
                    name="gender"
                    id="genderMale"
                    value="male"
                    checked={profile.gender === "male"}
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label text-base text-neutral-50 me-12px"
                    htmlFor="genderMale"
                  >
                    男
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input text-neutral-100 bg-neutral-500 me-12px"
                    type="radio"
                    name="gender"
                    id="genderFemale"
                    value="female"
                    checked={profile.gender === "female"}
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label text-base text-neutral-50 me-12px"
                    htmlFor="genderFemale"
                  >
                    女
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input text-neutral-100 bg-neutral-500 me-12px"
                    type="radio"
                    name="gender"
                    id="genderPrivate"
                    value="private"
                    checked={profile.gender === "private"}
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label text-base text-neutral-50 me-12px"
                    htmlFor="genderPrivate"
                  >
                    不公開
                  </label>
                </div>
              </fieldset>
            </div>

            <div className="row mb-28px">
              <div className="col-md-6 mb-4">
                <label
                  htmlFor="userJobTitle"
                  className="form-label text-base text-neutral-white"
                >
                  職稱
                </label>
                <input
                  type="text"
                  className="form-control text-base text-neutral-50 bg-neutral-500 EditProfile-input"
                  id="userJobTitle"
                  name="jobTitle"
                  placeholder="輸入職稱"
                  value={profile.jobTitle}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12 col-md-6">
                <label
                  htmlFor="userBirthday"
                  className="form-label text-base text-neutral-white mb-4px"
                >
                  生日
                </label>

                <input
                  type="date"
                  className="form-control text-base text-neutral-50 bg-neutral-500 EditProfile-input"
                  id="userBirthday"
                  name="birthday"
                  placeholder="輸入生日"
                  value={profile.birthday}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-28px">
              <fieldset className="col-12">
                <legend className="form-label text-base text-neutral-white mb-4px">
                  求職狀態
                </legend>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input text-neutral-100 bg-neutral-500 me-12px"
                    type="radio"
                    name="jobStatus"
                    id="statusOpen"
                    value="open"
                    checked={profile.jobStatus === "open"}
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label text-base text-neutral-50 me-3"
                    htmlFor="statusOpen"
                  >
                    開放求職中
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input text-neutral-100 bg-neutral-500 me-12px"
                    type="radio"
                    name="jobStatus"
                    id="statusProject"
                    value="project"
                    checked={profile.jobStatus === "project"}
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label text-base text-neutral-50 me-3"
                    htmlFor="statusProject"
                  >
                    接案中
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input text-neutral-100 bg-neutral-500 me-12px"
                    type="radio"
                    name="jobStatus"
                    id="statusNone"
                    value="none"
                    checked={profile.jobStatus === "none"}
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label text-base text-neutral-50 me-3"
                    htmlFor="statusNone"
                  >
                    暫不考慮
                  </label>
                </div>
              </fieldset>
            </div>

            <div className="row">
              <div className="col-12">
                <label
                  htmlFor="userSkills"
                  className="form-label text-base text-neutral-white"
                >
                  擅長技術
                </label>
                <input
                  type="text"
                  className="form-control text-base text-neutral-50 bg-neutral-500 EditProfile-input"
                  id="userSkills"
                  name="skills"
                  placeholder="例如：React, Node.js, TypeScript"
                  value={profile.skills}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="h5 text-neutral-white text-center mb-36px">
              社群連結
            </h3>
            <div className="row">
              <div className="col-12 mb-4">
                <label
                  htmlFor="socialGithub"
                  className="form-label text-base text-neutral-white"
                >
                  Github
                </label>
                <input
                  type="text"
                  className="form-control text-base text-neutral-50 bg-neutral-500 EditProfile-input"
                  id="socialGithub"
                  name="socialGithub"
                  placeholder="輸入網址"
                  value={profile.socialGithub}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12 mb-4">
                <label
                  htmlFor="socialLinkedin"
                  className="form-label text-base text-neutral-white"
                >
                  Linkedin
                </label>
                <input
                  type="text"
                  className="form-control text-base text-neutral-50 bg-neutral-500 EditProfile-input"
                  id="socialLinkedin"
                  name="socialLinkedin"
                  placeholder="輸入網址"
                  value={profile.socialLinkedin}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12 mb-4">
                <label
                  htmlFor="socialWebsite"
                  className="form-label text-base text-neutral-white"
                >
                  個人網站
                </label>
                <input
                  type="text"
                  className="form-control text-base text-neutral-50 bg-neutral-500 EditProfile-input"
                  id="socialWebsite"
                  name="socialWebsite"
                  placeholder="輸入網址"
                  value={profile.socialWebsite}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            className="cb-btn mx-auto d-block"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? "儲存中..." : "儲存變更"}
          </button>

        </div>
      </div>
    </>
  );
}

export default EditProfile;
