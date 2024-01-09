import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Register from "../pages/auth/Register";
import SignIn from "../pages/auth/SignIn";
import HomeScreen from "../pages/home/HomeScreen";
import PrivateRouter from "./privateRouter";
import PaymentGrade from "../pages/Pay/PaymentGrade";
import Upgrade from "../pages/Pay/Upgrade";
import RegisterCard from "../pages/auth/RegisterCard";
import AuthLayout from "../components/layout/AuthLayour";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRouter>
        <Layout />
      </PrivateRouter>
    ),
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        index: true,
        path: "upgrade",
        element: <Upgrade />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { index: true, path: "register", element: <Register /> },
      {
        index: true,
        path: "login",
        element: <SignIn />,
      },
      {
        index: true,
        path: "api/verify-user/:userID",
        element: <SignIn />,
      },
      {
        path: "register-info",
        index: true,
        element: <RegisterCard />,
      },
    ],
  },
]);
