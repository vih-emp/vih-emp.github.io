// Emoji list - Safe for all players
const safeEmojis = [
  "🌳","🦉","🐾","🌞","🌧️","🌙","🔑","🧭","🍎","🍄","🪨","🕳️","🚪","🗝️","🦊","🐛","🦋","🍯","🧃","🦄","🍃","🦢","🦑","🦜","🦦","🪶","🧸","🕯️","🪙","⚙️","🧩","🎒","🧤","📜","🎩","🪄","🧹","🕰️","🔦","🪁","🎲","🔮","🕹️","🧊","🌵","🦔","🦕","🦖","⏳","🛡️","⚔️","🔓","🐚","🥚","🥕","🫛","🧅","🍯","🪺","🧊","🦚","🦜","🦢","🍂","🍁","🫧","💎","🌺","🦩","🪴","🦐","🦭","🌻","🌊","🦦","🐟","🐠","🐬","🦑","🦀","🐙","🐚"
];

// Random scene openers
const openers = [
  "You awaken at dawn in a whispering forest clearing. The air glows softly as birds stir.",
  "A mysterious door appears before you, etched with runes, as moonlight flickers overhead.",
  "You stand at the edge of a sparkling lake, ripples dancing under a golden sky.",
  "An ancient tree arches above you, with a hollow glowing faintly in its trunk.",
  "A winding path splits three ways, each shrouded by swirling mist and strange sounds.",
  "You find yourself atop a mossy hill, overlooking a valley dotted with twinkling lights.",
  "You crouch inside a cozy burrow, sunlight peeking through tangled roots.",
  "A gentle breeze carries the scent of wildflowers as you explore a hidden glen."
];

// Story continuation - AI-style random prompt generation
function getStoryContinuation(currentText, emoji, slot, turn) {
  const slotName = slot.toUpperCase();
  // Each use: weave the emoji into story, create a next situation
  const actions = [
    `You decide to use the ${emoji} from your ${slotName} slot. Something unexpected happens:`,
    `With the ${emoji} in hand, you bravely press forward from the ${slotName}.`,
    `Drawing upon the magic of the ${emoji} (${slotName}), you alter the path before you.`,
    `You hold up the ${emoji} from the ${slotName}, and the scene shifts:`,
    `As you interact with the ${emoji} (${slotName}), the world responds:`
  ];
  const consequences = [
    `A hidden passage opens nearby, inviting you onward.`,
    `A gentle companion appears to join your quest.`,
    `The environment transforms, revealing new mysteries.`,
    `You discover a clue that could change everything.`,
    `A shimmering light guides you to your next challenge.`,
    `A curious sound echoes, drawing your attention.`,
    `You feel the air tingle with possibility.`,
    `A puzzle reveals itself, waiting to be solved.`,
    `A sudden gust scatters petals across your path.`,
    `A tiny voice whispers advice from the shadows.`,
    `You find a small object nestled in the grass.`,
    `The sky shifts color, hinting at magical forces.`,
    `You sense a presence watching over you.`,
    `Suddenly, something new is within reach.`
  ];
  // Compose next story
  const act = actions[Math.floor(Math.random()*actions.length)];
  const cons = consequences[Math.floor(Math.random()*consequences.length)];
  // Keep a rolling log of last 2 lines
  const prev = currentText.split('\n').slice(-1).join('\n');
  return `${prev}\n\n${act}\n${cons}`;
}

// Get 1+ random safe emojis, avoiding repeats if possible
function getRandomEmojis(num) {
  let pool = safeEmojis.slice();
  let res = [];
  for (let i=0;i<num;i++) {
    if (pool.length === 0) pool = safeEmojis.slice();
    const idx = Math.floor(Math.random()*pool.length);
    res.push(pool[idx]);
    pool.splice(idx, 1);
  }
  return res;
}

// Get a random opening scene
function getRandomScene() {
  return openers[Math.floor(Math.random()*openers.length)];
}

export { getRandomEmojis, getRandomScene, getStoryContinuation };