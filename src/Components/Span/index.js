import React from "react";

/* STYLE */
import { Span as SpanContainer } from "./style";

const Span = ({ children, ...props }) => {
  return <SpanContainer {...props}>{children}</SpanContainer>;
};

export default Span;
