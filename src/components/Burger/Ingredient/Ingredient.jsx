import React from "react";
import "./ingredient.css";

export const Ingredient = ({ type }) => {
  switch (type) {
    case "bread-bottom":
      return <div className="BreadBottom" />;
    case "bread-top":
      return (
        <div className="BreadTop">
          <div className="Seeds1" />
          <div className="Seeds2" />
        </div>
      );
    case "meat":
      return <div className="Meat" />;
    case "salad":
      return <div className="Salad" />;
    case "bacon":
      return <div className="Bacon" />;
    case "cheese":
      return <div className="Cheese" />;
    default:
      return null;
  }
};
