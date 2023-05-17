import React, { useEffect, useRef, useState } from "react";

interface MyComponentProps {
  delay?: number;
  FadeUp?: boolean;
}

type FadeInSectionProps = React.ClassAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLDivElement> &
  MyComponentProps;

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  delay = 0,
  FadeUp = true,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(() => false);
  const domRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(entry.isIntersecting);
          }, delay);
        }
      });
    });
    domRef?.current && observer.observe(domRef.current);
    return () => {
      domRef?.current && observer.unobserve(domRef.current);
    };
  }, []);
  return (
    <div
      {...rest}
      className={`fade-in-section${
        isVisible ? (FadeUp ? " is-visible-up" : " is-visible-down") : ""
      }`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
