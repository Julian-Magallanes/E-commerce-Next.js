import Image from "next/image";
import Link from "next/link";

export default function Offers () {
    return (
        <div className="flex flex-row mt-10 max-sm:flex-col items-center">
            <div className="flex flex-row max-lg:flex-col rounded-xl w-full border boder-border m-10 max-sm:w-2/3" >
                <Image className="rounded-xl w-1/2 max-lg:w-full h-full" src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712810797/Next/image1_auzacl.jpg" alt="img1" width={206} height={112} loading="lazy"/>
                <div className="w-full flex flex-col items-center justify-center">
                    <h4 className="m-4">Buy with your credit card</h4>
                    <Link href="/products" className="w-2/4"><button className=" mb-6 rounded-xl w-full bg-terciary h-10 border-border border hover:bg-hoverButton">See more</button></Link>
                </div>
            </div>
            <div className="flex flex-row max-lg:flex-col rounded-xl w-full border boder-border m-10 max-sm:w-2/3">
                <Image className="rounded-xl w-1/2 max-lg:w-full h-full" src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712810796/Next/image2_hihjjj.jpg" alt="img2" width={206} height={112} loading="lazy"/>
                <div className="w-full flex flex-col items-center justify-center">
                    <h4 className="m-4 ">Offers only for today</h4>
                    <Link href="/products" className="w-2/4"><button className=" mb-6 rounded-xl w-full bg-terciary h-10 border-border border hover:bg-hoverButton">See more</button></Link>
                </div>
            </div>
        </div>
    )
}