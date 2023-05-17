import React, { useState } from "react";
import "../styles/Header.css";

export default function Header(
  props: React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement>
) {
  const [toggle, setToggle] = useState(() => false);
  const navigation = ["Intro"];

  return (
    <div {...props}>
      <button
        id="header-dropdown-button"
        onClick={() => setToggle((prev) => !prev)}
      >
        <i className="bi bi-list"></i>
      </button>
      <div id="header-dropdown" className={toggle ? "" : "dropdown-hidden"}>
        <div>
          {navigation.map((nav: string, i: number) => {
            return (
              <a tabIndex={i + 5} href={`#${nav}`}>
                {nav}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
