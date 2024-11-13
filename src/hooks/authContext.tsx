import { useNavigate } from 'react-router-dom'
import { createContext, useContext, useEffect useState } from "react"

import { IUser } from '@/types'

export interface AuthContextType {
    currentUser: User | null
    login: (input: userLogin) => Promise<void>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

import { ReactNode } from "react";

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const API_URL = import.meta.env.API_URL
    const [ currentUser, setCurrentUser ] = useState(
        JSON.parse(localStorage.getItem('user') || 'null') || null
    )

    const login = async (input: userLogin) => {
        const res = await axios.post(API_URL, input, {
            withCredentials: true
        })
        setCurrentUser(res.data)
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    )
}
