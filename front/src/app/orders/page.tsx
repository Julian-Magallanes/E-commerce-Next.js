'use client'
import { getOrders} from "@/helpers"
import { IOrder } from "../types"
import { useAuth } from "@/context/Context";
import { Suspense, useEffect, useState } from "react";



export default function Order() {

    const auth = useAuth();

    const [orders, setOrders] = useState<IOrder[]>([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                if (auth) { 
                    const { token } = auth;
                    if (token) { 
                        const ordersData: IOrder[] = await getOrders(token);
                        setOrders(ordersData);
                    }
                }
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };

        fetchOrders();
    }, [auth]);


const formatDateTime = (isoDateString: string) => {
        const date = new Date(isoDateString);
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short'
        };
        return date.toLocaleString('en-US', options);
    };
    function Loading() {
        return <h2 className="w-full text-center p-10"> Loading...</h2>;
      }
return (
    <div>
        <h1 className="w-full text-2xl text-center pt-10 px-10 font-semibold">Orders List</h1>  
    <div className="flex flex-row w-full justify-between  p-10 max-md:flex-col">
        <div className=" w-full ">
            <div className="w-full flex flex-row items-center justify-between  px-4 my-4 py-2 border-border border rounded-xl shadow-lg">
                <h1 className="w-60 text-center text-lg">
                    Products
                </h1 >
                <h1 className="w-60 text-center text-lg">
                    Status
                </h1>
                <h1 className="w-60 text-center text-lg">
                    Date
                </h1>
            </div>
            
            {orders.map((order)=>{
                return <div key={order.id} className="w-full flex flex-row items-center justify-between border-border border rounded-xl  mb-4 p-4 shadow-lg transition ease-in-out delay-150 hover:scale-105">
                        <h4 className="w-60 text-center text-lg max-sm:text-sm ">{order.products.length}</h4>
                        <h4 className="w-60 text-center text-lg max-sm:text-sm">{order.status}</h4>
                        <Suspense fallback={<Loading />}>
                        <h1 className="w-60 text-center text-lg max-sm:text-sm">{formatDateTime(order.date)}</h1>
                        </Suspense>
                    </div>
            })}
            
        </div>
    </div> 
    </div> 
    )
}