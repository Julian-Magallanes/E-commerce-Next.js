import Link from "next/link"
import { Page, PageContainer } from "./SearchPages.styles"

const SearchPages:React.FC = ():React.ReactElement =>{
    return(
        <PageContainer>
            <Link href={"/"}><Page>Home</Page></Link>
            <Link href={"/about"}><Page>About</Page></Link>
            <Link href={"/products"}><Page>Products</Page></Link>
            <Page>Contact</Page>
        </PageContainer>
    )
}
export default SearchPages