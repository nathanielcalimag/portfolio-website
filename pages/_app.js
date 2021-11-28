import Head from "next/head";
import Footer from "../components/common/footer";
import Nav from "../components/common/nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
