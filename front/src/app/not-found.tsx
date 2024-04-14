import Image from "next/image";

export default function Error() {
    return(
        <div className="flex w-full justify-center">
            <Image src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1713113206/Next/404_jmmdxe.jpg" alt="page404" width={800} height={800} />
        </div>
    )
}