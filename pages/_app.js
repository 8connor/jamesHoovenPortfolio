import React, { useEffect } from "react";
import { useRouter } from "next/router";
import SideBar from "./Components/SideBar";
import NProgress from "nprogress";
import MobileNav from "./Components/MobileNav";
import GlobalHeader from "./Components/GlobalHeader";
import "../node_modules/nprogress/nprogress.css";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", NProgress.start());
    router.events.on("routeChangeComplete", NProgress.done());
    router.events.on("routeChangeError", NProgress.done());
  }, [])

  return (
    <>
      <GlobalHeader />
      <MobileNav />
      <SideBar />
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
