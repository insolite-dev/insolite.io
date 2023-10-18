import InsoliteWhiteLogo from "./insolite_logo";

export default function Footer() {
    return (
        <div className="row">
            <div className="col-10">
                <section className="contact">
                    <p>
                        <a href="https://x.com/insolite_io" target="_blank">@insolite_io</a>
                        <br /> Insolite Corp © 2021. All rights reserved.</p>
                </section>
            </div>
            <div className="footer-logo">
                <div className="col-2 footer-logo">
                    <InsoliteWhiteLogo />
                </div>
            </div>
        </div>
    );
}
