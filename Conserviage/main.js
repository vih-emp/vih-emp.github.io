import { getRandomEmojis, getRandomScene, getStoryContinuation } from './story.js';

const INV_SLOTS = ['left', 'middle', 'right'];
const MAX_EMOJIS_PER_SLOT = 9;

const state = {
  story: '',
  inventories: {
    left: [],
    middle: [],
    right: []
  },
  usedCount: 0,
  gameOver: false
};

function $(sel) { return document.querySelector(sel); }

function renderInventories() {
  INV_SLOTS.forEach(slot => {
    const inv = $(`#inventory-${slot}`);
    inv.innerHTML = '';
    state.inventories[slot].forEach((emoji, idx) => {
      const btn = document.createElement('button');
      btn.className = 'emoji-btn';
      btn.innerText = emoji;
      btn.title = `Use emoji (${emoji}) in story`;
      btn.onclick = () => useEmoji(slot, idx);
      inv.appendChild(btn);
    });
    // Fill empty slots for grid
    for (let i = state.inventories[slot].length; i < MAX_EMOJIS_PER_SLOT; ++i) {
      const empty = document.createElement('div');
      empty.style.opacity = '0.13';
      inv.appendChild(empty);
    }
  });
}

function renderStory() {
  $('#story').innerText = state.story;
}

function renderGameOver() {
  $('#game-over').innerHTML = `Game Over!<br>Your journey ends.<br><button class="emoji-btn" style="font-size:1.5em;margin-top:1em;" onclick="window.location.reload()">Restart 🔄</button>`;
  $('#game-over').classList.remove('hidden');
}

function update() {
  renderStory();
  renderInventories();
  if (state.gameOver) renderGameOver();
}

function dealEmojis(num) {
  return getRandomEmojis(num);
}

function addEmojisToSlot(slot, emojis) {
  const inv = state.inventories[slot];
  for (const e of emojis) {
    if (inv.length < MAX_EMOJIS_PER_SLOT) inv.push(e);
  }
}

function totalEmojisLeft() {
  return INV_SLOTS.reduce((t, slot) => t + state.inventories[slot].length, 0);
}

function useEmoji(slot, idx) {
  if (state.gameOver) return;
  const emoji = state.inventories[slot][idx];
  state.inventories[slot].splice(idx, 1);
  state.usedCount++;
  // Continue story
  const cont = getStoryContinuation(state.story, emoji, slot, state.usedCount);
  state.story = cont;
  // Reward new emojis
  const n = getRandomEmojiRewardCount();
  const newEmojis = dealEmojis(n);
  addEmojisToSlot(slot, newEmojis);
  update();
  // Check for game over
  if (totalEmojisLeft() === 0) {
    state.gameOver = true;
    update();
  }
}

function getRandomEmojiRewardCount() {
  // 50%: 0, 40%: 1, 9%: 2, 0.9%: 3, 0.1%: 4
  const r = Math.random();
  if (r < 0.5) return 0;
  if (r < 0.9) return 1;
  if (r < 0.99) return 2;
  if (r < 0.999) return 3;
  return 4;
}

function setup() {
  state.story = getRandomScene();
  INV_SLOTS.forEach(slot => {
    state.inventories[slot] = dealEmojis(3);
  });
  update();
}

// Expose for restart
window.useEmoji = useEmoji;

setup();