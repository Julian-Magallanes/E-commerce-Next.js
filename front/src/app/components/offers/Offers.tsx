import Link from "next/link";

export default function Offers () {
    return (
        <div className="flex flex-row mt-10">
            <div className="flex flex-row rounded-xl w-full border boder-border ml-10 mr-5" >
                <img className="rounded-xl w-1/2 h-full" src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712810797/Next/image1_auzacl.jpg" alt="img1" />
                <div className="w-full flex flex-col items-center justify-center">
                    <h4>Buy with your credit card</h4>
                    <Link href="/products"><button className=" m-6 rounded-xl w-40 bg-terciary h-10 border-border border hover:bg-hoverButton">See more</button></Link>
                </div>
            </div>
            <div className="flex flex-row rounded-xl w-full border boder-border mr-10 ml-5">
                <img className="rounded-xl w-1/2 h-full" src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712810796/Next/image2_hihjjj.jpg" alt="img2" />
                <div className="w-full flex flex-col items-center justify-center">
                    <h4>Offers only for today</h4>
                    <Link href="/products"><button className=" m-6 rounded-xl w-40 bg-terciary h-10 border-border border hover:bg-hoverButton">See more</button></Link>
                </div>
            </div>
        </div>
    )
}