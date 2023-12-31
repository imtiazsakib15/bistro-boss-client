import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu/OurMenu";
import Order from "../pages/Order/Order/Order";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Cart from "../pages/Cart/Cart";
import Dashboard from "../layout/Dashboard";
import UserHome from "../pages/UserHome/UserHome";
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";
import PrivateRoute from "../routes/PrivateRoute";
import AdminHome from "../providers/AdminHome/AdminHome";
import AddItems from "../pages/AddItems/AddItems";
import AllUsers from "../pages/AllUsers/AllUsers";

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
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "user-home",
        element: <UserHome />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "admin-home",
        element: <AdminHome />,
      },
      {
        path: "add-items",
        element: <AddItems />,
      },
      {
        path: "all-users",
        element: <AllUsers />,
      },
    ],
  },
]);

export default router;
