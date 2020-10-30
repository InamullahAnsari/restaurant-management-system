import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addRestaurant} from "../../actions/restaurantAction";
import shortid from "shortid";
import {useHistory} from 'react-router-dom';

const AddRestaurant = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [name, setName] = useState(""); 
    const [phone, setPhone] = useState(""); 
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const createRestaurant = (e) => {
        e.preventDefault();
        const new_restaurant = {
            id: shortid.generate(),
            name: name,
            phone: phone,
            email: email,
            address: address,
        };
        dispatch(addRestaurant(new_restaurant));
        history.push("/");
    };

    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add a Restaurant</div>
            <div className="card-body">
                <form onSubmit={(e) => createRestaurant(e)}>
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
                    <button className="btn btn-primary" type="submit">Create Restaurant</button>
                </form>
            </div>
        </div>
    )
}

export default AddRestaurant;
