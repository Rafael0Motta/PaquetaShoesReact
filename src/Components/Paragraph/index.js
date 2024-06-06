import React from "react";
import { Paragraph as P } from "./styled";

const Paragraph = ({ children, ...props }) => {
  return <P>{children}</P>;
};

export default Paragraph;
