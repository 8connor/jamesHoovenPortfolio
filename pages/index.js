import React from "react";
import InfoSection from "./Components/InfoSection";
import Head from "next/head";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact info";

export default function Home() {
  return (
    <>
      <Head>
        <title>James Hooven's portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/logo.png"></link>
      </Head>
      <InfoSection />
      <Projects />
      <Contact />
    </>
  )
}
