import React from "react";
import "./popup.css";

interface Props {
  setup: string;
  punchline: string;
  highlighted: string;
  definition: string;
  showDefinition: boolean;
  highlightColor: string;
  onClick: () => void;
}

const highlightWord = (
  text: string,
  word: string,
  color: string
): React.ReactNode => {
  const parts = text.split(new RegExp(`(\\*${word}\\*)`, "i"));
  return parts.map((part, i) =>
    part.toLowerCase() === `*${word.toLowerCase()}*` ? (
      <span
        key={i}
        className="max-highlight"
        style={{
          color,
          textShadow: `0 0 8px ${color}, 0 0 24px #fff`,
          fontWeight: 900,
          letterSpacing: 1.5,
        }}
      >
        {word}
      </span>
    ) : (
      part
    )
  );
};

const Popup: React.FC<Props> = ({
  setup,
  punchline,
  highlighted,
  definition,
  showDefinition,
  highlightColor,
  onClick,
}) => (
  <div className="popup-outer" onClick={onClick}>
    <div className="popup-inner" style={{ borderColor: highlightColor }}>
      {!showDefinition ? (
        <>
          <div className="popup-setup">{setup}</div>
          <div className="popup-punchline">
            {highlightWord(punchline, highlighted, highlightColor)}
          </div>
          <div className="popup-note">(Click for definition)</div>
        </>
      ) : (
        <>
          <div className="popup-definition-header">
            {highlighted.charAt(0).toUpperCase() + highlighted.slice(1)}
          </div>
          <div className="popup-definition">{definition}</div>
          <div className="popup-note">(Click to close)</div>
        </>
      )}
    </div>
  </div>
);

export default Popup;