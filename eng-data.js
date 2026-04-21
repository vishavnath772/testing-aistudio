// ============================================================
//  eng-data.js  —  English Question Bank
//  Used by: index.html  →  const ALL_ENG_MCQ = ENG_RAW.map(...)
// ============================================================
//
//  COLUMN ORDER  (each row is an array of 9 values):
//  [0] Question text
//  [1] Option A
//  [2] Option B
//  [3] Option C
//  [4] Option D
//  [5] Correct answer key  →  must be exactly one of:  a  b  c  d  (lowercase)
//  [6] Key fact / explanation shown after answering  (can be "" if none)
//  [7] Topic  →  must match one of the topic names listed below EXACTLY
//  [8] Sub-topic  →  for English, sub-topic = same as topic (no sub-divisions)
//
//  VALID TOPIC VALUES  (col 7 and col 8 are the same for English):
// ──────────────────────────────────────────────────────────
//  📝 English Grammar section:
//    Spot the Error
//    Sentence Improvement
//    Narration
//    Active & Passive Voice
//    Fill in the Blanks
//
//  📖 Vocabulary section:
//    One Word Substitution
//    Synonyms
//    Antonyms
//    Homonyms
//    Idioms & Phrases
//    Spelling Check
// ──────────────────────────────────────────────────────────
//
//  HOW TO ADD YOUR REAL QUESTIONS:
//  1. Delete the dummy rows inside each section below.
//  2. Paste your real questions in the same array format.
//  3. Keep the const ENG_RAW = [ ... ]; wrapper intact.
//  4. Do NOT rename the variable — the HTML expects  ENG_RAW  exactly.
//
//  ⚠️  IMPORTANT — Synonyms topic:
//  The topic key must be written as   Synonyms   (capital S, no extra spaces).
//  The HTML matches it exactly to the card labelled "Synonyms".
// ============================================================

const ENG_RAW = [

  // ══════════════════════════════════════════════════
  // 📝 ENGLISH GRAMMAR
  // ══════════════════════════════════════════════════

  // ── Spot the Error ────────────────────────────────
  // col:  [0] Question            [1] A        [2] B        [3] C        [4] D        [5] ans  [6] Fact                                              [7] Topic            [8] Sub-topic
  ["DUMMY Spot the Error: Find the part with the grammatical error — 'She (A) / go to (B) / school everyday (C) / no error (D)'", "She", "go to", "school everyday", "No error", "b", "Correct form: 'goes to' — use third-person singular 's' for she/he/it in simple present.", "Spot the Error", "Spot the Error"],
  ["DUMMY Spot the Error: 'He is (A) / one of the student (B) / who passed (C) / no error (D)'", "He is", "one of the student", "who passed", "No error", "b", "Correct: 'one of the students' — use plural noun after 'one of the'.", "Spot the Error", "Spot the Error"],
  ["DUMMY Spot the Error: 'Neither he (A) / nor his friends (B) / was present (C) / no error (D)'", "Neither he", "nor his friends", "was present", "No error", "c", "Correct: 'were present' — when 'or/nor' connects subjects, the verb agrees with the nearer subject (friends = plural).", "Spot the Error", "Spot the Error"],

  // ── Sentence Improvement ──────────────────────────
  ["DUMMY Sentence Improvement: Choose the best improvement — 'He is knowing the answer.' ", "He knows the answer.", "He has known the answer.", "He was knowing the answer.", "No improvement", "a", "Stative verbs like 'know' are not used in the continuous form. Correct: 'He knows the answer.'", "Sentence Improvement", "Sentence Improvement"],
  ["DUMMY Sentence Improvement: 'She suggested me to apply for the job.'", "She suggested that I apply for the job.", "She suggested me applying for the job.", "She suggested to me to apply for the job.", "No improvement", "a", "'Suggest' is not followed by an object + infinitive. Correct pattern: suggest + that + subject + verb.", "Sentence Improvement", "Sentence Improvement"],
  ["DUMMY Sentence Improvement: 'I have seen him yesterday.'", "I saw him yesterday.", "I had seen him yesterday.", "I have saw him yesterday.", "No improvement", "a", "Simple past (saw) is used with definite past time markers like 'yesterday', not present perfect.", "Sentence Improvement", "Sentence Improvement"],

  // ── Narration ─────────────────────────────────────
  ["DUMMY Narration: Change to Indirect Speech — He said, 'I am happy.'", "He said that he was happy.", "He said that he is happy.", "He told that he was happy.", "He said that I am happy.", "a", "In indirect speech: 'said' does not take an object; 'am' changes to 'was' (backshift); 'I' changes to 'he'.", "Narration", "Narration"],
  ["DUMMY Narration: Change to Indirect Speech — She said to me, 'Are you coming?'", "She asked me if I was coming.", "She told me if I was coming.", "She asked me that was I coming.", "She questioned me if you were coming.", "a", "Yes/No questions use 'if/whether' in indirect speech; 'are' backshifts to 'was'; 'you' changes to 'I'.", "Narration", "Narration"],
  ["DUMMY Narration: Change to Indirect Speech — The teacher said, 'The earth revolves around the sun.'", "The teacher said that the earth revolved around the sun.", "The teacher said that the earth revolves around the sun.", "The teacher told that the earth revolves around the sun.", "The teacher said that the earth had revolved around the sun.", "b", "Universal truths and scientific facts do NOT undergo tense change in indirect speech.", "Narration", "Narration"],

  // ── Active & Passive Voice ────────────────────────
  ["DUMMY Active/Passive: Change to Passive — 'She writes a letter.'", "A letter is written by her.", "A letter was written by her.", "A letter has been written by her.", "A letter will be written by her.", "a", "Simple present active → passive: is/am/are + past participle + by + object.", "Active & Passive Voice", "Active & Passive Voice"],
  ["DUMMY Active/Passive: Change to Active — 'A book was being read by him.'", "He was reading a book.", "He has been reading a book.", "He read a book.", "He is reading a book.", "a", "Past continuous passive (was being + past participle) → active: was/were + -ing form.", "Active & Passive Voice", "Active & Passive Voice"],
  ["DUMMY Active/Passive: Change to Passive — 'Who wrote this letter?'", "By whom was this letter written?", "By whom has this letter been written?", "Who was this letter written by?", "Whom was this letter written by?", "a", "In passive interrogatives, 'who' changes to 'by whom' and is placed at the beginning.", "Active & Passive Voice", "Active & Passive Voice"],

  // ── Fill in the Blanks ────────────────────────────
  ["DUMMY Fill in the Blanks: 'The manager along with his team _____ working hard.'", "are", "is", "were", "have", "b", "'Along with' is a parenthetical phrase; the verb agrees with the main subject (manager = singular) → 'is'.", "Fill in the Blanks", "Fill in the Blanks"],
  ["DUMMY Fill in the Blanks: 'She is good _____ mathematics.'", "in", "with", "at", "about", "c", "The correct preposition with 'good' for subjects/skills is 'at'. E.g., good at maths, good at swimming.", "Fill in the Blanks", "Fill in the Blanks"],
  ["DUMMY Fill in the Blanks: 'He has been living here _____ 2010.'", "for", "from", "since", "during", "c", "'Since' is used with a point in time (2010); 'for' is used with a period of time (5 years).", "Fill in the Blanks", "Fill in the Blanks"],


  // ══════════════════════════════════════════════════
  // 📖 VOCABULARY
  // ══════════════════════════════════════════════════

  // ── One Word Substitution ─────────────────────────
  ["DUMMY OWS: One who does not believe in God is called?", "Atheist", "Agnostic", "Theist", "Fatalist", "a", "An Atheist is a person who disbelieves in the existence of God or gods.", "One Word Substitution", "One Word Substitution"],
  ["DUMMY OWS: A place where bees are kept is called?", "Aviary", "Apiary", "Aquarium", "Apotheca", "b", "An Apiary is a place where bees are kept for honey production.", "One Word Substitution", "One Word Substitution"],
  ["DUMMY OWS: Study of ancient writing is called?", "Palaeography", "Paleontology", "Archaeology", "Calligraphy", "a", "Palaeography is the study of ancient handwriting and inscriptions.", "One Word Substitution", "One Word Substitution"],

  // ── Synonyms ──────────────────────────────────────
  // ⚠️ Keep topic name exactly as  Synonyms  (capital S)
  ["DUMMY Synonym: What is the synonym of BENEVOLENT?", "Cruel", "Generous", "Greedy", "Hostile", "b", "Benevolent means well-meaning and kindly; its synonym is Generous (showing readiness to give).", "Synonyms", "Synonyms"],
  ["DUMMY Synonym: What is the synonym of DILIGENT?", "Lazy", "Careless", "Hardworking", "Ignorant", "c", "Diligent means having or showing care and conscientiousness; synonym: Hardworking.", "Synonyms", "Synonyms"],
  ["DUMMY Synonym: What is the synonym of ELUCIDATE?", "Confuse", "Explain", "Criticize", "Destroy", "b", "Elucidate means to make (something) clear; to explain. Its synonym is Explain or Clarify.", "Synonyms", "Synonyms"],

  // ── Antonyms ──────────────────────────────────────
  ["DUMMY Antonym: What is the antonym of ABUNDANT?", "Plentiful", "Scarce", "Excess", "Ample", "b", "Abundant means existing in large quantities; its antonym is Scarce (insufficient supply).", "Antonyms", "Antonyms"],
  ["DUMMY Antonym: What is the antonym of CONCEAL?", "Hide", "Reveal", "Protect", "Cover", "b", "Conceal means to keep something secret; its antonym is Reveal (make known).", "Antonyms", "Antonyms"],
  ["DUMMY Antonym: What is the antonym of FRUGAL?", "Thrifty", "Economical", "Extravagant", "Careful", "c", "Frugal means sparing with money; its antonym is Extravagant (spending excessively).", "Antonyms", "Antonyms"],

  // ── Homonyms ──────────────────────────────────────
  ["DUMMY Homonym: 'The bank was _____ on the riverbank.' Which word fits both blanks correctly?", "constructed / side", "built / built", "bank / bank", "side / bank", "c", "Homonyms are words that sound the same but have different meanings — 'bank' (financial institution) and 'bank' (side of a river).", "Homonyms", "Homonyms"],
  ["DUMMY Homonym: Which pair are homonyms?", "Fair / Fare", "Cool / Cold", "Hot / Warm", "Bright / Smart", "a", "Fair (just/exhibition) and Fare (price of travel) are homophones — same sound, different meaning and spelling.", "Homonyms", "Homonyms"],
  ["DUMMY Homonym: 'Bat' used in cricket and 'bat' the flying mammal — these are?", "Synonyms", "Antonyms", "Homonyms", "Homophones", "c", "Homonyms are words that share the same spelling and pronunciation but have different meanings.", "Homonyms", "Homonyms"],

  // ── Idioms & Phrases ──────────────────────────────
  ["DUMMY Idiom: 'To burn the midnight oil' means?", "To set fire to something", "To work or study late into the night", "To waste resources", "To be very angry", "b", "The idiom 'burn the midnight oil' means to work very late at night — referring to burning oil lamps.", "Idioms & Phrases", "Idioms & Phrases"],
  ["DUMMY Idiom: 'A blessing in disguise' means?", "A hidden curse", "Something good that seemed bad at first", "A secret blessing", "An unwanted gift", "b", "A blessing in disguise: something that turns out to be beneficial even though it initially seemed unfortunate.", "Idioms & Phrases", "Idioms & Phrases"],
  ["DUMMY Idiom: 'Bite the bullet' means?", "To eat something hard", "To be very hungry", "To endure a painful situation bravely", "To shoot someone", "c", "Bite the bullet: to accept a difficult situation with courage and endure it.", "Idioms & Phrases", "Idioms & Phrases"],

  // ── Spelling Check ────────────────────────────────
  ["DUMMY Spelling: Choose the correctly spelled word:", "Accomodation", "Accommodation", "Acommodation", "Acomodation", "b", "Correct spelling: Accommodation — double 'c' and double 'm'. A common error is omitting one of them.", "Spelling Check", "Spelling Check"],
  ["DUMMY Spelling: Choose the correctly spelled word:", "Comittee", "Commitee", "Comite", "Committee", "d", "Correct spelling: Committee — double 'm', double 't', double 'e'. All three consonants are doubled.", "Spelling Check", "Spelling Check"],
  ["DUMMY Spelling: Choose the correctly spelled word:", "Embarassment", "Embarrassment", "Embarasment", "Embarrasment", "b", "Correct spelling: Embarrassment — double 'r' and double 's'. Remember: Really Rotten Spelling = double r, double s.", "Spelling Check", "Spelling Check"],

]; // end of ENG_RAW

// ── QUICK STATS (informational, not used by the app) ──────
// console.log('English Questions loaded:', ENG_RAW.length);
