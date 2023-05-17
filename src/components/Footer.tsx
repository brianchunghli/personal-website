import React from "react";
import "../styles/Footer.css";
export default function Footer(
  props: React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement>
) {
  return (
    <div {...props}>
      <div id="footer-content">
        <small>Designed and built by Brian Li.</small>
      </div>
    </div>
  );
}
