import React from "react";
import { Conrol } from "./Control/Conrol";
import { controls } from "../../utils.constants";

export const Controls = ({ totalPrice, ingredAdded, ingredRemoved }) => {
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
    </div>
  );
};
