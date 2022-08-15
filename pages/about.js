import Head from "next/head";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Analytics from "../components/Analytics";
import Newsletter from "../components/Newsletter";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <title>Portfolio - Olumide Oderinde</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />
      </Head>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Pricing />
      <Footer />
    </>
  );
}
