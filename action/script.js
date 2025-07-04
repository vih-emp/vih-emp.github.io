
const audio = document.getElementById('bg-music');
const btn = document.getElementById('music-toggle');
let isMuted = false;

btn.addEventListener('click', () => {
  isMuted = !isMuted;
  audio.muted = isMuted;
  btn.textContent = isMuted ? '🔇' : '🔈';
});


window.addEventListener('click', () => {
  audio.muted = isMuted;
}, { once: true });
