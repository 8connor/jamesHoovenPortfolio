import React, { useEffect } from "react";
import { useRouter } from "next/router";
import TopNav from "./Components/TopNav";
import Head from "next/head";
import NProgress from "nprogress";
import "../node_modules/nprogress/nprogress.css";
import "../styles/global.scss";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", NProgress.start());
    router.events.on("routeChangeComplete", NProgress.done());
    router.events.on("routeChangeError", NProgress.done());
  }, []);

  return (
    <>
      <Head>
        <title>James Hooven's portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <TopNav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
