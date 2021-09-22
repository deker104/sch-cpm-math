import "bootstrap/dist/css/bootstrap.css";

import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <div className="container">
      <Head>
        <title>Контактные часы</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
