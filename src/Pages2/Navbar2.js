import React from "react"; 
import {Link, NavLink} from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navbar2 = () => {

    return(
        <div className="navbar2"> 
                <NavLink to="/brand">Brand</NavLink>
                <NavLink to="/brand/apple">Apple</NavLink>
                <NavLink to="/brand/samsung">Samsing</NavLink>
                <NavLink to="/brand/nokia">Nokia</NavLink>
                <Outlet />
        </div>
                
    )
}

export default Navbar2;


