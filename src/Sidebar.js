import React, { useState, useRef, useEffect, useContext } from "react";
import { context } from "./api/context";

function Sidebar({extend, setExtend, isSmallScreen, lightTheme, setLightTheme}){
    const [showSettings, setShowSettings] = useState(false);
    const [showHelp, setShowHelp] = useState(false)
    const {sendData, recents, setCurrent, newChat, setInput} = useContext(context)
    const checkBox = useRef()

    const loadRecent = async(prompt)=>{
        setCurrent(prompt)
        setInput(prompt)
        await sendData(prompt)
    }

    const chatPopup = {
        left: '20%',
        top: '45px'
    }
    const settingsPopup = {
        top: '12px',
        left: '110%'
    }
    const sidebarStyle1 = {
        width: extend ? `240px` : '70px',
        transition: 'width 0.3s ease',
        whiteSpace: 'nowrap'
    }
    const sidebarStyle2 = {
        visibility: 'hidden',
        width: extend ? `240px` : '70px',
        transition: 'width 0.5s ease',
        whiteSpace: 'nowrap'
    }
    const showSettingsExtend = {
        bottom: '8px',
        left: '45%',
    }
    const url = 'https://myactivity.google.com/myactivity'
    return (
        <div id="sidebar" className={`d-flex flex-column justify-content-between ${lightTheme?'sidebar-light':null}`} style={isSmallScreen?(extend?sidebarStyle1:sidebarStyle2):sidebarStyle1}>
            <div className="chats">
                <span className="list-icon" onClick={()=>setExtend(!extend)}><i className="fas fa-bars"></i></span>
                {isSmallScreen?null:extend?<span className="popup menu-popup"> Collapse menu </span>:<span className=" popup menu-popup"> Expand menu </span>}

                <div className="new-chat" onClick={()=>newChat()}>
                    {lightTheme?<img className="plus-icon" src="images/plus_icon.png" draggable="false"/>:<img className="plus-icon" src="images/plus-icon-white.png" draggable="false"/>}
                    {extend?<span>New Chat</span>:null}
                    <span className="popup chat-popup" style={extend?chatPopup:null}> New chat </span>
                </div>

                {extend?
                    <div className="recents">
                        <p className="recent-title">Recent</p>
                        {recents.map((recent)=>{
                            return(
                            <div className="hide" onClick={()=>loadRecent(recent)}>
                                <i className="far fa-comment-alt"></i>
                                <span> {recent.slice(0,18)+ (recent.length>17?"...":"")} </span>
                            </div>
                            )
                        })}

                    </div>
                :null}
                
            </div>
            
            <div className="bottom-icons">
                <div className="item hide" onClick={()=>setShowHelp(!showHelp)}>
                    <i className="far fa-question-circle"></i>
                    {extend?<span>Help</span>:null}
                    <span className="popup" style={extend?settingsPopup:null}>Help</span>
                </div>
                {showHelp?
                <div className="help-list">
                    <p><i class="fas fa-user-shield"></i> Privacy Hub</p>
                    <p><i class="fas fa-calendar-week"></i> Updates </p>
                    <p><i class="fas fa-question"></i> Help</p>
                    <p><i class="far fa-question-circle"></i> FAQ</p>
                    <p><i class="fas fa-info-circle"></i> About Gemini Advanced</p>
                </div>
                :
                null
                }

                <div className="item hide" onClick={()=>window.open(url, '_blank')}>
                    <i className="fas fa-history"></i>
                    {extend?<span>Activity</span>:null}
                    <span className="popup" style={extend?settingsPopup:null}>Activity</span>
                </div>

                <div className="item hide" onClick={()=>setShowSettings(!showSettings)}>
                    <i className="fas fa-cog"></i>
                    {extend?<span>Settings</span>:null}
                    <span className="popup" style={extend?settingsPopup:null}>Settings</span>           
                </div>
                    {showSettings?
                        <div className="settings" style={extend?showSettingsExtend:null}>
                            <span className="setting"><i className="fas fa-puzzle-piece"></i> Extensions </span>
                            <span className="setting"><i className="fas fa-link"></i> Your public links</span>
                            <span className="setting">
                                <i className="fas fa-moon"></i> Dark theme 
                                <label className="switch">
                                    <input type="checkbox" ref={checkBox} onChange={()=>setLightTheme(!lightTheme)} defaultChecked/>
                                    <span className="slider"></span>
                                </label>
                            </span>
                        </div>
                    :
                        null
                    }
            </div>
        </div>
    );
}

export default Sidebar;