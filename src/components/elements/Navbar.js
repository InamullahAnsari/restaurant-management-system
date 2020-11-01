import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Restaurant Management System
                </Link>
                <div>
                    <Link to="/restaurants/add" className="btn btn-light ml-auto">
                        Add Restaurant
                    </Link>
                </div>
            </div>  
        </nav>
    )
}

export default Navbar
