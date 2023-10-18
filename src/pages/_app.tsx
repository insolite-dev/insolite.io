import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
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
            <main>
                <Component {...pageProps} />
            </main>
        </>
    )
}
