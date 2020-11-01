import React from 'react';
import {Link} from 'react-router-dom';

const Restauant = ({restaurant, selectAll}) => {
    const {name, phone, email, address,id} = restaurant;
    return (
    <tr>
      <td><Link to={`/restaurants/restaurantDetails`}>{name}</Link></td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td className="actions">
          <Link to={`/restaurants/edit/${id}`}>
              <span className="material-icons mr-2">edit</span>
          </Link>
      </td>
    </tr>
    )
}

export default Restauant
