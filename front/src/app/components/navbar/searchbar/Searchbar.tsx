
import Image from "next/image"
import { Input, ButtonSearch, SearchBarContainer} from "./Searchbar.styles"

const SearchBar:React.FC=():React.ReactElement => {
    return(
        <SearchBarContainer className="shadow-md ">
            <Input type="text" placeholder="Buscar aca."/>
            <ButtonSearch>
                <Image src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712438409/Next/searchIcon_ipurqk.svg" alt="searchIcon" loading="lazy" width={20} height={20} className="mx-5 duration-300 ease-in-out hover:scale-105 "/>
            </ButtonSearch>
        </SearchBarContainer>
    )
}

export default SearchBar