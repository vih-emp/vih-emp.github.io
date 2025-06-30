// Wait for the adventure intro to finish, then show the torches and the dramatic sequence
window.addEventListener('DOMContentLoaded', () => {
  const torchPair = document.getElementById('torch-pair');
  const secondSequence = document.getElementById('second-sequence');
  setTimeout(() => {
    torchPair.style.opacity = 1;
    setTimeout(() => {
      secondSequence.style.opacity = 1;
    }, 1200); // torches appear first, then sequence
  }, 12000); // matches animation duration in CSS (12s)
});

// Countdown logic
function updateCountdown() {
  // Target: 30 Jan 2026, 12:00 GMT
  const target = new Date(Date.UTC(2026, 0, 30, 12, 0, 0)); // Months are 0-based
  const now = new Date();
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) {
    document.getElementById('countdown').innerHTML = "The gates have opened!";
    return;
  }

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  const mins = Math.floor((diff % (1000*60*60)) / (1000*60));
  const secs = Math.floor((diff % (1000*60)) / 1000);

  document.getElementById('countdown').innerHTML =
    `Countdown: ${days}d ${hours}h ${mins}m ${secs}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();