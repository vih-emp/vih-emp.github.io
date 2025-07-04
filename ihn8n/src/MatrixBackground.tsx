import React, { useEffect, useRef } from "react";

const pastelMatrixColors = [
  "#b0ffb3", "#fce1ff", "#bbf7f7", "#ffd6fa", "#ffb2eb", "#abffe1", "#e7f2ef"
];

const fontSize = 22;
const columns = Math.floor(window.innerWidth / fontSize);

const getPastel = () =>
  pastelMatrixColors[Math.floor(Math.random() * pastelMatrixColors.length)];

const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let drops = Array(columns).fill(1);
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    function draw() {
      ctx.fillStyle = "rgba(240,240,255,0.18)";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96); // random Katakana
        ctx.font = `${fontSize}px 'Share Tech Mono', monospace`;
        ctx.fillStyle = getPastel();
        ctx.fillText(
          text,
          i * fontSize,
          drops[i] * fontSize + Math.random() * 3
        );

        if (
          drops[i] * fontSize > height &&
          Math.random() > 0.975
        ) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationFrame.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none"
      }}
    />
  );
};

export default MatrixBackground;