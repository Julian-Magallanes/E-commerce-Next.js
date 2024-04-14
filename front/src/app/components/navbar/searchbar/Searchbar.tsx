
import { Input, ButtonSearch, SearchBarContainer, Image } from "./Searchbar.styles"

const SearchBar:React.FC=():React.ReactElement => {
    return(
        <SearchBarContainer className="shadow-md ">
            <Input type="text" placeholder="Buscar aca."/>
            <ButtonSearch>
                <Image src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712438409/Next/searchIcon_ipurqk.svg" alt="searchIcon" loading="lazy"/>
            </ButtonSearch>
        </SearchBarContainer>
    )
}

export default SearchBar