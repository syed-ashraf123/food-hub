import React, { useState, useEffect } from "react";
import "./RestaurantHome.css";
import Typography from "@material-ui/core/Typography";
import ItemCard from "./ItemsCard";

function RestaurantHome({ match }) {
  const reqUrl = "http://localhost:4000/items";
  const [resItem, setResItem] = useState([]);
  useEffect(() => {
    response();
  }, []);
  const response = async () => {
    const response = await fetch(reqUrl + `?id=${match.params.id}`);
    const res = await response.json();
    console.log(res);
    setResItem(res);
  };
  // const getRestaurant = async (area) => {
  //   const response = await fetch(reqUrl + `?area=${area}`);
  //   console.log(reqUrl + `?area=${area}`);
  //   const res = await response.json();
  //   console.log(res);
  //   setRestaurant(res);
  // };
  return (
    <div>
      <div className="row">
        <div className="col-lg-6 col-sm-12 d-flex">
          <div id="sideborder" className="my-auto">
            <div className="pt-5">
              <Typography variant="h2" className="ml-3">
                Taj
              </Typography>
              <strong className="ml-4">Fast Food Corner</strong>
              <br />
              <strong className="ml-4">Minimum Order Rs. 60</strong>
              <br />
              <strong className="ml-4">Accepts UPI and Cash Payments</strong>
              <br />
              <br />
              <Typography variant="subtitle1" className="ml-4">
                2/534,Sec-H,Jankipuram,Lucknow
              </Typography>
              <Typography variant="subtitle1" className="ml-4">
                +91 85458645856
              </Typography>
              <Typography variant="subtitle1" className="ml-4">
                9:00 AM to 10:00 PM
              </Typography>
            </div>
          </div>
        </div>

        <div id="head" className="col-lg-6 col-sm-12"></div>
      </div>
      <div className="row">
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
}

export default RestaurantHome;
