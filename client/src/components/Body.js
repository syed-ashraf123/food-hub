import React, { useContext } from "react";
import food from "./food.jpg";
import "./body.css";
import Typography from "@material-ui/core/Typography";
import { RestaurantContext } from "./context";
function Body() {
  const { list, get } = useContext(RestaurantContext);
  const getRestaurant = get;
  return (
    <div>
      <div className="row">
        <div className="col d-flex justify-content-around align-items-center">
          <div className="">
            <Typography variant="subtitle1">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </Typography>
            <Typography variant="h2">Food Hub</Typography>
          </div>

          <img
            src={food}
            className="img-fluid size d-none d-lg-block"
            alt="foood"
          />
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="form__group field  border border-black rounded">
          <button onClick={getRestaurant}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Body;
