import SideBar from "./Components/SideBar";
import React from "react"
import Loader from "./Components/Loader";
import "../styles/global.scss"

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Loader />
      <SideBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
