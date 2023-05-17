import React from "react";
import "../styles/Sidebar.css";
import FadeInSection from "./FadeInSection";

const linkDelay = 200;
export default function Sidebar() {
  const links = [];

  return (
    <div id="Sidebar">
      {links &&
        links.map((l: String, i: number) => {
          return (
            <FadeInSection delay={i * linkDelay}>
              <div tabIndex={i}>
                <a href={`#${l}`}>{"/" + l.toLowerCase()}</a>
              </div>
            </FadeInSection>
          );
        })}
      <div id="sidebar-icons">
        <a href="https://www.linkedin.com/in/brianchli/">
          <i className="devicon-linkedin-plain" />
        </a>
        <a href="https://github.com/brianchunghli">
          <i className="devicon-github-original" />
        </a>
      </div>
    </div>
  );
}
