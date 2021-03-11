import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import CardList from "./components/CardList";
import { RestaurantProvider, RestaurantContext } from "./components/context";
function App() {
  return (
    <RestaurantProvider>
      <div className="App">
        <Navbar />
        <div className="container-fluid">
          <Body />

          <CardList />
        </div>
      </div>
    </RestaurantProvider>
  );
}

export default App;
