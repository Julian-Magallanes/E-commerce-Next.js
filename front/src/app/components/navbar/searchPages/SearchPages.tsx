import Link from "next/link"
import { Page, PageContainer } from "./SearchPages.styles"

const SearchPages:React.FC = ():React.ReactElement =>{
    return(
        <div className="w-full flex justify-center">
        <PageContainer >
            <Link href={"/"}><Page>Home</Page></Link>
            <Link href={"/about"}><Page>About</Page></Link>
            <Link href={"/products"}><Page>Products</Page></Link>
            <Link href={"/contact"}><Page>Contact</Page></Link>
        </PageContainer>
        </div>
    )
}
export default SearchPages