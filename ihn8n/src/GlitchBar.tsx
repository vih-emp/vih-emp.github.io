import React, { useEffect, useState } from "react";

const pastelBars = [
  "#fce1ff", "#bbf7f7", "#ffd6fa", "#ffb2eb", "#b0ffb3", "#abffe1"
];

function randomBarStyle() {
  const isVertical = Math.random() > 0.5;
  const length = isVertical
    ? `${20 + Math.random() * 60}%`
    : `${80 + Math.random() * 100}px`;
  const thickness = isVertical
    ? `${3 + Math.random() * 7}px`
    : `${5 + Math.random() * 15}px`;
  const color = pastelBars[Math.floor(Math.random() * pastelBars.length)];
  return {
    isVertical,
    length,
    thickness,
    color,
    blur: `${2 + Math.random() * 10}px`,
    top: `${Math.random() * 85}%`,
    left: `${Math.random() * 85}%`
  };
}

const GlitchBar: React.FC = () => {
  const [style, setStyle] = useState(randomBarStyle());

  useEffect(() => {
    const interval = setInterval(() => {
      setStyle(randomBarStyle());
    }, 600 + Math.random() * 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 1000,
        top: style.top,
        left: style.left,
        width: style.isVertical ? style.thickness : style.length,
        height: style.isVertical ? style.length : style.thickness,
        background: style.color,
        boxShadow: `0 0 ${style.blur} ${style.color}, 0 0 12px #fff5`,
        opacity: 0.74,
        filter: "blur(0.6px) contrast(1.5)",
        transition: "all 0.26s cubic-bezier(0.5,1.7,0.6,1.05)",
        borderRadius: "6px",
        pointerEvents: "none"
      }}
    />
  );
};

export default GlitchBar;