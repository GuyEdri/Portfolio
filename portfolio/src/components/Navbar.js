import { Fragment, useState } from "react";
import classes from "./Navbar.module.css";
import Scrolling from "./Scrolling";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState();
  const scrollToHireMe = () => {
    setScrollPosition(2300);
  };

  const scrollToSkills = () => {
    setScrollPosition(900);
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
          <span className={classes.navFirstEl} onClick={scrollToTop}>
            Guy Edri
          </span>
          <li>
            <span onClick={scrollToSkills}>Skills</span>
          </li>
          <li>
            <span>Projects</span>
          </li>
          <li className={classes.marginRight}>
            <span onClick={scrollToHireMe} className={classes.hire}>
              Hire Me &#8594;
            </span>
          </li>
        </ul>
      </nav>
      <Scrolling position={scrollPosition} />
    </Fragment>
  );
};

export default Navbar;
