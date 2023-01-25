import { Routes, Route } from "react-router-dom";

import WorkCard from "./components/WorkCard/WorkCard";
import Layout from "./Routing/Layout";
import Home from "./components/Home/Home";

import { useData } from "./Context/DataContext";

function App() {
  const card = useData();
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
