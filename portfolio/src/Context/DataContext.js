import React, { useContext } from "react";

import cakeSite from "../img/cakeSite.png";
import GroupTel from "../img/GroupTel.png";
import BikeStore from "../img/BikeStore.png";

const DataContext = React.createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const card = [
    {
      img: cakeSite,
      id: Math.random(),
      link: "https://ortiscake.netlify.app/",
      description:
        "An ecommerce cake shop business that sells cakes and other baked goods online Using HTML, CSS, JavaScript, Netlify.",
    },
    {
      img: GroupTel,
      id: Math.random(),
      link: "https://github.com/GuyEdri/GroupTel",
      description: `The project system is using C# JAVASCIPT and of course also includes CSS JQUERY HTML REST API
          (PAYPAL)
          The system also has a database that is used to retrieve, update, delete, add users,
          products and orders. Also in the system there is the possibility to send emails, a way to contact 
          The customers, BOT customer service and technical support.
          The system is based on e-commerce models and has a convenient and simple UI interface that makes it easy
          for The customers to: order a product, cancel a product order, order history, etc.`,
    },
    {
      img: BikeStore,
      id: Math.random(),
      link: "https://github.com/GuyEdri/BikeStore",
      description:
        "Ecommerce Bike Store Using C# for Backend, Sql database, .Net HTML CSS for Frontend",
    },
  ];

  return <DataContext.Provider value={card}>{children}</DataContext.Provider>;
}
