import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";

import Index from "@/pages/index";
import Login from "@/pages/auth/login";
import CreateProduct from "@/pages/products/createProduct";

import { setAxiosConfig } from "@/utils/api/axiosWithConfig";
import { useToken } from "@/utils/states/contexts/token-context";
import AIPage from "@/pages/openai";

export default function Router() {
  const { token } = useToken();

  useEffect(() => {
    setAxiosConfig("", "https://651a8337340309952f0d6f8b.mockapi.io");
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/login",
      element: token === "" ? <Login /> : <Navigate to="/" />,
    },
    {
      path: "/products",
      element: token === "" ? <Navigate to="/login" /> : <CreateProduct/>,
    },
    {
      path: "/openai",
      element: <AIPage />,
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}