// import errorImg from '../../asset/404.gif';

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="py-20 sm:py-32 md:py-40 text-center">
      {/* <img src={errorImg} alt="404 error" /> */}
      <h1 className="text-2xl sm:text-4xl font-bold">404 error</h1>
      <Link to={"/"} className="text-center pt-8 sm:pt-12">
        <button className="uppercase sm:text-lg font-medium border-b-2 border-black px-5 py-2 rounded-md hover:bg-slate-400 mt-8">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
