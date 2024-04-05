import SignIn from "../SignIn";
import Home from "../Home";
import Checkout from "../Checkout";
import MyAccount from "../MyAccount";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";

export default function App() {
  return (
    <h1 className="text-3xl font-bold">
      <SignIn />
      <Home />
      <Checkout />
      <MyAccount />
      <MyOrders />
      <NotFound />
    </h1>
  )
}
