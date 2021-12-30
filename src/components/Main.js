import React from "react";
import "../styles/main.scss";
import { FaFacebook, FaGithub, FaLinkedin, FaRandom } from "react-icons/fa";
import programmer from "../images/programmer.png";
import { NavLink } from "react-router-dom";

const ski = {
    name: "start",
    path: "/Skills",
};

const Main = () => {
    return (
        <div className="main">
            <div className="main__square">
                <div className="main__text">
                    <h2 className="main__h2">Witaj!</h2>
                    <h3 className="main__h3">
                        Jestem junior front-end developer'em
                    </h3>
                    <button className="main__p">
                        <NavLink className="main__link" to={ski.path} exact>
                            {ski.name}
                        </NavLink>
                    </button>
                </div>
            </div>
            <div className="main__left"></div>
            <div className="main__right">
                <div className="main__picture">
                    <img className="main__img" src={programmer} alt="picture" />
                </div>
                <div className="main__btns">
                    <button className="main__btn">
                        <a href="" className="main__linkmedia">
                            <FaFacebook />
                        </a>
                    </button>
                    <button className="main__btn">
                        <a
                            href="https://github.com/kamilpakula"
                            target="_blank"
                            className="main__linkmedia"
                        >
                            <FaGithub />
                        </a>
                    </button>
                    <button className="main__btn">
                        <a
                            href="https://www.linkedin.com/in/kamil-paku%C5%82a-66b59619b/"
                            target="_blank"
                            className="main__linkmedia"
                        >
                            <FaLinkedin />
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Main;
