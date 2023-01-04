import { Outlet, Link } from "react-router-dom";
import { Fragment, useState } from "react";
import classes from "../components/Navbar.module.css";
import Scrolling from "../components/Scrolling";
const Layout = () => {
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
    <>
      <Fragment>
        <nav className={classes.mainClass}>
          <button className={classes.button} onClick={scrollToTop}>
            &uarr;
          </button>
          <ul className={classes.nav}>
            <Link to="/" className={classes.navFirstEl} onClick={scrollToTop}>
              Guy Edri
            </Link>
            <li>
              <Link to="/" onClick={scrollToSkills} className={classes.Link}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" className={classes.Link}>
                Projects
              </Link>
            </li>
            <li className={classes.marginRight}>
              <Link
                to="/"
                onClick={scrollToHireMe}
                className={classes.hire + " " + classes.Link}
              >
                Hire Me &#8594;
              </Link>
            </li>
          </ul>
        </nav>
        <Scrolling position={scrollPosition} />
        <Outlet />
      </Fragment>
    </>
  );
};

export default Layout;
