import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [globalData, setGlobalData] = useState([]);
    const getData = () => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setGlobalData(data))
    }
    useEffect(getData, [])
    return <GlobalContext.Provider value={{ globalData,setGlobalData }}>
        {children}
    </GlobalContext.Provider>
}