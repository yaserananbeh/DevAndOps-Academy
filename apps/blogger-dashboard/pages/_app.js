import Head from 'next/head';
import './styles.css';
function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Welcome to blogger-dashboard!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}
export default CustomApp;
