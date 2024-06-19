import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { FaqAccordion } from "./components/faq";
import { Order } from "./components/order";
import { Contact } from "./components/contact";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

// Initialize SmoothScroll
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} />
      <Gallery data={landingPageData.Gallery} />
      <Order data={landingPageData.Order} />
      <FaqAccordion data={landingPageData.FaqAccordion} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
