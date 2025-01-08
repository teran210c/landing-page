import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <FeatureSection></FeatureSection>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
