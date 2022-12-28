import { Fragment } from "react";
import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <Fragment>
      <nav>
        <ul className={classes.nav}>
          <span className={classes.navFirstEl}>Guy Edri</span>
          <li>
            <a href="#pastWork">Past Work</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
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
    </Fragment>
  );
};

export default Navbar;
