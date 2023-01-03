import classes from "./WorkCard.module.css";
import { Fragment } from "react";

const WorkCard = (props) => {
  return (
    <Fragment>
      <h1 className={classes.myWork}>My Work</h1>
      <div className={classes.container}>
        {props.cards.map((card) => {
          return (
            <div className={classes.card} key={card.id}>
              <a href={card.link} rel="noreferrer" target="_blank">
                <img
                  className={classes.img}
                  src={card.img}
                  alt="Work example img"
                ></img>
              </a>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default WorkCard;
