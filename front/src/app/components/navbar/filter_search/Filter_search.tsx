import { FilterContainer, FilterList, Image } from "./Filter_search.styles"
import { categoriesToPreLoad } from "@/utils/Preload"
const FilterSearch:React.FC=():React.ReactElement=>{
    return(
        <FilterContainer>
            {categoriesToPreLoad.map((category,index)=>{
                return <FilterList key={index} >{category.name} <Image src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712441771/Next/vectorIcon_txtlxq.svg"/></FilterList>
            })}
        </FilterContainer>
    )
}
export default FilterSearch