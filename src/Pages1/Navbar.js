import React from "react"; 
import {Link, NavLink} from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navbar = () => {

    return(
        <div className="navbar1"> 
                <NavLink to="/">Home</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <Outlet />
        </div>
                
    )
}

export default Navbar;



{/*             <a href="/">Home</a>
                <a href="/blog">Blog</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
 */}