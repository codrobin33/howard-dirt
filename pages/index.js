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
