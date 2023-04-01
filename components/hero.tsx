import { ChevronRightIcon } from "@heroicons/react/20/solid"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { InsoliteLogo } from "./insoliteLogo"

const Hero = () => {
    return (
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                <div className="flex">
                    <div className="relative flex items-center gap-x-4 rounded-full py-1 px-4 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        <span className="font-semibold text-indigo-600">We’re hiring</span>
                        <span className="h-4 w-px bg-gray-900/10" aria-hidden="true" />
                        <a
                            href="https://www.linkedin.com/company/insoliteio/jobs/"
                            target={"_blank"}
                            rel="noreferrer"
                            className="flex items-center gap-x-1"
                        >
                            <span className="absolute inset-0" aria-hidden="true" />
                            See open positions
                            <ChevronRightIcon className="-mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </a>
                    </div>
                </div>
                <h1 className="mt-10 max-w-lg text-6xl font-bold tracking-tight word-break text-black sm:text-8xl">
                    Connecting the dots ...
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    To make remarkable, insanely simple and <b className="text-black">Insolite</b> projects.
                </p>
                <div className="mt-10 flex items-center sm:w-full gap-x-6">
                    <a
                        href="https://discord.gg/wcBQywHRZF"
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-row w-full lg:w-32 justify-between text-base font-semibold leading-7 text-white bg-black px-4 py-2 rounded shadow-md shadow-[#5E8275] hover:text-gray-200 hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <span>Join Us</span>
                        <ArrowRightIcon width={20} />
                    </a>
                </div>
            </div>
            <div className="flex justify-center mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                <InsoliteLogo size={300} />
            </div>
        </div>
    )
}

export default Hero
