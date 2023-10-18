import InsoliteLogo from "./insolite_logo";
import { AiFillGithub, AiFillYoutube } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { BsDiscord } from 'react-icons/bs';


export default function Footer() {
    return (
        <div className="row">
            <div className="col-10">
                <section className="contact">
                    <div className="social-icons">
                        <a href="https://github.com/insolite-dev" target="_blank" rel="noopener noreferrer">
                            <AiFillGithub className="icon"/>
                        </a>
                        <a href="https://x.com/insolite_io" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter className="icon-x"/>
                        </a>
                        <a href="https://insolite.io/discord" target="_blank" rel="noopener noreferrer">
                            <BsDiscord className="icon"/>
                        </a>
                        <a href="https://youtube.com/@InsoliteArchive?si=9Io_ojf75k2UEORg" target="_blank" rel="noopener noreferrer">
                            <AiFillYoutube className="icon-y"/>
                        </a>
                    </div>
                    <p>Insolite Corp © 2021. All rights reserved.</p>
                </section>
            </div>
            <div className="col-2 footer-logo">
                <InsoliteLogo color="black" />
            </div>
        </div>
    );
}
