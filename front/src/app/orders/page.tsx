import { getOrders, getProducts } from "@/helpers"

//http://localhost:3001/users/orders
export default async function Order() {
    {/*const orders = await getOrders()
console.log(orders)*/}
const products = await getProducts()
console.log(products)
return (
    <div className="flex flex-row w-full justify-between ">  
        <div className="ml-10 w-full p-10">
            <div className="w-full flex flex-row items-center justify-between mx-4 px-8 mt-4 py-2 border-border border rounded-xl shadow-lg">
                <h1 className="text-xl">
                    Product
                </h1 >
                <h1 className="text-xl">
                    Price
                </h1>
                <h1 className="text-xl">
                    Amount
                </h1>
                <h1 className="text-xl">
                    Price
                </h1>
            </div>
            {products.map((product,index)=>{
                return <div key={index} className="w-full flex flex-row items-center justify-between border-border border rounded-xl  m-4 p-8 shadow-lg transition ease-in-out delay-150 hover:scale-105">
                        <img src={product.image} className="w-20"/>
                        <h4 className="text-xl">{product.name}</h4>
                        <h4 className="text-xl">{product.stock}</h4>
                        <h1 className="text-xl">{`$ USD ${product.price}`}</h1>
                    </div>
            })}
        </div>
        <div className="w-full p-10">
            <div className="flex flex-col justify-between content-between bg-secondary rounded-xl w-full border-border border shadow-md h-1/4 mx4 mt-4 mb-4">
                <div className="flex m-6">
                    <p className="text-xl">Aticles: </p>
                    <h1 className="text-xl"> 100</h1>
                </div>
                <div className="flex m-6 justify-between">
                    <h2 className="text-xl">Total: </h2>
                    <h1 className="text-xl">100</h1>
                </div>
                <button className=" m-6 rounded-xl w-48 bg-terciary h-10 border-border border hover:bg-hoverButton">Proceed to Checkout</button>
            </div>
        </div>
    </div>  
    )
}