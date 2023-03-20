import Logo from "./logo"

const about = () => {
    return (
        <>
            <div className="w-[100%] h-[1975px] bg-[#000000] flex flex-col justify-center items-center ">
                <Logo />
                <div className="w-[827px] h-[839px] mt-[162px]">
                    <p className="font-[400] text-[white] text-center text-[26px] mb-[30px] ">
                        Welcome to Insolite! Our company is dedicated to building unique <br /> projects and startups
                        that are open source. Our mission is to <br /> provide developers of all skill levels with the
                        opportunity to learn, <br /> work, and earn in a collaborative and supportive environment.
                    </p>
                    <p className="font-[400] text-[white] text-center text-[26px] mb-[30px]  ">
                        We believe that the key to our success is our community. By <br /> fostering a strong community
                        of developers, we are able to bring <br /> together diverse perspectives and ideas to create
                        innovative and <br /> impactful projects. We believe in giving back to the community by <br />{" "}
                        making our projects open source, allowing anyone to use, modify, <br /> and contribute to our
                        work.
                    </p>
                    <p className="font-[400] text-[white] text-center text-[26px] mb-[30px] ">
                        At Insolite, we understand that traditional hiring processes can be <br /> barriers for some
                        talented developers. That's why we've created a <br /> unique approach to recruitment. By
                        joining our Discord server, <br /> you'll have the chance to work with us without any formal
                        interview <br /> process. Our community is open and welcoming to all who share <br /> our
                        passion for creating innovative and open source projects. <br /> We are committed to providing a
                        supportive and inclusive <br /> environment where everyone can thrive. Whether you're a <br />{" "}
                        seasoned developer or just starting out, we welcome you to join <br /> our community and
                        contribute to our projects.
                    </p>

                    <h1 className="text-center text-[30px]  text-transparent bg-clip-text bg-gradient-to-r from-[#4568DC] via-[#B06AB3] ">
                        Let's make it real, together!
                    </h1>
                </div>
            </div>
        </>
    )
}

export default about
