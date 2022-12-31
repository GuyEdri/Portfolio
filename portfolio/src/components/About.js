import { useState, Fragment } from "react";
import classes from "./About.module.css";
import cardImg from "../img/Hero.png";
const About = () => {
  const [skillStatus, updateSkillStatus] = useState(true);
  const [experienceStatus, updateExperienceStatus] = useState("");
  const [educationStatus, updateEducationStatus] = useState("");

  const skillHandler = () => {
    updateSkillStatus(true);
    updateEducationStatus("");
    updateExperienceStatus("");
  };
  const experienceHandler = () => {
    updateSkillStatus("");
    updateEducationStatus("");
    updateExperienceStatus(true);
  };
  const educationHandler = () => {
    updateSkillStatus("");
    updateExperienceStatus("");
    updateEducationStatus(true);
  };

  return (
    <Fragment>
      <section className={classes.container}>
        <img src={cardImg} alt="Profile" className={classes.img}></img>
        <div className={classes.about}>
          <h1 className={classes.aboutHeader}>About Me</h1>
          <p className={classes.aboutText}>שמן מניאק</p>

          <ul className={classes.tabTitles}>
            <li>
              <span
                onClick={skillHandler}
                className={skillStatus && classes.activeLink}
              >
                Skills
              </span>
            </li>
            <li>
              <span
                onClick={experienceHandler}
                className={experienceStatus && classes.activeLink}
              >
                Experience
              </span>
            </li>
            <li>
              <span
                onClick={educationHandler}
                className={educationStatus && classes.activeLink}
              >
                Education
              </span>
            </li>
          </ul>
          {skillStatus && (
            <div className={classes.see}>
              <p className={classes.seeHeader}>UI/UX</p>
              <span className={classes.marginbot}>
                Designing Web/App interfaces
              </span>
              <p className={classes.seeHeader}>Web Development</p>
              <span className={classes.marginbot}>Web app Development</span>
              <p className={classes.seeHeader}>App Development</p>
              <span className={classes.marginbot}>
                Building Android/IOS apps
              </span>
            </div>
          )}
          {experienceStatus && (
            <div className={classes.see}>
              <p className={classes.seeHeader}>None</p>
              <span className={classes.marginbot}>None</span>
            </div>
          )}
          {educationStatus && (
            <div className={classes.see}>
              <p className={classes.seeHeader}>2019-2022</p>
              <span>Practical Software Engineering Student</span>
            </div>
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default About;
