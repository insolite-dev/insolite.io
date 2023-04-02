import "@/styles/globals.css"
import { Analytics } from "@vercel/analytics/react"
import Header from "components/header"
import Footer from "components/footer"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Component {...pageProps} />
            </main>
            <footer className="bg-[#111111] py-6">
                <Footer />
            </footer>
            <Analytics />
        </div>
    )
}
