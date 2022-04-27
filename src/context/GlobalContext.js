import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [globalData, setGlobalData] = useState([]);
    



    const getData = () => {
        const uri = `${process.env.REACT_APP_uri}/blog`
        axios.get(uri)
            .then(result => {
                setGlobalData(result.data)
            })

    }
    useEffect(getData, [])
    return <GlobalContext.Provider value={{ globalData, setGlobalData }}>
        {children}
    </GlobalContext.Provider>
}