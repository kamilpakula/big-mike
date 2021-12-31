import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.scss";
import Header from "./Header";
import Pages from "./Pages";

class App extends Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <div className="App">
                    <header className="Heads">{<Header />}</header>
                    <section className="Start">{<Pages />}</section>
                </div>
            </Router>
        );
    }
}

export default App;
