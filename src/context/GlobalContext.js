import axios from "axios";
import { signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import axiosPrivate from "../api/axiosPrivate";
import auth from "../utilities/firebase.init";
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [globalData, setGlobalData] = useState([]);
    const [profileData, setProfileData] = useState({});

    const getData = () => {
        const uri = `${process.env.REACT_APP_uri}/blog`
        axios.get(uri)
            .then(result => {
                setGlobalData(result.data)
            })

    }
    const getUser = async (email) => {
        try {
            const uri = `/user?email=${email}`
            const result = await axiosPrivate.get(uri)
            setProfileData(result.data)
            return result.data;
        } catch (error) {
            if (error.response.status === 401 || error.response.status === 403) {
                signOut(auth)
            }

        }
    }




    useEffect(getData, [])
    return <GlobalContext.Provider value={{ globalData, setGlobalData, profileData, getUser }}>
        {children}
    </GlobalContext.Provider>
}