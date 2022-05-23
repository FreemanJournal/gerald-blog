import axios from "axios";
import { signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import useSWR from "swr";
import axiosPrivate from "../api/axiosPrivate";
import auth from "../utilities/firebase.init";
export const GlobalContext = createContext();



export const GlobalProvider = ({ children }) => {
    const [globalData, setGlobalData] = useState([]);
    const [profileData, setProfileData] = useState({});
    const uri = `${process.env.REACT_APP_uri}/blog`;

    // const fetcher = url => axios.get(url).then(res => res.data)
    // const { data, error } = useSWR(uri, fetcher)

    // useEffect(() => {
    //     console.log('data', data);
    //     setGlobalData(data)
    // }, [data])

    const getData = () => {
        axios.get(uri)
            .then(result => {
                setGlobalData(result.data)
            })
    }

    console.log('globalData',globalData);
    useEffect(()=>getData(),[])

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





    return <GlobalContext.Provider value={{ globalData, setGlobalData, profileData, getUser, isLoading: !globalData }}>
        {children}
    </GlobalContext.Provider>
}