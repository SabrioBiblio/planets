import React, { FC } from "react";
import { IHeading } from "./types";

export const Heading: FC<IHeading> = ({ children }) => {
  return <h1>{children}</h1>;
};
