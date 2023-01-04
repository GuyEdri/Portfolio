import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkCard from "./components/WorkCard";
import Contact from "./components/Contact";
import cardImg from "./img/Hero.png";
import cakeSite from "./img/cakeSite.png";
import Layout from "./Routing/Layout";
import Home from "./components/Home";

const card = [
  {
    img: cakeSite,
    id: Math.random(),
    link: "https://ortiscake.netlify.app/",
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<WorkCard cards={card} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
