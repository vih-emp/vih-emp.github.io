import React, { useState, useEffect } from "react";
import { getJoke, Joke } from "./jokes";
import Popup from "./Popup";
import MatrixBackground from "./MatrixBackground";
import GlitchBar from "./GlitchBar";
import "./maxhr.css";

const pastelColors = [
  "#b0ffb3", "#bbf7f7", "#ffd6fa", "#ffb2eb", "#abffe1"
];

function randomPastelColor() {
  return pastelColors[Math.floor(Math.random() * pastelColors.length)];
}

const glitchTTS = (text: string) => {
  if ("speechSynthesis" in window) {
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.7 + Math.random() * 0.2;
    utter.pitch = 0.3 + Math.random() * 0.3;
    utter.volume = 1;
    utter.voice = speechSynthesis
      .getVoices()
      .find((v) =>
        v.name.toLowerCase().includes("zarvox") ||
        v.name.toLowerCase().includes("trinoids")
      ) ?? null;
    window.speechSynthesis.speak(utter);
  }
};

const App: React.FC = () => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [popup, setPopup] = useState(false);
  const [showDefinition, setShowDefinition] = useState(false);
  const [highlightColor, setHighlightColor] = useState("#b0ffb3");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const letter = e.key.toLowerCase();
      if (!/^[a-z]$/.test(letter)) return;
      const jokeObj = getJoke(letter);
      if (jokeObj) {
        setHighlightColor(randomPastelColor());
        setJoke(jokeObj);
        setPopup(true);
        setShowDefinition(false);
        glitchTTS(`${letter.toUpperCase()} - ${jokeObj.setup} ${jokeObj.punchline}`);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleClick = () => {
    if (joke && !showDefinition) {
      setShowDefinition(true);
      glitchTTS(joke.definition);
    } else {
      setPopup(false);
    }
  };

  return (
    <div className="max-bg">
      <MatrixBackground />
      <GlitchBar />
      <div className="hr-title">I H N 8 N</div>
      {popup && joke && (
        <Popup
          setup={joke.setup}
          punchline={joke.punchline}
          highlighted={joke.highlighted}
          definition={joke.definition}
          showDefinition={showDefinition}
          highlightColor={highlightColor}
          onClick={handleClick}
        />
      )}
      <div className="max-footer">
        Press any letter key for a joke. Click the popup for a definition, click again to dismiss.
      </div>
    </div>
  );
};

export default App;