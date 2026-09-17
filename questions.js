/* ---------------------------------------------------------------
   QUIZ QUESTIONS — edit freely.

   Each entry: { q: "question text", options: [4 answers], correct: index }
   `correct` is zero-based: 0 = first option, 3 = fourth option.
   Add or remove questions as you like; the game adapts automatically.
   --------------------------------------------------------------- */

window.MQ_QUESTIONS = [
  {
    q: "A muscle with a high pennation angle and many short fibers packed in parallel, compared to a fusiform muscle of the same volume, will have:",
    options: [
      "Greater excursion and contraction velocity",
      "Greater physiological cross-sectional area (PCSA) and force potential",
      "Fewer total fibers overall",
      "No difference in force-generating capacity"
    ],
    correct: 1
  },
  {
    q: "Which fiber type has the fastest contraction speed, highest force per fiber, and the lowest fatigue resistance?",
    options: ["Type I", "Type IIa", "Type IIx", "All three are equivalent"],
    correct: 2
  },
  {
    q: "Increasing stimulation frequency to a single motor unit until twitches mechanically fuse into a sustained contraction best describes:",
    options: ["Spatial summation", "The size principle", "Temporal summation", "Active insufficiency"],
    correct: 2
  },
  {
    q: "Per Henneman's size principle, which motor units are recruited first as force demand gradually increases?",
    options: [
      "Large motor units with Type IIx fibers",
      "Small motor units with Type I fibers",
      "Units are recruited randomly",
      "Whichever units were most recently active"
    ],
    correct: 1
  },
  {
    q: "A muscle actively producing force while being lengthened by an external load — like the lowering phase of a biceps curl — is undergoing:",
    options: ["Concentric contraction", "Isometric contraction", "Isokinetic contraction", "Eccentric contraction"],
    correct: 3
  },
  {
    q: "A dynamometer that holds joint angular velocity constant while resistance adjusts to match the force produced at each angle provides:",
    options: ["Isotonic resistance", "Isokinetic resistance", "Isoinertial resistance", "Variable (cam) resistance"],
    correct: 1
  },
  {
    q: "Peak mechanical power output during a concentric contraction occurs:",
    options: [
      "At maximal force, zero velocity",
      "At maximal velocity, zero load",
      "At roughly one-third of maximal force and velocity",
      "Only during eccentric contractions"
    ],
    correct: 2
  },
  {
    q: "At the plateau of the sarcomere length–tension curve, active force is maximal because:",
    options: [
      "Passive connective tissue tension is highest",
      "Actin and myosin have no overlap",
      "Actin–myosin overlap is optimal, maximizing cross-bridges",
      "The sarcomere is at its shortest possible length"
    ],
    correct: 2
  },
  {
    q: "A patient has much less hip flexion ROM with the knee straight (SLR) than with the knee bent. This is best explained by:",
    options: [
      "Active insufficiency of the hamstrings",
      "Passive insufficiency of the hamstrings",
      "Active insufficiency of the rectus femoris",
      "A size-principle recruitment deficit"
    ],
    correct: 1
  },
  {
    q: "Which adaptation to resistance training typically appears earliest — within 2–4 weeks, before measurable hypertrophy?",
    options: ["Neural adaptations", "Connective tissue adaptations", "Sarcoplasmic hypertrophy", "Mitochondrial biogenesis"],
    correct: 0
  }
];
