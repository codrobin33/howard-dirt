// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-YG376LSLBR"></script>
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-YG376LSLBR');
                </script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}