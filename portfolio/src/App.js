import { Routes, Route } from "react-router-dom";

import WorkCard from "./components/WorkCard/WorkCard";
import Layout from "./Routing/Layout";
import Home from "./components/Home/Home";

import cardImg from "./img/Hero.png";
import cakeSite from "./img/cakeSite.png";

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
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<WorkCard cards={card} />} />
      </Route>
    </Routes>
  );
}

export default App;
