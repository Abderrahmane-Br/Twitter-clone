import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';



function NavbarItem({ icon, iconSolid, text }) {
    const location = useLocation().pathname;
    const navigate = useNavigate();
    function isActive() {
        return location === "/" + text.toLowerCase();
    }

    return (
        <li
            onClick={() => navigate("/" + text.toLowerCase(), { replace: true })}
        >
            <NavLink
                to={text.toLowerCase()}
                className="navbar__item item"
            >
                {/* <img src={icon} alt="" className="item__icon" /> */}
                {isActive() ? iconSolid : icon}
                <span className="item__text">{text}</span>
            </NavLink>
        </li>
    )
}

export default NavbarItem