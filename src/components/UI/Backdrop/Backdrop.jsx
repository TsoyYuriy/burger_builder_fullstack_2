import React from "react";
import "./backdrop.css";

export const Backdrop = ({ show, onClickCloseBackdrop }) =>
  show && <div className="Backdrop" onClick={onClickCloseBackdrop} />;
