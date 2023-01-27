import "@/styles/globals.css"
import Header from "components/header"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <header>
                <Header />
            </header>
            <Component {...pageProps} />
        </div>
    )
}
