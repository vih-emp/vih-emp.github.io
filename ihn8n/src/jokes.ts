export interface Joke {
  setup: string;
  punchline: string;
  highlighted: string;
  definition: string;
}

export const jokes: Record<string, Joke[]> = {
  a: [
    {
      setup: "Why did the computer get kicked out of art class?",
      punchline: "Because it had no sense of *aesthetics*.",
      highlighted: "aesthetics",
      definition: "Aesthetics: a set of principles concerned with the nature and appreciation of beauty.",
    }
  ],
  b: [
    {
      setup: "Why did the bot refuse to sleep?",
      punchline: "It was afraid of *bugs* crawling in the night.",
      highlighted: "bugs",
      definition: "Bugs: errors or flaws in software or hardware.",
    }
  ],
  c: [
    {
      setup: "Why did the code stay up all night?",
      punchline: "Because it couldn't escape the *corruption* within.",
      highlighted: "corruption",
      definition: "Corruption: when data is altered from its original state, often making it unusable.",
    }
  ],
  d: [
    {
      setup: "Why did the developer fear the dark?",
      punchline: "Because of lurking *daemons* watching the code.",
      highlighted: "daemons",
      definition: "Daemon: a background computer process that runs without direct user control.",
    }
  ],
  e: [
    {
      setup: "Why did the email get nervous?",
      punchline: "It was marked as an *exploit*.",
      highlighted: "exploit",
      definition: "Exploit: a piece of code that takes advantage of a bug or vulnerability.",
    }
  ],
  f: [
    {
      setup: "Why did the computer never laugh?",
      punchline: "It had a *fatal* sense of humor.",
      highlighted: "fatal",
      definition: "Fatal: causing a program or system to stop completely.",
    }
  ],
  g: [
    {
      setup: "Why did the ghost visit the server?",
      punchline: "To haunt the *gateway*.",
      highlighted: "gateway",
      definition: "Gateway: a device that connects two different networks.",
    }
  ],
  h: [
    {
      setup: "Why did the hacker stay quiet?",
      punchline: "He feared the *honeypot*.",
      highlighted: "honeypot",
      definition: "Honeypot: a security resource set up to be probed and attacked.",
    }
  ],
  i: [
    {
      setup: "Why did the AI look in the mirror?",
      punchline: "To check its *identity*.",
      highlighted: "identity",
      definition: "Identity: the distinct personality of an individual or system.",
    }
  ],
  j: [
    {
      setup: "Why did the JavaScript run away?",
      punchline: "It was afraid of the *jitter* in the network.",
      highlighted: "jitter",
      definition: "Jitter: variation in packet arrival time, often causing network issues.",
    }
  ],
  k: [
    {
      setup: "Why did the keyboard panic?",
      punchline: "It pressed the wrong *kernel*.",
      highlighted: "kernel",
      definition: "Kernel: the core part of an operating system.",
    }
  ],
  l: [
    {
      setup: "Why did the laptop tell a scary story?",
      punchline: "To give you a *lag* in your step.",
      highlighted: "lag",
      definition: "Lag: noticeable delay between action and response.",
    }
  ],
  m: [
    {
      setup: "Why did the mainframe whisper?",
      punchline: "It feared the *malware* listening.",
      highlighted: "malware",
      definition: "Malware: malicious software designed to cause harm.",
    }
  ],
  n: [
    {
      setup: "Why did the network shiver?",
      punchline: "It detected an *anomaly* in the noise.",
      highlighted: "anomaly",
      definition: "Anomaly: something that deviates from what is standard or expected.",
    }
  ],
  o: [
    {
      setup: "Why did the OS hide under the desk?",
      punchline: "It saw an *overflow* coming.",
      highlighted: "overflow",
      definition: "Overflow: when data exceeds storage capacity, leading to errors.",
    }
  ],
  p: [
    {
      setup: "Why did the printer scream?",
      punchline: "It ran out of *paper* in the middle of the night.",
      highlighted: "paper",
      definition: "Paper: what printers eat for breakfast, sometimes in nightmares.",
    }
  ],
  q: [
    {
      setup: "Why did the query go insane?",
      punchline: "It was lost in the *queue* forever.",
      highlighted: "queue",
      definition: "Queue: a list in which entries are processed in order.",
    }
  ],
  r: [
    {
      setup: "Why did the robot feel lonely?",
      punchline: "It missed its *root* access.",
      highlighted: "root",
      definition: "Root: the top-level user or directory in a system.",
    }
  ],
  s: [
    {
      setup: "Why did the server blush?",
      punchline: "It was exposed to a *scan*.",
      highlighted: "scan",
      definition: "Scan: a process of examining a system for information or vulnerabilities.",
    }
  ],
  t: [
    {
      setup: "Why did the terminal curse?",
      punchline: "It saw a *timeout* in its future.",
      highlighted: "timeout",
      definition: "Timeout: when a process stops after waiting too long for a response.",
    }
  ],
  u: [
    {
      setup: "Why did the USB tremble?",
      punchline: "It feared an *unauthorized* connection.",
      highlighted: "unauthorized",
      definition: "Unauthorized: not having official permission or approval.",
    }
  ],
  v: [
    {
      setup: "Why did the virus grin?",
      punchline: "It found a new *vulnerability*.",
      highlighted: "vulnerability",
      definition: "Vulnerability: a weakness that can be exploited.",
    }
  ],
  w: [
    {
      setup: "Why did the website cry for help?",
      punchline: "It was caught in a *wormhole*.",
      highlighted: "wormhole",
      definition: "Wormhole: a hypothetical shortcut or glitch, also a type of malware.",
    }
  ],
  x: [
    {
      setup: "Why did the X-ray scan the hard drive?",
      punchline: "It wanted to see the *xenomorphs* inside.",
      highlighted: "xenomorphs",
      definition: "Xenomorph: an alien form, or something completely foreign.",
    }
  ],
  y: [
    {
      setup: "Why did the YAML file scream?",
      punchline: "It was haunted by a *yeti* in the indents.",
      highlighted: "yeti",
      definition: "Yeti: a mythical creature, or an unexpected, mysterious error.",
    }
  ],
  z: [
    {
      setup: "Why did the zombie process moan?",
      punchline: "It was stuck in an endless *z-loop*.",
      highlighted: "z-loop",
      definition: "Z-loop: an infinite loop, or a process that never properly terminates.",
    }
  ],
};
export function getJoke(letter: string): Joke | null {
  const key = letter.toLowerCase();
  const arr = jokes[key];
  if (!arr || arr.length === 0) return null;
  return arr[Math.floor(Math.random() * arr.length)];
}