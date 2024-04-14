import Link from "next/link"
import { ButtonIcon,Image } from "./Login_icon.styles"

const LoginIcon:React.FC =  ():React.ReactElement => {
    return (
        <Link href="/login">
            <ButtonIcon>
                <Image src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712494041/Next/userIcon_k3vptu.svg" alt="LoginIcon" loading="lazy"/>
            </ButtonIcon>
        </Link>
    )
}
export default LoginIcon