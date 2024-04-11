
import { categoriesToPreLoad } from "@/utils/Preload"
const FilterSearch:React.FC=():React.ReactElement=>{
    return(
        <div className="flex bg-background border-border border-b text-sm ">
            {categoriesToPreLoad.map((category,index)=>{
                return <button className="w-full flex-row m-2 justify-center hover:font-bold" key={index} >{category.name}</button>
            })}
        </div>
    )
}
export default FilterSearch