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
  },
  /* ===============================================================
     EXAM 2 REVIEW — Knee, Ankle & Foot, Hip, Gait
     Framed like the Exam 2 review questions.
     =============================================================== */

  /* ---------- KNEE ---------- */
  {
    q: "With the knee flexed to 90°, the tibia is rotated internally and externally. The vertical axis of rotation passes near the medial intercondylar tubercle. What does this mean for the two compartments?",
    options: [
      "Both tibial condyles move through equal arcs",
      "The medial condyle acts as a pivot while the lateral condyle moves through a larger arc",
      "The lateral condyle acts as a pivot while the medial condyle moves through a larger arc",
      "Rotation occurs only at the patellofemoral joint"
    ],
    correct: 1
  },
  {
    q: "The medial femoral condyle has a longer tibial articular surface than the lateral condyle. Which is a direct implication of this?",
    options: [
      "It drives the screw-home mechanism and lets the medial compartment carry more load in stance",
      "It makes the medial meniscus more mobile than the lateral",
      "It blocks lateral patellar subluxation",
      "It increases the Q-angle"
    ],
    correct: 0
  },
  {
    q: "The lateral facet of the femoral trochlea is larger and projects farther anteriorly than the medial facet. Clinically, this:",
    options: [
      "Increases compression on the medial patellar facet",
      "Lets the patella sit lower (patella baja)",
      "Acts as a bony buttress against lateral patellar displacement",
      "Has no effect on patellar stability"
    ],
    correct: 2
  },
  {
    q: "Which meniscus is injured most often, and why?",
    options: [
      "Lateral — it is C-shaped and firmly fixed to the LCL",
      "Lateral — it carries most of the body weight in stance",
      "Medial — it is nearly circular and more mobile",
      "Medial — it is firmly attached to the deep MCL and capsule, so it is less mobile"
    ],
    correct: 3
  },
  {
    q: "A meniscal tear in which location is MOST likely to heal?",
    options: [
      "Inner (white) zone, because it is bathed in synovial fluid",
      "Outer peripheral (red) zone, because it is vascularized",
      "Central free edge, because it is innervated",
      "All zones heal equally well"
    ],
    correct: 1
  },
  {
    q: "Which structures reinforce the knee joint capsule ANTERIORLY?",
    options: [
      "Quadriceps tendon, patella, patellar tendon, and patellar retinacula",
      "Oblique and arcuate popliteal ligaments",
      "MCL and pes anserinus",
      "Popliteus tendon and LCL"
    ],
    correct: 0
  },
  {
    q: "The medial patellofemoral ligament (MPFL) is the primary passive restraint to lateral patellar translation. Which muscle blends with the MPFL and actively helps it resist lateral subluxation?",
    options: ["Vastus lateralis", "Rectus femoris", "Vastus medialis oblique (VMO)", "Sartorius"],
    correct: 2
  },
  {
    q: "A patient has posterolateral rotary instability. Which tibial motions place the MOST strain on the posterolateral corner of the knee?",
    options: [
      "Internal rotation and anterior translation",
      "External rotation, varus, and posterior translation",
      "Valgus and anterior translation",
      "Internal rotation and valgus"
    ],
    correct: 1
  },
  {
    q: "In weight bearing, which muscles help DECREASE anterior tibial translation and so protect the ACL?",
    options: [
      "Quadriceps and tibialis anterior",
      "Gastrocnemius and rectus femoris",
      "Tensor fasciae latae and vastus lateralis",
      "Hamstrings and soleus"
    ],
    correct: 3
  },
  {
    q: "At roughly what knee angle does the iliotibial band cross over the lateral femoral epicondyle?",
    options: ["Full extension (0°)", "About 20–30° of flexion", "About 90° of flexion", "Full flexion (135°)"],
    correct: 1
  },
  {
    q: "A patient has genu valgum. What happens to the weight-bearing line and the forces at the knee?",
    options: [
      "Line shifts medially: medial compartment compressed, lateral structures in tension",
      "Line shifts laterally: lateral compartment compressed, medial structures (MCL) in tension",
      "Line is unchanged: forces are evenly distributed",
      "Line shifts laterally: medial compartment compressed, LCL in tension"
    ],
    correct: 1
  },
  {
    q: "During OPEN-chain knee flexion (tibia-on-femur), what are the arthrokinematics?",
    options: [
      "Tibia rolls and glides posteriorly, and the tibia internally rotates",
      "Tibia rolls posteriorly and glides anteriorly, and the tibia externally rotates",
      "Femur rolls posteriorly and glides anteriorly, and the femur externally rotates",
      "Tibia rolls and glides anteriorly, and the tibia internally rotates"
    ],
    correct: 0
  },
  {
    q: "During CLOSED-chain knee flexion (squatting down), the femur rolls posteriorly. What keeps it from rolling off the back of the tibial plateau?",
    options: [
      "The PCL pulls the femur posteriorly",
      "The quadriceps pulls the tibia posteriorly",
      "The ACL becomes taut and guides an anterior glide of the femur, aided by the menisci",
      "The LCL tightens and stops the roll"
    ],
    correct: 2
  },
  {
    q: "A patient stands up from a squat. In the last ~30° of WEIGHT-BEARING knee extension, the screw-home mechanism occurs as:",
    options: [
      "The tibia internally rotates on the fixed femur",
      "The femur internally rotates on the fixed tibia",
      "The femur externally rotates on the fixed tibia",
      "The patella tilts medially"
    ],
    correct: 1
  },
  {
    q: "Which factors cause the screw-home mechanism?",
    options: [
      "Hamstring contraction and PCL tension",
      "Popliteus contraction and patella alta",
      "Shape of the medial femoral condyle, ACL tension, and the lateral pull of the quadriceps",
      "Gastrocnemius tension and the lateral meniscus"
    ],
    correct: 2
  },
  {
    q: "A patient has patella alta. What is the main clinical implication?",
    options: [
      "Reduced knee flexion ROM",
      "The patella engages the trochlea later in flexion, increasing the risk of lateral instability or dislocation",
      "Greater PF contact area in early flexion",
      "A larger quadriceps moment arm"
    ],
    correct: 1
  },
  {
    q: "As the knee moves from full extension to deep flexion, how does the patellar contact point change?",
    options: [
      "It moves from the superior pole to the inferior pole",
      "It stays on the central facet throughout",
      "It shifts from the medial facet to the lateral facet only",
      "It moves from the inferior pole toward the superior pole, with the odd facet engaging in deep flexion"
    ],
    correct: 3
  },
  {
    q: "Which combination would MOST increase a patient's Q-angle and their tendency toward lateral patellar tracking?",
    options: [
      "Femoral anteversion, genu valgum, and excessive foot pronation",
      "Femoral retroversion, genu varum, and a supinated foot",
      "Patella baja and a strong VMO",
      "A medially placed tibial tuberosity"
    ],
    correct: 0
  },
  {
    q: "Which change would INCREASE patellofemoral joint compression?",
    options: [
      "Squatting in a more upright, shallow position",
      "Deeper weight-bearing knee flexion with femoral IR/adduction (dynamic valgus)",
      "Leaning the trunk forward to cut the knee flexion moment",
      "Strengthening the hip abductors and external rotators"
    ],
    correct: 1
  },
  {
    q: "During a long arc quad (seated knee extension with an ankle weight), where must the quadriceps produce the MOST force, and why?",
    options: [
      "At 90° flexion, because the quad is at its shortest length",
      "At 45° flexion, because the patella's moment arm is greatest",
      "Near full extension, because the external flexion torque is greatest and the quad's moment arm is shrinking",
      "Force is the same through the whole range"
    ],
    correct: 2
  },
  {
    q: "The rectus femoris becomes PASSIVELY insufficient in which position?",
    options: [
      "Hip flexion + knee extension",
      "Hip extension + knee extension",
      "Hip flexion + knee flexion",
      "Hip extension + knee flexion"
    ],
    correct: 3
  },
  {
    q: "Which muscle is an EXTERNAL rotator of the flexed knee?",
    options: ["Popliteus", "Biceps femoris", "Semitendinosus", "Gracilis"],
    correct: 1
  },
  {
    q: "In WEIGHT BEARING, which muscles besides the quadriceps can extend the knee by pulling the femur or tibia posteriorly?",
    options: [
      "Gluteus maximus and soleus",
      "Gastrocnemius and hamstrings",
      "Tibialis anterior and sartorius",
      "Iliopsoas and gracilis"
    ],
    correct: 0
  },

  /* ---------- ANKLE & FOOT ---------- */
  {
    q: "What are the component motions of NON-weight-bearing pronation?",
    options: [
      "Inversion, adduction, plantarflexion",
      "Eversion, adduction, dorsiflexion",
      "Eversion, abduction, dorsiflexion",
      "Inversion, abduction, plantarflexion"
    ],
    correct: 2
  },
  {
    q: "The lateral malleolus sits more inferior and posterior than the medial malleolus. Because of this talocrural axis, ankle dorsiflexion is coupled with:",
    options: [
      "Slight abduction and eversion",
      "Slight adduction and inversion",
      "Pure sagittal-plane motion",
      "Slight adduction and eversion"
    ],
    correct: 0
  },
  {
    q: "What happens at the proximal tibiofibular joint during ankle dorsiflexion?",
    options: [
      "The fibular head glides inferiorly",
      "No motion is required",
      "The fibula glides superiorly as the wider anterior talus spreads the mortise",
      "The tibia glides laterally on the fibula"
    ],
    correct: 2
  },
  {
    q: "On exam, you place the ankle in neutral/dorsiflexion and invert the calcaneus. Which lateral ligament are you stressing?",
    options: [
      "Anterior talofibular ligament (ATFL)",
      "Calcaneofibular ligament (CFL)",
      "Deltoid ligament",
      "Anterior inferior tibiofibular ligament"
    ],
    correct: 1
  },
  {
    q: "During WEIGHT-BEARING ankle dorsiflexion (lunging forward), what are the talocrural arthrokinematics?",
    options: [
      "Talus rolls anteriorly and glides posteriorly on the mortise",
      "Talus rolls and glides posteriorly",
      "Tibia and fibula glide posteriorly on the talus",
      "Tibia and fibula roll and glide anteriorly over the fixed talus"
    ],
    correct: 3
  },
  {
    q: "At the subtalar joint, the posterior articulation has a concave calcaneal surface, while the anterior-middle articulations have a convex calcaneal surface. This opposing arrangement produces:",
    options: [
      "Pure sliding in one plane",
      "A screw-like, triplanar motion for inversion–eversion",
      "No motion; the joint is locked",
      "Only dorsiflexion and plantarflexion"
    ],
    correct: 1
  },
  {
    q: "The sinus tarsi is best described as:",
    options: [
      "The lateral, funnel-shaped opening of the tarsal canal between the talus and calcaneus",
      "A groove on the medial calcaneus for the FHL tendon",
      "The joint space between the navicular and cuneiforms",
      "The tunnel deep to the flexor retinaculum"
    ],
    correct: 0
  },
  {
    q: "An axis of motion is inclined 35° superior from the A-P axis. What are the primary and secondary motions around it?",
    options: [
      "Primary: dorsiflexion/plantarflexion; secondary: abduction/adduction",
      "Primary: abduction/adduction; secondary: inversion/eversion",
      "Primary: inversion/eversion; secondary: abduction/adduction",
      "Primary: dorsiflexion/plantarflexion; secondary: inversion/eversion"
    ],
    correct: 2
  },
  {
    q: "During WEIGHT-BEARING subtalar pronation, which motions occur?",
    options: [
      "Calcaneal inversion, talar abduction and dorsiflexion, tibial external rotation",
      "Calcaneal eversion, talar adduction and plantarflexion, tibial internal rotation",
      "Calcaneal eversion, talar abduction and dorsiflexion, tibial external rotation",
      "Calcaneal inversion, talar adduction and plantarflexion, tibial internal rotation"
    ],
    correct: 1
  },
  {
    q: "A patient presents with rearfoot varus in non-weight bearing. What do you expect in weight bearing, and what orthotic might help?",
    options: [
      "Excessive supination; a lateral rearfoot post",
      "No compensation; no orthotic needed",
      "Excessive subtalar pronation to bring the medial foot down; a medial (varus) rearfoot post",
      "Forefoot dorsiflexion; a heel lift"
    ],
    correct: 2
  },
  {
    q: "What is unique about the spring (plantar calcaneonavicular) ligament?",
    options: [
      "It is the main stabilizer of the calcaneocuboid joint",
      "It runs from the fibula to the calcaneus",
      "It is purely elastic tissue with no collagen",
      "It has a fibrocartilage surface that articulates with and supports the head of the talus"
    ],
    correct: 3
  },
  {
    q: "When the subtalar joint is PRONATED (e.g., loading response), the transverse tarsal joint axes are:",
    options: [
      "Parallel, so the midfoot is unlocked and flexible for shock absorption",
      "Convergent, so the midfoot is locked and rigid",
      "Parallel, so the midfoot is locked and rigid",
      "Unaffected by subtalar position"
    ],
    correct: 0
  },
  {
    q: "A patient's rearfoot is supinated (inverted). To keep the forefoot on the ground, the tarsometatarsal joints perform a PRONATION twist, which consists of:",
    options: [
      "Rays 1–2 dorsiflex and invert; rays 4–5 plantarflex and evert",
      "Rays 1–2 plantarflex and evert; rays 4–5 dorsiflex and invert",
      "All rays plantarflex",
      "All rays dorsiflex and evert"
    ],
    correct: 1
  },
  {
    q: "In late stance, MTP extension winds the plantar fascia around the metatarsal heads (the windlass mechanism). This:",
    options: [
      "Lowers the arch and pronates the foot for shock absorption",
      "Lengthens the fascia and unlocks the midfoot",
      "Raises the arch and supinates the foot into a rigid lever for push-off",
      "Has no effect on arch height"
    ],
    correct: 2
  },
  {
    q: "Which kinetic chain factor is MOST likely to contribute to plantar fasciopathy?",
    options: [
      "Excessive ankle dorsiflexion ROM",
      "A high-arched, rigid foot that absorbs load well",
      "Strong hip external rotators",
      "Limited ankle dorsiflexion (tight gastroc–soleus) with excessive pronation"
    ],
    correct: 3
  },
  {
    q: "Which muscle has the greatest moment arm to control (decelerate) pronation of the foot?",
    options: ["Tibialis anterior", "Fibularis longus", "Tibialis posterior", "Extensor hallucis longus"],
    correct: 2
  },
  {
    q: "Which neurovascular structures run in the DEEP posterior compartment of the leg?",
    options: [
      "Tibial nerve and posterior tibial artery",
      "Deep fibular nerve and anterior tibial artery",
      "Superficial fibular nerve only",
      "Sural nerve and small saphenous vein"
    ],
    correct: 0
  },
  {
    q: "Which plantar muscles make up the SECOND layer of the foot?",
    options: [
      "Abductor hallucis, flexor digitorum brevis, abductor digiti minimi",
      "Quadratus plantae and the lumbricals (with the FDL and FHL tendons)",
      "Flexor hallucis brevis, adductor hallucis, flexor digiti minimi brevis",
      "Plantar and dorsal interossei"
    ],
    correct: 1
  },
  {
    q: "Which muscles are innervated by the MEDIAL plantar nerve?",
    options: [
      "Adductor hallucis and the interossei",
      "Quadratus plantae and abductor digiti minimi",
      "Lumbricals 2–4 and flexor digiti minimi brevis",
      "Abductor hallucis, FDB, FHB, and the 1st lumbrical"
    ],
    correct: 3
  },

  /* ---------- HIP ---------- */
  {
    q: "What spans the inferior acetabular notch, and why does the structure passing beneath it matter clinically?",
    options: [
      "Transverse acetabular ligament; the ligamentum teres carries an artery that supplies the femoral head",
      "Labrum; the femoral nerve passes beneath it",
      "Iliofemoral ligament; the obturator nerve passes beneath it",
      "Ischiofemoral ligament; the sciatic nerve passes beneath it"
    ],
    correct: 0
  },
  {
    q: "A patient's center edge angle (CEA) is 15°. What does this suggest?",
    options: [
      "Normal coverage",
      "Over-coverage and pincer-type FAI",
      "Acetabular dysplasia with reduced femoral head coverage and instability",
      "Coxa valga"
    ],
    correct: 2
  },
  {
    q: "Which describes the acetabular labrum?",
    options: [
      "Hyaline cartilage covering the femoral head",
      "A fibrocartilage ring that deepens the socket, creates a suction seal, and lowers contact stress",
      "A ligament that resists hip extension",
      "A fat pad in the acetabular fossa"
    ],
    correct: 1
  },
  {
    q: "A patient has a DECREASED angle of inclination (coxa vara) on the right side. Which leg would appear shorter?",
    options: [
      "The left leg",
      "Neither, because inclination doesn't affect leg length",
      "Both legs equally",
      "The right leg"
    ],
    correct: 3
  },
  {
    q: "A patient with EXCESSIVE femoral anteversion (an increased angle of torsion) will most likely show:",
    options: [
      "More hip IR, less hip ER, and a toe-in gait",
      "More hip ER, less hip IR, and a toe-out gait",
      "Equal IR and ER",
      "Reduced hip flexion only"
    ],
    correct: 0
  },
  {
    q: "What are the three types of femoroacetabular impingement (FAI)?",
    options: [
      "Anterior, posterior, lateral",
      "Cam, pincer, and combined",
      "Dysplastic, valgus, varus",
      "Acute, chronic, recurrent"
    ],
    correct: 1
  },
  {
    q: "Which hip ligament is the PRIMARY restraint to hip internal rotation?",
    options: [
      "Iliofemoral (Y) ligament",
      "Pubofemoral ligament",
      "Ischiofemoral ligament",
      "Ligamentum teres"
    ],
    correct: 2
  },
  {
    q: "During OPEN-chain hip abduction (femur-on-pelvis), the convex femoral head:",
    options: [
      "Rolls superiorly and glides inferiorly",
      "Rolls and glides superiorly",
      "Rolls inferiorly and glides superiorly",
      "Spins only"
    ],
    correct: 0
  },
  {
    q: "Anterior pelvic tilt is usually coupled with:",
    options: [
      "Lumbar flexion and hip extension",
      "Lumbar extension (more lordosis) and hip flexion",
      "Lumbar flexion and hip flexion",
      "Lumbar extension and hip extension"
    ],
    correct: 1
  },
  {
    q: "A patient stands on the LEFT leg and HIKES the right side of the pelvis. What happens at the left (stance) hip?",
    options: [
      "Left hip adducts",
      "Left hip flexes",
      "Left hip internally rotates",
      "Left hip abducts"
    ],
    correct: 3
  },
  {
    q: "A patient with Trendelenburg gait shows a contralateral pelvic drop during stance. What is the most likely cause, and what is a common compensation?",
    options: [
      "Weak hip flexors; forward trunk lean",
      "Weak gluteus maximus; backward trunk lean",
      "Weak stance-side gluteus medius; lateral trunk lean toward the stance leg",
      "Tight adductors; circumduction"
    ],
    correct: 2
  },

  /* ---------- GAIT ---------- */
  {
    q: "During LOADING RESPONSE, which muscles act eccentrically to control the hip, knee, and ankle?",
    options: [
      "Iliopsoas, hamstrings, gastrocnemius",
      "Gluteus maximus, quadriceps, and tibialis anterior",
      "Gluteus medius, rectus femoris, and soleus",
      "Adductors, gastrocnemius, and fibularis longus"
    ],
    correct: 1
  },
  {
    q: "Which motions promote shock absorption during loading response?",
    options: [
      "Hip flexion, knee flexion, ankle plantarflexion, and subtalar pronation",
      "Hip extension, knee extension, ankle dorsiflexion, and supination",
      "Hip abduction, knee extension, and ankle inversion",
      "Hip flexion, knee extension, and subtalar supination"
    ],
    correct: 0
  },
  {
    q: "The ANKLE rocker, where the tibia advances over the fixed foot by controlled dorsiflexion, occurs during:",
    options: ["Initial contact to loading response", "Pre-swing", "Mid-swing", "Mid-stance"],
    correct: 3
  },
  {
    q: "A patient presents with a stiff/short iliopsoas. What gait deviation would you expect, and when?",
    options: [
      "Steppage gait during swing",
      "Excessive knee extension at initial contact",
      "Lack of hip extension, with a forward trunk lean or more lumbar lordosis, during terminal stance",
      "Contralateral pelvic drop during loading response"
    ],
    correct: 2
  },
  {
    q: "A patient presents with a lateral trunk lean TOWARD the stance leg. Which muscle is likely long/weak, and in which phase?",
    options: [
      "Stance-side gluteus medius; loading response to mid-stance",
      "Swing-side gluteus medius; terminal swing",
      "Stance-side iliopsoas; pre-swing",
      "Stance-side tibialis anterior; initial contact"
    ],
    correct: 0
  }
];
