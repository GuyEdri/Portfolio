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
              <img
                className={classes.img}
                src={card.img}
                alt="Work example img"
              ></img>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default WorkCard;