import React, { useContext } from "react";
import { RestaurantContext } from "./context";
import MediaCard from "./Card";

function CardList() {
  const { list, get } = useContext(RestaurantContext);
  const [restaurant, setRestaurant] = list;
  return (
    <>
      <div class="row d-flex">
        {restaurant.map((res) => (
          <MediaCard name={res.name} />
        ))}
      </div>
    </>
  );
}

export default CardList;
