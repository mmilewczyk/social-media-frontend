import React, {useLayoutEffect, useState} from 'react';
import "./NavBar.css"
import Search from "../Search/Search";
import {Link, useLocation} from "react-router-dom";
import {UilSetting} from "@iconscout/react-unicons";
import Notifications from "../../img/notifications.png";
import Comment from "../../img/comment.png";
import Logo from "../../img/logo.png";
import {logout} from "../../actions/AuthAction";
import {useDispatch} from "react-redux";

const NavBar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
    }
    const [authPage, setAuthPage] = useState(false);
    const location = useLocation();

    useLayoutEffect(() => {
        setAuthPage(location.pathname === '/auth');
    }, [location.pathname]);


    return (
        <>
            {authPage === false &&
                <div className={"NavBar"}>
                    <Link to={"/home"}>
                        <img src={Logo} alt={""}/>
                    </Link>
                    <Search/>
                    <div className={"NavIcons"}>
                        <UilSetting/>
                        <img src={Notifications} alt={""}/>
                        <img src={Comment} alt={""}/>
                        <button className={"button logout-button"} onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            }
        </>
    )
};

export default NavBar;
