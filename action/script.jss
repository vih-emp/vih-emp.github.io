// Music toggle
const audio = document.getElementById('bg-music');
const btn = document.getElementById('music-toggle');
let isMuted = false;

btn.addEventListener('click', () => {
  isMuted = !isMuted;
  audio.muted = isMuted;
  btn.textContent = isMuted ? '🔇' : '🔈';
});

// Unmute on first interaction (browser policies)
window.addEventListener('click', () => {
  audio.muted = isMuted;
}, { once: true });