import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
        main
        <Outlet />
        <Footer />
    </div>
  );
};

export default MainLayout;
