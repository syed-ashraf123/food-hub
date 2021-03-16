import React, { useContext } from "react";
import Navbar from "./components/Navbar";
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
function App() {
  return (
    <Router>
      <RestaurantProvider>
        <div className="App">
          <div className="container-fluid">
            <div id="top">
              <Navbar />
              <Switch>
                <Route path="/restaurant" exact component={RestaurantHome} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/login" exact component={Login} />
                <Route path="/loggenintry" exact component={LoggenInTry} />
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
                <Route path="/restaurant/:id" component={RestaurantHome} />
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
