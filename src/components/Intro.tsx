import React, { useState } from "react";
import "../styles/Intro.css";
import FadeInSection from "./FadeInSection";
import { TypeAnimation } from "react-type-animation";

const icons = {
  "C++": "devicon-cplusplus-plain",
  Python: "devicon-python-plain",
  Bash: "devicon-bash-plain",
  JavaScript: "devicon-javascript-plain",
  HTML5: "devicon-html5-plain",
  CSS: "devicon-css3-plain",
  React: "devicon-react-original",
  Git: "devicon-git-plain",
};

const skills = [
  "C++",
  "Python",
  "JavaScript",
  "HTML5",
  "CSS",
  "React",
  "Git",
  "Bash",
];
const baseDelay = 200;
const skillSectionDelay = 1600;

// add types here to easily extend interface if required
type IntroSectionProps = React.ClassAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLDivElement>;

const Intro: React.FC<IntroSectionProps> = (props) => {
  const [render, setRender] = useState<boolean>(false);
  const isMobile = window.innerWidth <= 768;

  const section1 = (
    <TypeAnimation
      sequence={["Hi", 400, "Hi, I'm Brian. 👋"]}
      wrapper={"h1"}
      speed={25}
      deletionSpeed={1}
      className="intro-title"
    />
  );
  const section2 = <div id="intro-subheader">Building things, sometimes.</div>;
  const section3 = (
    <div>
      <span>Masters of Computer Science student based in Sydney.</span>
      <div>
        Exploring my interests in full-stack, back-end and game development.
      </div>
    </div>
  );

  return (
    <div {...props}>
      <div className="section-contents">
        <video
          id="intro-video"
          onPlay={() => setRender(true)}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/memoji1.mp4" type="video/mp4" />
        </video>
        {(render || isMobile) && (
          <div>
            <FadeInSection>{section1}</FadeInSection>
            <div id="intro-subsection-1">
              {section2}
              {section3}
            </div>
            <div id="intro-subsection-2">
              <FadeInSection delay={skillSectionDelay} id="intro-skills">
                <b>Languages and technologies</b>
                <div id="intro-skills-list">
                  {skills.map((item: string, i: number) => {
                    return (
                      <FadeInSection
                        key={i}
                        delay={skillSectionDelay + i * baseDelay}
                      >
                        <div className="intro-skills-tile">
                          <i key={`icon-${i}`} className={icons[item]} />
                          <small>{item}</small>
                        </div>
                      </FadeInSection>
                    );
                  })}
                </div>
              </FadeInSection>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Intro;
