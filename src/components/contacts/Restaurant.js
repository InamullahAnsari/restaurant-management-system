import React from 'react';
import {Link} from 'react-router-dom';
import {deleteRestaurant} from '../../actions/restaurantAction';
import {useDispatch} from 'react-redux';

const Restaurant = ({restaurant, selectAll}) => {
    const dispatch = useDispatch();
    const {name, phone, email, address, id} = restaurant;
    return (
            <tr>
      {/* <td>
          <div className="custom-control custom-checkbox">
            <input checked={selectAll} type="checkbox" className="custom-control-input" />
            <label className="custom-control-label"></label>
          </div>
      </td> */}
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td className="actions">
          <Link to={`/restaurants/edit/${id}`}>
              <span className="material-icons mr-2">edit</span>
          </Link>
              <span className="material-icons text-danger" onClick={() => dispatch(deleteRestaurant(id))}>remove_circle</span>
      </td>
    </tr>
    )
}

export default Restaurant
