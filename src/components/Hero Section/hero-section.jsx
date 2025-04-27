import React from "react";
import './hero-section.css';


const Herosection = () => {
    return (
        <div className="hero-container">
            <div className="left-div">
                <h1 className="welcome">Prepare for your success with <span className="learnio">Learnio✨</span></h1>
                <p className="tagline">Achieve awesome scores in your exams. We’ll help you out !</p>
                <div className="button-spacer">
                    <button className="get-started"><span>Get Started</span></button>
                </div>
                <div className="join-community">
                    <img src="./joincommunity.png" alt="" className="join-community-img"/>
                    <button className="button" style={{ "--clr": "#B782FC" }}>
                    <span className="button__icon-wrapper">
                        <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="button__icon-svg"
                        width="10"
                        >
                        <path
                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                            fill="currentColor"
                        ></path>
                        </svg>

                        <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        width="10"
                        xmlns="http://www.w3.org/2000/svg"
                        className="button__icon-svg button__icon-svg--copy"
                        >
                        <path
                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                            fill="currentColor"
                        ></path>
                        </svg>
                    </span>
                    Join Community
                    </button>
                </div>
                <p className="last-tagline">Join a community of 10k+ amazing students</p>

            </div>
            <div className="right-div">
                <img src="./right-div.png" alt="" className="right-div-img"/>
            </div>
        </div>
    )
}

export default Herosection;