
import { IOrder} from "@/app/types"

async function getOrders() {
    const response = await fetch("http://localhost:3001/users/orders")
    const orders:IOrder[] = await response.json()
    return orders
}

export {
    getOrders
}