import React, { useEffect } from "react";
import { useRouter } from "next/router";
import TopNav from "./Components/TopNav";
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
      <TopNav />
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
