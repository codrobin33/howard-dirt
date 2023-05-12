import Head from 'next/head';
import Header from '@components/Header';
import SmallSeperator from '@components/SmallSeperator';
import PicturePanel from '@components/PicturePanel';
import Contact from '@components/Contact';
import Footer from '@components/Footer';
import FAQ from '@components/FAQ';

export default function Home() {
    return (
        <div className="">
            <Head>
                <title>A Plus Topsoil</title>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

                <meta name="description" content="Dirt, gravel, fill and more! We have top quality product ready for your project. Call us to get started" />
                <link rel="canonical" href="https://aplustopsoil.com" />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://aplustopsoil.com" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="A Plus Topsoil" />
                <meta property="og:description" content="Dirt, gravel, fill and more! We have top quality product ready for your project. Call us to get started" />
                <meta property="og:image" content="https://aplustopsoil.com/dirt_share.png" />

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="A Plus Topsoil - Family run topsoil delivery business" />
                <meta property="twitter:domain" content="aplustopsoil.com" />
                <meta property="twitter:url" content="https://aplustopsoil.com" />
                <meta name="twitter:title" content="A Plus Topsoil" />
                <meta name="twitter:description" content="Dirt, gravel, fill and more! We have top quality product ready for your project. Call us to get started" />
                <meta name="twitter:image" content="https://aplustopsoil.com/dirt_share.png" />
            </Head>

            <main>
                <Header />
                <SmallSeperator />
                <PicturePanel />
                <FAQ />
                <Contact />

            </main>

            <Footer />
        </div>
    )
}
