import React, { useContext } from "react";
import Navbar1 from "./components/Navbar";
import Body from "./components/Body";
import CardList from "./components/CardList";
import "./App.css";
import Footer from "./components/Footer";
import Signup from "./components/Singup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RestaurantProvider, RestaurantContext } from "./components/context";
import RestaurantHome from "./components/RestaurantHome";
import Login from "./components/Login";
import LoggenInTry from "./components/LoggenInTry";
import SellerRegisteration from "./components/SellerRegisteration";
import SellerLogin from "./components/SellerLogin";
import SellerDashboard from "./components/seller/SellerDashboard";
import Checkout from "./components/Checkout";
function App() {
  return (
    <Router>
      <RestaurantProvider>
        <div className="App">
          <div className="container-fluid">
            <div id="top">
              <Navbar1 />
              <Switch>
                <Route path="/restaurant" exact component={RestaurantHome} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/login" exact component={Login} />
                <Route path="/sellerlogin" exact component={SellerLogin} />
                <Route
                  path="/sellerdashboard"
                  exact
                  component={SellerDashboard}
                />
                <Route path="/checkout" exact component={Checkout} />
                <Route
                  path="/sellerregisteration"
                  exact
                  component={SellerRegisteration}
                />
                <Route
                  path="/"
                  exact
                  render={() => (
                    <React.Fragment>
                      <Body />
                      <CardList />
                    </React.Fragment>
                  )}
                />
                <Route path="/restaurant/" component={RestaurantHome} />
              </Switch>
              <Footer />
            </div>
          </div>
        </div>
      </RestaurantProvider>
    </Router>
  );
}

export default App;
