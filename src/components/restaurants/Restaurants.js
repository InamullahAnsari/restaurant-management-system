import React from 'react';
import {useSelector} from "react-redux";
import Restaurant from "./Restaurant";

const Restaurants = () => {
    const restaurants = useSelector((state) => state.restaurant.restaurants);
    
    return (
        <div>
        <table className="table shadow">
  <thead>
    <tr>
      <th>Name</th>
      <th>Phone</th>
      <th>E-mail</th>
      <th>Address</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {
      restaurants.map((restaurant) => (<Restaurant restaurant={restaurant} key={restaurant.id} />))
    }
  </tbody>
</table>
        </div>
    )
}

export default Restaurants
