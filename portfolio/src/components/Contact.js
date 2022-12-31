import { Fragment } from "react";
import classes from "./Contact.module.css";
const Contact = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.contactInfo}>
          <h1 className={classes.header}>Contact Me</h1>
          <p>guyedrix2@gmail.com</p>
          <a href="tel:0522255447">0522255447</a>
        </div>
        <div className={classes.contactFill}>
          <form>
            <label></label>
            <input></input>
            <label></label>
            <input></input>
            <label></label>
            <input></input>
            <button></button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
