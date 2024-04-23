import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Homepage";
import SignIn from "../SignIn";
import Checkout from "../Checkout";
import MyAccount from "../MyAccount";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import Contact from "../Contact";
import Products from "../Products";
import Help from "../Help";
import NavbarXL from "../../components/Navbar";
import Layout from "../../components/Layout";
import { ShoppingCartProvider } from "../../context";

const App = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/signin", element: <SignIn /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/myorders", element: <MyOrders /> },
    { path: "/products", element: <Products /> },
    { path: "/contact", element: <Contact /> },
    { path: "/support", element: <Help /> },
    { path: "*", element: <NotFound /> },
  ];

  return (
    <ShoppingCartProvider>
      <Router>
        <NavbarXL />
        <Layout>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Layout>
      </Router>
    </ShoppingCartProvider>
  );
};

export default App;
