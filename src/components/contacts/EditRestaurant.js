import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getRestaurant, updateRestaurant} from "../../actions/restaurantAction";
import shortid from "shortid";
import {useHistory} from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EditRestaurant = () => {
    let { id } = useParams();
    let history = useHistory();
    const dispatch = useDispatch();
    const restaurant = useSelector(state => state.restaurant.restaurant);
    const [name, setName] = useState(""); 
    const [phone, setPhone] = useState(""); 
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        if(restaurant != null){
            setName(restaurant.name);
            setPhone(restaurant.phone);
            setEmail(restaurant.email);
            setAddress(restaurant.address);
        }
        dispatch(getRestaurant(id));
    }, [restaurant]);

    const onUpdateRestaurant = (e) => {
        e.preventDefault();

        const update_restaurant = Object.assign(restaurant,{name: name, phone: phone, email: email, address: address});

        dispatch(updateRestaurant(update_restaurant));
        history.push("/");
    };

    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add a Restaurant</div>
            <div className="card-body">
                <form onSubmit={(e) => onUpdateRestaurant(e)}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter your Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter your Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter your Address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                    </div>
                    <button className="btn btn-warning" type="submit">Update Restaurant</button>
                </form>
            </div>
        </div>
    )
}

export default EditRestaurant;
