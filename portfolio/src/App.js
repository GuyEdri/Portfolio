import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <About />
    </Fragment>
  );
}

export default App;
