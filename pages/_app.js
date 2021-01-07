import React, { useEffect } from "react";
import { useRouter } from "next/router";
import TopNav from "./Components/TopNav";
import NProgress from "nprogress";
import MobileNav from "./Components/MobileNav";
import "../node_modules/nprogress/nprogress.css";
import "../styles/global.scss";

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
      <MobileNav />
      <TopNav />
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
