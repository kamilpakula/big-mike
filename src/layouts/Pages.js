import React from "react";
import { Route } from "react-router";
import Main from "../components/Main";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";

const Pages = () => {
    return (
        <div>
            <Route path="/" exact component={Main} />
            <Route path="/Skills" component={Skills} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
        </div>
    );
};
export default Pages;
