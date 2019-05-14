import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import "./Footer.less";

const FooterCredits = props => (
  <>
    {" "}
    <Logo />
    Vytvořil Vojtěch Bezpalec, David Šupík a Daniel Grim
  </>
);

export default FooterCredits;
