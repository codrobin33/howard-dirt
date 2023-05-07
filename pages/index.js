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
                <title>Next.js Starter!</title>
                <link rel="icon" href="/favicon.ico" />
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
