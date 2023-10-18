import InsoliteLogo from "./insolite_logo";

export default function Footer() {
    return (
        <div className="row">
            <div className="col-10">
                <section className="contact">
                    <p>
                        <a href="https://github.com/insolite-dev" target="_blank" rel="noopener noreferrer">
                            {/* TODO: add GitHub svg icon*/}
                        </a>
                        <a href="https://x.com/insolite-dev" target="_blank" rel="noopener noreferrer">
                            {/* TODO: add X(Twitter) svg icon*/}
                        </a>
                        <a href="https://youtube.com/@InsoliteArchive?si=9Io_ojf75k2UEORg" target="_blank" rel="noopener noreferrer">
                            {/* TODO: add youtube svg icon*/}
                        </a>
                        <br /> Insolite Corp © 2021. All rights reserved.
                    </p>
                </section>
            </div>
            <div className="col-2 footer-logo">
                <InsoliteLogo color="black" />
            </div>
        </div>
    );
}
