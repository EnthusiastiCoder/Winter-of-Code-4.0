"use client"
import Image from "next/image";
import Register from "@/components/onboarding";
import AboutUs from "@/components/about";
import Script from "next/script";
import FAQPage from "@/components/faq";
import Timeline from "@/components/timeline";
import Organisations from "@/components/organisations";
import Sponsors from "@/components/sponsors";
import Partners from "@/components/partners";
import Projects from "@/components/projects";
import Team from "@/components/team";
import Carousel from "@/components/carousel";
export default function Home() {
  return (
    <main>
        <Register/>
        <AboutUs/>
        <Timeline/>
        <Organisations/>
        <Projects/>
        <Sponsors/>
    </main>
  );
}
