import Link from "next/link";
import Card from "components/Card"
import Hero from "components/hero"
import Head from "next/head"

import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
    return (
        <>
            <Head>
                <title>Insolite - Connecting the dots</title>
                <meta name="description" content="Home - Insolite" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Hero />
                {/* Projects */}
                <div className="bg-black py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-white sm:text-7xl">
                                Des Projects {" "}
                                <span className="text-4xl sm:text-7xl font-bold gradient-text">Insolites</span>
                            </h1>
                            <p className="mt-6 text-md text-wrap mr-0 sm:mr-48 leading-8 text-gray-500">
                                Unique, Minimalist, and Remarkable projects.
                                but, as Open Source
                            </p>
                            <Link href={"https://github.com/insolite-dev/"}>
                                <button className="flex flex-row items-center bg-[#0C0C0C] p-3 my-6 rounded text-white shadow-md shadow-[#4568DC] hover:text-gray-200 hover:bg-[#0C0C0C]/80 transition-all">
                                    <span>Chesck projects</span>
                                    <ArrowRightIcon className="h-5 w-5 ml-2" />
                                </button>
                            </Link>
                        </div>
                        <div className="mt-16 sm:mt-24 lg:mt-0 flex justify-center lg:flex-shrink-0 lg:flex-grow">
                            <Card />
                        </div>
                    </div>
                </div>

                {/* Insolite Community  */}
                <div className="bg-[#0C0C0C] py-24 sm:py-32">
                    <div className="flex flex-col mx-auto max-w-2xl text-center items-center justify-center font-mono">
                        <h1 className="text-4xl sm:text-7xl font-bold gradient-text">
                            Insolite <br />
                            Community
                        </h1>
                        <p className="text-gray-400 my-6 text-center text-sm sm:text-base px-3">
                            At Insolite, we are on a mission to build unique projects & startups as open source. Where
                            each kind of developer would have the opportunity to learn, work, and earn.
                        </p>
                        <p className="text-white mt-6 text-sm sm:text-base px-3">
                            We believe that, the best way to do that, is Community. To gain the chance to work with us
                            without any interview and early process, join our{" "}
                            <span className="font-bold gradient-text">Discord</span> server.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
