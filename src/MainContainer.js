import React, { useState, useEffect, useContext, useRef } from "react";
import { context } from "./api/context";

function MainContainer({extend, setExtend, isSmallScreen, lightTheme}){
    const {sendData, current, hideMain, loading, resultData, setInput, input} = useContext(context)
    
    const [suggestions, setSuggestions] = useState([]);

    const allSuggestions = [
        {
            text : "Tell me about React js",
            icon : <i class="suggestion-icon fas fa-code" style={{fontSize:'16px'}}></i>,
        },
        {
            text : "Help me compare college majors",
            icon : <i class="suggestion-icon far fa-lightbulb"></i>,
        },
        {
            text : "Suggest beautiful places to see on an upcoming road trip",
            icon : <i className="suggestion-icon far fa-compass"></i>,
        },
        {
            text : "Create a 12-week study plan for learning a new language",
            icon : <i class="suggestion-icon fas fa-pencil-alt" style={{fontSize:'16px'}}></i>,
        },
        {
            text : "Help write SQL to generate a report",
            icon : <i class="suggestion-icon fas fa-code" style={{fontSize:'16px'}}></i>,
        },
        {
            text : "Teach me the concepts of game theory in simple terms",
            icon : <i class="suggestion-icon far fa-lightbulb"></i>,
        },
        {
            text : "Give me phrases to learn a new language",
            icon : <i className="suggestion-icon far fa-compass"></i>,
        },
        {
            text : "Give me a beginner's guide to learn AI",
            icon : <i class="suggestion-icon fas fa-pencil-alt" style={{fontSize:'16px'}}></i>,
        },
        {
            text : "Explain the following code step-by-step in detail",
            icon : <i class="suggestion-icon fas fa-code" style={{fontSize:'16px'}}></i>,
        },
        {
            text : "Explain what the keto diet is in simple terms",
            icon : <i class="suggestion-icon far fa-lightbulb"></i>,
        },
        {
            text : "Suggest a movie base on a genre",
            icon : <i className="suggestion-icon far fa-compass"></i>,
        },
        {
            text : "Plan a low-carb meal with what's available in my fridge",
            icon : <i class="suggestion-icon fas fa-pencil-alt" style={{fontSize:'16px'}}></i>,
        },
        {
            text : "Help design a database schema for a business",
            icon : <i class="suggestion-icon fas fa-code" style={{fontSize:'16px'}}></i>,
        },
        {
            text : "What are tips to improve public speaking skills?",
            icon : <i class="suggestion-icon far fa-lightbulb"></i>,
        },
        {
            text : "Create a list of power phrases for my resume",
            icon : <i className="suggestion-icon far fa-compass"></i>,
        },
        {
            text : "Provide questions to help me prepare for an interview",
            icon : <i class="suggestion-icon fas fa-pencil-alt" style={{fontSize:'16px'}}></i>,
        }
    ]

    const selectRandomSuggestions = () => {
        const shuffledSuggestions = allSuggestions.sort(() => 0.5 - Math.random());
        const selected = shuffledSuggestions.slice(0, 4);
        setSuggestions(selected);
      };
    
      useEffect(() => {
        selectRandomSuggestions();
      }, []);

    const url = 'https://one.google.com/explore-plan/gemini-advanced?utm_source=gemini&utm_medium=web&utm_campaign=sidenav_evo&g1_landing_page=65'
    const userInput = useRef()

    const enterPressed = (e)=>{
        if(e.key === 'Enter'){
            sendData();
        }
    }

    /////////////////////////////////////////// light theme style ///////////////////////////////////////////

    const mainStyle = {
        backgroundColor: '#ffffff'
    }
    return (
        <div id="main-container" style={lightTheme?mainStyle:null}>
            <nav>
                <div className="d-flex">
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

                {hideMain?
                <div className="generated-result text-light">
                    <div className="result-title">
                        <img src="images/pfp.jpg" className="pfp" />
                        <p>{current}</p>
                    </div>
                    <div className="result-data">
                        <img src="images/gemini-icon.png" draggable="false"/>
                        <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    </div>
                </div>
                :
                <>
                    <div>
                        <h2 className="hello">Hello, Developer</h2>
                        <h2 className="help">How can I help you today?</h2>
                    </div>

                    <div className="suggestions-container">
                        {suggestions.map((item, index) => (
                            <div key={index}>
                                <div className="suggestion pt-3 col-12 col-md-2 col-lg-3">
                                    <p>{item.text}</p>
                                    { item.icon }
                                </div>
                            </div>
                        ))}
                    </div>
                </>
                }

                <div className="main-prompt">
                    <div><input type="text" ref={userInput} className="prompt-input" placeholder="Enter a prompt here" onChange={(e)=>setInput(e.target.value)} onKeyPress={enterPressed} value={input}/></div>
                    <div className="prompt-icons">
                        <i class="image-icon far fa-image"></i>
                        <span className="popup image-popup"> Upload image </span>

                        <i class="mic-icon fas fa-microphone"></i>
                        <span className="popup mic-popup"> Use microphone </span>

                        <i class="submit-icon fas fa-paper-plane" onClick={()=>sendData()}></i>
                        <span className="popup submit-popup"> Submit </span>
                    </div>
                </div>
                <p className="bottom-msg">Gemini may display inaccurate info, including about people, so double-check its responses. <a href="#" className="privacy">Your privacy & Gemini Apps</a></p>
            </main>
        </div>
    );
}

export default MainContainer;