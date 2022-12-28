import { useState, Fragment } from "react";
import classes from "./About.module.css";
import cardImg from "../img/Hero.png";
const About = () => {
  return (
    <Fragment>
      <section className={classes.container}>
        <img src={cardImg} alt="Profile" className={classes.img}></img>
        <div className={classes.about}>
          <h1 className={classes.aboutHeader}>About Me</h1>
          <p className={classes.aboutText}>Lorem ipsum dolor sit</p>

          <ul className={classes.flex}>
            <li>
              <a href="#a" onClick={skillHandler}>
                Skills
              </a>
              {skillStatus && skillHandler}
            </li>
            <li>
              <a href="#b" onClick={experienceHandler}>
                Experience
              </a>
            </li>
            <li>
              <a href="#c" onClick={educationHandler}>
                Education
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
