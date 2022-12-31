import { Fragment, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkCard from "./components/WorkCard";
import cardImg from "./img/Hero.png";
import Scrolling from "./components/Scrolling";

const card = [
  {
    img: cardImg,
    id: Math.random(),
  },
  {
    img: cardImg,
    id: Math.random(),
  },
  {
    img: cardImg,
    id: Math.random(),
  },
];

function App() {
  return (
    <Fragment>
      <Navbar />
      <Scrolling />
      <Hero />
      <About />
      <WorkCard cards={card} />
    </Fragment>
  );
}

export default App;
