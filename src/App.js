import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import Classes from "./components/Classes/Classes";
import AdvanceGym from "./components/AdvanceGym/AdvanceGym";
import MembershipForm from "./components/MembershipForm/MembershipForm";
import Checkout from "./components/Checkout/Checkout";
import Service from "./components/Service/Service";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/class">
            <Classes />
          </Route>
          <Route exact path="/pricing">
         <Pricing></Pricing>
       </Route>
          <Route path="/advanceGym/:title">
            <AdvanceGym />
          </Route>
          <Route path="/checkout">
            <Checkout></Checkout>
          </Route>
          <Route path="/membership-form">
            <MembershipForm></MembershipForm>
          </Route>
          <Route path="/service">
             <Service />
            <Footer></Footer>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
