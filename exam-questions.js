/* ---------------------------------------------------------------
   NPTE-STYLE PRACTICE EXAM — Hip, Knee, Ankle & Foot biomechanics
   100 questions (Hip 33 · Knee 33 · Ankle & Foot 34), built from the
   PT 611 Fall 2024 lecture decks. Used by exam.html.

   Each entry: { id, joint, topic, stem, options[4], rationale[4],
                 answer (zero-based index), explanation }
   rationale[i] explains why options[i] is right or wrong.
   --------------------------------------------------------------- */
window.NPTE_EXAM = [
 {
  "id": 1,
  "joint": "Hip",
  "topic": "Acetabular coverage (CEA)",
  "stem": "A 24-year-old dancer reports anterolateral groin pain after long rehearsals. An AP pelvis radiograph shows a center-edge angle (CEA) of 14°. Which interpretation and biomechanical consequence is MOST accurate?",
  "options": [
   "Coxa profunda; the larger covered area of the femoral head distributes force and lowers peak contact stress",
   "Acetabular dysplasia; the deep, over-covered socket predisposes her to pincer-type impingement in flexion",
   "Possible (borderline) dysplasia; reduced coverage of the femoral head raises acetabular rim contact stress",
   "Acetabular dysplasia; less superolateral coverage concentrates joint load on a smaller rim and labral area"
  ],
  "rationale": [
   "Larger contact area does lower stress, but coxa profunda is a CEA above 40° (increased depth and coverage), the opposite of this film.",
   "The diagnosis is right, but dysplasia is a shallow socket with decreased depth. Pincer impingement goes with excess coverage (coxa profunda, CEA above 40°).",
   "Reduced coverage is right, but 16–25° is the possible-dysplasia range. At 14° the hip is below 16°, which is frank dysplasia.",
   "Correct. A CEA below 16° indicates dysplasia. The same joint force spread over less articular area raises contact stress at the rim and labrum."
  ],
  "answer": 3,
  "explanation": "The CEA indirectly measures acetabular depth and femoral head coverage. Normal is about 25–30°, 16–25° is possible dysplasia, below 16° is dysplasia, and above 40° is coxa profunda. Stress = force ÷ area, so a shallow socket loads a small strip of rim and labrum, which is why dysplastic hips develop labral tears and early OA."
 },
 {
  "id": 2,
  "joint": "Hip",
  "topic": "Acetabular coverage (CEA)",
  "stem": "A 32-year-old hockey goalie has deep anterior hip pain when the hip is flexed, adducted, and internally rotated. Imaging shows a CEA of 44° and a spherical femoral head-neck junction. Which explanation BEST fits these findings?",
  "options": [
   "Acetabular dysplasia causing pincer-type FAI in flexion and IR",
   "Coxa profunda causing cam-type FAI from an aspherical femoral head",
   "Excess acetabular coverage of the femoral head, which mainly increases the risk of anterior hip instability",
   "Coxa profunda causing pincer-type FAI; the overhanging acetabular rim contacts the femoral neck early in flexion and IR"
  ],
  "rationale": [
   "Pincer FAI provoked by flexion/IR is right, but dysplasia means a CEA below 16°. A CEA of 44° is over-coverage.",
   "Coxa profunda is right, but cam FAI is a femoral-side deformity (elevated alpha angle). This patient's head-neck junction is spherical.",
   "Excess coverage is right, but it increases bony containment. Instability goes with under-coverage (dysplasia) and excessive anteversion.",
   "Correct. A CEA above 40° means excess coverage (coxa profunda). The acetabular side is the problem, which defines pincer impingement, and it is provoked in flexion with IR."
  ],
  "answer": 3,
  "explanation": "Pincer FAI comes from the acetabulum (over-coverage: coxa profunda, retroversion). Cam FAI comes from the femur (an aspherical head-neck junction with an alpha angle above about 60°, around 75° in FAI). Both are provoked by flexion with IR and adduction, the FADIR position."
 },
 {
  "id": 3,
  "joint": "Hip",
  "topic": "Acetabular version",
  "stem": "A patient has excessive acetabular anteversion. Which ROM pattern and habitual compensation are MOST consistent with this alignment?",
  "options": [
   "Increased exposure of the anterior femoral head; decreased IR and increased ER",
   "Increased IR and decreased ER; the patient may compensate by holding the hip in IR",
   "Decreased IR and increased ER; the patient may compensate by holding the hip in IR",
   "Increased IR and decreased ER; the patient may compensate by standing with the hip in ER"
  ],
  "rationale": [
   "Anterior exposure is right, but anteversion increases IR and decreases ER.",
   "Correct. An anteriorly rotated acetabulum leaves the anterior head exposed. Rotating the femur internally turns the head back into the socket, so IR is the typical compensation.",
   "IR as the compensation is right, but decreased IR with increased ER is the retroversion pattern.",
   "The ROM pattern is right, but ER would turn the head further out the front of an already anteverted socket. The compensation is IR."
  ],
  "answer": 1,
  "explanation": "The normal acetabulum is anteverted about 20° (it faces lateral, inferior, and anterior). Too much anteversion means more IR, less ER, exposure of the anterior head, and compensation with IR. Retroversion is the reverse: less IR, more ER, and compensation with ER."
 },
 {
  "id": 4,
  "joint": "Hip",
  "topic": "Acetabular version",
  "stem": "A radiograph shows a positive crossover sign consistent with acetabular retroversion. Which clinical presentation is MOST expected?",
  "options": [
   "Posteriorly rotated acetabulum; increased IR with decreased ER",
   "Decreased IR with increased ER; the patient habitually compensates by internally rotating the hip",
   "Pincer-type impingement in flexion and IR; the acetabulum is rotated anteriorly",
   "Decreased IR with increased ER; anterior rim over-coverage predisposes to pincer impingement in flexion and IR"
  ],
  "rationale": [
   "The orientation is right, but a posteriorly rotated socket limits IR and frees ER.",
   "The ROM is right, but retroversion is compensated with ER, which is why these patients often toe out.",
   "Pincer impingement is right, but retroversion is a posterior rotation of the acetabulum.",
   "Correct. In retroversion the anterior rim overhangs the head. IR is blocked early (bony contact in flexion/IR) and ER is relatively free."
  ],
  "answer": 3,
  "explanation": "Acetabular retroversion (rotated posteriorly) gives decreased IR, increased ER, and compensation with ER. Because the anterior wall overhangs, it is a classic cause of pincer FAI."
 },
 {
  "id": 5,
  "joint": "Hip",
  "topic": "Labrum",
  "stem": "A patient has a large anterosuperior acetabular labral tear. Which loss of labral function BEST explains the reduced joint stability and accelerated cartilage wear seen with these tears?",
  "options": [
   "Loss of the suction seal that maintains negative intra-articular pressure, plus reduced socket depth",
   "Reduced socket depth and concavity; the labrum is hyaline cartilage continuous with the lunate surface",
   "Reduced proprioceptive input; the labrum's primary mechanical role is to resist end-range hip ER",
   "Loss of the suction seal; joint pain then arises from the capsule because the labrum itself is aneural"
  ],
  "rationale": [
   "Correct. The labrum deepens the socket, increases articular contact, and keeps a suction seal (fluid pressure and negative intra-articular pressure). Losing these raises cartilage stress and lowers stability.",
   "Reduced depth is right, but the labrum is wedge-shaped fibrocartilage attached to the acetabular periphery. Hyaline cartilage covers the lunate surface.",
   "Lost proprioception is right, but end-range ER is resisted mainly by the iliofemoral and pubofemoral ligaments.",
   "Loss of the seal is right, but the labrum contains free nerve endings, Ruffini endings, Pacinian corpuscles, and Golgi-like organs. It provides nociception and proprioception."
  ],
  "answer": 0,
  "explanation": "The labrum is wedge-shaped fibrocartilage that increases depth and concavity, increases articular contact and stability, and maintains fluid pressure and negative intra-articular pressure. It is innervated, so tears hurt and impair proprioception. Anterosuperior tears are most common because that is where the head is exposed in neutral and where FAI contact happens."
 },
 {
  "id": 6,
  "joint": "Hip",
  "topic": "Articular congruence",
  "stem": "In standing, part of the femoral head is not covered by the acetabulum. Which region is uncovered, and which hip position MAXIMIZES articular contact?",
  "options": [
   "The posteroinferior head is exposed; flexion, abduction, and ER maximize contact",
   "The anterosuperior head is exposed; flexion, adduction, and IR maximize contact",
   "The anterosuperior head is exposed; extension, abduction, and IR maximize contact",
   "The anterosuperior head is exposed; flexion, abduction, and ER maximize contact"
  ],
  "rationale": [
   "The position is right, but the exposed region in neutral is anterosuperior.",
   "The exposed region is right, but flexion/adduction/IR is the impingement and injury-risk position, not the most congruent one.",
   "The exposed region is right, but extension/abduction/IR is the close-packed position, defined by maximal ligament tension, not maximal articular contact.",
   "Correct. The head faces medial, superior, and anterior while the socket faces lateral, inferior, and anterior, so the anterosuperior head is uncovered in neutral. Flexion, abduction, and ER bring it into the socket. This is near the open-packed position of maximal congruence."
  ],
  "answer": 3,
  "explanation": "This is the classic hip paradox: the close-packed position (extension, abduction, IR) is the most ligamentously stable, while the most congruent position (about 30° flexion, 30° abduction, slight ER) is the loose-packed one. Contact area increases with flexion, abduction, and ER."
 },
 {
  "id": 7,
  "joint": "Hip",
  "topic": "Angle of inclination",
  "stem": "A 9-year-old with a neuromuscular condition has a femoral neck-shaft angle of 148°. Which biomechanical effect is MOST expected compared with a normal angle?",
  "options": [
   "Coxa valga; a longer hip abductor moment arm that lowers joint compressive force",
   "Coxa vara; increased joint compressive force and a reduced abductor moment arm",
   "Coxa valga; a shorter hip abductor moment arm requires more abductor force, increasing joint compressive force and lowering stability",
   "Increased joint compressive force; increased bending stress across the femoral neck with greater articular stability"
  ],
  "rationale": [
   "Coxa valga is right, but a more vertical neck shortens the abductor moment arm and raises compression.",
   "These effects are those of a valgus hip, but 148° is valga. Coxa vara is 115° or less.",
   "Correct. At 140° or more the hip is in coxa valga. The greater trochanter moves closer to the head, which shortens the abductor lever, so more muscle force (and higher joint compression) is needed, and the head is less contained.",
   "Increased compression is right, but more bending stress on the neck and more stability are features of coxa vara."
  ],
  "answer": 2,
  "explanation": "Normal inclination is about 125° (110–144°), and it falls from 150–160° at birth. Coxa valga (≥140°) increases joint compression, shortens the abductor moment arm, and reduces stability. Coxa vara (≤115°) decreases compression, increases bending stress on the head and neck, increases articular contact and stability, and lengthens the abductor moment arm."
 },
 {
  "id": 8,
  "joint": "Hip",
  "topic": "Angle of inclination",
  "stem": "After a slipped capital femoral epiphysis, a 14-year-old is left with a femoral neck-shaft angle of 108°. Which combination of mechanical consequences is MOST accurate?",
  "options": [
   "Coxa vara; increased bending stress across the femoral neck and decreased joint compressive force",
   "Decreased joint compressive force; a shortened hip abductor moment arm from the trochanter position",
   "Coxa vara; increased hip joint compressive force and decreased articular contact and stability",
   "Increased bending stress across the femoral neck; the alignment is classified as coxa valga"
  ],
  "rationale": [
   "Correct. A more horizontal neck has a longer lever arm for body weight, which increases bending (tension superiorly, compression inferiorly). Joint compressive force is reduced, and articular contact and stability increase.",
   "Less compression is right, but a varus neck moves the greater trochanter away from the head, which lengthens the abductor moment arm.",
   "Coxa vara is right, but more compression and less stability describe coxa valga.",
   "More bending stress is right, but 108° is below 115°, which is coxa vara."
  ],
  "answer": 0,
  "explanation": "Coxa vara is a trade-off. Greater abductor leverage and more containment come at the cost of higher bending and shear stress on the femoral neck, a functionally shorter limb, and possible abductor insufficiency because the muscle works at a shortened length."
 },
 {
  "id": 9,
  "joint": "Hip",
  "topic": "Femoral torsion",
  "stem": "A 10-year-old walks with in-toeing. On Craig's test the greater trochanter is most prominent at 35° of hip IR. Which conclusion is MOST accurate?",
  "options": [
   "Femoral anteversion; increased IR and decreased ER, with in-toeing used to keep the femoral head centered in the acetabulum",
   "Increased IR and decreased ER; this torsion is mainly associated with hip impingement rather than instability",
   "Femoral retroversion; in-toeing compensates to center the femoral head",
   "Femoral anteversion; decreased IR and increased ER"
  ],
  "rationale": [
   "Correct. Craig's test estimates torsion; 35° is well above normal (about 10–20°, with anteversion above 25°). Anteversion gives more IR and less ER, and in-toeing (IR) is the compensation.",
   "The ROM is right, but in the course material anteversion is linked to hip instability and retroversion to impingement.",
   "In-toeing as a centering strategy is right, but the measured angle is increased torsion (anteversion). Retroversion is below 8° and is compensated with ER (toe-out).",
   "Anteversion is right, but the ROM is reversed. Anteversion increases IR."
  ],
  "answer": 0,
  "explanation": "Normal torsion is about 10–20° (15° in males, 18° in females), down from 30–40° at birth. Anteversion (above 25°) means more IR, less ER, links to instability, and is compensated with IR. Retroversion (below 8°) means less IR, more ER, links to impingement, and is compensated with ER."
 },
 {
  "id": 10,
  "joint": "Hip",
  "topic": "Femoral torsion",
  "stem": "A 35-year-old runner has a femoral torsion angle of 4°, walks with a toe-out gait, and has groin pain with FADIR. Which description BEST fits?",
  "options": [
   "Femoral retroversion; associated more with hip instability than with impingement, compensated with ER",
   "Femoral retroversion; decreased IR and increased ER, linked to impingement and compensated with ER",
   "Decreased IR and increased ER with toe-out compensation; the alignment is femoral anteversion",
   "Toe-out gait as the compensation for this torsion, which shows increased IR and decreased ER"
  ],
  "rationale": [
   "Retroversion is right, but it is linked to impingement. Anteversion is the alignment linked to instability.",
   "Correct. Below 8° is retroversion. The head-neck points relatively posteriorly, so IR (and FADIR) produces early bony contact. Toe-out (ER) is the compensation.",
   "The ROM is right, but a 4° torsion angle is retroversion. Anteversion increases IR.",
   "Toe-out as the compensation is right, but retroversion decreases IR and increases ER."
  ],
  "answer": 1,
  "explanation": "Femoral torsion is measured in the transverse plane between the head-neck axis and the distal condylar axis. A retroverted femur loses IR, gains ER, and often stands toe-out. The early anterior head-neck contact in IR is why retroversion is grouped with FAI."
 },
 {
  "id": 11,
  "joint": "Hip",
  "topic": "Hip joint reaction force",
  "stem": "A patient with right hip OA wants to reduce right hip joint load during gait. Which recommendation and rationale are MOST accurate?",
  "options": [
   "Cane in the left hand; it reduces joint load mainly by shortening the right hip abductor moment arm",
   "Cane in the left hand; its force acts on a long moment arm about the right hip, replacing abductor force",
   "Cane in the right hand; it reduces joint load by substituting for right hip abductor force in stance",
   "Cane in the right hand, combined with a lateral trunk lean toward the right during right stance"
  ],
  "rationale": [
   "The hand is right, but the abductor moment arm is anatomical and does not change. The cane works by adding a counter-torque, which reduces the abductor force needed.",
   "Correct. During right stance, gravity creates an adduction (pelvic drop) torque about the right hip. A left-hand cane counteracts it with a long lever, so the right abductors, and therefore the joint reaction force, can drop considerably.",
   "The mechanism is right, but a right-hand cane sits close to the right hip axis. Its moment arm is too short to meaningfully replace abductor torque.",
   "A trunk lean toward the stance side does reduce abductor demand (it shortens the gravity moment arm), but the cane belongs in the contralateral (left) hand."
  ],
  "answer": 1,
  "explanation": "In single-limb stance, hip joint reaction force is mostly abductor muscle force, because the abductors work on a short lever (about half the length of body weight's lever). Anything that lowers the external adduction torque (a contralateral cane, an ipsilateral trunk lean, or weight loss) lowers joint load disproportionately."
 },
 {
  "id": 12,
  "joint": "Hip",
  "topic": "Hip joint reaction force",
  "stem": "The same patient with right hip OA must carry a 10-lb grocery bag across a parking lot. Which advice is BEST?",
  "options": [
   "Left hand; a contralateral load increases the external adduction moment about the right hip in stance",
   "Right hand, because a load held on the same side lengthens the right hip abductor moment arm",
   "Right hand; a left-sided load increases the adduction torque the right abductors must resist in stance",
   "Either hand, because the added mass rather than where it is carried is what raises hip joint load"
  ],
  "rationale": [
   "The physics is right, which is exactly why the left hand is the wrong choice. More external adduction torque means more abductor force and joint load.",
   "The hand is right, but the abductor moment arm does not change. What changes is the external torque created by the load's position.",
   "Correct. A left-sided load sits far from the right hip axis and increases the external adduction torque during right stance. A right-sided load sits near or lateral to the right hip and adds little torque.",
   "Added mass does raise joint load, but location matters a great deal because torque = force × moment arm."
  ],
  "answer": 2,
  "explanation": "This is the counterpart to the cane rule: cane opposite the painful hip, load on the same side as the painful hip. Both minimize the external adduction torque about the stance hip that the abductors must balance."
 },
 {
  "id": 13,
  "joint": "Hip",
  "topic": "Femoroacetabular impingement",
  "stem": "A 28-year-old male hockey player has an alpha angle of 76° and a CEA of 30°. Which interpretation is MOST accurate?",
  "options": [
   "Cam-type FAI; the aspherical head-neck junction jams into the anterosuperior acetabulum during flexion with IR",
   "The alpha angle is above the normal 45–60° range; impingement is provoked mainly by hip extension with ER",
   "Pincer-type FAI; contact occurs during flexion with IR",
   "Cam-type FAI; excess acetabular coverage produces rim contact"
  ],
  "rationale": [
   "Correct. An alpha angle above the normal 45–60° (around 75° in FAI) is a cam deformity. With a normal CEA, the femoral side is the problem.",
   "The alpha angle reading is right, but FAI is provoked by flexion, adduction, and IR. Extension with ER provokes anterior instability.",
   "The provoking motion is right, but pincer FAI needs acetabular over-coverage. This hip has normal coverage and a cam deformity.",
   "Cam FAI is right, but rim over-coverage is the pincer mechanism, and a CEA of 30° is normal coverage."
  ],
  "answer": 0,
  "explanation": "The alpha angle is formed by the head-neck axis and a line from the head center to where the head first exceeds its radius (where it stops being spherical). A high alpha angle means a bump at the head-neck junction (cam). The CEA describes the acetabulum (pincer). The two can coexist as combined FAI."
 },
 {
  "id": 14,
  "joint": "Hip",
  "topic": "Hip ligaments",
  "stem": "A patient with complete T12 paraplegia stands in bilateral KAFOs by leaning the trunk backward and 'hanging' on the front of the hips. Which structure and mechanism PRIMARILY allow this posture?",
  "options": [
   "Iliofemoral ligament; the line of gravity falls in front of the hips and the ligament resists flexion torque",
   "Ischiofemoral ligament; the line of gravity falls behind the hips, creating an extension torque at each hip",
   "Iliofemoral ligament; the line of gravity falls behind the hips and ligament tension resists extension torque",
   "Pubofemoral ligament, because its sling under the femoral neck resists hip extension, abduction, and ER"
  ],
  "rationale": [
   "The ligament is right, but an anterior line of gravity would create flexion torque, which the anterior ligaments cannot resist. The patient leans back on purpose to create extension torque.",
   "The torque direction is right, but the ischiofemoral ligament is posterior. The structure loaded here is the thick anterior iliofemoral ligament.",
   "Correct. With the line of gravity behind the hips, gravity pushes the hips into extension. The thick Y ligament of Bigelow (AIIS to the intertrochanteric line) becomes taut and balances that torque without muscle activity.",
   "The pubofemoral ligament does resist extension, but it is a thinner inferior sling. The iliofemoral ligament is the dominant anterior restraint used in this posture."
  ],
  "answer": 2,
  "explanation": "All three capsular ligaments tighten in extension. The iliofemoral ligament resists extension, adduction, and ER. The pubofemoral resists extension, abduction, and ER. The ischiofemoral resists extension, abduction, and IR. The iliofemoral is the thickest, which is why 'hanging on the Y ligaments' works for standing in paraplegia."
 },
 {
  "id": 15,
  "joint": "Hip",
  "topic": "Hip ligaments",
  "stem": "A PT wants to place the GREATEST selective tension on the ischiofemoral ligament. Which hip position accomplishes this?",
  "options": [
   "Extension, abduction, and ER",
   "Extension, abduction, and IR",
   "Extension, adduction, and ER",
   "Flexion, abduction, and ER"
  ],
  "rationale": [
   "Extension and abduction are right, but adding ER targets the pubofemoral ligament (extension, abduction, ER).",
   "Correct. The ischiofemoral ligament spirals from the posterior acetabular rim around the neck to the greater trochanter. It resists extension, abduction, and IR.",
   "Extension is right, but adduction with ER targets the iliofemoral ligament.",
   "Abduction is right, but flexion slackens the capsular ligaments, and ER unwinds the ischiofemoral ligament."
  ],
  "answer": 1,
  "explanation": "Learn each ligament by the three motions it resists. All three share extension. Iliofemoral: extension, adduction, ER. Pubofemoral: extension, abduction, ER. Ischiofemoral: extension, abduction, IR. The ischiofemoral is the only one that resists IR."
 },
 {
  "id": 16,
  "joint": "Hip",
  "topic": "Packed positions",
  "stem": "A patient with acute hip synovitis and effusion holds the painful hip in a characteristic resting position. Which position is the patient MOST likely to adopt, and why?",
  "options": [
   "Extension with slight ER, because the hip capsular ligaments are lax in extension",
   "About 30° flexion, 30° abduction, slight ER, because this is the hip's close-packed position",
   "About 30° flexion, 30° abduction, slight ER; the open-packed position with lax ligaments",
   "Extension, abduction, and IR, because this position gives the hip its greatest joint congruence"
  ],
  "rationale": [
   "Slight ER is part of the resting position, but every capsular ligament tightens in extension.",
   "The position is right, but it is the open-packed position. The close-packed position is extension, abduction, and IR.",
   "Correct. The loose-packed position slackens the capsule and ligaments, giving the most intracapsular space for fluid and the least pain.",
   "Abduction is part of the resting position, but extension/abduction/IR is close-packed (ligaments taut, capsule tight), which would increase intracapsular pressure."
  ],
  "answer": 2,
  "explanation": "Hip close-packed position: extension, abduction, IR (ligaments taut, minimal motion). Open-packed: about 30° flexion, 30° abduction, slight ER (ligaments lax, maximal motion, maximal congruence). Effused joints sit in the open-packed position."
 },
 {
  "id": 17,
  "joint": "Hip",
  "topic": "Capsular pattern & arthrokinematics",
  "stem": "A 68-year-old with hip OA has the following passive ROM: IR 10°, flexion 95°, abduction 30°, extension 10°. Which interpretation and initial mobilization are MOST appropriate?",
  "options": [
   "Capsular pattern; a posterior glide of the femoral head to address the IR (and flexion) restriction",
   "Capsular pattern ordered flexion > IR > abduction; an inferior glide to improve flexion and abduction",
   "Capsular pattern; an anterior glide of the femoral head to address the IR restriction",
   "Noncapsular pattern; a posterior glide to address the IR restriction"
  ],
  "rationale": [
   "Correct. IR is the most limited (about 70% loss), followed by flexion, then abduction, then extension (IR > flexion > abduction > extension). For the convex head on the concave acetabulum, IR needs a posterior glide.",
   "An inferior (caudal) glide is a valid technique for flexion and abduction, but the hip capsular pattern starts with IR, not flexion.",
   "The capsular pattern is right, but an anterior glide is used for ER and extension. IR needs a posterior glide.",
   "The glide is right, but this proportional loss (IR > flexion > abduction > extension) is the hip capsular pattern."
  ],
  "answer": 0,
  "explanation": "Hip capsular pattern: IR > flexion > abduction > extension. In femur-on-pelvis motion the convex head rolls and slides in opposite directions. IR (anterior roll) needs a posterior slide, ER and extension need an anterior slide, and abduction needs an inferior slide."
 },
 {
  "id": 18,
  "joint": "Hip",
  "topic": "Ligamentum teres",
  "stem": "A 22-year-old has painful catching deep in the hip during full-depth squats combined with trunk rotation. Arthroscopy finds a lax, frayed ligamentum teres. Which statement about this structure is MOST accurate?",
  "options": [
   "It is intra-articular but extrasynovial and stabilizes against IR and ER beyond 90° of hip flexion",
   "It stabilizes against IR and ER beyond 90° of hip flexion and is both intra-articular and intrasynovial",
   "It is intra-articular but extrasynovial and acts as the primary restraint to hip hyperextension",
   "It carries a small artery to the femoral head and attaches to the inner surface of the greater trochanter"
  ],
  "rationale": [
   "Correct. The ligamentum teres runs from the acetabular notch near the transverse acetabular ligament to the fovea, wrapped in synovial membrane. It acts as a rotational stabilizer in deep flexion.",
   "The function is right, but it is enclosed in a synovial membrane, which makes it extrasynovial.",
   "Extrasynovial is right, but extension is resisted by the capsular ligaments, mainly the iliofemoral.",
   "Carrying a small vessel to the head is right, but it attaches to the fovea capitis, the only part of the head without hyaline cartilage."
  ],
  "answer": 0,
  "explanation": "The ligamentum teres is intra-articular but extrasynovial, runs from the acetabular notch to the fovea, carries a vessel to the femoral head, and resists IR and ER above 90° of flexion. When it is lax or torn it can produce painful clicking or catching, often in deep-flexion rotational sports."
 },
 {
  "id": 19,
  "joint": "Hip",
  "topic": "Pelvis-on-femur (frontal plane)",
  "stem": "During right single-limb stance, the left side of the patient's pelvis drops. Which statement BEST describes the weakness and the hip motions involved?",
  "options": [
   "Left hip relative abduction caused by weakness of the left hip abductors",
   "Weak right hip abductors; right hip adduction and left hip relative abduction",
   "Weak right hip abductors; the right weight-bearing hip moves into abduction",
   "Weak left hip abductors; the right weight-bearing hip moves into adduction"
  ],
  "rationale": [
   "Left hip relative abduction is right, but the drop comes from the stance (right) side abductors.",
   "Correct. A contralateral pelvic drop is a positive Trendelenburg sign on the stance side. The pelvis moves on the fixed right femur into right hip adduction, and the left femur hangs in relative abduction.",
   "Weak right abductors is right, but a left pelvic drop over a fixed right femur is right hip adduction.",
   "Right hip adduction is right, but the stance-side abductors hold the pelvis level. Weakness is on the right."
  ],
  "answer": 1,
  "explanation": "In pelvis-on-femur motion, a pelvic drop is adduction of the weight-bearing hip and abduction of the non-weight-bearing hip. A pelvic hike is the reverse: abduction of the weight-bearing hip and adduction of the non-weight-bearing hip. The Trendelenburg sign points to the stance-side gluteus medius and minimus."
 },
 {
  "id": 20,
  "joint": "Hip",
  "topic": "Hip joint reaction force",
  "stem": "A patient with right gluteus medius weakness leans the trunk toward the RIGHT during right stance. How does this compensation change hip mechanics?",
  "options": [
   "It moves the center of mass toward the right hip, reducing abductor force and joint reaction force",
   "It reduces abductor demand by moving the center of mass away from the right hip joint axis",
   "It moves the center of mass toward the right hip, which lengthens the right hip abductor moment arm",
   "It reduces hip joint reaction force, and this pattern is called an uncompensated Trendelenburg gait"
  ],
  "rationale": [
   "Correct. This is a compensated Trendelenburg gait. Shifting the center of mass over the stance hip reduces the external adduction torque, so weak abductors can keep the pelvis level and the joint is less compressed.",
   "Reduced abductor demand is right, but the lean moves the center of mass toward the stance hip, not away.",
   "Moving the center of mass toward the hip is right, but the abductor moment arm is anatomical and does not change. Gravity's moment arm is what shortens.",
   "The reduced joint force is right, but a trunk lean toward the stance side is the compensated Trendelenburg. Uncompensated means the pelvis visibly drops."
  ],
  "answer": 0,
  "explanation": "Gluteus medius lurch (compensated Trendelenburg): the trunk leans over the weak stance hip. Uncompensated Trendelenburg: the contralateral pelvis drops. Both point to stance-side abductor weakness, and the lean also protects a painful arthritic hip by lowering joint load."
 },
 {
  "id": 21,
  "joint": "Hip",
  "topic": "Pelvis-on-femur (sagittal plane)",
  "stem": "A standing patient with a short iliopsoas shows an increased anterior pelvic tilt. Which description of this motion is MOST accurate?",
  "options": [
   "The concave acetabulum moving on a fixed convex femur, producing bilateral hip extension",
   "Bilateral hip flexion (pelvis-on-femur) coupled with increased lumbar flexion",
   "Bilateral hip flexion (pelvis-on-femur) coupled with increased lumbar extension",
   "Bilateral hip extension (pelvis-on-femur) coupled with increased lumbar extension"
  ],
  "rationale": [
   "The arthrokinematic description is right, but anterior tilt produces hip flexion.",
   "Hip flexion is right, but anterior pelvic tilt usually couples with lumbar extension. Posterior tilt couples with lumbar flexion.",
   "Correct. Anterior tilt rotates the pelvis forward on the femurs about an M-L axis, which is hip flexion. It is usually coupled with lumbar extension (increased lordosis).",
   "Lumbar extension is right, but anterior tilt is hip flexion. Posterior tilt is hip extension."
  ],
  "answer": 2,
  "explanation": "In pelvis-on-femur motion the concave acetabulum moves on the convex head. Anterior tilt is hip flexion and often comes with lumbar extension. Posterior tilt is hip extension and often comes with lumbar flexion. A tight hip flexor pulls the pelvis into anterior tilt and increases lordosis."
 },
 {
  "id": 22,
  "joint": "Hip",
  "topic": "Pelvis-on-femur (frontal plane)",
  "stem": "In bilateral stance, a patient performs a RIGHT lateral pelvic shift. Which set of hip motions occurs?",
  "options": [
   "Right hip abduction and left hip adduction; the left side of the pelvis drops",
   "Right hip adduction and left hip adduction; the right side of the pelvis drops",
   "Right hip adduction and left hip abduction; the left side of the pelvis drops",
   "Left hip abduction and right hip abduction; the right side of the pelvis drops"
  ],
  "rationale": [
   "The left side dropping is right, but the hip on the side you shift toward (right) adducts and the left hip abducts.",
   "Right hip adduction is right, but the left hip abducts and it is the left side of the pelvis that drops.",
   "Correct. In a right lateral shift the pelvis translates right, the left side drops, the right hip adducts, and the left hip abducts. It often comes with lumbar lateral flexion.",
   "Left hip abduction is right, but the right hip adducts and the left side of the pelvis drops."
  ],
  "answer": 2,
  "explanation": "A lateral shift in bilateral stance moves both hips at once. The hip you shift toward adducts, the opposite hip abducts, and the side away from the shift drops."
 },
 {
  "id": 23,
  "joint": "Hip",
  "topic": "Pelvis-on-femur (transverse plane)",
  "stem": "Standing on the right leg, a patient rotates the pelvis so the LEFT ASIS moves anteriorly (forward rotation). Which hip motion occurs at the stance hip, and in which alignment would this motion be MOST restricted?",
  "options": [
   "Backward pelvic rotation producing right hip IR",
   "Right hip ER; the vertical axis passes through the stance limb",
   "Right hip IR; most restricted in a patient with femoral anteversion",
   "Right hip IR; most restricted in a patient with femoral retroversion"
  ],
  "rationale": [
   "IR of the right hip is right, but moving the swing-side ASIS forward is called forward rotation. Backward rotation produces ER of the stance hip.",
   "The axis location is right, but forward rotation of the opposite side of the pelvis is IR of the stance hip.",
   "Right hip IR is right, but anteversion increases IR. Retroversion would block it.",
   "Correct. Forward rotation of the pelvis in single-limb stance is IR of the weight-bearing hip (the axis passes through the stance limb). Retroversion reduces available IR."
  ],
  "answer": 3,
  "explanation": "In the transverse plane, the axis of pelvic rotation sits at the midpoint of the pelvis in bilateral stance and through the stance limb in single-limb stance. Forward rotation is IR of the weight-bearing hip, and backward rotation is ER. This is how pelvic rotation during gait and pivoting draws on hip rotation ROM."
 },
 {
  "id": 24,
  "joint": "Hip",
  "topic": "Lumbopelvic rhythm",
  "stem": "A patient with markedly short hamstrings bends forward to touch the toes with the knees straight. How is the lumbopelvic rhythm MOST likely altered?",
  "options": [
   "Anterior pelvic tilt (hip flexion) is reduced, so more lumbar flexion is needed to reach the same distance",
   "Anterior pelvic tilt is reduced, with a compensatory decrease in lumbar flexion",
   "Lumbar flexion increases because anterior pelvic tilt increases",
   "Pelvis-on-femur hip flexion is restricted, and the iliofemoral ligament is the primary limiting structure"
  ],
  "rationale": [
   "Correct. Tight hamstrings anchor the ischial tuberosities and limit pelvis-on-femur hip flexion. The lumbar spine flexes more to make up the difference, increasing load on posterior lumbar tissues.",
   "Reduced anterior tilt is right, but the lumbar spine has to flex more, not less, to reach.",
   "Increased lumbar flexion is right, but tight hamstrings decrease anterior tilt.",
   "Restricted hip flexion is right, but the iliofemoral ligament limits extension. The hamstrings are the limiter here."
  ],
  "answer": 0,
  "explanation": "Lumbopelvic rhythm is the coordinated motion of the lumbar spine, pelvis, and femurs. In forward bending, a restriction at one segment (hamstrings limiting anterior tilt) shifts the demand to the next segment (lumbar flexion). The hip and the low back are a shared system."
 },
 {
  "id": 25,
  "joint": "Hip",
  "topic": "Wolff's law & trabecular loading",
  "stem": "A female distance runner has an MRI-confirmed stress fracture on the SUPERIOR cortex of the femoral neck. Why is this location managed more aggressively than an inferior-cortex stress fracture?",
  "options": [
   "Tension side of the bending load; she can usually keep running at reduced mileage while it heals",
   "The inferior neck is loaded in compression, so superior-side fractures are stable with activity changes",
   "Tension side of the bending load; these fractures can propagate, so strict NWB and urgent referral are needed",
   "Compression side of the bending load; compression-side fractures tend to displace and need strict NWB"
  ],
  "rationale": [
   "The tension side is right, but tension-side femoral neck stress fractures are high-risk injuries that need protected weight bearing and surgical consultation.",
   "Inferior-neck compression is right, but that is exactly why superior (tension-side) fractures are unstable.",
   "Correct. Body weight bends the neck, putting tension on the superior cortex and compression on the inferior cortex. Tension-side fractures open up under load and can displace and compromise the femoral head's blood supply.",
   "Displacement risk is right, but the superior neck is the tension (bending) side. Compression-side fractures tend to impact and stabilize."
  ],
  "answer": 2,
  "explanation": "By Wolff's law, trabeculae form along lines of stress. In the femoral neck the superior side is in bending (tension) and the inferior side is in compression. In the shaft, the lateral side is in tension and the medial side is in compression. Bone fails earlier in tension than in compression, which is why tension-side stress fractures are dangerous."
 },
 {
  "id": 26,
  "joint": "Hip",
  "topic": "Stability & injury position",
  "stem": "A front-seat passenger strikes the dashboard with the knee while the hip is flexed and adducted. Which injury is MOST likely, and which statement about hip stability explains it?",
  "options": [
   "Posterior hip dislocation; in flexion and adduction the head is driven toward the thin posteroinferior capsule",
   "Posterior hip dislocation, because flexion, adduction, and IR form the hip's close-packed position",
   "Posterior hip dislocation, because the capsule is thickest posteroinferiorly",
   "Anterior hip dislocation; flexion with adduction is the least stable position"
  ],
  "rationale": [
   "Correct. The capsule is thick anterosuperiorly and thin posteroinferiorly, and flexion with adduction is the position of greatest injury risk. A force along the femoral shaft drives the head out the back.",
   "Posterior dislocation is right, but the close-packed position is extension, abduction, and IR. Flexion with adduction is loose and vulnerable.",
   "Posterior dislocation is right, but the posteroinferior capsule is the thin part. That is why the head escapes there.",
   "Flexion with adduction as the least stable position is right, but in that position the head is driven posteriorly. Anterior dislocations happen in extension, abduction, and ER."
  ],
  "answer": 0,
  "explanation": "The hip is at greatest injury risk in flexion and adduction. The same reasoning is behind posterior-approach THA precautions: avoid flexion beyond 90°, adduction past midline, and IR, which together point the head toward the weak posterior capsule."
 },
 {
  "id": 27,
  "joint": "Hip",
  "topic": "Femur-on-pelvis arthrokinematics",
  "stem": "A patient has 0° of hip extension and walks with a shortened stride. Which joint mobilization and rationale are MOST appropriate to improve extension?",
  "options": [
   "Anterior glide of the femoral head; convex-on-concave roll and slide occur in opposite directions",
   "Anterior glide of the femoral head; the convex head rolls and slides in the same direction",
   "Anterior glide of the femoral head, performed in the close-packed position to maximize capsular stretch",
   "Posterior glide of the femoral head, applying the convex-on-concave rule with roll and slide opposite"
  ],
  "rationale": [
   "Correct. Extension needs an anterior glide of the head, and the anterior capsule (iliofemoral and pubofemoral ligaments) is what restricts extension.",
   "The anterior glide is right, but the convex femur rolls and slides in opposite directions.",
   "The anterior glide is right, but mobilization is not started in the close-packed position, where the joint surfaces are locked and the capsule is maximally taut.",
   "Convex-on-concave is the right rule, but a posterior glide improves flexion and IR. Extension needs an anterior glide."
  ],
  "answer": 0,
  "explanation": "Femur on pelvis: the convex head moves on a concave socket, so roll and slide go in opposite directions. In the sagittal plane, flexion and extension are mostly a spin of the head (posterior spin for flexion, anterior spin for extension), but clinically an anterior glide is used to stretch the anterior capsule for extension."
 },
 {
  "id": 28,
  "joint": "Hip",
  "topic": "Muscle line of action",
  "stem": "A patient can flex the hip well beyond 90°. To stretch the right piriformis in this deep-flexion range, which position is MOST effective, and why?",
  "options": [
   "Flexion beyond 90°, adduction, and IR, because above 90° the piriformis acts mainly as a hip flexor",
   "Flexion beyond 90°, abduction, and ER, because the piriformis becomes an internal rotator in deep flexion",
   "Flexion beyond 90°, adduction, and IR, because the piriformis is an external rotator at every hip angle",
   "Flexion beyond 90°, adduction, and ER; in deep flexion the piriformis acts as an internal rotator"
  ],
  "rationale": [
   "Flexion with adduction is right, but the piriformis does not become a flexor. Its rotary action becomes IR.",
   "The reasoning and ER are right, but in deep flexion the piriformis horizontally abducts, so adduction, not abduction, lengthens it.",
   "Flexion with adduction is right, but the piriformis's rotary action reverses in deep flexion, so IR no longer lengthens it.",
   "Correct. Above roughly 60–90° of flexion the piriformis line of action moves to the other side of the longitudinal axis, so it becomes an IR (and horizontal abductor). ER plus adduction then lengthens it."
  ],
  "answer": 3,
  "explanation": "There are no primary hip internal rotators. A muscle's action depends on where its line of pull sits relative to the joint axis at that position. Flexion moves many hip muscles relative to the longitudinal axis, so the piriformis switches from ER to IR in deep flexion."
 },
 {
  "id": 29,
  "joint": "Hip",
  "topic": "Muscle line of action",
  "stem": "The hip has no primary internal rotators. Which statement BEST describes how hip IR torque is produced?",
  "options": [
   "Secondary rotators such as the anterior gluteus medius and minimus and the TFL; their IR leverage increases as the hip flexes",
   "Secondary rotators such as the anterior gluteus medius and minimus and the TFL; their IR leverage is greatest in full extension",
   "The TFL acting as the hip's primary internal rotator",
   "The gluteus maximus and quadratus femoris, whose IR leverage increases with hip flexion"
  ],
  "rationale": [
   "Correct. As the hip flexes, many muscle lines of action move anterior to the longitudinal axis, which increases IR moment arms. That is why IR torque is greater in flexion than in extension.",
   "The muscles are right, but their IR moment arms increase with flexion, not extension.",
   "The TFL does contribute to IR, but it is a secondary internal rotator. No muscle is a primary hip internal rotator.",
   "IR leverage increasing with flexion is right, but these two are external rotators."
  ],
  "answer": 0,
  "explanation": "Hip IR comes from secondary actions (anterior gluteus medius and minimus, TFL, some adductors, and the piriformis in deep flexion), and IR leverage grows with flexion. This matters when testing IR strength in sitting versus prone."
 },
 {
  "id": 30,
  "joint": "Hip",
  "topic": "Femoral development",
  "stem": "A parent is worried about a 3-year-old's in-toeing. Clinical estimation suggests about 30° of femoral anteversion. Which explanation is MOST accurate?",
  "options": [
   "Normal development; the femoral neck-shaft angle also normally increases from birth to adulthood",
   "Abnormal for age, since femoral anteversion normally decreases steadily from birth to adulthood",
   "Normal development; anteversion is about 30–40° at birth and decreases to about 15° in adults",
   "Normal development; anteversion is about 10–20° at birth and gradually increases toward adulthood"
  ],
  "rationale": [
   "Normal for age is right, but the angle of inclination decreases with age (about 150–160° at birth to about 125° in adults).",
   "The developmental decrease is right, but 30° at age 3 is within expected values.",
   "Correct. Femoral anteversion normally decreases through childhood, so persistent in-toeing at this age is usually monitored.",
   "Normal for age is right, but anteversion decreases with age. It starts at about 30–40° and reaches about 10–20° in adults."
  ],
  "answer": 2,
  "explanation": "Both femoral angles decrease with growth. Inclination goes from about 150–160° at birth to about 125° in adults, and torsion goes from about 30–40° at birth to about 10–20° in adults. Persistent anteversion leads to more IR, less ER, and in-toeing."
 },
 {
  "id": 31,
  "joint": "Hip",
  "topic": "Blood supply",
  "stem": "An 80-year-old sustains a displaced intracapsular femoral neck fracture. Why is the risk of avascular necrosis high?",
  "options": [
   "The circumflex branches are torn, but the artery of the ligamentum teres can fully perfuse the femoral head",
   "Circumflex artery branches running along the intracapsular neck are torn; the foveal artery adds little",
   "The superior and inferior gluteal arteries supply the femoral head directly through the intracapsular neck",
   "The head and neck are intracapsular, so intertrochanteric fractures carry the same avascular necrosis risk"
  ],
  "rationale": [
   "Disruption of the circumflex branches is right, but the artery of the ligamentum teres is a minor contributor in adults.",
   "Correct. The head and neck get most of their blood from medial and lateral circumflex branches that climb the neck inside the capsule. A displaced neck fracture tears them, and the small foveal artery cannot make up for it.",
   "The head and neck being intracapsular is right, but the gluteal arteries supply the proximal and posterior capsule, not the femoral head directly.",
   "The head and neck being intracapsular is right, but the trochanters are extracapsular. Intertrochanteric fractures spare the retinacular vessels and rarely cause AVN."
  ],
  "answer": 1,
  "explanation": "The femoral head and neck are intracapsular, while the greater and lesser trochanters are extracapsular. The head and neck are supplied mainly by the medial and lateral circumflex femoral arteries, with a small contribution through the ligamentum teres. Fracture location therefore predicts AVN risk."
 },
 {
  "id": 32,
  "joint": "Hip",
  "topic": "Pelvis-on-femur (frontal plane)",
  "stem": "A patient with a locked knee brace hikes the LEFT side of the pelvis to clear the left foot while standing on the right leg. Which hip motions occur?",
  "options": [
   "Left hip adduction, driven by the right hip adductors",
   "Right hip adduction and left hip adduction",
   "Right hip abduction and left hip adduction",
   "Right hip abduction and left hip abduction"
  ],
  "rationale": [
   "Left hip adduction is right, but the hike is driven by the stance-side abductors (pelvis-on-femur abduction) and the swing-side quadratus lumborum.",
   "Left hip adduction is right, but the stance hip abducts during a hike. Stance hip adduction belongs to a pelvic drop.",
   "Correct. In a pelvic hike, the weight-bearing hip abducts (pelvis on femur) and the non-weight-bearing hip adducts. The right abductors and left quadratus lumborum help raise the pelvis.",
   "Right hip abduction is right, but the elevated swing side adducts relative to its femur."
  ],
  "answer": 2,
  "explanation": "Pelvic hike: weight-bearing hip abduction and non-weight-bearing hip adduction. Pelvic drop: weight-bearing hip adduction and non-weight-bearing hip abduction. Hip hiking is a common swing-phase compensation for a long or stiff limb."
 },
 {
  "id": 33,
  "joint": "Hip",
  "topic": "Combined version & instability",
  "stem": "A 19-year-old gymnast reports anterior hip apprehension in end-range hip extension with ER (for example, a walkover). Which combination of osseous alignment would MOST predispose to this?",
  "options": [
   "Excessive femoral anteversion combined with acetabular retroversion",
   "Excessive femoral and acetabular anteversion, with symptoms provoked mainly in flexion, adduction, and IR",
   "Femoral retroversion combined with acetabular retroversion",
   "Excessive femoral anteversion combined with excessive acetabular anteversion"
  ],
  "rationale": [
   "Femoral anteversion does increase anterior exposure, but a retroverted acetabulum over-covers the anterior head and partly offsets it.",
   "The combination is right, but flexion/adduction/IR is the impingement position. Anterior instability is provoked by extension with ER.",
   "This combination does affect hip rotation (less IR, more ER), but retroversion increases anterior coverage and leads to impingement rather than anterior instability.",
   "Correct. Both rotations point the anterior femoral head out of the socket. Extension with ER levers the head further anterior against the anterior capsule and labrum, causing anterior instability."
  ],
  "answer": 3,
  "explanation": "Anteversion on either side exposes the anterior femoral head and is associated with instability. Retroversion on either side over-covers the anterior head and is associated with impingement. The combined (total) version of the femur and acetabulum determines net anterior coverage."
 },
 {
  "id": 34,
  "joint": "Knee",
  "topic": "Screw-home mechanism",
  "stem": "During seated (open-chain) knee extension from 90° to 0°, the tibia rotates during the final 5–10° of extension. Which description of this motion and its cause is MOST accurate?",
  "options": [
   "Tibial ER on the femur, because the lateral condyle's longer surface keeps moving after the medial side stops",
   "Tibial ER on the femur, because the medial condyle's longer surface keeps rolling and gliding after the lateral stops",
   "Obligatory rotation that close-packs the knee, produced as the tibia internally rotates on the femur",
   "Tibial IR on the femur, because the medial condyle's longer surface keeps moving after the lateral side stops"
  ],
  "rationale": [
   "Tibial ER is right, but the medial condyle has the longer tibial articular surface. The lateral condyle's surface is shorter.",
   "Correct. The lateral articulation runs out of surface first. The medial plateau keeps moving anteriorly around it, which spins the tibia into ER (screw-home) and locks the knee.",
   "Moving into close-packed is right, but the tibia rotates externally to get there.",
   "The longer medial articular surface is right, but terminal open-chain extension produces tibial ER. Tibial IR happens in the first 5–10° of flexion (unlocking)."
  ],
  "answer": 1,
  "explanation": "Screw-home: tibial ER in the last 5–10° of extension because the medial articulation is longer. Ligament tension also contributes. Unlocking is tibial IR in the first 5–10° of flexion. In weight bearing the femur moves instead: it rotates medially during terminal extension and laterally during initial flexion."
 },
 {
  "id": 35,
  "joint": "Knee",
  "topic": "Screw-home mechanism",
  "stem": "A patient rises from sit to stand. As the knee reaches full extension with the foot fixed, which motion completes the screw-home mechanism?",
  "options": [
   "Femoral ER on the fixed tibia (relative tibial IR), bringing the knee into close-packed",
   "Relative tibial ER produced by the femur rotating laterally on the fixed tibia",
   "Femoral IR on the fixed tibia (relative tibial ER), bringing the knee into close-packed",
   "Femoral IR on the fixed tibia (relative tibial ER), bringing the knee into loose-packed"
  ],
  "rationale": [
   "Close-packed is right, but femoral ER on the tibia (relative tibial IR) happens during closed-chain unlocking in initial flexion.",
   "Relative tibial ER is right, but that relative motion comes from the femur rotating medially.",
   "Correct. In closed-chain motion the femur moves on the tibia. Femoral IR on a fixed tibia is the same relative motion as tibial ER on the femur, and it locks the knee with the ligaments taut.",
   "Femoral IR is right, but full extension with rotation is the close-packed position. Loose-packed is mid-range flexion."
  ],
  "answer": 2,
  "explanation": "Open-chain locking: the tibia externally rotates on the femur. Closed-chain locking: the femur internally rotates on the tibia. Both produce the same relative tibial ER and close-pack the knee, with the ligaments taut in full extension."
 },
 {
  "id": 36,
  "joint": "Knee",
  "topic": "Screw-home mechanism",
  "stem": "A patient begins a squat from a fully extended, weight-bearing knee. Which motion and muscle are PRIMARILY responsible for 'unlocking' the knee?",
  "options": [
   "Relative tibial IR occurs as the knee moves from loose-packed into close-packed",
   "The femur externally rotates on the fixed tibia, driven mainly by the biceps femoris",
   "The popliteus internally rotates the femur on the fixed tibia",
   "The popliteus externally rotates the femur on the fixed tibia (relative tibial IR)"
  ],
  "rationale": [
   "Relative tibial IR is right, but unlocking moves the knee out of close-packed (full extension) toward loose-packed.",
   "Femoral ER is right, but the popliteus is the key unlocking muscle. The biceps femoris is a tibial external rotator in open chain.",
   "The popliteus is right, but unlocking in closed chain needs femoral ER. Femoral IR is the locking motion.",
   "Correct. The popliteus attaches to the lateral femoral condyle and the posterior tibia. In closed chain it rotates the femur laterally on the tibia, which undoes the screw-home rotation so flexion can proceed."
  ],
  "answer": 3,
  "explanation": "The popliteus is the knee's unlocking muscle. In open chain it internally rotates the tibia. In closed chain it externally rotates the femur. It also attaches to the lateral meniscus and pulls it posteriorly during flexion."
 },
 {
  "id": 37,
  "joint": "Knee",
  "topic": "Tibiofemoral arthrokinematics",
  "stem": "A patient 4 weeks after TKA has 85° of knee flexion. Which open-chain mobilization (tibia on femur) and rationale are MOST appropriate to improve flexion?",
  "options": [
   "Posterior tibial glide; the concave tibia rolls and slides on the femur in opposite directions",
   "Posterior tibial glide; the concave tibia rolls and slides on the femur in the same direction",
   "Anterior tibial glide, because the femur slides anteriorly on the tibia as the knee flexes",
   "Anterior tibial glide; the concave tibia rolls and slides on the femur in the same direction"
  ],
  "rationale": [
   "The posterior glide is right, but concave-on-convex motion rolls and slides in the same direction.",
   "Correct. In open-chain flexion the tibia rolls and slides posteriorly on the femoral condyles. A posterior tibial glide restores that slide.",
   "The femur does slide anteriorly on the tibia during closed-chain flexion, but in open chain that means the tibia slides posteriorly. The mobilization direction is reversed.",
   "The concave-on-convex rule is right, but flexion needs a posterior tibial glide. An anterior glide improves extension."
  ],
  "answer": 1,
  "explanation": "Open chain: concave tibia on convex femur, roll and slide in the same direction (posterior for flexion, anterior for extension). Closed chain: convex femur on concave tibia, roll and slide in opposite directions."
 },
 {
  "id": 38,
  "joint": "Knee",
  "topic": "Tibiofemoral arthrokinematics",
  "stem": "During a squat (closed-chain flexion from 0° to 90°), which description of tibiofemoral arthrokinematics is MOST accurate?",
  "options": [
   "The convex femur moves on the concave tibia; the condyles roll anteriorly and slide posteriorly",
   "The femoral condyles roll posteriorly and slide anteriorly, and the menisci translate anteriorly",
   "The femoral condyles roll posteriorly and slide anteriorly on the tibia, and the menisci translate posteriorly",
   "The femoral condyles roll posteriorly and slide posteriorly, and the menisci translate posteriorly"
  ],
  "rationale": [
   "The convex-on-concave description is right, but in flexion the femoral condyles roll posteriorly.",
   "The femoral arthrokinematics are right, but the menisci move posteriorly with flexion and anteriorly with extension.",
   "Correct. The convex femur rolls and slides in opposite directions. Without the anterior slide the condyles would roll off the back of the plateau. The menisci follow the condyles posteriorly, helped by the semimembranosus and popliteus.",
   "Posterior meniscal translation is right, but convex-on-concave motion has roll and slide in opposite directions."
  ],
  "answer": 2,
  "explanation": "Closed-chain flexion: the femur rolls posteriorly and slides anteriorly ('rolls uphill, slides downhill'). Weight-bearing flexion tightens the ACL, which helps produce the anterior slide. The menisci are pushed posteriorly in flexion and anteriorly in extension."
 },
 {
  "id": 39,
  "joint": "Knee",
  "topic": "Menisci",
  "stem": "A 45-year-old is considering a total medial meniscectomy for a complex tear. Which statement about the biomechanical consequences is MOST accurate?",
  "options": [
   "Femoral condyle stress about doubles, but contact area is unchanged since the menisci are thin centrally",
   "Contact area falls; stress rises about 6–7× on the femoral condyles and 2× on the tibial plateau",
   "Contact area falls; stress rises about 2× on the femoral condyles and 6–7× on the tibial plateau",
   "Tibial plateau stress rises 6–7×, since the menisci are thick centrally and thin at their periphery"
  ],
  "rationale": [
   "The roughly doubled femoral stress is right, but contact area falls substantially. The thick peripheral rim is what spreads load.",
   "The loss of contact area is right, but the multipliers are reversed: about 2 times on the femur and 6–7 times on the tibia.",
   "Correct. The menisci increase contact area, transmit and distribute load, and absorb shock. Removing one concentrates load on small areas of articular cartilage.",
   "The 6–7 times tibial increase is right, but the menisci are thick peripherally and thin centrally, which is what makes the plateau concave."
  ],
  "answer": 2,
  "explanation": "The menisci deepen the flat to slightly convex tibial plateau, increase contact area, lower joint stress, distribute load, absorb shock, and add stability. Their importance is why surgeons preserve meniscal tissue whenever possible."
 },
 {
  "id": 40,
  "joint": "Knee",
  "topic": "Menisci",
  "stem": "Arthroscopy shows a longitudinal tear in the outer (peripheral) third of the medial meniscus in one patient and a radial tear in the inner third in another. Which statement BEST explains their different prognoses?",
  "options": [
   "The outer 25–33% is vascular and can heal; the inner zone depends on diffusion aided by prolonged immobilization",
   "The outer 25–33% is aneural, so its tear is painless, but the zone has good potential to heal after repair",
   "The inner zone has good healing potential because its nutrition comes from synovial fluid diffusion",
   "The outer 25–33% is vascular and can heal; the inner zone depends on diffusion driven by intermittent loading"
  ],
  "rationale": [
   "The peripheral vascularity is right, but diffusion into avascular cartilage needs intermittent loading. Immobilization starves it.",
   "The good healing potential is right, but the peripheral 25–33% is innervated and contributes to nociception and proprioception.",
   "Nutrition by diffusion is right, but that is why the inner zone heals poorly.",
   "Correct. The peripheral zone and horns have capillaries and nerve endings. The central zone is avascular and aneural, so it depends on diffusion driven by cyclic loading and has poor healing potential."
  ],
  "answer": 3,
  "explanation": "Peripheral meniscus: vascular, innervated, can heal (repair candidates). Central meniscus: avascular, aneural, fed by diffusion, needs intermittent loading, poor healing (usually partial meniscectomy)."
 },
 {
  "id": 41,
  "joint": "Knee",
  "topic": "Menisci",
  "stem": "Which statement BEST explains why the medial meniscus is injured more often than the lateral meniscus?",
  "options": [
   "C-shaped with attachments to the deep MCL, capsule, and semimembranosus that limit its mobility",
   "The lateral meniscus is 4/5 of a circle and is injured more often because it is the less mobile one",
   "The medial meniscus is injured more often because it is the more mobile of the two menisci",
   "Less mobile because it is firmly tethered to the popliteus tendon, the capsule, and the deep MCL"
  ],
  "rationale": [
   "Correct. More attachments mean less ability to move out of the way of a compressive and rotational load. The medial side also has more exposed tibia, which shifts more load medially.",
   "The lateral meniscus's 4/5-circle shape is right, but it is more mobile and less often injured.",
   "More frequent medial injury is right, but the medial meniscus is the less mobile one.",
   "Lower mobility is right, but the popliteus attaches to the lateral meniscus. The medial meniscus attaches to the semimembranosus."
  ],
  "answer": 0,
  "explanation": "Medial meniscus: C-shaped, attached to the transverse ligament, coronary ligaments, patellomeniscal and meniscofemoral ligaments, deep MCL and capsule, and semimembranosus. That means less mobility and more injury. Lateral meniscus: about 4/5 of a circle, fewer attachments, attached to the popliteus. That means more mobility and less injury."
 },
 {
  "id": 42,
  "joint": "Knee",
  "topic": "Collateral ligaments",
  "stem": "A soccer player has valgus laxity with a soft end feel at 30° of knee flexion, but the knee is stable to valgus stress at 0°. Which interpretation is MOST accurate?",
  "options": [
   "Isolated MCL injury; the MCL supplies its greatest share of valgus restraint in full extension",
   "Combined MCL and posteromedial corner injury, since testing at 30° is what isolates the MCL",
   "Isolated MCL injury; the MCL supplies most valgus restraint at 25–30°, while other structures help at 0°",
   "Isolated MCL injury, which will reduce the load the ACL must bear during valgus and rotation"
  ],
  "rationale": [
   "An isolated MCL injury is right, but the MCL's share of valgus restraint is lower in full extension (57%) than at 25° (78%).",
   "Testing at 30° isolating the MCL is right, but a stable knee at 0° suggests the posteromedial corner and cruciates are intact.",
   "Correct. The MCL provides about 78% of valgus restraint at 25° of flexion but only about 57% in full extension. Laxity only at 30° points to the MCL alone.",
   "An isolated MCL injury is right, but MCL injury increases ACL load (about 55% with a partial tear and 185% with a full tear)."
  ],
  "answer": 2,
  "explanation": "The MCL is the primary valgus restraint, taut in extension and lax in flexion, but in full extension other structures share the load. Valgus testing at 30° isolates the MCL. Laxity at 0° implies extra damage to the posteromedial corner and possibly a cruciate."
 },
 {
  "id": 43,
  "joint": "Knee",
  "topic": "Collateral ligaments",
  "stem": "Why does a combined ACL and MCL injury produce greater anterior and rotatory instability than an isolated ACL tear?",
  "options": [
   "The MCL is a secondary restraint to anterior tibial translation and tibial ER when the ACL is absent",
   "The MCL is a secondary restraint to anterior tibial translation and tibial IR when the ACL is absent",
   "The MCL is the primary valgus restraint, and a full MCL tear lowers ACL load by shifting the knee into varus",
   "MCL injury increases ACL load because the MCL is the primary restraint to anterior tibial translation"
  ],
  "rationale": [
   "Correct. With the ACL gone, the MCL takes over some restraint of anterior translation and ER. Losing both removes the primary and the secondary restraint.",
   "Secondary restraint to anterior translation is right, but the MCL resists tibial ER. The LCL is the secondary restraint to tibial IR.",
   "The MCL being the primary valgus restraint is right, but a full MCL tear raises ACL load by about 185%.",
   "Increased ACL load is right, but the ACL is the primary restraint to anterior translation. The MCL is secondary."
  ],
  "answer": 0,
  "explanation": "Secondary roles when the ACL is absent: the MCL resists anterior translation and tibial ER, and the LCL resists anterior translation and tibial IR. In the other direction, an MCL injury increases ACL load (about 55% with a partial tear and 185% with a full tear)."
 },
 {
  "id": 44,
  "joint": "Knee",
  "topic": "Posterolateral corner",
  "stem": "After a blow to the anteromedial tibia, a patient has varus laxity at 30° of flexion. On the dial test, tibial ER is increased by 15° at 30° of flexion but is symmetric at 90°. Which interpretation is MOST accurate?",
  "options": [
   "Posteromedial corner injury; the injured structures normally resist tibial ER",
   "Posterolateral corner injury (including the LCL) with a PCL tear",
   "Posterolateral corner injury (including the LCL) with an intact PCL",
   "LCL injury; the LCL is the primary varus restraint and a thickening of the lateral capsule"
  ],
  "rationale": [
   "The idea that the injured structures resist tibial ER is right, but that describes the posterolateral corner. The posteromedial corner resists valgus and tibial IR.",
   "The posterolateral corner injury is right, but a PCL tear would also increase ER at 90°. Symmetric ER at 90° suggests the PCL is intact.",
   "Correct. Excess ER at 30° only means the posterolateral corner is injured. If ER were also excessive at 90°, the PCL would be involved too.",
   "The LCL being the primary varus restraint is right, but it is not a capsular thickening. It is a separate cord from the lateral epicondyle to the fibular head, joined by the biceps femoris tendon."
  ],
  "answer": 2,
  "explanation": "Posterolateral corner (LCL, popliteus tendon, arcuate and popliteofibular ligaments, posterolateral capsule, and others): taut in extension, resists varus, posterior translation, and tibial ER. Dial test: excess ER at 30° only means a posterolateral corner injury, and excess ER at both 30° and 90° means the corner plus the PCL."
 },
 {
  "id": 45,
  "joint": "Knee",
  "topic": "ACL anatomy",
  "stem": "An ACL graft is placed to reproduce the native ligament's path. Which description of that path and its primary function is CORRECT?",
  "options": [
   "Lateral femoral condyle (posteromedial aspect), running inferior, lateral, and posterior; resists anterior tibial translation",
   "Lateral femoral condyle (posteromedial aspect), running inferior, medial, and anterior; primary restraint to hyperextension",
   "Medial femoral condyle (posterolateral aspect), running inferior, lateral, and posterior; resists anterior tibial translation",
   "Lateral femoral condyle (posteromedial aspect), running inferior, medial, and anterior; resists anterior tibial translation"
  ],
  "rationale": [
   "The lateral condyle origin is right, but the ACL runs inferior, medial, and anterior. Inferior, lateral, and posterior is the PCL's direction.",
   "The origin is right, but the ACL is only a secondary restraint to hyperextension. The PCL (with the posterior capsule) is the primary restraint.",
   "The primary function is right, but that femoral attachment belongs to the PCL. The ACL arises from the lateral femoral condyle.",
   "Correct. The native ACL attaches to the anterolateral aspect of the medial tibial spine. Its oblique path resists anterior translation of the tibia on the femur."
  ],
  "answer": 3,
  "explanation": "ACL: lateral femoral condyle (posteromedial aspect) to the anterior tibial spine. It runs inferior, medial, and anterior. Primary role: resist anterior tibial translation. Secondary roles: resist hyperextension, tibial IR and ER, and varus and valgus. It wraps around the PCL with IR and around the lateral femoral condyle with ER."
 },
 {
  "id": 46,
  "joint": "Knee",
  "topic": "ACL bundles & testing",
  "stem": "Why is the Lachman test performed at about 20–30° of knee flexion rather than at 90°?",
  "options": [
   "The anteromedial bundle tightens after about 15° of flexion, and anterior translation peaks in full extension",
   "The posterolateral bundle is taut in full extension, and anterior translation peaks at 90° of flexion",
   "Anterior translation peaks near 30°, because the posterolateral bundle becomes taut once the knee flexes",
   "Anterior translation peaks near 30°, as the anteromedial bundle tightens and secondary restraints are slack"
  ],
  "rationale": [
   "The anteromedial bundle timing is right, but translation is smallest in full extension and greatest near 30°.",
   "The posterolateral bundle being taut in extension is right, but at 90° the hamstrings and the menisci's posterior-horn wedge reduce translation, which is why the anterior drawer test is less sensitive.",
   "Maximum translation near 30° is right, but the posterolateral bundle is taut in full extension.",
   "Correct. The posterolateral bundle is taut in extension and the anteromedial bundle tightens after about 15° of flexion. Maximum translation, and the most sensitive test, comes near 30°."
  ],
  "answer": 3,
  "explanation": "ACL bundles are named for their tibial insertions. The posterolateral bundle is taut in full extension, where translation is minimal. The anteromedial bundle tightens after about 15° of flexion, and translation peaks around 30°. That is the logic behind testing at 20–30°."
 },
 {
  "id": 47,
  "joint": "Knee",
  "topic": "ACL mechanism of injury",
  "stem": "Which landing pattern places the GREATEST load on the ACL?",
  "options": [
   "Non-weight-bearing kick in slight knee flexion with valgus and tibial rotation",
   "Weight-bearing landing in deep (beyond 90°) knee flexion with valgus and tibial rotation",
   "Weight-bearing anterior tibial translation with knee hyperflexion and varus loading",
   "Weight-bearing landing in slight knee flexion with valgus collapse and tibial rotation"
  ],
  "rationale": [
   "Slight flexion with valgus is right, but the injury typically happens under weight-bearing load during landing or cutting.",
   "Weight bearing with valgus and rotation is right, but deep flexion puts the hamstrings in a better position to resist anterior shear. ACL injuries occur near extension.",
   "Weight bearing with anterior tibial translation is right, but hyperflexion is a PCL mechanism, and valgus, not varus, is the usual ACL load.",
   "Correct. The typical noncontact mechanism combines weight bearing, slight flexion (near the 30° where translation is greatest), valgus, anterior tibial translation, and tibial IR or ER."
  ],
  "answer": 3,
  "explanation": "ACL mechanism of injury: weight bearing with slight knee flexion combined with valgus, anterior tibial translation, and tibial IR or ER. Injury-prevention programs target dynamic valgus, stiff landings, and quadriceps-dominant deceleration."
 },
 {
  "id": 48,
  "joint": "Knee",
  "topic": "Muscle effects on ACL",
  "stem": "At 4 weeks after ACL reconstruction, a PT adds open-chain knee extension. Which range and rationale are MOST appropriate to protect the graft?",
  "options": [
   "The full 90° to 0° arc with hamstring co-contraction, since the hamstrings produce posterior tibial shear",
   "90° to 45°, because the patellar tendon pulls the tibia anteriorly most in deep flexion",
   "30° to 0°, the range where quadriceps anterior shear is greatest",
   "90° to 45°; quadriceps-generated anterior tibial shear is lower in deeper flexion and greatest near full extension"
  ],
  "rationale": [
   "The hamstrings do produce posterior shear (more so with flexion), but the full arc still loads the graft in the terminal range where quadriceps anterior shear is highest.",
   "The 90° to 45° range is right, but quadriceps anterior shear is greatest near full extension, not in deep flexion.",
   "Anterior shear being greatest near full extension is right, which is exactly why 30° to 0° is the range to avoid early on.",
   "Correct. Near extension the patellar tendon pulls the tibia anteriorly, which strains the ACL. In deeper flexion the tendon's line of pull is more posterior, so anterior shear drops."
  ],
  "answer": 3,
  "explanation": "Quadriceps produce anterior shear, greatest near extension. Hamstrings produce posterior shear, which increases with flexion. The gastrocnemius produces anterior shear. Co-contraction lowers ACL strain but raises joint compression. Early open-chain quadriceps work after ACL reconstruction is therefore limited to about 90–45°."
 },
 {
  "id": 49,
  "joint": "Knee",
  "topic": "Muscle effects on ACL",
  "stem": "In weight bearing, which muscle can help REDUCE ACL strain, and why?",
  "options": [
   "The quadriceps near full extension, while co-contraction with the hamstrings raises joint compression",
   "The soleus, and the gastrocnemius also helps by producing posterior tibial shear at the knee",
   "The gastrocnemius, while the hamstrings also reduce strain by producing posterior tibial shear",
   "The soleus; it holds the tibia back over the planted foot, while the gastrocnemius adds anterior shear"
  ],
  "rationale": [
   "Co-contraction increasing compression is right, but the quadriceps increase ACL strain near extension.",
   "The soleus reducing ACL strain is right, but the gastrocnemius increases anterior shear and ACL strain.",
   "The hamstrings producing posterior shear is right, but the gastrocnemius increases ACL strain.",
   "Correct. A closed-chain soleus contraction holds the tibia back over the planted foot and reduces anterior tibial translation. The gastrocnemius, crossing the knee posteriorly, pushes the tibia anteriorly."
  ],
  "answer": 3,
  "explanation": "In weight bearing, the soleus (and the gluteus maximus pulling the femur back over the tibia) can act as ACL agonists, while the quadriceps and gastrocnemius increase anterior shear. A knee's ligament loading depends on the whole kinetic chain, not only the muscles that cross it."
 },
 {
  "id": 50,
  "joint": "Knee",
  "topic": "PCL",
  "stem": "A motorcyclist's flexed knee strikes the ground, driving the proximal tibia posteriorly. At 90° of flexion the tibia sags posteriorly. Which structure is MOST likely injured, and why?",
  "options": [
   "The ACL, since the mechanism is a posterior force on a flexed knee",
   "The PCL; it provides about 90% of the restraint to posterior tibial translation in knee flexion",
   "The PCL, which has a smaller cross-sectional area than the ACL",
   "The PCL; it provides about 90% of the restraint to anterior tibial translation in flexion"
  ],
  "rationale": [
   "The mechanism is described correctly, but it loads the PCL, not the ACL.",
   "Correct. A posterior force on a flexed tibia is the classic PCL mechanism. The posterior sag and posterior drawer test at 90° confirm it.",
   "The PCL is right, but its cross-sectional area is about 120–150% of the ACL's, so it resists larger loads.",
   "The PCL is right, but it restrains posterior translation. The ACL restrains anterior translation."
  ],
  "answer": 1,
  "explanation": "PCL: posterolateral aspect of the medial femoral condyle to the posterior tibia between the posterior meniscal horns. Primary restraint to posterior translation and hyperextension (about 90% of posterior restraint in flexion). Mechanisms: posterior force on a hyperflexed knee, or hyperextension."
 },
 {
  "id": 51,
  "joint": "Knee",
  "topic": "Muscle effects on PCL",
  "stem": "During nonoperative rehabilitation of a PCL injury, which exercise emphasis is MOST appropriate?",
  "options": [
   "Emphasize the quadriceps and avoid early isolated resisted hamstring curls",
   "Avoid open-chain hamstring curls, since the popliteus increases PCL strain",
   "Emphasize the quadriceps and add early isolated resisted hamstring curls",
   "Emphasize isolated hamstring strengthening, since the popliteus reduces PCL strain"
  ],
  "rationale": [
   "Correct. The hamstrings pull the tibia posteriorly (more so in flexion), loading the PCL. The quadriceps and popliteus resist posterior sag.",
   "Avoiding hamstring curls is right, but the popliteus reduces PCL strain.",
   "Emphasizing the quadriceps is right, but isolated hamstring curls pull the tibia posteriorly and strain the PCL.",
   "The popliteus reducing PCL strain is right, but the hamstrings increase PCL strain."
  ],
  "answer": 0,
  "explanation": "The PCL is the mirror image of the ACL. Quadriceps (and popliteus) reduce PCL strain, and hamstrings increase it. PCL rehab is quadriceps-dominant and avoids posterior tibial sag."
 },
 {
  "id": 52,
  "joint": "Knee",
  "topic": "PCL bundles",
  "stem": "A surgeon reconstructs mainly the anterolateral bundle (ALB) of the PCL. Which statement about the PCL bundles is MOST accurate?",
  "options": [
   "ALB taut at about 80–90° of flexion; PMB taut in full extension",
   "ALB taut at about 80–90° of flexion; PMB taut only in mid-range flexion",
   "PMB taut in full extension; ALB also taut mainly in full extension",
   "Bundles named for femoral attachments; ALB taut at about 80–90° of flexion"
  ],
  "rationale": [
   "Correct. The two bundles share the load across the range: the PMB in extension and the ALB in mid-to-deep flexion, where the PCL does most of its work.",
   "The ALB being taut at 80–90° is right, but the PMB is taut in full extension.",
   "The PMB being taut in extension is right, but the ALB tightens at about 80–90° of flexion.",
   "The ALB being taut at 80–90° is right, but the bundles are named for their tibial insertions."
  ],
  "answer": 0,
  "explanation": "Cruciate bundles are named for their tibial insertions. ACL: posterolateral bundle taut in extension, anteromedial bundle taut after 15° of flexion. PCL: posteromedial bundle taut in extension, anterolateral bundle taut at 80–90° of flexion."
 },
 {
  "id": 53,
  "joint": "Knee",
  "topic": "Posteromedial corner",
  "stem": "A skier has valgus laxity at 0° and at 30° of flexion with increased anteromedial tibial rotation. Which interpretation is MOST accurate?",
  "options": [
   "MCL involvement, with the arcuate popliteal ligament as a key restraint to valgus in full extension",
   "MCL plus posteromedial corner injury; these structures are taut in extension and resist valgus and tibial IR",
   "Posteromedial corner involvement; these structures are taut in extension and resist valgus and tibial ER",
   "Posteromedial corner involvement; these structures are normally lax in full extension and resist tibial IR"
  ],
  "rationale": [
   "MCL involvement is right, but the arcuate popliteal ligament belongs to the posterolateral corner.",
   "Correct. Valgus laxity in full extension means more than the MCL is torn. The posteromedial corner, taut in extension, has also failed.",
   "Posteromedial corner involvement is right, but the corner resists tibial IR. The posterolateral corner resists ER.",
   "Posteromedial corner involvement (and resisting tibial IR) is right, but these structures are taut in full extension. That is why their injury shows up at 0°."
  ],
  "answer": 1,
  "explanation": "Posteromedial corner (oblique popliteal ligament, posterior oblique ligament, MCL, posteromedial capsule, semimembranosus tendon, medial gastrocnemius): taut in extension, resists posterior translation, valgus, and tibial IR. Posterolateral corner: taut in extension, resists posterior translation, varus, and tibial ER."
 },
 {
  "id": 54,
  "joint": "Knee",
  "topic": "Iliotibial band",
  "stem": "A cyclist has lateral knee pain that is worst during repetitive motion near the bottom of the pedal stroke. Which statement about the iliotibial band is MOST accurate?",
  "options": [
   "It compresses fat near the epicondyle from 0–30°, and its tension comes mainly from active TFL contraction",
   "Anterior to the axis in extension and posterior in flexion; it compresses fat near the epicondyle from 0–30°",
   "It attaches to Gerdy's tubercle and stays anterior to the axis at all angles, acting as a knee extensor",
   "Anterior to the axis in extension and posterior in flexion; it compresses fat near the epicondyle beyond 90°"
  ],
  "rationale": [
   "The 0–30° compression zone is right, but the band works mainly passively. TFL and gluteus maximus contraction have little effect on its tension.",
   "Correct. Repeated cycling through about 0–30° compresses the sensitive fat under the band near the lateral epicondyle. TFL and gluteus maximus contraction change band tension very little.",
   "The Gerdy's tubercle attachment is right, but the band moves from anterior to posterior to the axis as the knee flexes.",
   "The axis relationship is right, but compression occurs between full extension and about 30° of flexion."
  ],
  "answer": 1,
  "explanation": "The IT band is a fascial expansion of the TFL and gluteus maximus that attaches to Gerdy's tubercle, with links to the vastus lateralis, lateral epicondyle, biceps femoris, lateral gastrocnemius, and patella. Its relationship to the knee axis changes with flexion, and the compression zone is 0–30°."
 },
 {
  "id": 55,
  "joint": "Knee",
  "topic": "Q-angle",
  "stem": "A runner with patellofemoral pain has a Q-angle of 21°. Which combination of lower-extremity factors would MOST increase her Q-angle and lateral patellar force?",
  "options": [
   "Femoral anteversion, genu valgum, tibiofemoral ER, and excessive pronation",
   "Femoral retroversion, genu valgum, tibiofemoral ER, and excessive pronation",
   "Narrow pelvis, genu valgum, tibiofemoral IR, and excessive pronation",
   "Femoral anteversion, genu varum, tibiofemoral ER, and excessive pronation"
  ],
  "rationale": [
   "Correct. Each factor moves the patella medially or the tibial tuberosity laterally relative to the ASIS line, which widens the Q-angle and the lateral pull on the patella.",
   "Three factors are right, but femoral retroversion reduces medial femoral rotation. Anteversion increases the Q-angle.",
   "Genu valgum and pronation are right, but a wider pelvis and tibiofemoral ER (tuberosity moving laterally) increase the Q-angle.",
   "Three factors are right, but genu varum moves the knee laterally and reduces the Q-angle. Genu valgum increases it."
  ],
  "answer": 0,
  "explanation": "The Q-angle is measured from the ASIS to mid-patella and from the tibial tuberosity to mid-patella. Normal is 10–15°. It increases with a wider pelvis, femoral anteversion, knee valgus, a tight IT band, tibiofemoral ER, pronation, retinacular laxity, and poor hip and foot control."
 },
 {
  "id": 56,
  "joint": "Knee",
  "topic": "Frontal-plane alignment",
  "stem": "A patient's standing tibiofemoral angle (medial angle) measures 190°. How is joint loading MOST likely altered?",
  "options": [
   "Genu valgum; lateral weight-bearing line, more medial compartment compression",
   "Genu valgum; medial weight-bearing line, more medial compartment compression",
   "Genu valgum; lateral weight-bearing line, more lateral compartment compression",
   "Genu varum; lateral weight-bearing line, more lateral compartment compression"
  ],
  "rationale": [
   "Genu valgum is right, but valgus compresses the lateral compartment. Varus overloads the medial compartment.",
   "Genu valgum is right, but valgus moves the weight-bearing line laterally.",
   "Correct. Normal is 180–185°, and 185° or more is genu valgum. A lateral weight-bearing line loads the lateral compartment and stretches medial structures such as the MCL.",
   "A lateral weight-bearing line goes with this angle, but 190° is genu valgum. Genu varum is 175° or less."
  ],
  "answer": 2,
  "explanation": "The femur slopes inferomedially and the tibia is vertical, forming a medial angle of 180–185°. Genu valgum (185° or more) shifts the load line laterally. Genu varum (175° or less) shifts it medially, which is the common pattern in medial-compartment OA."
 },
 {
  "id": 57,
  "joint": "Knee",
  "topic": "Patellofemoral contact",
  "stem": "MRI shows a cartilage lesion on the SUPERIOR (proximal) region and odd facet of the patella. In which part of the knee ROM is this lesion MOST likely to be loaded?",
  "options": [
   "Mid-range (about 45–60°), when contact is on the medial and lateral facets",
   "Deep flexion, when contact reaches the superior patella and the lateral and odd facets",
   "Deep flexion, after contact moves up from the patellar base, where it sits at 0–30°",
   "0–30° of flexion, when contact is concentrated on the patellar apex (inferior pole)"
  ],
  "rationale": [
   "Medial and lateral facet contact in mid-range is right, but the odd facet and superior patella are loaded at end-range flexion.",
   "Correct. Contact moves from the inferior pole (0–30°) through the medial and lateral facets (mid-range) to the superior patella with the lateral and odd facets at end-range flexion.",
   "Deep flexion is right, but from 0° to 30° contact is at the apex (inferior pole), not the base.",
   "Apex contact at 0–30° is right, but this lesion is superior and would not be loaded in that range."
  ],
  "answer": 1,
  "explanation": "Patellofemoral contact moves from inferior to superior on the patella as flexion increases. The apex is loaded at 0–30°, the medial and lateral facets at mid-range, and the lateral and odd facets at end-range. Knowing lesion location lets you choose a pain-free exercise range."
 },
 {
  "id": 58,
  "joint": "Knee",
  "topic": "Patellofemoral stability",
  "stem": "A 16-year-old with patella alta has recurrent lateral patellar subluxation that occurs near full extension. Which explanation is MOST accurate?",
  "options": [
   "Alta reduces groove contact, and stability is lowest in deep flexion when the quadriceps tendon contacts the femur",
   "Stability is lowest at 0–30°, and patella alta increases contact between the patella and the groove",
   "Alta reduces groove contact; at 0–30° the patella is not yet engaged, so the retinaculum is the main stabilizer",
   "The retinaculum is the main stabilizer at 0–30°, and the MPFL mainly restrains medial patellar translation"
  ],
  "rationale": [
   "Reduced contact is right, but stability increases with flexion as the patella seats in the groove. It is lowest at 0–30°.",
   "Low stability at 0–30° is right, but patella alta reduces groove contact.",
   "Correct. A high-riding patella reaches the groove later in flexion. Near extension, bony containment is minimal and soft tissue does most of the stabilizing.",
   "The retinaculum's role at 0–30° is right, but the MPFL, the thickest band of the medial retinaculum, restrains lateral translation."
  ],
  "answer": 2,
  "explanation": "The patellofemoral joint is very incongruent. Stability is lowest from 0° to 30° (little groove contact, retinaculum as primary stabilizer) and increases with flexion. Patella alta, a shallow lateral femoral condyle or trochlea, a lax MPFL, genu recurvatum, and hypermobility all reduce stability."
 },
 {
  "id": 59,
  "joint": "Knee",
  "topic": "Patellofemoral joint stress",
  "stem": "A patient with patellofemoral pain needs quadriceps strengthening with the LOWEST patellofemoral joint stress. Which ranges are MOST appropriate?",
  "options": [
   "Closed-chain squats from 0° to 45°, because patellofemoral contact area is greatest near full extension",
   "Closed-chain squats from 0° to 45° and open-chain knee extension from 45° to 0°",
   "Closed-chain squats from 45° to 90° and open-chain knee extension from 90° to 45°",
   "Closed-chain squats from 0° to 45° and open-chain knee extension from 90° to 45°"
  ],
  "rationale": [
   "The closed-chain range is right, but contact area is smallest near extension. The range is safe because quadriceps demand is low in shallow squats.",
   "The closed-chain range is right, but open-chain extension near 0° needs high quadriceps force on a small contact area, which raises joint stress.",
   "The open-chain range is right, but deep closed-chain flexion requires large quadriceps force and high joint stress.",
   "Correct. In closed chain, quadriceps force and joint stress rise with flexion, so shallow ranges are kinder. In open chain, quadriceps force rises toward terminal extension while contact area shrinks, so 90–45° is kinder."
  ],
  "answer": 3,
  "explanation": "Seated knee extension needs more quadriceps force near terminal extension. Standing knee extension needs more quadriceps force near end-range flexion. Joint stress reflects quadriceps force divided by contact area, so use closed chain at 0–45° and open chain at 90–45° for patellofemoral pain."
 },
 {
  "id": 60,
  "joint": "Knee",
  "topic": "Patellar pulley",
  "stem": "After a patellectomy, which change in knee extensor mechanics is MOST expected?",
  "options": [
   "The patella normally gives its peak moment arm near full extension, and removing it shrinks the moment arm",
   "The quadriceps moment arm shrinks, so less quadriceps force is needed for the same torque",
   "More quadriceps force is needed, because the patella's main role is to reduce friction rather than to act as a pulley",
   "The quadriceps moment arm shrinks, so more quadriceps force is needed for the same extension torque"
  ],
  "rationale": [
   "The smaller moment arm after removal is right, but the peak quadriceps moment arm and torque normally occur near 45–60° of flexion.",
   "The shorter moment arm is right, but a shorter lever means more force for the same torque.",
   "Needing more force is right, but the patella's key mechanical role is to increase the quadriceps moment arm.",
   "Correct. The patella acts as an anatomical pulley that moves the quadriceps line of pull away from the knee axis. Without it the lever is shorter, so more force is needed (torque = force × moment arm)."
  ],
  "answer": 3,
  "explanation": "The patella increases the quadriceps moment arm, peaking around 45–60° of flexion. Quadriceps force is not the same as patellar tendon tension, and both produce patellofemoral compression. In weight bearing, quadriceps function is also shaped by the gluteus maximus, hamstrings, and other muscles."
 },
 {
  "id": 61,
  "joint": "Knee",
  "topic": "Patellar motion terminology",
  "stem": "On observation, the apex of a patient's patella points laterally and its anterior surface faces medially. How are these two patellar positions named?",
  "options": [
   "Lateral patellar rotation and lateral patellar tilt",
   "Lateral patellar rotation and medial patellar tilt",
   "Medial patellar rotation and medial patellar tilt",
   "Lateral patellar shift and medial patellar tilt"
  ],
  "rationale": [
   "Lateral rotation is right, but tilt is named for the direction the patella faces, which here is medial.",
   "Correct. Rotation is named for the direction the apex points (lateral). Tilt is named for the direction the patella's anterior surface faces (medial).",
   "Medial tilt is right, but rotation is named for where the apex points, which here is lateral.",
   "Medial tilt is right, but a shift is a translation named for the direction the patella moves. The apex direction defines rotation."
  ],
  "answer": 1,
  "explanation": "Patellar terms: tilt is named for the direction the patella faces, shift for the direction it moves, and rotation for the direction the apex points. An inferior glide is patellar flexion and a superior glide is patellar extension."
 },
 {
  "id": 62,
  "joint": "Knee",
  "topic": "Patellar tracking",
  "stem": "Which statement BEST describes normal patellar tracking as the knee flexes from full extension?",
  "options": [
   "Rests laterally in extension and shifts further laterally with flexion; contact moves inferior to superior",
   "Rests laterally in extension and shifts medially with flexion; contact moves inferior to superior",
   "Rests laterally in extension and shifts medially with flexion; contact moves superior to inferior",
   "Rests medially in extension and shifts laterally with flexion; contact moves inferior to superior"
  ],
  "rationale": [
   "Resting laterally in extension is right, but the patella moves medially as it enters the groove.",
   "Correct. In extension the patella sits slightly lateral (where the quadriceps vector pulls it). As flexion seats it in the groove it moves medially, and contact moves proximally on the patella.",
   "The medial shift is right, but contact moves from inferior to superior as flexion increases.",
   "Contact moving from inferior to superior is right, but the shift direction is reversed."
  ],
  "answer": 1,
  "explanation": "The lateral femoral condyle and lateral facet are larger, and the quadriceps pull slightly lateral, so the patella rests laterally in extension and shifts medially with flexion. Excess lateral resting position and early lateral glide are typical findings in patellofemoral pain."
 },
 {
  "id": 63,
  "joint": "Knee",
  "topic": "Tibial rotation",
  "stem": "Which statement about tibiofemoral axial rotation is MOST accurate?",
  "options": [
   "Medial-compartment axis; the lateral plateau moves posteriorly in tibial ER; rotation peaks in extension",
   "Medial-compartment axis; the lateral plateau moves anteriorly in tibial ER; rotation peaks near 90°",
   "Medial-compartment axis; the lateral plateau moves posteriorly in tibial ER; rotation peaks near 90°",
   "Lateral-compartment axis; the medial plateau moves posteriorly in tibial ER; rotation peaks near 90°"
  ],
  "rationale": [
   "The medial axis is right, but rotation is smallest in full extension (locked) and greatest near 90°.",
   "The medial pivot is right, but in tibial ER the lateral tibia moves posteriorly. It moves anteriorly in IR.",
   "Correct. The medial condyle acts as a pivot while the lateral condyle moves in an arc. In ER the medial tibia moves anteriorly and the lateral tibia posteriorly. Rotation is blocked in the locked, extended knee.",
   "The peak near 90° is right, but the pivot is the medial compartment, and in ER it is the lateral (not medial) plateau that moves posteriorly."
  ],
  "answer": 2,
  "explanation": "Tibial IR is about 20–30° and tibial ER about 30–40°. The axis runs through the medial compartment. The menisci move with the tibia during rotation. This is why rotational meniscal tests are performed in flexion."
 },
 {
  "id": 64,
  "joint": "Knee",
  "topic": "Frontal-plane laxity",
  "stem": "Which statement about tibiofemoral abduction and adduction (varus and valgus motion) is MOST accurate?",
  "options": [
   "About 8° in full extension and 13° at 20° flexion; excess motion suggests ligament laxity",
   "About 13° in full extension and 8° at 20° flexion; excess motion suggests ligament laxity",
   "About 8° in full extension and 13° at 20° flexion; tibial abduction is the same as varus",
   "Motion increases slightly with flexion, and tibial adduction is the same as valgus"
  ],
  "rationale": [
   "Correct. A small amount of frontal-plane play is normal and increases slightly with flexion. Beyond normal values it signals collateral or capsular insufficiency.",
   "Excessive motion suggesting laxity is right, but the values are reversed. Motion increases slightly with flexion.",
   "The 8° value is right, but tibial abduction is valgus. Adduction is varus.",
   "The increase with flexion is right, but adduction is varus."
  ],
  "answer": 0,
  "explanation": "Abduction is valgus and adduction is varus. There is very little motion: about 8° in full extension and about 13° at 20° of flexion. Excess motion means ligament laxity and asymmetric compartment loading."
 },
 {
  "id": 65,
  "joint": "Knee",
  "topic": "Two-joint muscles",
  "stem": "With the hip flexed, passive knee flexion is 140°. In prone with the hip extended, passive knee flexion is only 95° and the pelvis tilts anteriorly at end range. Which explanation is MOST accurate?",
  "options": [
   "Active insufficiency of the hamstrings, which are shortened across hip extension and knee flexion",
   "Passive insufficiency of the rectus femoris, which acts as a flexor at both the hip and the knee",
   "Passive insufficiency of a two-joint muscle, with the gracilis as the limiting structure",
   "Passive insufficiency of the rectus femoris, which is lengthened across both hip extension and knee flexion"
  ],
  "rationale": [
   "The hamstrings are shortened across both joints in this position, but the measurement here is passive ROM. A passive limit points to a lengthened two-joint muscle, not a weak shortened one.",
   "Rectus femoris passive insufficiency is right, but it extends the knee. It flexes only the hip.",
   "Passive insufficiency of a two-joint muscle is right, but the gracilis is a knee flexor and is not stretched by knee flexion.",
   "Correct. The rectus femoris crosses the hip anteriorly (flexor) and the knee anteriorly (extensor). Hip extension plus knee flexion stretches it at both joints, which limits knee flexion and pulls the pelvis into anterior tilt (the Ely test)."
  ],
  "answer": 3,
  "explanation": "Two-joint muscles at the knee depend on the position of the hip and ankle. Passive insufficiency is the limit of a muscle lengthened across both joints. Active insufficiency is the weakness of a muscle shortened across both joints. Compare ROM with the hip flexed and extended to isolate the rectus femoris."
 },
 {
  "id": 66,
  "joint": "Knee",
  "topic": "Meniscal kinematics",
  "stem": "Which statement BEST describes how the menisci move during knee flexion?",
  "options": [
   "Posteriorly, helped by the semimembranosus (lateral meniscus) and popliteus (medial meniscus)",
   "Posteriorly, helped by the semimembranosus (medial meniscus) and popliteus (lateral meniscus)",
   "With the tibia during rotation, helped by the semimembranosus pulling the lateral meniscus",
   "Anteriorly, helped by the semimembranosus (medial meniscus) and popliteus (lateral meniscus)"
  ],
  "rationale": [
   "Posterior translation is right, but the attachments are reversed. The semimembranosus attaches to the medial meniscus and the popliteus to the lateral.",
   "Correct. The menisci follow the femoral condyles posteriorly in flexion. Their muscle attachments pull them back so they are not trapped between the femur and tibia.",
   "Moving with the tibia during rotation is right, but the semimembranosus attaches to the medial meniscus.",
   "The attachments are right, but the menisci move posteriorly with flexion."
  ],
  "answer": 1,
  "explanation": "The menisci move posteriorly with flexion and anteriorly with extension, and they move with the tibia during rotation. The medial meniscus is tethered to the semimembranosus and the lateral meniscus to the popliteus. Because the lateral meniscus is more mobile, it is injured less often."
 },
 {
  "id": 67,
  "joint": "Ankle & Foot",
  "topic": "Talocrural axis",
  "stem": "The talocrural axis runs about 14° inferior and 23° posterior to a pure medial-lateral axis. Because of this orientation, non-weight-bearing dorsiflexion is accompanied by which additional motions?",
  "options": [
   "Slight adduction and eversion",
   "Slight abduction and inversion",
   "Slight adduction and inversion, because the lateral malleolus sits more distal and posterior than the medial",
   "Slight abduction and eversion, the other components of pronation"
  ],
  "rationale": [
   "Eversion is right, but the foot abducts (moves away from the midline) as it dorsiflexes about this oblique axis.",
   "Abduction is right, but dorsiflexion couples with eversion. Inversion goes with plantarflexion.",
   "The malleolar anatomy is right, but that geometry couples dorsiflexion with abduction and eversion.",
   "Correct. The lateral malleolus sits more distal and posterior than the medial malleolus, so the axis is oblique. Rotation about it couples dorsiflexion with abduction and eversion (and plantarflexion with adduction and inversion)."
  ],
  "answer": 3,
  "explanation": "Talocrural motion is tri-planar because of the oblique axis. In non-weight-bearing dorsiflexion the foot moves up, into abduction, and into eversion. Plantarflexion is the opposite. Lateral tibial torsion (normally about 19°) turns the axis further laterally, producing the normal toe-out stance."
 },
 {
  "id": 68,
  "joint": "Ankle & Foot",
  "topic": "Talocrural arthrokinematics",
  "stem": "A patient performs a weight-bearing lunge, dorsiflexing the ankle over a fixed foot. Which description of this motion is MOST accurate?",
  "options": [
   "Slight abduction and inversion, because the lateral malleolus sits more distal and posterior",
   "Slight abduction and eversion, because the lateral malleolus sits more distal and posterior",
   "Slight adduction and eversion, because the lateral malleolus sits more distal and posterior",
   "Slight abduction and eversion, because the medial malleolus sits more distal and posterior"
  ],
  "rationale": [
   "Same-direction roll and slide is right, but weight-bearing dorsiflexion rotates the leg medially.",
   "Correct. In weight bearing the concave mortise moves on the fixed convex talus, so roll and slide go in the same direction. The oblique axis adds lateral movement and medial rotation of the leg.",
   "The leg motion is right, but the concave mortise moving on the convex talus rolls and slides in the same direction.",
   "The coupled motions are right, but it is the lateral malleolus that sits more distal and posterior. That is what tilts the axis."
  ],
  "answer": 1,
  "explanation": "Non-weight-bearing: the convex talus moves on the concave mortise, so roll and slide go in opposite directions (dorsiflexion means the talus rolls anteriorly and slides posteriorly). Weight-bearing: the mortise moves on the talus, so roll and slide go in the same direction. Weight-bearing dorsiflexion moves the leg forward, laterally, and into medial rotation."
 },
 {
  "id": 69,
  "joint": "Ankle & Foot",
  "topic": "Mortise stability",
  "stem": "Why do lateral ankle sprains occur MOST often with the ankle plantarflexed and inverted?",
  "options": [
   "Forward, slightly lateral, and medially rotating; the tibia rolls and slides in opposite directions",
   "Forward, slightly lateral, and medially rotating; the tibia rolls and slides anteriorly together",
   "Forward and slightly lateral as the convex talus rolls and slides on the fixed concave mortise",
   "Forward, slightly lateral, and laterally rotating; the tibia rolls and slides anteriorly together"
  ],
  "rationale": [
   "The narrow posterior talus is right, but in plantarflexion the ATFL becomes vertical and takes over. The CFL is the restraint in neutral and dorsiflexion.",
   "Correct. The talus is wider anteriorly. In plantarflexion its narrow posterior part sits in the mortise with less bony control, and the weaker lateral ligaments, mainly the ATFL, must resist inversion.",
   "The ATFL's role in plantarflexion is right, but the talus is wider anteriorly. The narrow posterior talus is what makes plantarflexion unstable.",
   "The deltoid's greater strength is right, but the close-packed position is end-range dorsiflexion. Plantarflexion is near the open-packed position."
  ],
  "answer": 1,
  "explanation": "The talus is wide anteriorly and narrow posteriorly. Dorsiflexion wedges the wide part into the mortise (close-packed, stable). Plantarflexion leaves the narrow part in the mortise (loose, less stable). The lateral collateral ligaments resist inversion and supination and are weaker and more often injured than the deltoid."
 },
 {
  "id": 70,
  "joint": "Ankle & Foot",
  "topic": "Talocrural arthrokinematics",
  "stem": "After 6 weeks in a walking boot, a patient has 2° of ankle dorsiflexion with a capsular end feel. Which mobilization and rationale are MOST appropriate?",
  "options": [
   "The narrow posterior talus sits loosely in the mortise, and the CFL becomes the main inversion restraint",
   "The narrow posterior talus sits loosely in the mortise, and the ATFL becomes the main inversion restraint",
   "The ATFL becomes the main inversion restraint, and the talus is wider posteriorly than anteriorly",
   "The deltoid is stronger than the lateral ligaments, and plantarflexion is the close-packed position"
  ],
  "rationale": [
   "The posterior glide is right, but the convex talus rolls and slides in opposite directions.",
   "Correct. Convex-on-concave motion rolls and slides in opposite directions, so restoring the posterior slide restores dorsiflexion.",
   "The posterior glide is right, but mobilization starts near the open-packed position (slight plantarflexion), not close-packed end-range dorsiflexion.",
   "The convex-on-concave rule is right, but dorsiflexion needs a posterior glide. An anterior glide improves plantarflexion."
  ],
  "answer": 1,
  "explanation": "Talocrural mobilization: a posterior talar glide for dorsiflexion and an anterior talar glide for plantarflexion. Start in or near the open-packed position (slight plantarflexion) and progress toward the restricted range."
 },
 {
  "id": 71,
  "joint": "Ankle & Foot",
  "topic": "Dorsiflexion limiters",
  "stem": "A patient has 0° of dorsiflexion with the knee extended and 15° with the knee flexed 90°. Which interpretation and intervention are MOST appropriate?",
  "options": [
   "Gastrocnemius tightness (passive insufficiency of a two-joint muscle); stretch with the knee extended",
   "Soleus tightness; stretch with the knee extended",
   "Gastrocnemius tightness; stretch with the knee flexed",
   "Joint capsule restriction; the gastrocnemius limits dorsiflexion only when the knee is extended"
  ],
  "rationale": [
   "Correct. Flexing the knee slackens the gastrocnemius and dorsiflexion improves a lot. The remaining range (15°, near the normal 20°) suggests the soleus and capsule are not the main limiters.",
   "Stretching with the knee extended is the right technique for this limitation, but the soleus is a one-joint muscle and knee position would not change the dorsiflexion it allows.",
   "Gastrocnemius tightness is right, but the gastrocnemius is lengthened only with the knee extended. Knee-flexed stretching targets the soleus.",
   "The knee-position dependence of the gastrocnemius is right, but a capsular limit would restrict dorsiflexion equally in both knee positions."
  ],
  "answer": 0,
  "explanation": "Dorsiflexion (about 20°, often more in weight bearing) may be limited by the gastrocnemius (knee extended), the soleus or capsule (knee flexed), or anterior impingement. Plantarflexion (about 50°) may be limited by the tibialis anterior, EHL, EDL, capsule, or posterior impingement."
 },
 {
  "id": 72,
  "joint": "Ankle & Foot",
  "topic": "Tibiofibular joints",
  "stem": "A patient's dorsiflexion is limited after a fibular fracture. Which statement about the proximal tibiofibular joint during ankle motion is MOST accurate?",
  "options": [
   "Soleus tightness; stretch with the knee extended",
   "Gastrocnemius tightness; stretch with the knee extended",
   "Gastrocnemius tightness; stretch with the knee flexed",
   "Capsular restriction; mobilize with a posterior talar glide"
  ],
  "rationale": [
   "The plane-joint classification is right, but inferior and anterior glide happens with plantarflexion.",
   "Correct. The fibula has to move for the mortise to adjust to the wide anterior talus. A stiff proximal tibiofibular joint restricts that adjustment.",
   "The glide direction is right, but the proximal tibiofibular joint is a synovial plane joint. The distal tibiofibular joint is the syndesmosis.",
   "A posterior talar glide is the right technique for a capsular restriction, but a capsular limit would restrict dorsiflexion equally in both knee positions."
  ],
  "answer": 1,
  "explanation": "The mortise works like an adjustable wrench. Its adjustability depends on the proximal tibiofibular joint (plane joint) and the distal tibiofibular joint (syndesmosis). Fibular glides go with ankle motion: superior and posterior with dorsiflexion, inferior and anterior with plantarflexion."
 },
 {
  "id": 73,
  "joint": "Ankle & Foot",
  "topic": "Syndesmosis",
  "stem": "A football player's foot is planted when another player falls on the back of his leg, forcing the ankle into dorsiflexion with the foot externally rotated (abducted). Which injury is MOST likely?",
  "options": [
   "A fibrous syndesmosis; the fibular head glides superiorly and posteriorly during dorsiflexion",
   "A plane joint; the fibular head glides superiorly and posteriorly during dorsiflexion",
   "A plane joint moving by translation and rotation; the fibular head glides inferiorly in dorsiflexion",
   "A plane joint; the fibular head glides inferiorly and anteriorly during dorsiflexion"
  ],
  "rationale": [
   "The syndesmotic sprain is right, but plantarflexion with inversion is the lateral (ATFL) sprain mechanism.",
   "Correct. Forceful dorsiflexion with abduction or ER wedges the talus between the malleoli and disrupts the anterior tibiofibular ligament, interosseous ligament, and membrane.",
   "Forced dorsiflexion as the mechanism is right, but the distal tibiofibular joint is a fibrous syndesmosis with no joint capsule.",
   "The mechanism is right, but forced dorsiflexion with abduction loads the syndesmosis. The ATFL is loaded in plantarflexion with inversion."
  ],
  "answer": 1,
  "explanation": "The distal tibiofibular joint is a syndesmosis held by the anterior and posterior tibiofibular ligaments, the interosseous ligament, and the interosseous membrane, with no capsule. Normal talocrural function needs a mortise that is stable but still able to adjust."
 },
 {
  "id": 74,
  "joint": "Ankle & Foot",
  "topic": "Deltoid ligament",
  "stem": "After a forceful eversion injury, radiographs show an avulsion fracture of the medial malleolus, while the deltoid ligament itself is intact. Which statement BEST explains this?",
  "options": [
   "The deltoid inserts on the navicular, talus, and calcaneus, and avulsion shows it is weaker than the bone",
   "The deltoid ligament controls eversion and is weaker than the lateral collateral ligaments",
   "The deltoid ligament controls inversion and is a strong ligament",
   "The deltoid ligament controls eversion and pronation and is strong enough that the bone often fails before the ligament"
  ],
  "rationale": [
   "The insertions are right, but avulsion means the ligament held while the bone failed, so the ligament was stronger.",
   "Its control of eversion is right, but the deltoid is stronger than the lateral ligaments.",
   "Its strength is right, but the deltoid resists eversion and pronation. The lateral ligaments resist inversion.",
   "Correct. The deltoid's superficial and deep fibers run from the medial malleolus to the navicular, talus, and calcaneus. It is strong and less often injured, so eversion forces often avulse the malleolus instead."
  ],
  "answer": 3,
  "explanation": "Medial (deltoid) ligament: strong, controls eversion and pronation, and tends to avulse or fracture the medial malleolus. Lateral ligaments (ATFL, CFL, PTFL): weaker, control inversion and supination, and are injured more often."
 },
 {
  "id": 75,
  "joint": "Ankle & Foot",
  "topic": "Lateral collateral ligaments",
  "stem": "A talar tilt (inversion stress) test performed in neutral dorsiflexion shows excessive inversion. Which ligament is MOST implicated, and why?",
  "options": [
   "The deltoid controls eversion and is strong enough that the bone often fails first",
   "The deltoid inserts on the navicular, talus, and calcaneus, and is weaker than bone",
   "The deltoid controls eversion but is weaker than the lateral collateral ligaments",
   "The deltoid controls inversion and is strong enough that the bone often fails first"
  ],
  "rationale": [
   "Correct. The CFL runs nearly vertically in neutral and crosses both the talocrural and subtalar joints, so it resists inversion in that position. The ATFL is tested with an anterior drawer.",
   "The anterior drawer targeting the ATFL is right, but the PTFL is rarely injured and is not the main inversion restraint in neutral.",
   "The ATFL's horizontal orientation in neutral is right, but that orientation makes it a poor inversion restraint in neutral. It mainly limits anterior talar translation.",
   "The CFL is right, but the ATFL is horizontal in neutral and becomes vertical in plantarflexion."
  ],
  "answer": 0,
  "explanation": "The ATFL and PTFL are more horizontal and the CFL is more vertical. A ligament resists a motion best when it lies perpendicular to that motion's axis. The CFL works in neutral and dorsiflexion, and the ATFL works in plantarflexion, the usual sprain position."
 },
 {
  "id": 76,
  "joint": "Ankle & Foot",
  "topic": "Packed positions",
  "stem": "Which statement about talocrural packed positions and their clinical use is MOST accurate?",
  "options": [
   "The CFL; the ATFL is the more vertical band in neutral and is tested in dorsiflexion",
   "The ATFL, which is more horizontal in neutral and resists inversion best there",
   "The PTFL; the ATFL is tested with an anterior drawer in plantarflexion",
   "The CFL, which is vertical in neutral; the ATFL is tested with an anterior drawer"
  ],
  "rationale": [
   "The close-packed position is right, but the open-packed position is slight plantarflexion. Full plantarflexion is an end-range position.",
   "The open-packed position is right, but the close-packed position is end-range dorsiflexion.",
   "End-range dorsiflexion is right, but in a close-packed position the ligaments are taut.",
   "Correct. Maximal bony congruence and ligament tension occur in full dorsiflexion. Slight plantarflexion leaves the most joint play."
  ],
  "answer": 3,
  "explanation": "Talocrural close-packed position is end-range dorsiflexion and open-packed is slight plantarflexion. This also explains why dorsiflexion is the stable position for landing and plantarflexion is the vulnerable one."
 },
 {
  "id": 77,
  "joint": "Ankle & Foot",
  "topic": "Subtalar joint structure",
  "stem": "Which description of the subtalar (talocalcaneal) articulations is MOST accurate?",
  "options": [
   "Close-packed is end-range dorsiflexion; open-packed is full end-range plantarflexion",
   "Close-packed is end-range dorsiflexion; open-packed is slight (about 10°) plantarflexion",
   "Close-packed is full plantarflexion; open-packed is slight (about 10°) plantarflexion",
   "Close-packed is end-range dorsiflexion, where the talocrural ligaments are lax"
  ],
  "rationale": [
   "The 75% load share is right, but at the posterior facet the talus is concave and the calcaneus is convex.",
   "Correct. The posterior facet is the main load-bearing surface. The anterior and middle facets reverse its configuration (convex talus on concave calcaneus).",
   "The surface shapes are right, but the posterior facet has a separate capsule. The anterior and middle facets share the talonavicular capsule.",
   "The reversed configuration is right, but the posterior facet carries about 75% of the force."
  ],
  "answer": 1,
  "explanation": "The subtalar joint has three plane articulations. The posterior one (concave talus, convex calcaneus) is the largest, carries about 75% of the load, and has its own capsule. The anterior and middle ones (convex talus, concave calcaneus) share a capsule with the talonavicular joint. The tarsal canal and sinus tarsi separate them."
 },
 {
  "id": 78,
  "joint": "Ankle & Foot",
  "topic": "Subtalar axis",
  "stem": "A patient's subtalar axis is inclined about 60° from the transverse plane instead of the typical 42°. Compared with a typical foot, how will subtalar motion MOST likely differ?",
  "options": [
   "Posterior facet: concave talus on convex calcaneus, about 25% of force, own capsule",
   "Posterior facet: concave talus on convex calcaneus, about 75% of force, own capsule",
   "Posterior facet: concave talus on convex calcaneus, about 75% of force, shared talonavicular capsule",
   "Posterior facet: convex talus on concave calcaneus, about 75% of force, own capsule"
  ],
  "rationale": [
   "The surface shapes and separate capsule are right, but the posterior facet carries about 75% of subtalar force.",
   "Correct. A more vertical axis turns subtalar motion toward rotation about a vertical axis (abduction and adduction), which transfers more motion to tibial rotation in weight bearing.",
   "More coupling to leg rotation is right, but a more vertical axis favors abduction and adduction. A flatter axis favors inversion and eversion.",
   "More transverse-plane motion is right, but transverse-plane talar motion is what links to leg rotation, so coupling increases."
  ],
  "answer": 1,
  "explanation": "The typical subtalar axis is about 42° (29–47°) superior and 16° (8–24°) medial to the A-P axis. At about 45°, inversion and eversion roughly equal abduction and adduction, with minimal dorsiflexion and plantarflexion. A steeper axis shifts motion toward the transverse plane, and a flatter axis shifts it toward the frontal plane."
 },
 {
  "id": 79,
  "joint": "Ankle & Foot",
  "topic": "Weight-bearing subtalar motion",
  "stem": "During weight-bearing subtalar SUPINATION, which set of segmental motions occurs?",
  "options": [
   "More abduction and adduction per degree, with less coupling to leg rotation",
   "More inversion and eversion per degree, with dorsiflexion and plantarflexion staying minimal",
   "More abduction and adduction per degree, with more coupling to leg rotation",
   "More inversion and eversion per degree, with more coupling to leg rotation"
  ],
  "rationale": [
   "Calcaneal inversion and lateral leg rotation are right, but talar adduction and plantarflexion belong to weight-bearing pronation.",
   "The talar and leg motions are right, but the calcaneus inverts during supination.",
   "Correct. With the calcaneus on the ground it can only invert or evert. The talus moves instead (abduction and dorsiflexion) and carries the leg into lateral rotation, which raises the arch.",
   "Inversion and lateral leg rotation are right, but calcaneal adduction and plantarflexion describe non-weight-bearing supination."
  ],
  "answer": 2,
  "explanation": "Non-weight-bearing supination: the calcaneus adducts, inverts, and plantarflexes on the talus. Weight-bearing supination: the calcaneus inverts while the talus abducts and dorsiflexes, with lateral leg rotation and a higher arch (pes cavus direction). Weight-bearing pronation is the reverse."
 },
 {
  "id": 80,
  "joint": "Ankle & Foot",
  "topic": "Kinetic chain",
  "stem": "A runner with excessive weight-bearing pronation has anterior knee pain. Which kinetic chain sequence BEST explains the link?",
  "options": [
   "Calcaneal adduction, inversion, and plantarflexion, and leg ER",
   "Calcaneal inversion, talar adduction and plantarflexion, and leg ER",
   "Calcaneal inversion, talar abduction and dorsiflexion, and leg ER",
   "Calcaneal eversion, talar abduction and dorsiflexion, and leg ER"
  ],
  "rationale": [
   "The increased Q-angle is right, but weight-bearing pronation internally rotates the leg.",
   "Pronation driving tibial IR is right, but excessive pronation increases the Q-angle and lateral patellar force.",
   "Correct. The talus is part of the leg's kinetic chain. As it adducts it internally rotates the leg, and excess pronation is one of the factors that raise the Q-angle and lateral patellar loading.",
   "Tibial IR during pronation is right, but in weight-bearing pronation the talus adducts and plantarflexes. Abduction and dorsiflexion belong to supination."
  ],
  "answer": 2,
  "explanation": "Subtalar motion influences the whole lower extremity, and the lower extremity influences subtalar motion. Pronation goes with leg IR and a lower arch. Supination goes with leg ER and a higher arch. Hip, knee, and foot mechanics should be assessed together."
 },
 {
  "id": 81,
  "joint": "Ankle & Foot",
  "topic": "Transverse tarsal locking",
  "stem": "In late stance, the foot must become a rigid lever for push-off. Which mechanism MOST directly produces this rigidity at the midfoot?",
  "options": [
   "Subtalar supination locks the transverse tarsal joint, and it is driven by tibial IR",
   "Tibial ER drives subtalar supination, which carries the transverse tarsal joint into supination and locks it",
   "The transverse tarsal joint becomes more mobile in supination, which helps it adapt to terrain, and the motion is driven by tibial ER",
   "Subtalar pronation locks the transverse tarsal joint, driven by tibial ER"
  ],
  "rationale": [
   "Locking through subtalar supination is right, but tibial ER, not IR, drives subtalar supination.",
   "Correct. With the subtalar joint supinated, the transverse tarsal joint is locked. The windlass mechanism adds to this rigidity at the same time.",
   "Tibial ER is the right driver, but supination locks the transverse tarsal joint. Adaptability comes with pronation.",
   "Tibial ER is the right driver, but it produces supination, and supination is what locks the midfoot. Pronation unlocks it."
  ],
  "answer": 1,
  "explanation": "Subtalar supination locks the transverse tarsal joint (rigid lever). Subtalar pronation unlocks it (flexible adaptor). Tibial ER goes with subtalar supination and tibial IR with subtalar pronation, so the foot's rigidity depends on what the leg is doing."
 },
 {
  "id": 82,
  "joint": "Ankle & Foot",
  "topic": "Transverse tarsal adaptability",
  "stem": "A hiker walks across loose, uneven rocks. Which mechanism allows the midfoot to adapt to the terrain during loading response?",
  "options": [
   "Tibial ER drives subtalar supination, which carries the transverse tarsal joint into supination and locks it",
   "Tibial IR drives subtalar supination, which carries the transverse tarsal joint into supination and locks it",
   "Tibial ER drives subtalar pronation, which carries the transverse tarsal joint into pronation and locks it",
   "Tibial ER drives subtalar supination, which leaves the transverse tarsal joint mobile to adapt to terrain"
  ],
  "rationale": [
   "Correct. In pronation the transverse tarsal joint is unlocked and mobile, so the forefoot can adjust to the ground independently of the rearfoot.",
   "Unlocking through pronation is right, but an unlocked midfoot is more adaptable.",
   "Adaptability increasing when the midfoot is unlocked is right, but supination locks it.",
   "Tibial IR producing subtalar pronation is right, but pronation unlocks the transverse tarsal joint."
  ],
  "answer": 0,
  "explanation": "With more subtalar pronation, the transverse tarsal joint becomes mobile and can absorb subtalar motion as the terrain requires. With more subtalar supination, the transverse tarsal joint is carried into supination, cannot absorb motion, and the foot is less adaptable."
 },
 {
  "id": 83,
  "joint": "Ankle & Foot",
  "topic": "Transverse tarsal axes",
  "stem": "Which statement about the transverse tarsal (midtarsal) joint axes is MOST accurate?",
  "options": [
   "Subtalar pronation unlocks the transverse tarsal joint so the midfoot can absorb motion and conform",
   "Tibial IR drives subtalar pronation, which locks the transverse tarsal joint for stability",
   "Subtalar pronation unlocks the transverse tarsal joint, which reduces the midfoot's adaptability",
   "Subtalar supination unlocks the transverse tarsal joint, which increases the midfoot's adaptability"
  ],
  "rationale": [
   "Correct. A nearly horizontal A-P axis favors frontal-plane motion. A steep oblique axis favors combined sagittal- and transverse-plane motion.",
   "The 33–50% figure is right, but the longitudinal axis mainly allows inversion and eversion.",
   "The longitudinal axis description is right, but the oblique axis mainly allows dorsiflexion, plantarflexion, abduction, and adduction, with little inversion or eversion.",
   "The oblique axis description is right, but the transverse tarsal joint has only about 33–50% of the subtalar joint's pronation and supination range."
  ],
  "answer": 0,
  "explanation": "The transverse tarsal (Chopart) joint is the talonavicular plus calcaneocuboid joints, with an S-shaped joint line. It has two axes. Its motion happens together with subtalar motion and lets the forefoot stay on the ground while the rearfoot moves."
 },
 {
  "id": 84,
  "joint": "Ankle & Foot",
  "topic": "Rearfoot–forefoot coupling",
  "stem": "A golfer's tibia externally rotates during the swing while the forefoot must stay flat on the ground. Which midfoot response allows this, and what happens if the rearfoot supinates excessively?",
  "options": [
   "Longitudinal axis: mainly inversion/eversion. Oblique axis: also mainly inversion/eversion",
   "Range is about 33–50% of the subtalar joint's. Longitudinal axis: mainly abduction/adduction",
   "Longitudinal axis: mainly inversion/eversion. Oblique axis: mainly DF/PF and abduction/adduction",
   "Oblique axis: mainly DF/PF and abduction/adduction. Range exceeds that of the subtalar joint"
  ],
  "rationale": [
   "Relative transverse tarsal pronation is right, but excessive subtalar supination locks the midfoot and reduces adaptability.",
   "Relative transverse tarsal pronation is right, but tibial ER, not IR, produces subtalar supination.",
   "Correct. Within a moderate range the midfoot counter-rotates (pronates relative to the rearfoot). At the extreme it locks into supination and cannot keep the forefoot flat.",
   "Tibial ER producing subtalar supination is right, but the midfoot counter-rotates into relative pronation."
  ],
  "answer": 2,
  "explanation": "Tibial ER leads to subtalar supination, which leads to relative transverse tarsal pronation, until supination is excessive and the transverse tarsal joint locks. Tibial IR leads to subtalar pronation, which leads to relative transverse tarsal supination, and the mobile transverse tarsal joint absorbs the motion. This counter-rotation keeps the forefoot plantigrade."
 },
 {
  "id": 85,
  "joint": "Ankle & Foot",
  "topic": "Forefoot twist",
  "stem": "A patient has a rigid, supinated rearfoot that lifts the medial border of the foot, and transverse tarsal motion is not enough to compensate. How do the tarsometatarsal joints help bring the forefoot flat?",
  "options": [
   "A pronation twist: plantarflexion of the 1st and 2nd rays and dorsiflexion of the 4th and 5th rays",
   "A supination twist: plantarflexion of the 1st and 2nd rays and dorsiflexion of the 4th and 5th rays",
   "It occurs when transverse tarsal motion is inadequate and consists of dorsiflexion of the 1st and 2nd rays",
   "A pronation twist: dorsiflexion of the 1st and 2nd rays and plantarflexion of the 4th and 5th rays"
  ],
  "rationale": [
   "Correct. Rearfoot supination lifts the medial border and presses the lateral border down. Plantarflexing the medial rays and dorsiflexing the lateral rays twists the forefoot back to the ground.",
   "The ray motions are right, but this compensation for rearfoot supination is called a pronation twist.",
   "The trigger (inadequate transverse tarsal motion) is right, but the medial rays must plantarflex to reach the ground.",
   "Calling it a pronation twist is right, but the ray motions listed belong to a supination twist."
  ],
  "answer": 0,
  "explanation": "With the rearfoot supinated, the subtalar and transverse tarsal joints are locked, so the tarsometatarsal joints adjust. The pronation twist is plantarflexion of rays 1–2 and dorsiflexion of rays 4–5. With the rearfoot pronated, the supination twist is dorsiflexion of rays 1–2 and plantarflexion of rays 4–5."
 },
 {
  "id": 86,
  "joint": "Ankle & Foot",
  "topic": "Forefoot twist",
  "stem": "A patient with a fixed calcaneal valgus (pronated rearfoot) bears weight. The lateral border of the forefoot lifts off the ground. Which compensation is expected?",
  "options": [
   "The medial border is pressed to the ground, compensated by plantarflexion of the 1st and 2nd rays",
   "A supination twist: plantarflexion of the 1st and 2nd rays and dorsiflexion of the 4th and 5th rays",
   "A supination twist: dorsiflexion of the 1st and 2nd rays and plantarflexion of the 4th and 5th rays",
   "A pronation twist, with dorsiflexion of the 1st and 2nd rays"
  ],
  "rationale": [
   "The medial border being pressed down is right, but the medial rays must dorsiflex to make room.",
   "Calling it a supination twist is right, but those ray motions are the pronation twist.",
   "Correct. Rearfoot pronation presses the medial border down and lifts the lateral border. Dorsiflexing the medial rays and plantarflexing the lateral rays brings the forefoot flat.",
   "Dorsiflexion of the 1st and 2nd rays is right, but the compensation for a pronated rearfoot is a supination twist."
  ],
  "answer": 2,
  "explanation": "Name the twist by the opposite of the rearfoot. A supinated rearfoot gets a pronation twist, and a pronated rearfoot gets a supination twist. Both happen when transverse tarsal motion is not enough."
 },
 {
  "id": 87,
  "joint": "Ankle & Foot",
  "topic": "Ray motion",
  "stem": "Which statement about ray (tarsometatarsal) motion is MOST accurate?",
  "options": [
   "A supination twist: dorsiflexion of rays 1–2 and plantarflexion of rays 4–5",
   "Medial border pressed down, compensated by plantarflexion of rays 1–2",
   "A supination twist: plantarflexion of rays 1–2 and dorsiflexion of rays 4–5",
   "A pronation twist: dorsiflexion of rays 1–2 and plantarflexion of rays 4–5"
  ],
  "rationale": [
   "Correct. Ray axes are oblique, so motion is coupled. The 1st and 5th rays mirror each other, and the 3rd ray's axis is nearly coronal.",
   "The 3rd ray axis is right, but the 1st ray is the most mobile. The 5th ray is second.",
   "The 1st ray coupling is right, but the 5th ray mirrors it: dorsiflexion with eversion and abduction.",
   "The ray motions are right, but the compensation for a pronated rearfoot is called a supination twist."
  ],
  "answer": 0,
  "explanation": "The 1st ray is the most mobile (dorsiflexion with inversion and adduction, plantarflexion with eversion and abduction). The 5th ray is second (dorsiflexion with eversion and abduction, plantarflexion with inversion and adduction). The 3rd ray is mostly sagittal, and the 2nd and 4th are in between. Ray motion can compensate for the rearfoot."
 },
 {
  "id": 88,
  "joint": "Ankle & Foot",
  "topic": "Windlass mechanism",
  "stem": "During the Jack's test, the PT passively extends the patient's great toe in standing and the medial arch rises. Which explanation is MOST accurate?",
  "options": [
   "1st ray DF with inversion and adduction; 5th ray DF with inversion and adduction; 3rd ray nearly pure DF/PF",
   "1st ray DF with eversion and abduction; 5th ray DF with inversion and adduction; 3rd ray nearly pure DF/PF",
   "1st ray is the second most mobile; 5th ray DF with eversion and abduction; 3rd ray nearly pure DF/PF",
   "1st ray DF with inversion and adduction; 5th ray DF with eversion and abduction; 3rd ray nearly pure DF/PF"
  ],
  "rationale": [
   "Plantar fascia tension is right, but the windlass supinates the rearfoot, which is why the arch rises.",
   "The 3rd ray is right, but the 1st and 5th ray couplings are reversed.",
   "The 5th and 3rd ray descriptions are right, but the 1st ray is the most mobile. The 5th ray is second.",
   "Correct. This is the windlass mechanism. Tensioning the fascia shortens the distance between the heel and the metatarsal heads, which raises the arch and supinates the foot."
  ],
  "answer": 3,
  "explanation": "The plantar fascia runs from the medial calcaneal tubercle to the plantar plates and proximal phalanges. MTP extension increases its tension (windlass), raises the arch, supinates the foot, makes it a rigid lever, and limits excessive MTP extension. A delayed or absent arch rise suggests fascial or first-ray dysfunction."
 },
 {
  "id": 89,
  "joint": "Ankle & Foot",
  "topic": "Plantar fascia loading",
  "stem": "A runner with plantar heel pain asks why the fascia is stressed during gait. Which statement is MOST accurate?",
  "options": [
   "Plantar fascia tension rises to about 96% of body weight from initial contact to terminal stance, and the tissue deforms about 9–12% in stance",
   "The fascia deforms about 9–12% in stance, and its tension is highest at initial contact and falls toward terminal stance",
   "The fascia originates on the medial calcaneal tubercle, and its tension reaches about 3 times body weight",
   "Plantar fascia tension rises to about 96% of body weight in stance, and the fascia originates on the lateral calcaneal tubercle"
  ],
  "rationale": [
   "Correct. Tension builds through stance as the arch is loaded and then as the toes extend at terminal stance (windlass), so the fascia sees close to body-weight tension every step.",
   "The 9–12% deformation is right, but tension increases from initial contact to terminal stance as the MTPs extend.",
   "The medial tubercle origin is right, but peak tension is about 96% of body weight, not 3 times.",
   "The 96% figure is right, but the fascia originates on the medial calcaneal tubercle, the typical site of heel pain."
  ],
  "answer": 0,
  "explanation": "The plantar fascia supports the arches. Its tension rises to about 96% of body weight across stance, and it deforms 9–12%. Terminal stance (heel off with MTP extension) is the peak-load moment, which is why limited first MTP extension and calf tightness are linked to plantar heel pain."
 },
 {
  "id": 90,
  "joint": "Ankle & Foot",
  "topic": "Metatarsal break",
  "stem": "Which statement about the metatarsal break during push-off is MOST accurate?",
  "options": [
   "The fascia arises from the medial calcaneal tubercle, and its tension reaches about 3 times body weight",
   "The fascia deforms 9–12% in stance, with tension highest at initial contact and falling toward push-off",
   "Tension peaks at about 96% of body weight, and the fascia arises from the lateral calcaneal tubercle",
   "Tension rises to about 96% of body weight from initial contact to terminal stance"
  ],
  "rationale": [
   "The angle is right, but the metatarsals get shorter, not longer, toward the lateral side.",
   "MTP extension is right, but the axis is oblique (54–73°), not coronal.",
   "The oblique axis is right, but the break happens with MTP extension during heel rise.",
   "Correct. Because the lateral metatarsals are progressively shorter, the MTP extension axis is oblique. That spreads load and ROM across the metatarsal heads as the heel rises."
  ],
  "answer": 3,
  "explanation": "The metatarsal break runs obliquely through the 2nd–5th metatarsal heads because metatarsal length decreases laterally. In closed chain the convex metatarsal head moves on the concave phalanx (roll and glide opposite). In open chain the concave phalanx moves on the convex head (roll and glide same direction)."
 },
 {
  "id": 91,
  "joint": "Ankle & Foot",
  "topic": "First MTP arthrokinematics",
  "stem": "A dancer with early hallux rigidus has 35° of first MTP extension. Which open-chain mobilization and rationale are MOST appropriate?",
  "options": [
   "An axis angled about 54–73°, set by metatarsals that grow longer toward the lateral side",
   "An oblique axis through the 2nd–5th metatarsal heads that occurs with MTP flexion",
   "A coronal axis through all five metatarsal heads that occurs with MTP extension",
   "An oblique axis through the 2nd–5th metatarsal heads that occurs with MTP extension"
  ],
  "rationale": [
   "The dorsal glide is right, but normal first-toe extension is about 80°.",
   "The dorsal glide is right, but concave-on-convex roll and glide go in the same direction.",
   "The concave-on-convex rule is right, but a plantar glide improves MTP flexion. Extension needs a dorsal glide.",
   "Correct. In open chain the phalanx rolls and glides dorsally during extension. Normal first-toe extension is about 80°, so this patient lacks a lot of range for push-off and relevé."
  ],
  "answer": 3,
  "explanation": "MTP joints are condyloid with more extension than flexion. Most MTP flexion is really a return to neutral from extension. Open chain: concave phalanx on convex head, same-direction roll and glide. Closed chain: convex head on concave phalanx, opposite-direction roll and glide."
 },
 {
  "id": 92,
  "joint": "Ankle & Foot",
  "topic": "Hallux valgus",
  "stem": "A patient has a progressive bunion deformity with the great toe angled toward the 2nd toe. Which statement is MOST accurate?",
  "options": [
   "Dorsal glide of the phalanx; concave on convex, so roll and glide go in opposite directions",
   "Dorsal glide of the phalanx toward the normal first MTP extension of about 40°",
   "Dorsal glide of the phalanx; concave on convex, so roll and glide go the same direction",
   "Plantar glide of the phalanx; concave on convex, so roll and glide go the same direction"
  ],
  "rationale": [
   "The normal 15–19° is right, but hallux valgus is linked to varus angulation of the 1st metatarsal.",
   "The link to kinetic chain factors is right, but hallux valgus is an increase in valgus angulation of the toe.",
   "Correct. The 1st metatarsal drifts medially (varus) at the 1st TMT joint while the hallux drifts laterally (valgus), widening the angle and pushing the metatarsal head medially into a bunion.",
   "The 1st metatarsal varus link is right, but normal hallux adduction is about 15–19°."
  ],
  "answer": 2,
  "explanation": "First-toe values: about 80° of extension and about 15–19° of adduction. An increased valgus angle is hallux valgus, often with metatarsus primus varus at the 1st TMT joint and other kinetic chain factors such as excessive pronation."
 },
 {
  "id": 93,
  "joint": "Ankle & Foot",
  "topic": "Medial arch support",
  "stem": "A 58-year-old has a progressively flattening arch. On single-limb heel raise she cannot invert the calcaneus. Which explanation BEST accounts for the collapse?",
  "options": [
   "Varus drift of the hallux, often associated with other kinetic chain factors such as pronation",
   "Valgus drift beyond the normal 15–19° of hallux adduction, often with valgus of the 1st metatarsal at the TMT",
   "Valgus drift beyond the normal 15–19° of hallux adduction, often with varus of the 1st metatarsal at the TMT",
   "Valgus drift beyond the normal 30–35° of hallux adduction, often with varus of the 1st metatarsal at the TMT"
  ],
  "rationale": [
   "Posterior tibialis dysfunction is right, but in weight-bearing pronation the talus adducts and plantarflexes.",
   "Posterior tibialis dysfunction is right, but the spring ligament supports the talar head and the medial arch.",
   "Correct. The posterior tibialis gives the strongest and most consistent dynamic support to the medial arch. The spring ligament supports the talar head. When both fail, the head drops medially and plantarly.",
   "The spring ligament supporting the talar head is right, but failure to invert the heel during a heel raise points to the posterior tibialis."
  ],
  "answer": 2,
  "explanation": "The spring (plantar calcaneonavicular) ligament runs from the sustentaculum tali to the inferior navicular, beneath the talar head, and blends with the deltoid and bifurcate ligaments. Together with the posterior tibialis it is a key medial arch stabilizer. In acquired flatfoot both often fail."
 },
 {
  "id": 94,
  "joint": "Ankle & Foot",
  "topic": "Lateral arch support",
  "stem": "A patient has lateral midfoot pain and flattening of the lateral longitudinal arch. Which structure provides key PASSIVE support to this arch?",
  "options": [
   "The calcaneocuboid joint itself, because its reciprocal saddle surfaces increase the joint's mobility",
   "The spring ligament, while the long plantar ligament spans to the bases of the 2nd–4th metatarsals",
   "The long plantar ligament, whose main role is supporting the medial longitudinal arch",
   "The long plantar ligament, which spans from the calcaneus and cuboid to the bases of the 2nd–4th metatarsals"
  ],
  "rationale": [
   "The saddle configuration is right, but its reciprocal concave-convex surfaces reduce mobility, which adds lateral column stability.",
   "The long plantar ligament's span is right, but the spring ligament supports the medial arch (talar head).",
   "The long plantar ligament is right, but it mainly supports the lateral arch. The spring ligament and posterior tibialis support the medial arch.",
   "Correct. The long plantar ligament, together with the short plantar (plantar calcaneocuboid) ligament, supports the lateral longitudinal arch from below the calcaneocuboid joint."
  ],
  "answer": 3,
  "explanation": "The calcaneocuboid joint is a saddle joint with reciprocal surfaces that limit motion. It has a separate capsule and is reinforced by the bifurcate, dorsal calcaneocuboid, short plantar, and long plantar ligaments. The long plantar ligament supports the lateral longitudinal arch."
 },
 {
  "id": 95,
  "joint": "Ankle & Foot",
  "topic": "Rearfoot measurement",
  "stem": "A PT measures rearfoot motion by bisecting the posterior calcaneus and the posterior leg. Which statement about this measurement is MOST accurate?",
  "options": [
   "Fibularis longus failure; the spring ligament normally supports the head of the talus",
   "Posterior tibialis and spring ligament failure; the talar head dorsiflexes and abducts",
   "Posterior tibialis and spring ligament failure; the talar head plantarflexes and adducts",
   "Posterior tibialis failure; the spring ligament mainly supports the lateral longitudinal arch"
  ],
  "rationale": [
   "The total arc is right, but pronation is tri-planar and cannot be measured directly.",
   "The 2:1 ratio is right, but supination cannot be measured directly. Calcaneal inversion is measured instead.",
   "Correct. Tri-planar pronation and supination cannot be captured with one goniometer. The frontal-plane calcaneal component is the clinical stand-in, and inversion is about twice eversion.",
   "The bisection method is right, but the values are reversed. Inversion is the larger motion."
  ],
  "answer": 2,
  "explanation": "Measurement assumes subtalar neutral is 0°. Normal calcaneal inversion is 20–30° and eversion 5–10° (total 25–40°). The rearfoot influences the forefoot and the forefoot influences the rearfoot, so rearfoot and forefoot varus and valgus are measured relative to neutral."
 },
 {
  "id": 96,
  "joint": "Ankle & Foot",
  "topic": "Forefoot–rearfoot compensation",
  "stem": "With the subtalar joint held in neutral in prone, a patient's forefoot is inverted relative to the rearfoot (forefoot varus). In standing, which compensation is MOST likely?",
  "options": [
   "The calcaneocuboid joint, whose reciprocal saddle surfaces increase its mobility",
   "The long plantar ligament, spanning the calcaneus and cuboid to the 2nd–4th metatarsal bases",
   "The spring ligament; the long plantar ligament spans to the 2nd–4th metatarsal bases",
   "The long plantar ligament, whose main role is to support the medial longitudinal arch"
  ],
  "rationale": [
   "Rearfoot pronation as the compensation is right, but an inverted forefoot relative to the rearfoot is forefoot varus. Forefoot valgus is usually compensated by supination.",
   "Correct. An inverted forefoot leaves the medial side off the ground. The rearfoot everts (pronates) to lower it, and weight-bearing pronation brings tibial IR up the chain.",
   "Forefoot position influencing the rearfoot is right, but an inverted forefoot is compensated by rearfoot pronation.",
   "Subtalar pronation is right, but weight-bearing pronation internally rotates the leg."
  ],
  "answer": 1,
  "explanation": "Forefoot varus is compensated by rearfoot pronation, and forefoot valgus by rearfoot supination. Rearfoot varus is typically compensated by subtalar pronation to get the medial foot down. These compensations explain many chains of pain from the foot upward."
 },
 {
  "id": 97,
  "joint": "Ankle & Foot",
  "topic": "Muscle line of pull",
  "stem": "Based on its tendon's position relative to the ankle and foot axes, which statement BEST describes the function of the fibularis (peroneus) longus?",
  "options": [
   "Supination is measured directly at the talus; inversion exceeds eversion about 2:1",
   "Pronation can't be measured directly; normal calcaneal inversion 5–10° and eversion 20–30°",
   "Pronation can be measured directly with a goniometer; total calcaneal arc is about 25–40°",
   "Pronation can't be measured directly; normal calcaneal inversion 20–30° and eversion 5–10°"
  ],
  "rationale": [
   "Passing posterior to the talocrural axis is right, but it passes lateral to the subtalar axis, so it everts.",
   "Plantarflexion and eversion are right, but it pulls the 1st ray into plantarflexion.",
   "Plantarflexion of the 1st ray is right, but the fibularis longus passes posterior to the talocrural axis and plantarflexes the ankle. The fibularis tertius is the dorsiflexing evertor.",
   "Correct. Its path behind the lateral malleolus and under the cuboid gives it eversion and plantarflexion. Its insertion holds the 1st ray down against the ground for push-off."
  ],
  "answer": 3,
  "explanation": "No ankle or foot muscle acts on one joint in isolation. A tendon's position relative to each axis tells you its function. Posterior to the talocrural axis means plantarflexion and anterior means dorsiflexion. Medial to the subtalar axis means inversion and lateral means eversion. The fibularis longus and tibialis anterior form a 'stirrup' under the medial midfoot."
 },
 {
  "id": 98,
  "joint": "Ankle & Foot",
  "topic": "Medial arch support",
  "stem": "Which statement about the posterior tibialis is MOST accurate?",
  "options": [
   "Compensatory subtalar supination, since the forefoot position influences the rearfoot",
   "Compensatory subtalar pronation, because this alignment is called forefoot valgus",
   "Compensatory subtalar pronation to lower the medial forefoot, with leg IR",
   "Compensatory subtalar pronation to lower the medial forefoot, with leg ER"
  ],
  "rationale": [
   "The axis relationships are right, but the posterior tibialis is the strongest and most consistent dynamic medial arch support.",
   "The eccentric control of pronation is right, but it lies medial to the subtalar axis, which is why it inverts and resists pronation.",
   "Correct. Its position makes it a plantarflexor and invertor. Its broad plantar attachments let it brace the medial arch and decelerate subtalar pronation during loading response.",
   "The arch support role is right, but it passes posterior to the medial malleolus and talocrural axis, so it plantarflexes."
  ],
  "answer": 2,
  "explanation": "Extrinsic arch supports include the posterior tibialis (most important), tibialis anterior, fibularis longus, FDL, and fibularis tertius. Intrinsic supports include the abductor hallucis, FHB, FDB, abductor digiti minimi, and dorsal interossei. The arches also depend on bone structure and ligaments."
 },
 {
  "id": 99,
  "joint": "Ankle & Foot",
  "topic": "Subtalar motion: NWB vs WB",
  "stem": "A patient pronates the foot while seated, then pronates it again while standing. Which statement CORRECTLY contrasts the two?",
  "options": [
   "Posterior to the talocrural and lateral to the subtalar axis; it plantarflexes the 1st ray",
   "Anterior to the talocrural and lateral to the subtalar axis; it plantarflexes the 1st ray",
   "Posterior to the talocrural and medial to the subtalar axis; it plantarflexes the 1st ray",
   "Posterior to the talocrural and lateral to the subtalar axis; it dorsiflexes the 1st ray"
  ],
  "rationale": [
   "Correct. In non-weight-bearing motion the distal segment (calcaneus) moves on the talus. In weight bearing the calcaneus can only evert on the ground, so the talus does the transverse- and sagittal-plane parts and carries the leg into IR.",
   "The weight-bearing description is right, but the non-weight-bearing motions listed describe supination.",
   "Leg IR in weight-bearing pronation is right, but in weight bearing the calcaneus only everts. The talus supplies the other two components.",
   "The non-weight-bearing description is right, but in weight-bearing pronation the talus adducts and plantarflexes. Abduction and dorsiflexion belong to supination."
  ],
  "answer": 0,
  "explanation": "The same subtalar motion is split differently between segments depending on which one is fixed. Non-weight-bearing pronation: calcaneal abduction, eversion, and dorsiflexion. Weight-bearing pronation: calcaneal eversion with talar adduction and plantarflexion, plus leg IR and a lower arch (pes planus direction)."
 },
 {
  "id": 100,
  "joint": "Ankle & Foot",
  "topic": "Anterior impingement",
  "stem": "A basketball player has anterior ankle pain at end-range dorsiflexion during a deep lunge. Imaging shows osteophytes on the anterior distal tibia and talar neck. Which explanation is MOST accurate?",
  "options": [
   "Posterior bony impingement, because the anterior talus is wider than the posterior",
   "Anterior bony impingement in the close-packed position of end-range dorsiflexion",
   "Anterior bony impingement in the open-packed position of end-range dorsiflexion",
   "Soleus tightness, which limits dorsiflexion most when the knee is flexed"
  ],
  "rationale": [
   "The wider anterior talus is right, but end-range dorsiflexion compresses the front of the joint. Posterior impingement happens at end-range plantarflexion.",
   "Correct. As dorsiflexion reaches its end, the talar neck approaches the anterior tibial lip. Osteophytes there block the motion and pinch soft tissue.",
   "Anterior impingement is right, but end-range dorsiflexion is the close-packed position.",
   "The soleus limiting dorsiflexion with the knee flexed is right, but a muscle restriction would not produce anterior joint pain with osteophytes. The block is bony and anterior."
  ],
  "answer": 1,
  "explanation": "Dorsiflexion can be limited by the gastrocnemius (knee extended), the soleus or capsule (knee flexed), or anterior impingement. Plantarflexion can be limited by anterior muscles, the capsule, or posterior impingement. Use the pain location and end feel to tell bony blocks from soft-tissue limits."
 }
];
