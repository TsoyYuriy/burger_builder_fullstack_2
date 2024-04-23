import React from "react";
import { Conrol } from "./Control/Conrol";
import { controls } from "../../utils.constants";
import './controls.css';

export const Controls = ({ totalPrice, ingredAdded, ingredRemoved, purchasable, onClickShowModal }) => {
  return (
    <div>
      <p>
        Current Price: <strong>{totalPrice}</strong>
      </p>

      {controls.map((contr) => {
        return <Conrol 
                key={contr.type} 
                type={contr.type} 
                added={() => ingredAdded(contr.type)}
                removed={() => ingredRemoved(contr.type)}
              />;
      })}

      <button className="OrderButton" disabled={!purchasable} onClick={onClickShowModal}>Order now</button>
    </div>
  );
};
