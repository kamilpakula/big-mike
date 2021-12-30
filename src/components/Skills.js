import React from "react";
import "../styles/skills.scss";
import {
    SiJavascript,
    SiCss3,
    SiSass,
    SiHtml5,
    SiReact,
    SiGit,
} from "react-icons/si";

const Skills = () => {
    return (
        <section className="skills">
            <div className="skills__inscription">
                <h2 className="skills__h2">Technologie</h2>
                <h1 className="skills__h1">W czym się specjalizuję</h1>
            </div>
            <div className="skills__cards">
                <div className="skills__skills">
                    <div className="skills__head">
                        <i className="skills__icon">
                            <SiJavascript />
                        </i>
                        <h2 className="skills__sh2">JavaScript</h2>
                    </div>
                    <p className="skills__txt">FETCH - OOP - DOM - NPM</p>
                </div>
                <div className="skills__skills">
                    <div className="skills__head">
                        <i className="skills__icon">
                            <SiCss3 />
                        </i>

                        <h2 className="skills__sh2">CSS</h2>
                    </div>
                    <p className="skills__txt">
                        RWD - BEM - GRID - FLEXBOX - ANIMATIONS - BOOTSTRAP
                    </p>
                </div>
                <div className="skills__skills">
                    <div className="skills__head">
                        <i className="skills__icon">
                            <SiHtml5 />
                        </i>
                        <h2 className="skills__sh2">HTML</h2>
                    </div>
                    <p className="skills__txt">SEO - TAGS</p>
                </div>
                <div className="skills__skills">
                    <div className="skills__head">
                        <i className="skills__icon">
                            <SiReact />
                        </i>
                        <h2 className="skills__sh2">React</h2>
                    </div>
                    <p className="skills__txt">
                        JSX - STATE -PROPS - SETSTATE - CRA - REACT ROUTER
                    </p>
                </div>
                <div className="skills__skills">
                    <div className="skills__head">
                        <i className="skills__icon">
                            <SiGit />
                        </i>
                        <h2 className="skills__sh2">Git</h2>
                    </div>
                    <p className="skills__txt"> BRANCHING - REBASE - GITHUB </p>
                </div>
                <div className="skills__skills">
                    <div className="skills__head">
                        <i className="skills__icon">
                            <SiSass />
                        </i>
                        <h2 className="skills__sh2">Sass</h2>
                    </div>
                    <p className="skills__txt">VARIABLES - LOOPS </p>
                </div>
            </div>
        </section>
    );
};
export default Skills;
