import { Fragment } from "react";
import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <Fragment>
      <ul className={classes.nav}>
        <li className={classes.navFirstEl}>Guy Edri</li>
        <li>
          <a href="#pastWork">Past Work</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li className={classes.hire}>
          <a href="#hireMe">Hire Me &#8594;</a>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navbar;
