import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      className="flex-none text-xl font-semibold text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 flex flex-col font-mono"
      to="/"
      aria-label="Bistro Boss Restaurant"
    >
      <span className="text-lg font-extrabold">Bistro Boss</span>
      <span className="text-base font-semibold -mt-2">Restaurant</span>
    </Link>
  );
};

export default Logo;
