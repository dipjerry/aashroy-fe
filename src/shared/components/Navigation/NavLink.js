import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLink.css'

const NavLinks = () => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/report_homeless">Report Homeless</NavLink>
        </li>
        <li>
            <NavLink to="/ngo">NGOs</NavLink>
        </li>
        <li>
            <NavLink to="/crime">Crime</NavLink>
        </li>
        <li>
            <NavLink to="/ways_to_help">Ways to help</NavLink>
        </li>
        <li>
            <NavLink to="/users">Users</NavLink>
        </li>
    </ul>
}

export default NavLinks;