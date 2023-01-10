import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.mainClass}>
      <ScrollLink
        to="hero"
        smooth={true}
        duration={1000}
        className={classes.button}
      >
        {" "}
        &uarr;
      </ScrollLink>
      <ul className={classes.nav}>
        <Link to="/" className={classes.navFirstEl}>
          Guy Edri
        </Link>
        <li>
          <ScrollLink
            to="Skills"
            smooth={true}
            duration={1000}
            offset={-50}
            className={classes.Link}
          >
            Skills
          </ScrollLink>
        </li>
        <li>
          <Link to="/projects" className={classes.Link}>
            Projects
          </Link>
        </li>
        <li className={classes.marginRight}>
          <ScrollLink
            className={classes.hire + " " + classes.Link}
            to="hireMe"
            smooth={true}
            duration={1000}
            offset={-60}
          >
            Hire Me &#8594;
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
