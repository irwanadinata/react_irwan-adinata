import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LandingPage from "../pages/landingPage"
import CreateProduct from "../pages/createProduct"
import ProductDetail from "../pages/productDetail";



export default function Router() {

    const router = createBrowserRouter([
      {
        path: "/",
        element: <LandingPage/>,
      },
      {
        path: "/create-product",
        element: <CreateProduct/>,
      },

      {
        path: "/product/:id",
        element: <ProductDetail />,
      },

      {
        path: "*",
        element: <div>404 page not found</div>,
      },
    ]);
  
    return <RouterProvider router={router} />;
  }
