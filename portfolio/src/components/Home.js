import { Fragment } from "react";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Contact />
    </Fragment>
  );
};
export default Home;
