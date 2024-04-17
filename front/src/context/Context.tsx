'use client'
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface IAuthContext {
     token: string | null; login: (newToken: string) => void; logout: () => void; 
}
const AuthContext = createContext<IAuthContext | null>(null)
export function AuthProvider ({children}:{children: ReactNode}) {
    const [token, setToken] = useState<string | null>(null)
    
    useEffect (() =>{
        const localStorageToken = localStorage.getItem('userToken')
        if (localStorageToken){
            setToken(localStorageToken)
        }
    },[])

    const login = (newToken: string) =>{
        localStorage.setItem('userToken', newToken)
        setToken(newToken);
    }

    const logout = () =>{
        localStorage.removeItem('userToken');
        setToken(null)
    }

    return (
        <AuthContext.Provider value={{token,login,logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export function useAuth():IAuthContext | null {
    return useContext(AuthContext);
}