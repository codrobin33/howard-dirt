import Head from 'next/head';
import Header from '@components/Header';

export default function Home() {
    return (
        <div className="">
            <Head>
                <title>Next.js Starter!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header />
            </main>
        </div>
    )
}
