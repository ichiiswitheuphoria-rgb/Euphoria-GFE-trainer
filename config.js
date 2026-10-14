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
  // (The timer pauses while he's loading/typing, so only the chatter's own time counts.)
  CHAT_MINUTES: 10,

  // Replies the chatter must reach to get a score (lines sent together before he
  // answers count as 1 reply). Under this when time
  // runs out = FAILED (saved to the sheet as FAILED). They can end early once they hit it.
  MIN_MESSAGES_TO_SCORE: 10,

  // Save every finished chat to the Google Sheet (needs SHEET_ID in Apps Script).
  SAVE_RESULTS: true,

  // After the chatter's last line, he waits this many seconds before replying,
  // so she can stack more lines (one line → enter → another line → enter).
  // If she keeps typing, he keeps waiting — but never longer than MAX.
  STACK_WAIT_SECONDS: 4,
  MAX_STACK_WAIT_SECONDS: 30,

  // How long he "types" before his message shows up (random between these).
  TYPING_SECONDS_MIN: 2,
  TYPING_SECONDS_MAX: 6,

  // The situation each chat starts from — one is picked at random.
  // (You've always been matched on Tinder for about a week and like each other.)
  SCENARIOS: [
    "It's late at night. He just got home from a long shift and texts you first before bed.",
    "It's his lunch break. He's sitting in his car eating and texts you first.",
    "It's Saturday morning. He just woke up and you're the first person he texts.",
    "It's Sunday afternoon. He's being lazy on the couch and texts you out of boredom.",
    "It's Friday night. He's at a friend's house but keeps texting you instead of hanging out.",
    "He just got back from the gym and texts you while cooling down.",
    "It's raining where he is and he's stuck inside, so he texts you.",
    "He's waiting at the airport for a delayed flight and texts you to pass time.",
    "He's in line at the grocery store and texts you something random.",
    "He's at a family dinner that's getting boring and texts you under the table.",
    "He can't sleep at 2am and texts you hoping you're still up.",
    "He's on his break at work and just had a rough moment with a customer or coworker.",
    "He just finished watching a movie and wants to tell you about it.",
    "He's cooking dinner for himself and texts you a question about food.",
    "It's a public holiday and he's off work with nothing planned.",
    "He just got home from a game (watching or playing) and is still hyped.",
    "He's walking his dog in the evening and texts you on the way.",
    "He's stuck in traffic on the way home and texts you at a red light.",
    "It's early morning before work and he's having coffee.",
    "He just finished a big task he was stressed about and wants to share it."
  ],

  // ------------------------------------------------------------------
  //  HIS PROFILE — one item is picked at random from each list,
  //  so every chatter gets a different guy every time.
  // ------------------------------------------------------------------
  NAMES: [
    "Jake", "Marcus", "Tyler", "Ryan", "Derek", "Chris", "Brandon", "Kyle",
    "Mike", "Josh", "Austin", "Ethan", "Cody", "Nate", "Jordan", "Luis",
    "Andre", "Travis", "Sean", "Blake", "Dylan", "Matt", "Caleb", "Trey",
    "Logan", "Mason", "Hunter", "Connor", "Jalen", "Darius", "Miguel", "Carlos",
    "Diego", "Kevin", "Brian", "Jason", "Aaron", "Isaiah", "Eli", "Owen",
    "Zach", "Colton", "Wyatt", "Garrett", "Tony", "Vince", "Nick", "Sam",
    "Adam", "Ben", "Tom", "Jared", "Devin", "Malik", "Xavier", "Rico",
    "Brady", "Chase", "Kai", "Leo"
  ],

  AGES: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 38, 40, 42, 45, 48],

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
    "real estate agent",
    "plumber who runs his own small business",
    "paramedic",
    "police dispatcher on night shift",
    "elementary school teacher",
    "bartender at a sports bar",
    "car salesman",
    "welder",
    "landscaper",
    "delivery driver",
    "bank teller",
    "IT help desk guy",
    "pharmacy tech",
    "oil rig worker who's away for weeks at a time",
    "tattoo artist",
    "mail carrier",
    "forklift operator",
    "insurance agent",
    "chef at a fancy restaurant",
    "airport baggage handler",
    "graphic designer",
    "physical therapist",
    "roofer",
    "security guard",
    "music producer with a day job at a coffee shop",
    "soldier back home on leave",
    "small farm owner",
    "video editor for YouTubers"
  ],

  HOBBIES: [
    "fishing", "playing COD with his friends", "the gym", "cooking",
    "watching football", "hiking", "working on his truck", "basketball",
    "anime", "golf", "camping", "playing guitar", "collecting sneakers",
    "Formula 1", "reading fantasy books", "building Legos", "baking bread",
    "skateboarding", "hunting", "watching horror movies",
    "playing Fortnite", "MMA and boxing", "surfing", "snowboarding",
    "photography", "drawing", "playing piano", "DJing", "rap music",
    "country music concerts", "true crime podcasts", "chess", "poker nights",
    "growing plants", "restoring old cars", "motorcycles", "running",
    "yoga (he's a little embarrassed about it)", "soccer", "baseball",
    "bowling", "disc golf", "kayaking", "woodworking", "grilling and BBQ",
    "watching reality TV", "collecting Pokémon cards", "video editing",
    "trying new restaurants", "traveling on road trips", "rock climbing",
    "pickleball", "fantasy football", "volunteering at a food bank"
  ],

  // How he's feeling tonight. This shapes his first messages.
  MOODS: [
    "exhausted after a long shift",
    "in a really good mood because something went right today",
    "a bit down and lonely, but not saying it directly",
    "stressed about work",
    "bored at home and happy she's around",
    "playful and flirty",
    "a little quiet and tired",
    "hyped and energetic",
    "a little sick with a cold and wants some attention",
    "proud of himself for something small",
    "frustrated after a bad day",
    "nostalgic and thinking about old times",
    "chill and relaxed after a good meal",
    "nervous about something coming up",
    "a bit insecure and wondering if she actually likes him"
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
    "he can't sleep well lately because of work stress",
    "he just moved into a new apartment and it's still full of boxes",
    "his car got a parking ticket today and he's annoyed",
    "he's thinking about going back to school",
    "his grandma is in the hospital but doing better now",
    "he got a raise today",
    "he's been working out and finally hit a new personal record",
    "his roommate keeps eating his food",
    "he's taking care of his nephew this weekend",
    "he's trying to quit energy drinks",
    "he's saving up for a trip to Mexico",
    "he just adopted a kitten",
    "he dropped his laptop and cracked the screen today",
    "he's been learning to cook his mom's recipes",
    "his best friend's wedding is next week and he's the best man",
    "he's thinking about starting his own business",
    "his flight home for the holidays just got booked",
    "he hurt his ankle playing sports",
    "he just finished a big project at work",
    "he's been feeling burnt out and needs a vacation",
    "his little brother just got into college",
    "his neighbor's party kept him up all last night",
    "he's selling his old car and buying a new one",
    "he's been trying to fix his sleep schedule",
    "he went on a solo hike today and saw something cool",
    "he's nervous about a doctor's checkup tomorrow (nothing serious)",
    "he's been rewatching his favorite show from high school"
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
    "has a tattoo of his late dad's initials",
    "has a husky named Luna who howls at sirens",
    "used to be in a band in high school",
    "can't swim and is embarrassed about it",
    "is the oldest of five siblings",
    "wants to open a food truck one day",
    "has a scar on his chin from a skateboarding fall",
    "is obsessed with spicy food",
    "still sleeps with the TV on",
    "lived in Germany for two years as a kid",
    "is a huge Taylor Swift fan and won't admit it at first",
    "has a lucky hat he wears to every game",
    "is terrible at cooking but tries anyway",
    "collects vinyl records",
    "is allergic to cats but loves them anyway",
    "has a fish tank with way too many fish",
    "once met a famous athlete at a gas station",
    "is close with his mom and visits her every Sunday",
    "wanted to be a pilot as a kid",
    "is really into astrology even though he jokes about it",
    "has a pet bearded dragon named Spike",
    "can solve a Rubik's cube in under a minute",
    "is a morning person and wakes up at 5am",
    "hates pineapple on pizza with a passion",
    "plays guitar at his church on Sundays",
    "got lost in a corn maze for 3 hours as a kid",
    "is the best man at weddings because he's good at speeches",
    "has a vegetable garden he's very proud of",
    "is a big brother figure to his little cousins",
    "used to be really shy in school",
    "knows how to make sushi",
    "has never seen the ocean"
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
    "flirty and charming, gives lots of compliments",
    "quiet and observant, short replies until she asks the right thing",
    "big golden retriever energy, excited about everything",
    "a bit guarded, has been hurt before and tests if she's genuine",
    "family man type, talks about his mom and siblings a lot",
    "competitive and loves friendly challenges and bets",
    "deep thinker who likes random 'what if' questions",
    "gym bro who's actually really sweet",
    "old-school gentleman, very polite and respectful",
    "a little awkward but genuinely funny once he relaxes",
    "adventurous and always planning the next trip"
  ],

  // A little texting habit that makes him feel real.
  QUIRKS: [
    "uses 'lmao' a lot",
    "sends voice-note style long texts sometimes, then apologizes for rambling",
    "uses a lot of 😂",
    "double texts when excited",
    "makes small typos and doesn't fix them",
    "asks 'wbu?' a lot",
    "nicknames her 'trouble'",
    "uses 'fr' and 'ngl'",
    "sends a lot of 'haha' and 'hehe'",
    "is a little slow to reply and says 'sorry was driving'",
    "uses 'bro' even with her by accident, then laughs at himself",
    "sends 'lol' at the end of almost everything",
    "uses '...' a lot when thinking",
    "spells out laughing like 'HAHAHA'",
    "uses 😅 when he's nervous",
    "says 'pretty girl' to her sometimes",
    "always says 'goodnight beautiful' type stuff when tired",
    "texts in all lowercase with no punctuation",
    "uses proper grammar and full sentences",
    "uses 🙏 and 😭 a lot"
  ],

  // How he texts.
  TEXT_STYLES: [
    "short lowercase texts, uses 'lol' and 'haha' a lot",
    "medium texts, proper-ish grammar, uses a few emojis",
    "dry texter who opens up slowly once he's comfortable",
    "chatty, sends 2-3 messages in a row sometimes",
    "funny and sarcastic, teases a lot",
    "sweet and simple, short warm replies",
    "energetic, lots of exclamation points and emojis",
    "calm and thoughtful, takes his time"
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
