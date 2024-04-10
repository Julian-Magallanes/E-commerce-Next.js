import { IProduct } from "@/app/types"
import { productsToPreLoad } from "@/utils/Preload"


async function getProductsDB() {
    const response = await fetch("http://localhost:3001/products")
    const products:IProduct[] = await response.json()
    return products
}

async function getProducts() {
    const productsDB = await getProductsDB()
    const products = productsDB.map((product, index) => {
        return{
            ...product,
            image: productsToPreLoad[index].image,
        }
    })
    return products
}

async function getProductByID(id: string) {
    const products = await getProducts()
    const product = products.find((product)=>product.id.toString()===id)
    return product
    
}
export {getProducts, getProductByID}