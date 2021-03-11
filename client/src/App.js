import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RestaurantProvider, RestaurantContext } from "./components/context";
import RestaurantHome from "./components/RestaurantHome";
function App() {
  return (
    <Router>
      <RestaurantProvider>
        <div className="App">
          <div className="container-fluid">
            <Switch>
              <Route path="/restaurant" exact component={RestaurantHome} />
              <Route
                path="/"
                exact
                render={() => (
                  <React.Fragment>
                    <Navbar />
                    <Body />
                    <CardList />
                    <Footer />
                  </React.Fragment>
                )}
              />
              <Route path="/restaurant/:id" component={RestaurantHome} />
            </Switch>
          </div>
        </div>
      </RestaurantProvider>
    </Router>
  );
}

export default App;
