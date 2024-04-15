import { getOrders, getProducts } from "@/helpers"
import { IOrder } from "../types"

//http://localhost:3001/users/orders
export default async function Order() {
    const orders: IOrder[] = await getOrders()
    console.log(orders)
const products = await getProducts()
console.log(products)
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
return (
    <div className="flex flex-row w-full justify-between  p-10 max-md:flex-col">  
        <div className=" w-full md:pr-5">
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
                        <h1 className="w-60 text-center text-lg max-sm:text-sm">{formatDateTime(order.date)}</h1>
                    </div>
            })}
        </div>
    </div>  
    )
}