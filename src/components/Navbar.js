import React from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    return (
            <nav id="navbar-example2" className="navbar navbar-light " >
                <NavLink activeClass="active" 
                className="nav-link text-white " 
                to="/" >
                    Главная
                </NavLink>
                <ul className="nav nav-pills ">
                     <li className="nav-item ">
                        <NavLink activeClass="active" className="nav-link text-white" to="nasa"  >Поиск</NavLink>
                    </li>
                </ul>
             </nav>
           
    
    )
};

export default Navbar;