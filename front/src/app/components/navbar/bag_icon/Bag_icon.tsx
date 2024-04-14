import Link from "next/link"
import { ButtonCart, Image } from "./Bag_icon.styles"

const BagIcon:React.FC=():React.ReactElement => {
    return(
        <ButtonCart>
            <Link href="/orders">
                <Image src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1713135019/Next/BagIcon_hyff1a.svg" alt="searchCart" width={50} height={50} loading="lazy"/>
            </Link>
        </ButtonCart>
    )
}

export default BagIcon