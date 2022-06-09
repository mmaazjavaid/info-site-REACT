import React from "react";
import logo from "../images/reacticon.png"
const Navbar = () => {
    return (
        <div className="nav">
            <div className="logo">
                <img src={logo} alt="" width="30px" height="30px" />
                <h3 className="logo-name">ReactFacts</h3>  
            </div>
            <div className="description">
                React Course Project-1
            </div>
        </div>
    );
};

export default Navbar;