import { createContext, useState } from "react";
import runChat from "./gemini";

export const context = createContext()

const ContextProvider = (props)=>{

    const [input, setInput] = useState("")
    const [current, setCurrent] = useState("")
    const [recents, setRecents] = useState([])
    const [hideMain, setHideMain] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")

    const delayText = (idx, nxtWrd)=>{
        setTimeout(function(){
            setResultData(prev=>prev+nxtWrd)
        },(idx/2.5)*15)
    }

    const newChat = ()=>{
        setLoading(false)
        setHideMain(false)
    }

    const sendData = async (prompt)=>{
        if(prompt !== "") {
            setResultData("")
            setLoading(true)
            setHideMain(true)

            let response
            if(prompt !== undefined){
                response = await runChat(prompt)
                setCurrent(prompt)
            }
            else {
                setRecents(prev=>[input, ...prev])
                setCurrent(input)
                response = await runChat(input)
            }

            let responseArr = response.split("**");
            let handledBold = "";
            for(let i = 0; i < responseArr.length; i++) {
                if (i % 2 === 0) {
                    handledBold += responseArr[i]
                }
                else {
                    handledBold += ("<b>"+responseArr[i]+"</b>")
                }
            }
            let handledBreaks = handledBold.split("*").join("<br/>")
            let updatedResponse = handledBreaks.replace("##", "")
                                //handledBreaks.replace("##", "<strong>").replace(/:/, ":</strong>")
            for(let i = 0; i < updatedResponse.length; i++){
                const nxtWrd = updatedResponse[i]
                delayText(i, nxtWrd)
            }
            
            setLoading(false)
            setInput("")
        }
    }

    const contextValue = {
        recents,
        setRecents,
        sendData,
        setCurrent,
        current,
        hideMain,
        loading,
        resultData,
        input,
        setInput,
        newChat,
    }

    return (
        <context.Provider value={contextValue}>
            {props.children}
        </context.Provider>
    )
}

export default ContextProvider