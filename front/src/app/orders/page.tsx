import { getOrders, getProducts } from "@/helpers"
import { IOrder } from "../types"

//http://localhost:3001/users/orders
export default async function Order() {
    const orders: IOrder[] = await getOrders()
    console.log(orders)
const products = await getProducts()
console.log(products)
return (
    <div className="flex flex-row w-full justify-between  p-10 max-md:flex-col">  
        <div className=" w-full md:pr-5">
            <div className="w-full flex flex-row items-center justify-between  px-8 my-4 py-2 border-border border rounded-xl shadow-lg">
                <h1 className="text-lg">
                    Products
                </h1 >
                <h1 className="text-lg">
                    Status
                </h1>
                <h1 className="text-lg">
                    Date
                </h1>
            </div>
            {orders.map((order)=>{
                return <div key={order.id} className="w-full flex flex-row items-center justify-between border-border border rounded-xl  mb-4 p-4 shadow-lg transition ease-in-out delay-150 hover:scale-105">
                        <h4 className="text-lg max-sm:text-sm">{order.products.length}</h4>
                        <h4 className="text-lg max-sm:text-sm">{order.status}</h4>
                        <h1 className="text-lg max-sm:text-sm">{`$ USD ${order.date}`}</h1>
                    </div>
            })}
        </div>
    </div>  
    )
}