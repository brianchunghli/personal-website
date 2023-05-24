import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

// add types here to easily extend interface if required
type HeaderSectionProps = React.ClassAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLDivElement>;

const Header: React.FC<HeaderSectionProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <div id="Header-nav">
        <Link to="/">Home</Link>
        <Link to="/uni">Uni</Link>
      </div>
    </div>
  );
};

export default Header;
