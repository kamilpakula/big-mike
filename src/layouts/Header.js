import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.scss";
import logo from "../images/logo.png";
import { FaHome, FaTools } from "react-icons/fa";
import { AiOutlineFundProjectionScreen, AiFillContacts } from "react-icons/ai";
const links = [
    { name: <FaHome />, path: "/" },
    { name: <FaTools />, path: "/Skills" },
    { name: <AiOutlineFundProjectionScreen />, path: "/About" },
    { name: <AiFillContacts />, path: "/Contact" },
];

const Header = () => {
    const menu = links.map((item) => (
        <li className="head__item" key={item.name}>
            <NavLink to={item.path} exact>
                {item.name}
            </NavLink>
        </li>
    ));
    return (
        <section className="Head">
            <div className="head__left">
                <img src={logo} alt="logo" className="head__btn"></img>
            </div>
            <div className="head__right">
                <nav className="head__navi">
                    <ul className="head__list">{menu}</ul>
                </nav>
            </div>
        </section>
    );
};

export default Header;
