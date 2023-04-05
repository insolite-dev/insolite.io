import Head from "next/head"
import InsoliteWhiteLogo from "../../components/insoliteWhiteLogo"

const about = () => {
    return (
        <>
            <Head>
                <title>About | Insolite</title>
                <meta
                    name="description"
                    content="Insolite is a company dedicated to building unique projects and startups that are open source. Our mission is to provide developers of all skill levels with the opportunity to learn, work, and earn in a collaborative and supportive environment."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:image" content="/insolite-logo.png" />
                <link rel="icon" href={"/favicon.ico"} />
            </Head>
            <div className="w-full bg-black flex flex-col justify-center items-center py-24 px-4 sm:px-0">
                <div>
                    <InsoliteWhiteLogo className="w-32 h-32 sm:w-full sm:h-full" />
                </div>
                <div className="my-16 sm:my-24">
                    <p className="font-normal text-[white] text-center text-xl sm:text-2xl my-5">
                        Welcome to Insolite! Our company is dedicated to building unique <br /> projects and startups
                        that are open source. Our mission is to <br /> provide developers of all skill levels with the
                        opportunity to learn, <br /> work, and earn in a collaborative and supportive environment.
                    </p>
                    <p className="font-normal text-[white] text-center text-xl sm:text-2xl my-5">
                        We believe that the key to our success is our community. By <br /> fostering a strong community
                        of developers, we are able to bring <br /> together diverse perspectives and ideas to create
                        innovative and <br /> impactful projects. We believe in giving back to the community by <br />{" "}
                        making our projects open source, allowing anyone to use, modify, <br /> and contribute to our
                        work.
                    </p>
                    <p className="font-normal text-[white] text-center text-xl sm:text-2xl">
                        At Insolite, we understand that traditional hiring processes can be <br /> barriers for some
                        talented developers. That&apos;s why we&apos;ve created a <br /> unique approach to recruitment.
                        By joining our Discord server, <br /> you&apos;ll have the chance to work with us without any
                        formal interview <br /> process. Our community is open and welcoming to all who share <br /> our
                        passion for creating innovative and open source projects. <br /> We are committed to providing a
                        supportive and inclusive <br /> environment where everyone can thrive. Whether you&apos;re a{" "}
                        <br /> seasoned developer or just starting out, we welcome you to join <br /> our community and
                        contribute to our projects.
                    </p>

                    <h1 className="text-center text-2xl sm:text-3xl text-transparent my-4 gradient-text">
                        Let&apos;s make it real, together!
                    </h1>
                </div>
            </div>
        </>
    )
}

export default about
