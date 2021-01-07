import React from "react";
import InfoSection from "./Components/InfoSection";
import Resume from "./Components/Resume";
import Head from "next/head";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact info";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <InfoSection />
      <Resume />
      <Projects />
      <Contact />
    </>
  )
}
