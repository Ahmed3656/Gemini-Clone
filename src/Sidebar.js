import React, { useState, useRef } from "react";

function Sidebar({extend, setExtend, isSmallScreen, lightTheme, setLightTheme}){
    const [showSettings, setShowSettings] = useState(false);
    const checkBox = useRef()

    const chatPopup = {
        left: '20%',
        top: '45px'
    }
    const settingsPopup = {
        top: '12px',
        left: '110%'
    }
    const sidebarStyle = {
        visibility: 'hidden',
    }
    const showSettingsExtend = {
        bottom: '8px',
        left: '45%',
    }
    const url = 'https://myactivity.google.com/myactivity'
    return (
        <div id="sidebar" className="d-flex flex-column justify-content-between" style={isSmallScreen?(extend?null:sidebarStyle):null}>
            <div className="chats">
                <span className="list-icon" onClick={()=>setExtend(!extend)}><i className="fas fa-bars"></i></span>
                {isSmallScreen?null:extend?<span className="popup menu-popup"> Collapse menu </span>:<span className=" popup menu-popup"> Expand menu </span>}

                <div className="new-chat">
                    {/* <i className="plus-icon fas fa-plus"></i> */}
                    <img className="plus-icon" src="images/plus-icon-white.png" draggable="false"/>
                    {extend?<span>New Chat</span>:null}
                    <span className="popup chat-popup" style={extend?chatPopup:null}> New chat </span>
                </div>

                {extend?
                    <div className="recents">
                    <p className="recent-title">Recent</p>

                    <div className="hide">
                        <i className="far fa-comment-alt"></i>
                        <span> What is react... </span>
                    </div>
                    <div className="hide">
                        <i className="far fa-comment-alt"></i>
                        <span> What is react...................... </span>
                    </div>
                </div>
                :null}
                
            </div>
            
            <div className="bottom-icons">
                <div className="item hide">
                    <i className="far fa-question-circle"></i>
                    {extend?<span>Help</span>:null}
                    <span className="popup" style={extend?settingsPopup:null}>Help</span>
                </div>

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