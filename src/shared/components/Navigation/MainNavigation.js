import React , {useState}  from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLink";
import SideDrawer from "./SideDrawer";
import BackDrop from "../UIelements/BackDrop";

import './MainNavigation.css' 

const MainNavigation = () => {
    const [drawerIsOpen , setDrawerIsOpen] = useState(false);
    const OpenDrawerHandler = () => {
        setDrawerIsOpen(true);
    };
    const CloseDrawerHandler = () => {
        setDrawerIsOpen(false);
    };
    return (
        <React.Fragment>
            {drawerIsOpen && <BackDrop onClick={CloseDrawerHandler} />}
            <SideDrawer show={drawerIsOpen} onClick={CloseDrawerHandler}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks/>
                </nav>        
            </SideDrawer> 
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={OpenDrawerHandler }>
                    <span/>
                    <span/>
                    <span/>
                </button>
                <h1 className="main-navigation__title"><Link to="/">AASHROY</Link></h1>
                <nav>
                <NavLinks/>        </nav>
            </MainHeader>
        </React.Fragment>
    )
};

export default MainNavigation