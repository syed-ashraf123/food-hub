import React, { useContext } from "react";
import { RestaurantContext } from "./context";
import MediaCard from "./Card";
import { Link } from "react-router-dom";

function CardList() {
  const { list, get } = useContext(RestaurantContext);
  const [restaurant, setRestaurant] = list;
  return (
    <>
      <div class="row d-flex">
        {restaurant.map((res) => (
          // <Link to={`/restaurant/${res._id}`}>
          <MediaCard
            name={res.name}
            thumbnail={res.thumbnail}
            link={`/restaurant/${res._id}`}
          />
          // </Link>
        ))}
      </div>
    </>
  );
}

export default CardList;
