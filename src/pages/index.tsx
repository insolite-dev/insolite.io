import Footer from '@/components/footer';
import InsoliteLogo from '@/components/insolite_logo';

export default function Home() {
    return (
        <>
            <div className="ctd">
                <a href="/">
                    <InsoliteLogo />
                </a>
                <h1 className="animated display-3 animated-mission"><span>Connecting</span> <span>the</span> <span>dots</span>
                </h1>
            </div>
            <div className="custom-container reveal">
                <section>
                    {
                        /*
                         * TODO: add data here.
                         */
                    }
                </section>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
}


