import Link from "next/link"
import { ButtonCart} from "./Bag_icon.styles"
import Image from "next/image"

const BagIcon:React.FC=():React.ReactElement => {
    return(
        <ButtonCart>
            <Link href="/orders">
                <Image src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1713135019/Next/BagIcon_hyff1a.svg" alt="searchCart" width={20} height={20} className="mx-5 duration-300 ease-in-out hover:scale-105" loading="lazy" />
            </Link>
        </ButtonCart>
    )
}

export default BagIcon