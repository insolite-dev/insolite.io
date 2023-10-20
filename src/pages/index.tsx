import Bg from '@/components/bg';
import Footer from '@/components/footer';
import InsoliteLogo from '@/components/insolite_logo';

export default function Home() {
    const slogElements = "Connecting the dots".split('').map((char, index) => (
        <span key={index}>{char}</span>
    ));
    return (
        <>
            <Bg />
            <div className="ctd">
                <h2 className="animated display-3 animated-mission"> {slogElements} </h2>
                <a href="/" className="logo"> <InsoliteLogo size="50" color="white" /> </a>
            </div>
            <div className="custom-container reveal">
                <section>
                    <h1 className="title"> Insolite </h1>
                    <p className="title-desc"> Creating insanely simple and Insolite projects without borders,
                        with complete transparency</p>
                    <div className="spacerBottom" />
                    <p className="text-content">
                        Our “current” mission is to provide developers of all skill levels with the opportunity to learn, work/research, and earn in a collaborative and supportive environment.
                    </p>
                    <div className="paddingBottom" />
                    <p className="text-content">
                        We believe that the key to our success is our community. By fostering a strong community of developers, we are able to bring together diverse perspectives and ideas to create innovative and impactful projects. We believe in giving back to the community by making our projects open source, allowing anyone to use, modify, and contribute to our work.
                    </p>
                    <div className="spacerBottom" />
                    <h2 className="title-2"> Team </h2>
                    <p className="text-content">
                        Our team is led by{' '}
                        <a href="https://x.com/theiskaa" className="link">
                            Ismael Shakverdiev
                        </a>
                        , founder of Insolite. While leadership within our organization flexibly transitions based on the specific projects and teams involved.{' '}
                        <br />
                        <a href="https://x.com/Onurhan1337 " className="link">
                            Onurhan Demir
                        </a> leads our Web team and serves as our Cyber Security lead. {' '}
                        <br />
                        <a href="https://x.com/Onurhan1337 " className="link">
                            Rasul Ramixanov
                        </a> is a key member of our team, contributing as a Mobile & Backend Engineer.
                    </p>
                    <div className="spacerBottom" />
                    <h2 className="title-2"> Join us </h2>
                    <p className="text-content">
                        At Insolite, we understand that traditional hiring processes can be barriers for some talented developers. That's why we've created a unique approach to recruitment. By joining our Discord server, you'll have the chance to work with us without any formal interview process. Our community is open and welcoming to all who share our passion for creating innovative and open source projects.
                    </p>
                    <div className="paddingBottom" />
                    <p className="text-content">
                        We are committed to providing a supportive and inclusive environment where everyone can thrive. Whether you're a seasoned developer or just starting out, we welcome you to join our community and contribute to our projects.
                    </p>
                    <div className="paddingBottom" />
                    <p className="text-content">
                        To apply, please send your CV/cover letter to{' '}
                        <a href="mailto:careers@insolite.io">careers@insolite.io</a>. <br />
                        Alternatively, you can join our <a href="https://insolite.io/discord">Discord server</a> or contribute directly to one of our projects on{' '}
                        <a href="https://github.com/insolite-dev">github.com/insolite-dev</a> for the best way to get involved.
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

