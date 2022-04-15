import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [globalData, setGlobalData] = useState([]);

    useEffect(() => {
        fetch('/dataset/data.json')
            .then(res => res.json())
            .then(data => setGlobalData(data))
    }, [])
    return <GlobalContext.Provider value={{globalData}}>
        {children}
    </GlobalContext.Provider>
}