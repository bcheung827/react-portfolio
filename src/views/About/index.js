import React from "react";
import "./style.css";

function About() {
    return (
        <div className="viewThree" id="about">
            <div className="row">
                {/* <div className="col-md about-left">
                    <img src={MeOnWater} className="about-photo img-fluid" alt="Me"></img>
                </div> */}
                <div className="col-md">
                    <h3 className="viewTitle" id="aboutTitle">ABOUT</h3>
                    <div className="row align-self-center bioText">
                        <p className="bio">I am a current student at UPenn LPS Coding Bootcamp learning about Full Stack Development. I have a Bachelor of Science in Health Services Administration and a minor in Business Administration. My goal is to find a new career in software development.</p>
                        <p className="bio"><span className="skillHeader">Here are some skills I have learned/are learning</span>
                            <ul className=" skillList text-center">
                                <li className="skill">HTML & CSS</li>
                                <li className="skill">JavaScript</li>
                                <li className="skill">JQuery</li>
                                <li className="skill">MongoDB</li>
                                <li className="skill">Node</li>
                                <li className="skill">Express</li>
                                <li className="skill">SQL</li>
                                <li className="skill">ReactJS</li>
                            </ul>
                        </p>
                        {/* <p className="bio">I look forward to working with you!</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
