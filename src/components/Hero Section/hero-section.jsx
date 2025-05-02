import React from "react";
import './hero-section.css';
import Card from "../Card/Card";
import Blob from "../Blob/Blob";

const card1 = {
    img:"./youtube.jpg",
    heading:"Best Handpicked Videos",
    desc:"Our passionate team of experts carefully curates the best card content, so you can focus only on what truly matters."
}
const card2 = {
    img:"./ytstudnt.jpg",
    heading:"Top Educational Picks",
    desc:"Learn from top educators and thought leaders through a thoughtfully curated list of impactful videos."
}
const card3 = {
    img:"./quiz.jpg",
    heading:"Inspiring Creators",
    desc:"Discover rising stars and creative storytellers whose content will inspire and entertain you."
}

const Herosection = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <div className="left-div">
                    <h1 className="welcome">Prepare for your success with <span className="learnio">Learnio✨</span></h1>
                    <p className="tagline">Achieve awesome scores in your exams. We’ll help you out !</p>
                    <div className="button-spacer">
                        <button className="get-started">Get Started</button>
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
            <div className="scroll-to-explore">
                <p>Scroll to Explore</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 37 37" fill="none">
                    <path d="M11.1552 19.6869L18.009 26.5052L24.8628 19.6869C24.9437 19.6254 25.0104 19.5471 25.0584 19.4575C25.1064 19.3679 25.1345 19.2691 25.141 19.1676C25.1475 19.0662 25.1321 18.9646 25.0959 18.8696C25.0596 18.7746 25.0034 18.6886 24.9311 18.6172C24.8587 18.5458 24.7718 18.4909 24.6763 18.456C24.5809 18.4211 24.479 18.4072 24.3777 18.4151C24.2763 18.423 24.1779 18.4526 24.089 18.5019C24.0001 18.5512 23.9228 18.619 23.8624 18.7007L18.7185 23.802V10.2293C18.7185 10.0411 18.6438 9.86065 18.5107 9.72759C18.3777 9.59453 18.1972 9.51978 18.009 9.51978C17.8208 9.51978 17.6404 9.59453 17.5073 9.72759C17.3743 9.86065 17.2995 10.0411 17.2995 10.2293V23.802L12.1556 18.7007C12.022 18.5681 11.8412 18.4939 11.6529 18.4946C11.4646 18.4952 11.2843 18.5707 11.1517 18.7043C11.019 18.8379 10.9449 19.0187 10.9455 19.207C10.9462 19.3953 11.0216 19.5756 11.1552 19.7082V19.6869Z" fill="black"/>
                </svg>
            </div>
            <div className="post-hero-section">
                <Blob/>
                <h1 className="what-we-do">What we do?</h1>
                <p className="tag">Learnio helps you ace your exam by using . . .</p>
                <div className="cards-panel">
                <div className="cards-panel">
                    <Card info={card1}/>
                    <Card info={card2}/>
                    <Card info={card3}/>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Herosection;