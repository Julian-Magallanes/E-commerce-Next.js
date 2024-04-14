import Link from "next/link"
import { Page, PageContainer } from "./SearchPages.styles"

const SearchPages:React.FC = ():React.ReactElement =>{
    return(
        <div className="w-full flex justify-center max-lg max-md:hidden">
        <PageContainer className="max-lg:w-full w-2/3">
            <Page><Link href={"/"}>Home</Link></Page>
            <Page><Link href={"/about"}>About</Link></Page>
            <Page><Link href={"/products"}>Products</Link></Page>
            <Page><Link href={"/contact"}>Contact</Link></Page>
        </PageContainer>
        </div>
    )
}
export default SearchPages