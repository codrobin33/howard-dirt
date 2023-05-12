// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head>
                <Script
                    id="google-analytics"
                    src="https://www.googletagmanager.com/gtag/js?id=G-YG376LSLBR"
                    strategy="worker"
                >
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-YG376LSLBR');
                    `}
                </Script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}