import React from "react";
import "./modal.css";
import { Backdrop } from "../Backdrop/Backdrop";

export const Modal = ({ children, show, closed }) => {
  return (
    <>
      <Backdrop show={show} onClickCloseBackdrop={closed}/>
      <div
        className="Modal"
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        {children}
      </div>
    </>
  );
};
