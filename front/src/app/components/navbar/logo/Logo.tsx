import Link from "next/link"
import { Image } from "./Logo.styles"
const Logo:React.FC = ():React.ReactElement =>{
    return(
        <Link href={"/"} ><Image src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712441767/Next/logo2_ihseup.png"alt="Logo" className="transition ease-in-out delay-150 hover:scale-110 hover:rotate-12"/></Link>
    )
}
export default Logo