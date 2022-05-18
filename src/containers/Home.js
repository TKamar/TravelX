import React, { useState, useEffect } from "react";
import { HeroSection } from "../components/HeroSection";
import { QA } from "../components/QA";
import { About } from "../components/About";
import { Footer } from "../components/Footer";
import { useLocation } from "react-router-dom";
const Home = (props) => {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, []);

  return (
    <div>
      <HeroSection />

      <QA />

      <About />

      <Footer />
    </div>
  );
};
export default Home;
