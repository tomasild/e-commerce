import Home from "../Homepage";
import SignIn from "../SignIn";
import Checkout from "../Checkout";
import MyAccount from "../MyAccount";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/signin",
    element: <SignIn />,
    errorElement: <NotFound />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
    errorElement: <NotFound />,
  },
  {
    path: "/myaccount",
    element: <MyAccount />,
    errorElement: <NotFound />,
  },
  {
    path: "/myorders",
    element: <MyOrders />,
    errorElement: <NotFound />,
  },
  {
    path: "/*",
    element: <NotFound />,
    errorElement: <NotFound />,
  },
]);

export default function App() {
    return (
      <>
        <RouterProvider router={router} />
      </>
    )
  }
  