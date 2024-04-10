
import { categoriesToPreLoad } from "@/utils/Preload"
const FilterSearch:React.FC=():React.ReactElement=>{
    return(
        <div className="flex bg-secondary border-border border-b  ">
            {categoriesToPreLoad.map((category,index)=>{
                return <button className="w-full flex-row m-2 justify-center" key={index} >{category.name}</button>
            })}
        </div>
    )
}
export default FilterSearch