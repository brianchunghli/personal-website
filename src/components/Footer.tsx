import React from "react";
import "../styles/Footer.css";

// add types here to easily extend interface if required
type FooterSectionProps = React.ClassAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLDivElement>;

const Footer: React.FC<FooterSectionProps> = (props) => {
  return (
    <div {...props}>
      <div id="footer-content">
        <small>Designed and built by Brian Li.</small>
      </div>
    </div>
  );
};

export default Footer;
