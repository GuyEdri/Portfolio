import { Fragment, useState } from "react";
import { send } from "emailjs-com";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import {
  FaPaperPlane,
  FaPhoneSquareAlt,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import classes from "./Contact.module.css";
const Contact = () => {
  const [modal, setModal] = useState(null);

  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const onButtonClick = () => {
    fetch("Guy Edri Resume-5.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Guy Edri Resume-5.pdf";
        alink.click();
      });
    });
  };
  function submitHandler(event) {
    event.preventDefault();
    send("default_service", "template_x9xvp88", toSend, "kifxK0QyuAIAYL8dV")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setModal(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    setToSend({
      from_name: "",
      message: "",
      reply_to: "",
    });
  }
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const modalHandler = () => {
    setModal(null);
  };

  return (
    <Fragment>
      {modal && (
        <Modal
          title="Mail sent"
          message="Thanks for the opportunity!, I will do my best!"
          onConfirm={modalHandler}
        />
      )}
      <div className={classes.container}>
        <div className={classes.contactInfo}>
          <h1 className={classes.header}>Contact Me</h1>
          <div className={classes.background}>
            <FaPaperPlane className={classes.icon} />
            <span className={classes.background}>Guyedrix2@gmail.com</span>
          </div>

          <div className={classes.background}>
            <FaPhoneSquareAlt className={classes.icon} />
            <a className={classes.background} href="tel:0522255447">
              052-2255447
            </a>
          </div>
          <div className={classes.socialIconContainer}>
            <a
              className={classes.background}
              href="https://www.facebook.com/profile.php?id=100066586392873"
              rel="noreferrer"
              target="_blank"
            >
              <FaFacebook className={classes.socialIcon} />
            </a>
            <a
              className={classes.background}
              href="https://www.instagram.com/guyedri1/"
              rel="noreferrer"
              target="_blank"
            >
              <FaInstagram className={classes.socialIcon} />
            </a>
            <a
              className={classes.background}
              href="https://www.linkedin.com/in/guy-edri/"
              rel="noreferrer"
              target="_blank"
            >
              <FaLinkedin className={classes.socialIcon} />
            </a>
          </div>
          <Button onClick={onButtonClick}>Download CV</Button>
        </div>

        <form onSubmit={submitHandler}>
          <div className={classes.contactFill}>
            <label htmlFor="Name"></label>
            <input
              className={classes.input}
              type="text"
              required
              id="Name"
              name="from_name"
              placeholder="Your Name"
              value={toSend.from_name}
              onChange={handleChange}
            ></input>
            <label htmlFor="Email"></label>
            <input
              className={classes.input}
              type="email"
              required
              id="Email"
              name="reply_to"
              placeholder="Your Email"
              value={toSend.reply_to}
              onChange={handleChange}
            ></input>
            <label htmlFor="Message"></label>
            <textarea
              className={classes.textarea}
              required
              id="Message"
              name="message"
              rows="10"
              placeholder="Your Message"
              value={toSend.message}
              onChange={handleChange}
            ></textarea>
            <Button>Send</Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Contact;
