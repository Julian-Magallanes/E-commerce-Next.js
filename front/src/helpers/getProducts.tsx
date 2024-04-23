import { IProduct } from "@/app/types"
import { productsToPreLoad } from "@/utils/Preload"
import { AxiosResponse } from "axios"
const apiUrl = process.env.NEXT_PUBLIC_API_URL

async function getProductsDB(): Promise<IProduct[]> {
    const response = await fetch(`${apiUrl}/products`)
    const products:IProduct[] = await response.json()
    return products
}

async function getProducts(): Promise<IProduct[]> {
    const productsDB = await getProductsDB()
    const products:IProduct[] = productsDB.map((product, index) => {
        return{
            ...product,
            image: productsToPreLoad[index].image,
        }
    })
    return products
}

async function getProductByID(id: string): Promise<any> {
    const products = await getProducts()
    const product = products.find((product)=>product.id.toString()===id)
    return product
    
}
async function getProductByCategoryID(id: string): Promise<any> {
    const products = await getProducts()
    const product = products.find((product)=>product.categoryId.toString()===id)
    return product
    
}
export {getProducts, getProductByID, getProductByCategoryID}