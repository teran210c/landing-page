import Image from "next/image";
import localFont from "next/font/local";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <FeatureSection></FeatureSection>
      <Slider />
      <Footer></Footer>
    </>
  );
}
