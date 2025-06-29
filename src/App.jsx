import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/Jason";
import SecondVideo from "./sections/SecondVideo";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <FirstVideo />
      <Jason />
      <SecondVideo />
    </main>
  );
};

export default App;
