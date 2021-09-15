import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {AuthContext} from '../../context/auth-context';
import './NavLink.css';

const NavLinks = () => {
  const auth = useContext(AuthContext);

  return <ul className="nav-links">
    <li>
      <NavLink to="/homeless">Homeless</NavLink>
    </li>
    {/* <li>
      <NavLink to="/ngo">NGOs</NavLink>
    </li> */}
    <li>
      <NavLink to="/crime">Crime</NavLink>
    </li>
    <li>
      <NavLink to="/ways_to_help">Ways to help</NavLink>
    </li>
    {auth.isLoggedIn && (
      <li>
        <NavLink to="/users">Profile</NavLink>
      </li>
    )}

    {!auth.isLoggedIn && (
      <li>
        <NavLink to="/auth">AUTHENTICATE</NavLink>
      </li>
    )}
    {auth.isLoggedIn && (
      <li>
        <button onClick={auth.logout}>LOGOUT</button>
      </li>
    )}
  </ul>;
};

export default NavLinks;
