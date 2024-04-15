
import { categoriesToPreLoad } from "@/utils/Preload"
import Link from "next/link"
const FilterSearch:React.FC=():React.ReactElement=>{
    return(
        <div className="flex bg-background border-border border-b text-sm max-sm:flex-col max-sm:border-transparent">
            {categoriesToPreLoad.map((category)=>{
                return <Link href={`/products/category/${category.id}`} key={category.id} className="w-full"><button className="w-full  m-2 justify-center hover:font-bold" key={category.id} >{category.name}</button></Link>
            })}
        </div>
    )
}
export default FilterSearch