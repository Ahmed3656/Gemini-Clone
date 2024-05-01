import React, { useRef } from "react";

function MainContainer({extend, setExtend, isSmallScreen}){
    const suggestions = [
        {
            text : "Suggest beautiful places to see on an upcoming road trip",
            icon : <i className="suggestion-icon far fa-compass"></i>,
        },
        {
            text : "Suggest beautiful places to see on an upcoming road trip",
            icon : <i className="suggestion-icon far fa-compass"></i>,
        },
        {
            text : "Suggest beautiful places to see on an upcoming road trip",
            icon : <i className="suggestion-icon far fa-compass"></i>,
        },
        {
            text : "Suggest beautiful places to see on an upcoming road trip",
            icon : <i className="suggestion-icon far fa-compass"></i>,
        }
    ]
    const url = 'https://one.google.com/explore-plan/gemini-advanced?utm_source=gemini&utm_medium=web&utm_campaign=sidenav_evo&g1_landing_page=65'
    return (
        <div id="main-container">
            <nav>
                {isSmallScreen ? 
                    (
                        <>
                            <span className="list-icon" onClick={() => setExtend(!extend)} style={{ marginLeft:'3px' }}>
                                <i className="fas fa-bars"></i>
                            </span>
                        </>
                    ) : null}
                <div className="gemini-button">
                    <span className="title"> Gemini </span>
                    <span className="gemini-arrow"></span>
                </div>
                
                <div className="profile d-flex">
                    <div className="advanced">
                        <img src="images/logo-pink.svg" className="logo-pink d-inline pe-2" />
                        <span onClick={()=>window.open(url, '_blank')}> Try Gemini Advanced </span>
                    </div>
                    <img src="images/pfp.jpg" className="pfp" />
                </div>
            </nav>


            <main>
                <div>
                    <h2 className="hello">Hello, Developer</h2>
                    <h2 className="help">How can I help you today?</h2>
                </div>

                <div className="suggestions-container text-light">
                    {suggestions.map((item, index) => (
                        <div key={index}>
                            <div className="suggestion pt-3 col-12 col-md-2 col-lg-3">
                                <p>{item.text}</p>
                                { item.icon }
                            </div>
                        </div>
                    ))}
                </div>

                <div className="main-prompt">
                    <div><input type="text" className="prompt-input" placeholder="Enter a prompt here"/></div>
                    <div className="prompt-icons">
                        <i class="image-icon far fa-image"></i>
                        <span className="popup image-popup"> Upload image </span>

                        <i class="mic-icon fas fa-microphone"></i>
                        <span className="popup mic-popup"> Use microphone </span>

                        <i class="submit-icon fas fa-paper-plane"></i>
                        <span className="popup submit-popup"> Submit </span>
                    </div>
                </div>
                <p className="bottom-msg">Gemini may display inaccurate info, including about people, so double-check its responses. <a href="#" className="privacy">Your privacy & Gemini Apps</a></p>
            </main>
        </div>
    );
}

export default MainContainer;