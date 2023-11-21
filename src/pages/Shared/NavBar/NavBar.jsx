import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import { FaCartShopping } from "react-icons/fa6";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const { cart } = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-slate-700 border-b border-gray-200 text-sm dark:bg-gray-800 dark:border-gray-700 fixed opacity-90">
      <nav
        className="relative max-w-[90rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between pt-4 pb-3">
          <Logo />
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border bg-white border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block flex-shrink-0 hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-6 sm:mt-0 sm:ps-7 pb-5 sm:pb-0 text-center text-white font-medium">
            <NavLink
              className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
              to="/our-menu"
            >
              Our Menu
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
              to="/order/salad"
            >
              Order
            </NavLink>

            {user?.email ? (
              <>
                <Link
                  to={"/dashboard/cart"}
                  className="text-xl mx-auto sm:mx-0 relative"
                >
                  <FaCartShopping />
                  <span className="absolute text-xs -right-2 -top-2 bg-yellow-700 rounded-full w-4 h-4">
                    {cart?.length}
                  </span>
                </Link>
                <button
                  onClick={handleLogOut}
                  className="bg-gray-50 text-black px-3 py-2"
                >
                  Log Out
                </button>
              </>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : ""
                }
                to="/login"
              >
                Log in
              </NavLink>
            )}

            {user?.photoURL && (
              <div className="mx-auto sm:mx-0">
                <img
                  className="w-9 h-9 border-2 border-yellow-600 rounded-full"
                  src={user?.photoURL}
                  alt="User"
                />
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
