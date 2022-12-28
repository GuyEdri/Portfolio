import { useState, Fragment } from "react";
import classes from "./About.module.css";
import cardImg from "../img/Hero.png";
const About = () => {
  const [skillStatus, updateSkillStatus] = useState(false);
  const [experienceStatus, updateExperienceStatus] = useState(false);
  const [educationStatus, updateEducationStatus] = useState(false);

  const skillHandler = () => {
    updateSkillStatus(true);
    updateEducationStatus(false);
    updateExperienceStatus(false);
  };
  const experienceHandler = () => {
    updateSkillStatus(false);
    updateEducationStatus(false);
    updateExperienceStatus(true);
  };
  const educationHandler = () => {
    updateSkillStatus(false);
    updateExperienceStatus(false);
    updateEducationStatus(true);
  };

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
          {skillStatus && (
            <div>
              <h2>Frontend</h2>
              <span>WelloWow~</span>
            </div>
          )}
          {experienceStatus && (
            <div>
              <h2>Backend</h2>
              <span>WelloWow~</span>
            </div>
          )}
          {educationStatus && (
            <div>
              <h2>Fullstack</h2>
              <span>WelloWow~</span>
            </div>
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default About;
