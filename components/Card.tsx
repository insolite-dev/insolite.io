import Link from "next/link"
import Image from "next/image"
import BlogCards from "../public/blogs.svg"

const Card = () => {
    return (
        <Link href="/projects">
            <div className="max-w-sm w-96 rounded-xl">
                <div className="flex justify-center px-6 pt-4 pb-2">
                    <Image src={BlogCards} className="inline-block px-3 py-1 mb-2" alt="Notya logo" />
                </div>
            </div>
        </Link>
    )
}

export default Card
