"use client";

import Features from "@/components/Features";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Banner />
      <Features />
      <About />
      <Featured />
      <Testimonials />
      <Contact />

    </div>
  );
}
