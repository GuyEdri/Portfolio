import { Fragment, useState } from "react";
import classes from "./Navbar.module.css";
import Scrolling from "./Scrolling";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState();
  const scrollToPastWork = () => {
    setScrollPosition(1500);
  };
  const scrollToSkills = () => {
    setScrollPosition(800);
  };
  const scrollToTop = () => {
    setScrollPosition(1);
  };
  return (
    <Fragment>
      <nav className={classes.mainClass}>
        <button className={classes.button} onClick={scrollToTop}>
          &uarr;
        </button>
        <ul className={classes.nav}>
          <span className={classes.navFirstEl}>Guy Edri</span>
          <li>
            <a href="#pastWork" onClick={scrollToPastWork}>
              Past Work
            </a>
          </li>
          <li>
            <a href="#skills" onClick={scrollToSkills}>
              Skills
            </a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className={classes.marginRight}>
            <a className={classes.hire} href="#hireMe">
              Hire Me &#8594;
            </a>
          </li>
        </ul>
      </nav>
      <Scrolling position={scrollPosition} />
    </Fragment>
  );
};

export default Navbar;
