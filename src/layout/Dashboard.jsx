import { Link, NavLink, Outlet } from "react-router-dom";
import SectionContainer from "../pages/Shared/SectionContainer/SectionContainer";
import { FaBars, FaCartShopping, FaHouse, FaList } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <>
      <SectionContainer>
        <div className="p-6 grid grid-cols-5 gap-6 min-h-screen">
          <div className="col-span-1 bg-yellow-600 rounded-md font-bold px-8 py-12 space-y-5">
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
            <hr />

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
          <div className="col-span-4">
            <Outlet />
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default Dashboard;
