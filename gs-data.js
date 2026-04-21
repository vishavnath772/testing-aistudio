// ============================================================
//  gs-data.js  —  GS (General Studies) Question Bank
//  Used by: index.html  →  const ALL_MCQ = RAW.map(...)
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
//  [8] Sub-topic  →  must match one of the sub-topic names listed below EXACTLY
//         (for topics with no sub-topics, repeat the topic name in col [8])
//
//  VALID TOPIC + SUB-TOPIC VALUES:
// ──────────────────────────────────────────────────────────
//  TOPIC (col 7)                    SUB-TOPIC (col 8)
// ──────────────────────────────────────────────────────────
//  Art & Culture                    Art & Culture
//  Sports                           Sports
//  Books & Authors                  Books & Authors
//  Important Days & Personalities   Important Days & Personalities
//  Architecture & Monuments         Architecture & Monuments
//  Miscellaneous GK                 Miscellaneous GK
//  History                          History — Ancient India
//  History                          History — Medieval India
//  History                          History — Modern India
//  History                          History — Misc
//  Polity & Constitution            Polity — Foundations
//  Polity & Constitution            Polity — Articles & Amendments
//  Polity & Constitution            Polity — Bodies & Governance
//  Polity & Constitution            Polity — Misc
//  Geography                        Geography — Physical Geography
//  Geography                        Geography — Human & Economic
//  Geography                        Geography — World Geography
//  Geography                        Geography — Misc
//  Economy                          Economy — Indian Economy
//  Economy                          Economy — Economic Concepts
//  Economy                          Economy — Misc
//  Science & Biology                Science — Biology
//  Science & Biology                Science — Physics
//  Science & Biology                Science — Chemistry
//  Science & Biology                Science — Misc
// ──────────────────────────────────────────────────────────
//
//  HOW TO ADD YOUR REAL QUESTIONS:
//  1. Delete the dummy rows inside each section below.
//  2. Paste your real questions in the same array format.
//  3. Keep the const RAW = [ ... ]; wrapper intact.
//  4. Do NOT rename the variable — the HTML expects  RAW  exactly.
// ============================================================

const RAW = [

  // ══════════════════════════════════════════════════
  // 📌 STATIC G.K.
  // ══════════════════════════════════════════════════

  // ── Art & Culture ─────────────────────────────────
  // col:  [0] Question            [1] A        [2] B        [3] C        [4] D        [5] ans  [6] Fact                                         [7] Topic          [8] Sub-topic
  ["DUMMY: Which dance form is classical to Manipur?", "Bharatanatyam", "Manipuri", "Kathak", "Odissi", "b", "Manipuri dance is one of the 8 classical dance forms of India, originating in Manipur.", "Art & Culture", "Art & Culture"],
  ["DUMMY: Kuchipudi is a classical dance from which state?", "Kerala", "Andhra Pradesh", "Tamil Nadu", "Odisha", "b", "Kuchipudi originated in Andhra Pradesh and is named after a village called Kuchipudi.", "Art & Culture", "Art & Culture"],
  ["DUMMY: The Ajanta Caves are famous for which art form?", "Sculpture", "Architecture", "Paintings", "Poetry", "c", "Ajanta Caves contain Buddhist murals and paintings dating from the 2nd century BCE.", "Art & Culture", "Art & Culture"],

  // ── Sports ────────────────────────────────────────
  ["DUMMY: Which sport is associated with the Durand Cup?", "Hockey", "Cricket", "Football", "Tennis", "c", "Durand Cup is one of the oldest football tournaments in Asia, started in 1888.", "Sports", "Sports"],
  ["DUMMY: Where were the 2024 Summer Olympics held?", "Tokyo", "Paris", "Los Angeles", "London", "b", "The 2024 Summer Olympics were held in Paris, France.", "Sports", "Sports"],
  ["DUMMY: The term 'Grand Slam' is associated with which sport?", "Football", "Tennis", "Cricket", "Golf", "b", "Grand Slam in tennis refers to winning all four major tournaments in a year.", "Sports", "Sports"],

  // ── Books & Authors ───────────────────────────────
  ["DUMMY: Who wrote the book 'Discovery of India'?", "Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Subhas Chandra Bose", "b", "Discovery of India was written by Jawaharlal Nehru while in Ahmednagar jail (1944).", "Books & Authors", "Books & Authors"],
  ["DUMMY: 'Wings of Fire' is an autobiography of which scientist?", "C.V. Raman", "Vikram Sarabhai", "A.P.J. Abdul Kalam", "Homi Bhabha", "c", "Wings of Fire is the autobiography of Dr. A.P.J. Abdul Kalam, former President of India.", "Books & Authors", "Books & Authors"],
  ["DUMMY: 'Gitanjali' was written by which Nobel laureate?", "Sarojini Naidu", "Rabindranath Tagore", "Bankim Chandra", "Michael Madhusudan", "b", "Gitanjali (Song Offerings) by Rabindranath Tagore earned him the Nobel Prize for Literature in 1913.", "Books & Authors", "Books & Authors"],

  // ── Important Days & Personalities ───────────────
  ["DUMMY: World Environment Day is observed on which date?", "April 22", "June 5", "March 21", "December 11", "b", "World Environment Day is observed on June 5 every year, established by the UN in 1972.", "Important Days & Personalities", "Important Days & Personalities"],
  ["DUMMY: Who is known as the 'Iron Man of India'?", "Jawaharlal Nehru", "Rajendra Prasad", "Sardar Vallabhbhai Patel", "Bal Gangadhar Tilak", "c", "Sardar Vallabhbhai Patel unified 562 princely states into India and is called the Iron Man of India.", "Important Days & Personalities", "Important Days & Personalities"],
  ["DUMMY: National Science Day in India is celebrated on?", "February 28", "March 15", "January 30", "April 10", "a", "National Science Day is celebrated on Feb 28 to mark C.V. Raman's discovery of the Raman Effect (1928).", "Important Days & Personalities", "Important Days & Personalities"],

  // ── Architecture & Monuments ──────────────────────
  ["DUMMY: The Taj Mahal was built by which Mughal emperor?", "Akbar", "Humayun", "Shah Jahan", "Aurangzeb", "c", "Shah Jahan built the Taj Mahal in memory of his wife Mumtaz Mahal; completed around 1653.", "Architecture & Monuments", "Architecture & Monuments"],
  ["DUMMY: Konark Sun Temple is located in which state?", "Rajasthan", "Odisha", "Gujarat", "Karnataka", "b", "Konark Sun Temple in Odisha was built in the 13th century by King Narasimhadeva I.", "Architecture & Monuments", "Architecture & Monuments"],
  ["DUMMY: Charminar is located in which Indian city?", "Jaipur", "Lucknow", "Hyderabad", "Agra", "c", "Charminar was built in 1591 by Muhammad Quli Qutb Shah in Hyderabad.", "Architecture & Monuments", "Architecture & Monuments"],

  // ── Miscellaneous GK ──────────────────────────────
  ["DUMMY: What is the capital of Australia?", "Sydney", "Melbourne", "Canberra", "Brisbane", "c", "Canberra is the capital of Australia, chosen as a compromise between Sydney and Melbourne.", "Miscellaneous GK", "Miscellaneous GK"],
  ["DUMMY: Which planet is known as the Red Planet?", "Venus", "Jupiter", "Saturn", "Mars", "d", "Mars is called the Red Planet because of iron oxide (rust) on its surface giving it a reddish appearance.", "Miscellaneous GK", "Miscellaneous GK"],
  ["DUMMY: Who invented the telephone?", "Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi", "b", "Alexander Graham Bell is credited with inventing the first practical telephone in 1876.", "Miscellaneous GK", "Miscellaneous GK"],


  // ══════════════════════════════════════════════════
  // 📚 SUBJECT SECTIONS
  // ══════════════════════════════════════════════════

  // ── History — Ancient India ───────────────────────
  ["DUMMY: The Indus Valley Civilization was mainly located in which modern countries?", "India and Bangladesh", "India and Pakistan", "Pakistan and Afghanistan", "India and Nepal", "b", "The Indus Valley Civilization flourished around 2500 BCE in present-day India and Pakistan.", "History", "History — Ancient India"],
  ["DUMMY: The Maurya Empire was founded by?", "Ashoka", "Bindusara", "Chandragupta Maurya", "Chandragupta II", "c", "Chandragupta Maurya founded the Maurya Empire around 322 BCE with guidance from Chanakya.", "History", "History — Ancient India"],
  ["DUMMY: Ashoka the Great belonged to which dynasty?", "Gupta", "Kushana", "Maurya", "Nanda", "c", "Ashoka was the grandson of Chandragupta Maurya and the most famous emperor of the Maurya dynasty.", "History", "History — Ancient India"],

  // ── History — Medieval India ──────────────────────
  ["DUMMY: The Battle of Panipat (First) was fought in which year?", "1526", "1556", "1761", "1576", "a", "First Battle of Panipat (1526) — Babur defeated Ibrahim Lodi and established the Mughal Empire.", "History", "History — Medieval India"],
  ["DUMMY: Akbar's revenue system 'Ain-i-Dahsala' was designed by?", "Abul Fazl", "Birbal", "Todar Mal", "Tansen", "c", "Raja Todar Mal, Akbar's finance minister, designed the Dahsala system of land revenue.", "History", "History — Medieval India"],
  ["DUMMY: Which Mughal emperor built the Red Fort in Delhi?", "Humayun", "Akbar", "Aurangzeb", "Shah Jahan", "d", "Shah Jahan built the Red Fort (Lal Qila) in Delhi, completed in 1648.", "History", "History — Medieval India"],

  // ── History — Modern India ────────────────────────
  ["DUMMY: The Indian National Congress was founded in?", "1857", "1885", "1905", "1920", "b", "INC was founded in 1885 by A.O. Hume, Dadabhai Naoroji and Dinshaw Wacha in Bombay.", "History", "History — Modern India"],
  ["DUMMY: The Dandi March was conducted in which year?", "1919", "1930", "1942", "1947", "b", "Gandhi's Dandi March (Salt March) took place in 1930 to protest the British salt tax.", "History", "History — Modern India"],
  ["DUMMY: India got independence on which date?", "August 15, 1947", "January 26, 1950", "August 15, 1946", "June 3, 1947", "a", "India gained independence from British rule on August 15, 1947.", "History", "History — Modern India"],

  // ── History — Misc ────────────────────────────────
  ["DUMMY: Who gave the slogan 'Do or Die'?", "B.R. Ambedkar", "Jawaharlal Nehru", "Mahatma Gandhi", "Bhagat Singh", "c", "Mahatma Gandhi gave the slogan 'Do or Die' during the Quit India Movement in 1942.", "History", "History — Misc"],
  ["DUMMY: The Rowlatt Act was passed in which year?", "1915", "1919", "1921", "1932", "b", "The Rowlatt Act (1919) allowed the British to detain Indians without trial; it triggered nationwide protests.", "History", "History — Misc"],
  ["DUMMY: Jallianwala Bagh massacre occurred in which city?", "Delhi", "Mumbai", "Amritsar", "Lahore", "c", "The Jallianwala Bagh massacre took place on April 13, 1919 in Amritsar under General Dyer.", "History", "History — Misc"],


  // ── Polity — Foundations ──────────────────────────
  ["DUMMY: The Constitution of India came into effect on?", "August 15, 1947", "November 26, 1949", "January 26, 1950", "January 26, 1949", "c", "The Constitution of India came into force on January 26, 1950, which is celebrated as Republic Day.", "Polity & Constitution", "Polity — Foundations"],
  ["DUMMY: Who is called the 'Father of the Indian Constitution'?", "Jawaharlal Nehru", "Mahatma Gandhi", "B.R. Ambedkar", "Rajendra Prasad", "c", "Dr. B.R. Ambedkar chaired the Drafting Committee of the Constitution and is called its father.", "Polity & Constitution", "Polity — Foundations"],
  ["DUMMY: India is described as a 'Sovereign Socialist Secular Democratic Republic' by which amendment?", "42nd Amendment", "44th Amendment", "52nd Amendment", "74th Amendment", "a", "The 42nd Constitutional Amendment (1976) added the words Socialist, Secular and Integrity to the Preamble.", "Polity & Constitution", "Polity — Foundations"],

  // ── Polity — Articles & Amendments ───────────────
  ["DUMMY: Right to Education is covered under which article?", "Article 19", "Article 21", "Article 21A", "Article 32", "c", "Article 21A (inserted by 86th Amendment 2002) makes free and compulsory education a Fundamental Right for ages 6–14.", "Polity & Constitution", "Polity — Articles & Amendments"],
  ["DUMMY: Article 356 of the Indian Constitution deals with?", "Emergency due to war", "Financial emergency", "President's Rule in states", "Fundamental Rights", "c", "Article 356 provides for imposition of President's Rule in a state if constitutional machinery fails.", "Polity & Constitution", "Polity — Articles & Amendments"],
  ["DUMMY: Which amendment lowered the voting age from 21 to 18?", "42nd", "52nd", "61st", "73rd", "c", "The 61st Constitutional Amendment (1988) reduced the voting age from 21 to 18 years.", "Polity & Constitution", "Polity — Articles & Amendments"],

  // ── Polity — Bodies & Governance ─────────────────
  ["DUMMY: The Comptroller and Auditor General (CAG) of India is appointed by?", "Prime Minister", "Parliament", "President", "Supreme Court", "c", "The CAG is appointed by the President of India under Article 148 of the Constitution.", "Polity & Constitution", "Polity — Bodies & Governance"],
  ["DUMMY: Which body in India is described as the 'Fourth Estate'?", "Judiciary", "Legislature", "Executive", "Press/Media", "d", "The press/media is informally called the Fourth Estate, acting as a watchdog on the three organs of government.", "Polity & Constitution", "Polity — Bodies & Governance"],
  ["DUMMY: The Finance Commission of India is constituted every?", "2 years", "5 years", "3 years", "10 years", "b", "Under Article 280, the President constitutes the Finance Commission every 5 years.", "Polity & Constitution", "Polity — Bodies & Governance"],

  // ── Polity — Misc ─────────────────────────────────
  ["DUMMY: Which writ is known as 'you may have the body'?", "Mandamus", "Certiorari", "Habeas Corpus", "Quo Warranto", "c", "Habeas Corpus (Latin: 'you shall have the body') protects citizens from unlawful detention.", "Polity & Constitution", "Polity — Misc"],
  ["DUMMY: The concept of Directive Principles was borrowed from the constitution of?", "USA", "UK", "Ireland", "Canada", "c", "Directive Principles of State Policy were borrowed from the Constitution of Ireland.", "Polity & Constitution", "Polity — Misc"],
  ["DUMMY: How many schedules does the Indian Constitution currently have?", "8", "10", "12", "14", "c", "The Indian Constitution has 12 Schedules. It originally had 8; more were added by amendments.", "Polity & Constitution", "Polity — Misc"],


  // ── Geography — Physical Geography ───────────────
  ["DUMMY: Which is the highest peak in India?", "Nanda Devi", "Kanchenjunga", "K2", "Siachen", "c", "K2 (8,611 m) in the Karakoram range is the highest peak in India (and 2nd highest in the world).", "Geography", "Geography — Physical Geography"],
  ["DUMMY: The Western Ghats run parallel to which coast?", "Northern", "Eastern", "Western", "Southern", "c", "The Western Ghats run along India's western coast for about 1,600 km from Gujarat to Kerala.", "Geography", "Geography — Physical Geography"],
  ["DUMMY: Which river is called the 'Sorrow of Bihar'?", "Ganga", "Kosi", "Son", "Gandak", "b", "The Kosi River is called the 'Sorrow of Bihar' due to frequent and devastating floods it causes.", "Geography", "Geography — Physical Geography"],

  // ── Geography — Human & Economic ─────────────────
  ["DUMMY: Which state is the largest producer of tea in India?", "West Bengal", "Assam", "Tamil Nadu", "Kerala", "b", "Assam is the largest producer of tea in India, contributing about 50% of total production.", "Geography", "Geography — Human & Economic"],
  ["DUMMY: The Tropic of Cancer passes through how many Indian states?", "6", "7", "8", "9", "c", "The Tropic of Cancer passes through 8 Indian states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, Mizoram.", "Geography", "Geography — Human & Economic"],
  ["DUMMY: Which city is known as the 'Silicon Valley of India'?", "Mumbai", "Hyderabad", "Pune", "Bengaluru", "d", "Bengaluru (Bangalore) is called the Silicon Valley of India for its dominant IT and tech industry.", "Geography", "Geography — Human & Economic"],

  // ── Geography — World Geography ───────────────────
  ["DUMMY: Which is the longest river in the world?", "Amazon", "Nile", "Yangtze", "Mississippi", "b", "The Nile River in Africa is traditionally considered the longest river at approximately 6,650 km.", "Geography", "Geography — World Geography"],
  ["DUMMY: The Sahara Desert is located on which continent?", "Asia", "Australia", "South America", "Africa", "d", "The Sahara is the world's largest hot desert, covering most of North Africa.", "Geography", "Geography — World Geography"],
  ["DUMMY: Which country has the most natural lakes in the world?", "Russia", "USA", "Canada", "Brazil", "c", "Canada has approximately 31,752 lakes larger than 3 km², more than any other country.", "Geography", "Geography — World Geography"],

  // ── Geography — Misc ──────────────────────────────
  ["DUMMY: The International Date Line passes through which ocean?", "Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean", "c", "The International Date Line runs through the Pacific Ocean at roughly 180° longitude.", "Geography", "Geography — Misc"],
  ["DUMMY: Which soil is best suited for cotton cultivation in India?", "Alluvial", "Red", "Black", "Laterite", "c", "Black soil (Regur) has high water retention and is ideal for cotton cultivation in the Deccan region.", "Geography", "Geography — Misc"],
  ["DUMMY: Thar Desert is primarily located in which Indian state?", "Gujarat", "Rajasthan", "Punjab", "Haryana", "b", "The Thar Desert, also called the Great Indian Desert, covers most of northwestern Rajasthan.", "Geography", "Geography — Misc"],


  // ── Economy — Indian Economy ──────────────────────
  ["DUMMY: India's first Five-Year Plan was launched in?", "1947", "1951", "1956", "1961", "b", "India's first Five-Year Plan (1951–56) was modeled on the Harrod-Domar model, focusing on agriculture.", "Economy", "Economy — Indian Economy"],
  ["DUMMY: NABARD stands for?", "National Agricultural Bank And Rural Development", "National Bank for Agriculture and Rural Development", "National Board for Agriculture and Research Development", "None of these", "b", "NABARD (National Bank for Agriculture and Rural Development) was established in 1982.", "Economy", "Economy — Indian Economy"],
  ["DUMMY: The Green Revolution in India is associated with which crop?", "Rice", "Wheat", "Maize", "Sugarcane", "b", "The Green Revolution (1960s–70s) in India primarily boosted wheat production through high-yielding variety seeds.", "Economy", "Economy — Indian Economy"],

  // ── Economy — Economic Concepts ───────────────────
  ["DUMMY: GDP stands for?", "Gross Domestic Product", "General Domestic Product", "Gross Development Product", "General Development Price", "a", "GDP (Gross Domestic Product) is the total monetary value of all goods and services produced within a country in a year.", "Economy", "Economy — Economic Concepts"],
  ["DUMMY: Which type of unemployment is common in Indian agriculture?", "Frictional", "Structural", "Disguised", "Cyclical", "c", "Disguised unemployment is when more people are employed than actually needed; common in Indian agriculture.", "Economy", "Economy — Economic Concepts"],
  ["DUMMY: Inflation is best described as?", "Fall in GDP", "Rise in general price level", "Rise in employment", "Fall in imports", "b", "Inflation refers to a sustained increase in the general price level of goods and services over time.", "Economy", "Economy — Economic Concepts"],

  // ── Economy — Misc ────────────────────────────────
  ["DUMMY: The Reserve Bank of India was established in?", "1934", "1935", "1947", "1949", "b", "The Reserve Bank of India was established on April 1, 1935, under the Reserve Bank of India Act, 1934.", "Economy", "Economy — Misc"],
  ["DUMMY: SEBI is the regulator for which sector?", "Banking", "Insurance", "Capital Markets / Securities", "Real Estate", "c", "SEBI (Securities and Exchange Board of India) regulates the securities and capital markets in India.", "Economy", "Economy — Misc"],
  ["DUMMY: The headquarters of the World Bank is located in?", "Geneva", "New York", "Washington D.C.", "Brussels", "c", "The World Bank Group is headquartered in Washington, D.C., USA.", "Economy", "Economy — Misc"],


  // ── Science — Biology ─────────────────────────────
  ["DUMMY: The basic structural and functional unit of life is?", "Organ", "Tissue", "Cell", "Nucleus", "c", "The cell is the basic structural and functional unit of all living organisms, discovered by Robert Hooke.", "Science & Biology", "Science — Biology"],
  ["DUMMY: Which blood group is known as the 'Universal Donor'?", "A", "B", "AB", "O", "d", "Blood group O negative is called the Universal Donor as it can be donated to any blood group.", "Science & Biology", "Science — Biology"],
  ["DUMMY: Photosynthesis in plants occurs in which organelle?", "Mitochondria", "Ribosome", "Chloroplast", "Vacuole", "c", "Chloroplasts contain chlorophyll and are the sites of photosynthesis in plant cells.", "Science & Biology", "Science — Biology"],

  // ── Science — Physics ─────────────────────────────
  ["DUMMY: What is the SI unit of force?", "Watt", "Joule", "Newton", "Pascal", "c", "The SI unit of force is Newton (N), named after Sir Isaac Newton.", "Science & Biology", "Science — Physics"],
  ["DUMMY: The speed of light in vacuum is approximately?", "3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s", "b", "The speed of light in vacuum is approximately 3 × 10⁸ m/s (299,792,458 m/s exactly).", "Science & Biology", "Science — Physics"],
  ["DUMMY: Which law states that current through a conductor is proportional to voltage?", "Newton's Law", "Faraday's Law", "Ohm's Law", "Boyle's Law", "c", "Ohm's Law: V = IR, where V is voltage, I is current and R is resistance.", "Science & Biology", "Science — Physics"],

  // ── Science — Chemistry ───────────────────────────
  ["DUMMY: The chemical formula of water is?", "H₂O₂", "HO", "H₂O", "H₃O", "c", "Water is composed of two hydrogen atoms and one oxygen atom, giving it the formula H₂O.", "Science & Biology", "Science — Chemistry"],
  ["DUMMY: Which gas is responsible for the greenhouse effect?", "Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen", "c", "CO₂ (Carbon Dioxide) is the primary greenhouse gas responsible for global warming.", "Science & Biology", "Science — Chemistry"],
  ["DUMMY: The atomic number of Carbon is?", "6", "8", "12", "14", "a", "Carbon has atomic number 6 (6 protons) and is the basis of all organic compounds.", "Science & Biology", "Science — Chemistry"],

  // ── Science — Misc ────────────────────────────────
  ["DUMMY: Who invented the World Wide Web (WWW)?", "Bill Gates", "Tim Berners-Lee", "Vint Cerf", "Steve Jobs", "b", "Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN.", "Science & Biology", "Science — Misc"],
  ["DUMMY: ISRO stands for?", "Indian Space Research Organisation", "Indian Science Research Organisation", "International Space Research Organisation", "Indian Satellite Research Office", "a", "ISRO (Indian Space Research Organisation) was established in 1969 and is headquartered in Bengaluru.", "Science & Biology", "Science — Misc"],
  ["DUMMY: The first artificial satellite launched by India was?", "Bhaskara", "IRS-1A", "INSAT-1A", "Aryabhata", "d", "Aryabhata was India's first satellite, launched on April 19, 1975, by the Soviet Union.", "Science & Biology", "Science — Misc"],

]; // end of RAW

// ── QUICK STATS (informational, not used by the app) ──────
// console.log('GS Questions loaded:', RAW.length);
