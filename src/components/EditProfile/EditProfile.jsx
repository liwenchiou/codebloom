import bgpng from "../../assets/images/index/section1BG.png";
import avatars from "../../assets/images/avatars.png";

function EditProfile() {
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
            <div className="mb-4 col-12 col-md-6">
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
                name="userName"
                placeholder="輸入姓名"
              />
            </div>
            <div className=" col-12 col-md-6">
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
                name="userBio"
                placeholder="輸入簡介"
              />
            </div>
          </div>

          <hr className="text-neutral-400 mb-56px" />

          <div className="mb-56px">
            <h3 className="h5 text-neutral-white text-center mb-36px">
              基本資料
            </h3>

            <div className="row mb-28px">
              <div className="col-12 mb-4 col-md-6">
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
                  name="userEmail"
                  placeholder="輸入Email"
                />
              </div>

              <div className="col-12 mb-4 col-md-6">
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
                  >
                    <option value="private">僅自己可見</option>
                  </select>
                </span>

                <input
                  type="tel"
                  className="form-control text-base text-neutral-50 bg-neutral-500 EditProfile-input"
                  id="userTel"
                  name="userTel"
                  placeholder="輸入電話"
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
                  name="userLocation"
                  className="form-select bg-neutral-500 text-neutral-200 text-base"
                >
                  <option value="">選擇所在地</option>
                </select>
              </div>

              <div className="col-12 col-md-6">
                <div className="form-label text-base text-neutral-white mb-4px">
                  性別
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input text-neutral-100 bg-neutral-500 me-12px"
                    type="radio"
                    name="gender"
                    id="genderMale"
                    value="male"
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
                  />
                  <label
                    className="form-check-label text-base text-neutral-50 me-12px"
                    htmlFor="genderPrivate"
                  >
                    不公開
                  </label>
                </div>
              </div>
            </div>

            <div className="row mb-28px">
              <div className="col-12 mb-4 col-md-6">
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
                  name="userJobTitle"
                  placeholder="輸入職稱"
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
                  name="userBirthday"
                  placeholder="輸入生日"
                />
              </div>
            </div>

            <div className="row mb-28px">
              <div className="col-12">
                <div className="form-label text-base text-neutral-white mb-4px">
                  求職狀態
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input text-neutral-100 bg-neutral-500 me-12px"
                    type="radio"
                    name="jobStatus"
                    id="statusOpen"
                    value="open"
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
                  />
                  <label
                    className="form-check-label text-base text-neutral-50 me-3"
                    htmlFor="statusNone"
                  >
                    暫不考慮
                  </label>
                </div>
              </div>
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
                  name="userSkills"
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
                />
              </div>
            </div>
          </div>

          <button type="button" className="cb-btn mx-auto d-block">儲存變更</button>

        </div>
      </div>
    </>
  );
}

export default EditProfile;
