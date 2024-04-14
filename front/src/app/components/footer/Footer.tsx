import Image from "next/image"
import Link from "next/link"

const Footer:React.FC = ():React.ReactElement =>{
    return(
            <footer className="bg-white rounded-lg shadow dark:bg-gray-900 mx-10 my-5 border-border border">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link href="./" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <Image src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712441767/Next/logo2_ihseup.png" width={40} height={8} className="h-8 transition ease-in-out delay-150 hover:scale-110 hover:rotate-12" alt="Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TechBox</span>
                        </Link>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/juli%C3%A1n-magallanes-2b074a187/" className="hover:underline me-4 md:me-6">Linkedin</a>
                            </li>
                            <li>
                                <a href="https://github.com/Julian-Magallanes" className="hover:underline me-4 md:me-6">GitHub</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-border sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 - This page is made or Julian Magallanes.</span>
                </div>
            </footer>
            )
}
export default Footer