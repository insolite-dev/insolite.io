import Image from "next/image"
import Link from "next/link"
import Logo from "public/insolite-logo.svg"

const navigation = [
    { name: "Terms", href: "/terms" },
    { name: "Projects", href: "/projects" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" }
]

const Footer = () => {
    return (
        <div className="bg-[#111111] flex flex-col sm:flex-row items-center space-y-2 justify-start mx-6 py-2">
            <div className="flex flex-shrink-0 items-center">
                <Image
                    priority
                    src={Logo}
                    alt="insolite.io"
                    width={100}
                    height={100}
                    className="block h-8 w-auto lg:hidden"
                />
                <Image
                    priority
                    src={Logo}
                    alt="insolite.io"
                    width={100}
                    height={100}
                    className="hidden h-8 w-auto lg:block"
                />
            </div>
            <p className="text-white mx-4 font-light"> © 2022 Insolite, Inc. All rights reserved.</p>
            <nav>
                <ul>
                    <li className="space-x-4">
                        {navigation.map(item => (
                            <Link className="text-[#5E8275]" key={item.name} as={"a"} href={item.href}>
                                {item.name}
                            </Link>
                        ))}
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Footer
