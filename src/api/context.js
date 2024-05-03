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

    const sendData = async (prompt)=>{
        setResultData("")
        setLoading(true)
        setHideMain(true)
        setCurrent(input)
        const response = await runChat(input)
        setResultData(response)
        setLoading(false)
        setInput("")
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
    }

    return (
        <context.Provider value={contextValue}>
            {props.children}
        </context.Provider>
    )
}

export default ContextProvider