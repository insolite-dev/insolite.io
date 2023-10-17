import { useEffect, useState } from "react"
import Image from "next/image"
import { Disclosure, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Logo from "public/insolite-logo.svg"
import { Fragment } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

interface INavigationProps {
    name: string
    href: string
    current?: boolean
}

const navigation: INavigationProps[] = [
    { name: "Home", href: "/", current: true },
    { name: "Projects", href: "https://github.com/insolite-dev", current: false },
    { name: "Design", href: "https://twitter.com/insolite_design" },
    { name: "About Us", href: "/about", current: false }
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
}

export default function Header() {
    const [mounted, setMounted] = useState(false)

    const router = useRouter()

    const { pathname } = useRouter()
    const clearSlash = pathname.split("/")[1]
    const pathName = clearSlash ? `/${clearSlash}` : "/"

    useEffect(() => {
        const handleRouteChangeStart = () => {
            setMounted(true)
        }

        router.events.on("routeChangeStart", handleRouteChangeStart)
        return () => {
            router.events.off("routeChangeStart", handleRouteChangeStart)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => setMounted(true), [])
    if (!mounted) return null

    return (
        <Disclosure as="nav" className="bg-black">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link href="/">
                                        <Image
                                            priority
                                            src={Logo}
                                            alt="insolite.io"
                                            width={100}
                                            height={100}
                                            className="block h-8 w-auto lg:hidden"
                                        />
                                    </Link>
                                    <Link href="/">
                                        <Image
                                            priority
                                            src={Logo}
                                            alt="insolite.io"
                                            width={100}
                                            height={100}
                                            className="hidden h-8 w-auto lg:block"
                                        />
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {/* Navbar on desktop */}
                                        {Object.keys(navigation).map((item: any) => {
                                            const current = navigation[item].href === pathName
                                            return (
                                                <a
                                                    key={navigation[item].name}
                                                    href={navigation[item].href}
                                                    className={classNames(
                                                        current ? " text-green-200" : "text-gray-300 hover:text-white",
                                                        "px-3 py-2 rounded-md text-sm font-medium"
                                                    )}
                                                    aria-current={navigation[item].current ? "page" : undefined}
                                                >
                                                    {navigation[item].name}
                                                </a>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Disclosure.Panel className="sm:hidden">
                                <div className="space-y-1 px-2 pt-2 pb-3">
                                    {/* Navbar on mobile */}
                                    {Object.keys(navigation).map((item: any) => {
                                        const current = navigation[item].href === pathName
                                        return (
                                            <Disclosure.Button
                                                key={navigation[item].name}
                                                as="a"
                                                href={navigation[item].href}
                                                className={classNames(
                                                    current
                                                        ? "bg-[#5E8275] text-white"
                                                        : "text-gray-300 hover:bg-[#5E8275] hover:text-white",
                                                    "block px-3 py-2 rounded-md text-base font-medium"
                                                )}
                                                aria-current={navigation[item].current ? "page" : undefined}
                                            >
                                                {navigation[item].name}
                                            </Disclosure.Button>
                                        )
                                    })}
                                </div>
                            </Disclosure.Panel>
                        </Transition>
                    </div>
                </>
            )}
        </Disclosure>
    )
}
