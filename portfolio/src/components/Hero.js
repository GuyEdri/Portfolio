import { Fragment } from "react";
import classes from "./Hero.module.css";
import heroImg from "../img/Hero.png";
const Hero = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.containerLeft}>
          <p className={classes.job}>Practical Software Engineer</p>
          <h1>
            Hi, I'm <span className={classes.name}>Guy</span>
          </h1>
          <h1>Edri From Israel</h1>
        </div>
        <div className={classes.containerRight}>
          <img className={classes.img} src={heroImg} alt="Profile"></img>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
