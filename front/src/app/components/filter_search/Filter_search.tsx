import { FilterContainer, FilterList } from "./Filter_search.styles"
import { categoriesToPreLoad } from "@/utils/Preload"
const FilterSearch:React.FC=():React.ReactElement=>{
    return(
        <FilterContainer>
            {categoriesToPreLoad.map((category,index)=>{
                return <FilterList key={index} >{category.name}</FilterList>
            })}
        </FilterContainer>
    )
}
export default FilterSearch