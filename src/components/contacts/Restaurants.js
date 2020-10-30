import React from 'react';
// import {useSelector, useDispatch} from "react-redux";
import Restaurant from "./Restaurant";
// import { selectAllRestaurant, clearAllRestaurant, deleteAllRestaurant } from '../../actions/restaurantAction';

const Restaurants = () => {
    // const dispatch = useDispatch();
    // const [selectAll, setSelectAll] = useState(false);
    // const restaurants = useSelector((state) => state.restaurant.restaurants);
    // const selectedRestaurants = useSelector((state) => state.restaurant.selectedRestaurants);

    // useEffect(() => {
    //     if (selectAll) {
    //         dispatch(selectAllRestaurant(restaurants.map(restaurant => restaurant.id)));
    //     } else {
    //         dispatch(clearAllRestaurant());
    //     }
    // }, [selectAll]);

    return (
        <div>
        {/* {
            selectedRestaurants.length > 0 ? (
                <button className="btn btn-danger mb-3" onClick={() => dispatch(deleteAllRestaurant())}>Delete All</button>
            ) : null
        } */}
        <table className="table shadow">
  <thead>
    <tr>
      {/* <th>
          <div className="custom-control custom-checkbox">
            <input id="selectAll" type="checkbox" className="custom-control-input" value={selectAll} onClick={() => setSelectAll(!selectAll)} />
            <label htmlFor="selectAll" className="custom-control-label"></label>
          </div>
      </th> */}
      <th>Name</th>
      <th>Phone</th>
      <th>E-mail</th>
      <th>Address</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <Restaurant />
  </tbody>
</table>
        </div>
    )
}

export default Restaurants
