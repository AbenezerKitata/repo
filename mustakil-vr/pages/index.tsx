import Layout from "../layout";
import Hero from "../components/Hero";
import React, { useState } from "react";
import {
  featuresOne,
  featuresOneType,
  featuresThree,
  featuresTwo,
  price,
} from "../data";

import Pricing from "../components/Pricing";
import Features from "../components/Features";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

export default function Home() {
  const [one, setOne] = useState<featuresOneType>(featuresOne);
  const [two, setTwo] = useState(featuresTwo);
  const [three, setThree] = useState(featuresThree);
  const [prices, setPrices] = useState(price);

  return (
    <Layout>
      <Hero />
      {/* <Features />
      <Projects />
      <Pricing data={price} />
      <Clients />
      <Contact /> */}
    </Layout>
  );
}
