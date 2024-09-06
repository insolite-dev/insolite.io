import Head from 'next/head';
import Bg from '../components/bg';
import Footer from '../components/footer';
import InsoliteLogo from '../components/insolite_logo';

export default function Home() {
    const slogElements = "Connecting the dots".split('').map((char, index) => (
        <span key={index}>{char}</span>
    ));
    return (
        <>
            <Head>
                <title>Insolite - Connecting the dots</title>
                <meta
                    name="description"
                    content="Connecting the dots. To make remarkable, insanely simple, and insolite projects."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:image" content="/insolite-black-logo.png" />
                <link rel="icon" href="/insolite-logo.png" />
            </Head>
            <Bg />
            <div className="ctd">
                <h2 className="animated display-3 animated-mission"> {slogElements} </h2>
                <a href="/" className="logo"> <InsoliteLogo size="50" color="white" /> </a>
            </div>
            <div className="custom-container reveal">
                <section>
                    <h1 className="title"> Insolite </h1>
                    <p className="title-desc"> Building innovative projects with a transparent and collaborative approach</p>
                    <div className="spacerBottom" />
                    <p className="text-content">
                        Insolite is a startup that’s all about creating unique and impactful tech solutions. While we embrace open-source for many of our side projects and packages, our main focus is on building large-scale projects that will shape the future of technology.
                    </p>
                    <div className="paddingBottom" />
                    <p className="text-content">
                        At Insolite, we believe in a balanced approach to open-source. While many of our smaller tools and libraries are available for anyone to use, our larger projects combine both internal development and open-source contributions. This gives developers the freedom to see how our side projects fit into the bigger picture, while still being part of something innovative. Whether you’re contributing code, sharing ideas, or testing, your involvement helps push the boundaries of what we can achieve.
                    </p>
                    <div className="spacerBottom" />
                    <h2 className="title-2">Mission and Values</h2>
                    <p className="text-content">
                        Our mission is to create projects that not only solve real-world problems but also bring developers together in a meaningful way. We aim to build tools and platforms that make an impact. By combining open-source contributions with our own in-house work, we create solutions that are both practical and cutting-edge. Collaboration, transparency, and innovation are at the heart of what we do.
                    </p>
                    <p className="text-content">
                        Simplicity is key to our projects. We believe in writing clean, well-documented code that anyone can contribute to, and we encourage collaboration from developers of all experience levels. At Insolite, you’re not just working on code—you’re part of a larger community that’s passionate about solving problems together.
                    </p>
                    <br/>
                    <p className="text-content">
                        At Insolite, we believe in creating opportunities for developers of all levels. Whether you’re just starting out or have years of experience, you’ll find something that challenges and excites you. Our open-source projects offer a chance to learn by doing, with real-world applications that help you grow your skills. For more experienced developers, we provide opportunities to take on bigger challenges and expand your expertise.
                    </p>
                    <div className="spacerBottom" />
                    <h2 className="title-2">Community</h2>
                    <p className="text-content">
                        Our community is the backbone of Insolite. We bring together developers from all backgrounds and skill levels, uniting them in a shared goal: to create something meaningful. Whether you’re a beginner or an experienced developer, there’s a place for you here. We value collaboration and make it easy for anyone to get involved, share ideas, and contribute to our projects.
                    </p>
                    <p className="text-content">
                        We’re active on <a href="https://discord.gg/KMfY3Qp5zQ">Discord</a>, where our community shares updates, works on projects, and collaborates in real-time. It’s the best way to stay connected with us, get updates on what we’re working on, and find opportunities to jump into projects. If you’re excited about open-source and want to make a difference, we’d love to have you join us!
                    </p>
                    <div className="spacerBottom" />
                    <h2 className="title-2">Join Us</h2>
                    <p className="text-content">
                        We offer paid internships and contract work for those looking to turn their contributions into a career. Our projects are designed to help you grow while making an impact. But no matter where you are in your journey, contributing to one of our open-source projects is the best way to get involved and become part of the team.
                    </p>
                    <p className="text-content">
                        If you’re interested in joining Insolite, the process is simple: start by contributing to one of our open-source projects. We don’t have a formal interview process; we believe the best way to show your skills is by actively participating in our projects. Whether you’re contributing code, giving feedback, or helping us test, it all counts.
                    </p>
                    <p className="text-content">
                        You can connect with us on <a href="https://discord.gg/KMfY3Qp5zQ">Discord</a>, where our community is always active and welcoming new members. If you’re still interested in formal opportunities, feel free to send your CV/cover letter to <a href="mailto:careers@insolite.io">careers@insolite.io</a>. But remember, the best way to join us is by jumping into our open-source work on <a href="https://github.com/insolite-dev">GitHub</a> and showing us what you’ve got.
                    </p>
                    <div className="spacerBottom" />
                </section>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
}

