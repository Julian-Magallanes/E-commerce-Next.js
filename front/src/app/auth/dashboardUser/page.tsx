'use client'
import { IUser } from "@/app/types";
import { useAuth } from "@/context/Context";
import { useEffect, useState } from "react";


export default function DashboardUser() {
    const auth = useAuth()
    const { user } = auth || {};

    const [userObject, setUserObject] = useState<IUser | null>(null);
    useEffect(() => {
        if (user) { // Verifica si user no es null o undefined
            setUserObject(user);
        }
    }, [user]);
if(userObject){
    return (
        <div className="p-10 ">
            <h1 className="text-4xl text-center m-4">Dashboard User</h1>
            <div className="w-full py-20 flex flex-col items-center justify-between border-border border rounded-xl mb-4 p-4 shadow-lg transition ease-in-out delay-150 hover:scale-105">
                <h4 className="text-lg max-sm:text-sm w-full text-center m-5">Name: {userObject.name}</h4>
                <h4 className="text-lg max-sm:text-sm w-full text-center m-5">Email: {userObject.email}</h4>
                <h1 className="text-lg max-sm:text-sm w-full text-center m-5">Phone: {userObject.phone}</h1>
                <h1 className="text-lg max-sm:text-sm w-full text-center m-5">Address: {userObject.address}</h1>
            </div>
        </div>
    );
} else {
    return null; // O cualquier otro contenido o indicador de carga mientras se obtiene el usuario
}

}

