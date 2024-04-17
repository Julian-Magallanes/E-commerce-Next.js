import Link from "next/link"
import { ButtonIcon } from "./Login_icon.styles"
import Image from "next/image"

const LoginIcon:React.FC =  ():React.ReactElement => {
    return (
        <Link href="/auth/login">
            <ButtonIcon >
                <Image src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712494041/Next/userIcon_k3vptu.svg" alt="LoginIcon" loading="lazy" width={20} height={20} className="mx-5 duration-300 ease-in-out hover:scale-105 "/>
            </ButtonIcon>
        </Link>
    )
}
export default LoginIcon