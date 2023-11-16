import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu/OurMenu";
import Order from "../pages/Order/Order/Order";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/our-menu",
        element: <OurMenu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
    ],
  },
  {
    path: "/login",
    element: <Home />,
  },
]);

export default router;
