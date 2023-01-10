import classes from "./WorkCard.module.css";

const WorkCard = ({ cards }) => {
  return (
    <div>
      <h1 className={classes.myWork}>My Projects</h1>
      <div className={classes.container}>
        {cards.map((card) => {
          return (
            <div className={classes.card} key={card.id}>
              <a href={card.link} rel="noreferrer" target="_blank">
                <img
                  className={classes.img}
                  src={card.img}
                  alt="Work example img"
                ></img>
              </a>
              <h2 className={classes.header}>{card.description}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkCard;
