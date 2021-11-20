import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Faq from '../sections/Faq';
import Hero from '../sections/Hero';
import Testimony from '../sections/Testimony';

export default function Home() {
  return (
    <div className="wrapper">
      <Head>
        <title>Max The Stranger</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className="main">
        <Hero />

        <Faq />
        <Testimony />
      </main>

      <Footer />
    </div>
  );
}
