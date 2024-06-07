import { Link } from "react-router-dom";
import SidebarComp from "../../components/customer/Sidebar";

const ProfilePage = () => {
  return (
    <>
      {/* <!-- breadcrumb --> */}
      <div className="container py-4 flex items-center gap-3">
        <Link to="/" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </Link>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Profile</p>
      </div>
      {/* <!-- ./breadcrumb --> */}

      {/* <!-- wrapper --> */}
      <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        {/* <!-- sidebar --> */}
        <SidebarComp />
        {/* <!-- ./sidebar --> */}

        {/* <!-- info --> */}
        <div className="col-span-9 shadow rounded px-6 pt-5 pb-7">
          <h4 className="text-lg font-medium capitalize mb-4">
            Profile information
          </h4>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first">First name</label>
                <input
                  type="text"
                  name="first"
                  id="first"
                  className="input-box"
                />
              </div>
              <div>
                <label htmlFor="last">Last name</label>
                <input
                  type="text"
                  name="last"
                  id="last"
                  className="input-box"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="birthday">Birthday</label>
                <input
                  type="date"
                  name="birthday"
                  id="birthday"
                  className="input-box"
                />
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender" className="input-box">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input-box"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone number</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="input-box"
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
            >
              save changes
            </button>
          </div>
        </div>
        {/* <!-- ./info --> */}
      </div>
      {/* <!-- ./wrapper --> */}
    </>
  );
};

export default ProfilePage;
