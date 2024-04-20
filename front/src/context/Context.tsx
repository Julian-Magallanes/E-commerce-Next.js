'use client'
import { IUser } from "@/app/types";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface IAuthContext {
     token: string | null;user: string | null; login: (newToken: string, newUser:string) => void; logout: () => void; 
}
const AuthContext = createContext<IAuthContext | null>(null)
export function AuthProvider ({children}:{children: ReactNode}) {
    const [token, setToken] = useState<string | null>(null)
    const [user, setUser] = useState<string | null>(null);
    
    useEffect (() =>{
        const localStorageToken = localStorage.getItem('userToken')
        const localStorageUser = localStorage.getItem('user')
        if (localStorageToken) {
            setToken(localStorageToken);
        }
        if (localStorageUser) {
            setUser(JSON.parse(localStorageUser));
        }
    },[])

    const login = (newToken: string, newUser:string) =>{
        localStorage.setItem('userToken', newToken)
        localStorage.setItem('user', JSON.stringify(newUser))
        setToken(newToken);
        setUser(newUser);
    }

    const logout = () =>{
        localStorage.removeItem('userToken');
        localStorage.removeItem('user');
        setToken(null)
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user,token,login,logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export function useAuth():IAuthContext | null {
    return useContext(AuthContext);
}