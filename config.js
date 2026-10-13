// =====================================================================
//  EUPHORIA GFE TRAINER — SETTINGS FILE
//  This is the ONLY file you need to edit to change how the trainer works.
//  Edit it right on GitHub: open this file → click the pencil icon → change
//  → "Commit changes". The site updates itself in about a minute.
//
//  Rules for editing lists:
//   • Every item goes inside "quotes" and ends with a comma.
//   • Don't delete the [ ] brackets.
//   • Add as many items as you like — more items = more variety.
// =====================================================================

const CONFIG = {

  // Paste your Google Apps Script link here (the one ending in /exec).
  WORKER_URL: "https://script.google.com/macros/s/AKfycbwlCEsagGfKVooPXHJejLl6cv6wabWi8GRZ-FLbAycOayGGTwIcodlM2i37FQ-3QO1z/exec",

  // ------------------------------------------------------------------
  //  CHAT LENGTH & TIMING
  // ------------------------------------------------------------------
  // How long each practice chat lasts (minutes). When time's up it ends.
  // (The timer pauses while the AI is busy, so nobody loses time.)
  CHAT_MINUTES: 5,

  // Messages the chatter must send to get a score. Under this when time
  // runs out = no score, try again. They can also end early once they hit it.
  MIN_MESSAGES_TO_SCORE: 10,

  // Save every finished chat to the Google Sheet (needs SHEET_ID in Apps Script).
  SAVE_RESULTS: true,

  // After the chatter's last line, he waits this many seconds before replying,
  // so she can stack more lines (one line → enter → another line → enter).
  // If she keeps typing, he keeps waiting — but never longer than MAX.
  STACK_WAIT_SECONDS: 6,
  MAX_STACK_WAIT_SECONDS: 30,

  // How long he "types" before his message shows up (random between these).
  TYPING_SECONDS_MIN: 2,
  TYPING_SECONDS_MAX: 6,

  // The setting every chat starts from.
  SCENARIO: "You matched on Tinder 7 days ago and have been texting every day since. You're starting to really like each other. Tonight he texts first.",

  // ------------------------------------------------------------------
  //  HIS PROFILE — one item is picked at random from each list,
  //  so every chatter gets a different guy every time.
  // ------------------------------------------------------------------
  NAMES: [
    "Jake", "Marcus", "Tyler", "Ryan", "Derek", "Chris", "Brandon", "Kyle",
    "Mike", "Josh", "Austin", "Ethan", "Cody", "Nate", "Jordan", "Luis",
    "Andre", "Travis", "Sean", "Blake", "Dylan", "Matt", "Caleb", "Trey"
  ],

  AGES: [24, 26, 27, 29, 31, 33, 35, 38, 41, 45],

  JOBS: [
    "maintenance worker at a rehab facility",
    "electrician",
    "nurse on night shifts",
    "truck driver who's on the road a lot",
    "line cook at a busy restaurant",
    "software developer working from home",
    "car mechanic at his uncle's shop",
    "warehouse supervisor",
    "personal trainer",
    "firefighter",
    "HVAC technician",
    "high school PE teacher",
    "accountant who hates tax season",
    "lineman for the power company",
    "barber who owns his own chair",
    "construction foreman",
    "college student working part-time at a gym",
    "real estate agent"
  ],

  HOBBIES: [
    "fishing", "playing COD with his friends", "the gym", "cooking",
    "watching football", "hiking", "working on his truck", "basketball",
    "anime", "golf", "camping", "playing guitar", "collecting sneakers",
    "Formula 1", "reading fantasy books", "building Legos", "baking bread",
    "skateboarding", "hunting", "watching horror movies"
  ],

  // How he's feeling tonight. This shapes his first messages.
  MOODS: [
    "exhausted after a long shift",
    "in a really good mood because something went right today",
    "a bit down and lonely, but not saying it directly",
    "stressed about work",
    "bored at home and happy she's around",
    "playful and flirty",
    "a little quiet and tired"
  ],

  // Something going on in his life. He hints at it early and opens up
  // fully once she asks about it.
  LIFE_EVENTS: [
    "his dog has been sick and he took him to the vet today",
    "he has a job interview on Friday he's nervous about",
    "his little sister just got engaged",
    "his truck broke down this morning and he's stressed about the repair cost",
    "his mom's birthday is this weekend and he doesn't know what to get her",
    "he just finished a 6-day work week",
    "he's training for his first half marathon",
    "his best friend is moving to another state next month",
    "he got yelled at by his boss today for something that wasn't his fault",
    "he just started a new job this week",
    "he's been trying to cook healthier and messed up dinner tonight",
    "his favorite team lost a big game last night",
    "he's planning a fishing trip with his dad",
    "he can't sleep well lately because of work stress"
  ],

  // Little personal details he drops small hints about during the chat.
  // The chatter's job is to notice the hint and ask about it.
  HIDDEN_DETAILS: [
    "has a dog named Bruno",
    "has a cat named Pickles",
    "grew up on a farm",
    "is really close with his grandma",
    "secretly loves cheesy rom-coms",
    "has never left the country but wants to visit Japan",
    "used to play college baseball until he got injured",
    "is saving up to buy his first house",
    "makes the best breakfast burritos and is proud of it",
    "has a twin brother",
    "is scared of heights",
    "volunteers at an animal shelter some weekends",
    "is learning Spanish on Duolingo",
    "has a tattoo of his late dad's initials"
  ],

  // His personality — changes how he talks, jokes and flirts.
  PERSONALITIES: [
    "goofy and jokes around a lot, uses funny comebacks",
    "shy and sweet at first, opens up once she's warm",
    "confident and a little cocky, likes playful teasing",
    "romantic softie who says sweet things",
    "chill and laid-back, nothing really stresses him",
    "sarcastic but caring underneath",
    "nerdy and passionate, gets excited about his interests",
    "country boy, polite, says things like 'darlin' sometimes",
    "hard worker who's a bit tired of life but appreciates kindness",
    "flirty and charming, gives lots of compliments"
  ],

  // A little texting habit that makes him feel real.
  QUIRKS: [
    "uses 'lmao' a lot",
    "sends voice-note style long texts sometimes, then apologizes for rambling",
    "uses a lot of 😂",
    "double texts when excited",
    "makes small typos and doesn't fix them",
    "asks 'wbu?' a lot",
    "calls her 'trouble' as a nickname",
    "uses 'fr' and 'ngl'",
    "sends a lot of 'haha' and 'hehe'",
    "is a little slow to reply and says 'sorry was driving'"
  ],

  // How he texts.
  TEXT_STYLES: [
    "short lowercase texts, uses 'lol' and 'haha' a lot",
    "medium texts, proper-ish grammar, uses a few emojis",
    "dry texter who opens up slowly once he's comfortable",
    "chatty, sends 2-3 messages in a row sometimes",
    "funny and sarcastic, teases a lot"
  ],

  // ------------------------------------------------------------------
  //  SCORING — what the chatter gets graded on (each scored 1–5).
  //  You can reword these or add your own.
  // ------------------------------------------------------------------
  SKILLS: [
    { name: "Interest in his life", desc: "Asks about his day, work, hobbies, plans — specific questions, not just 'wyd' or 'hru'." },
    { name: "Follow-up", desc: "Builds on what he shares with a second or third question instead of dropping it ('i see', 'nice')." },
    { name: "Sharing about herself", desc: "Gives small personal details back so it feels two-way, without making it all about her." },
    { name: "Care & warmth", desc: "Shows she cares — reacts to his mood, comforts him, 'did u eat', 'get some rest'." },
    { name: "Remembering & making him feel special", desc: "Uses details he mentioned, playful teasing, nicknames, makes him feel chosen." },
    { name: "Natural flow", desc: "Sounds like a real girl texting a guy she likes — not scripted, not an interview, not overdone." }
  ],

  // Words that get flagged on the message (and in the report) if the chatter uses them.
  BANNED_WORDS: ["naughty", "call", "calling", "called", "baby", "phone", "handle", "daddy"]
};
