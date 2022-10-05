//Import logo to header
import logo from "../Assets/logo.png";
//Import react
import React from "react";
const Header = () => {
    return ( //JSX tbd
        <div id="logo">
            <img src={logo} alt="logo" />
        </div>
    );
}
export default Header;