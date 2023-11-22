import { Link, NavLink, Outlet } from "react-router-dom";
import SectionContainer from "../pages/Shared/SectionContainer/SectionContainer";
import {
  FaBars,
  FaCartShopping,
  FaHouse,
  FaList,
  FaUsers,
  FaUtensils,
} from "react-icons/fa6";

const Dashboard = () => {
  const isAdmin = true;

  return (
    <>
      <SectionContainer>
        <div className="p-6 grid grid-cols-4 gap-6 min-h-screen">
          <div className="col-span-1 bg-yellow-600 rounded-md font-bold px-8 py-12 space-y-5">
            {isAdmin ? (
              <>
                <div>
                  <NavLink
                    className={({ isActive }) => (isActive ? "text-white" : "")}
                    to="/dashboard/admin-home"
                  >
                    <span className="flex items-center gap-3">
                      <FaHouse />
                      Admin Home
                    </span>
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    className={({ isActive }) => (isActive ? "text-white" : "")}
                    to="/dashboard/add-items"
                  >
                    <span className="flex items-center gap-3">
                      <FaUtensils />
                      Add Items
                    </span>
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    className={({ isActive }) => (isActive ? "text-white" : "")}
                    to="/dashboard/all-users"
                  >
                    <span className="flex items-center gap-3">
                      <FaUsers />
                      All Users
                    </span>
                  </NavLink>
                </div>
              </>
            ) : (
              <>
                <div>
                  <NavLink
                    className={({ isActive }) => (isActive ? "text-white" : "")}
                    to="/dashboard/user-home"
                  >
                    <span className="flex items-center gap-3">
                      <FaHouse />
                      User Home
                    </span>
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    className={({ isActive }) => (isActive ? "text-white" : "")}
                    to="/dashboard/cart"
                  >
                    <span className="flex items-center gap-3">
                      <FaCartShopping />
                      My Cart
                    </span>
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    className={({ isActive }) => (isActive ? "text-white" : "")}
                    to="/dashboard/payment-history"
                  >
                    <span className="flex items-center gap-3">
                      <FaList />
                      Payment History
                    </span>
                  </NavLink>
                </div>
              </>
            )}

            <hr />
            {/* Common lnks for admin and users */}
            <div>
              <Link to="/">
                <span className="flex items-center gap-3">
                  <FaHouse />
                  Home
                </span>
              </Link>
            </div>
            <div>
              <Link to="/order/salad">
                <span className="flex items-center gap-3">
                  <FaBars />
                  Order
                </span>
              </Link>
            </div>
          </div>
          <div className="col-span-3">
            <Outlet />
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default Dashboard;
