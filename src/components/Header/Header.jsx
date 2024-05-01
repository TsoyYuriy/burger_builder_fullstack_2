import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { navItem } from "../../utils/utils.constants";

export const Header = () => {
  return (
    <header className="Toolbar">

      <div className="Logo">
        <img src="https://image.ibb.co/e3Pkkx/burger_logo.png" alt="burger_logo" />
      </div>

      <nav>
        <ul className="NavigationItems">
          {navItem.map((item) => {
            return (
              <li key={item.name} className="NavigationItem">
                <NavLink to={item.to}>
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
