import Image from "next/image"
import Link from "next/link"

const Logo:React.FC = ():React.ReactElement =>{
    return(
        <div className="w-20">
            <Link href={"/"} ><Image src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712441767/Next/logo2_ihseup.png"alt="Logo" className="transition ease-in-out delay-150 hover:scale-110 hover:rotate-12" width={40} height={8} loading="lazy"/></Link>
        </div>
    )
}
export default Logo