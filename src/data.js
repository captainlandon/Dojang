// Content dataset for the prototype. Descriptions are original paraphrase; source fields cite where each fact is documented.
// ENC = Gen. Choi Hong Hi, Encyclopedia of Taekwon-Do (15 vols). 1965 = Choi, Taekwon-Do: The Art of Self Defence.
// BTT = Basic Taekwondo Techniques and Terminology (Kukkiwon-style guide). USAT26 = USA Taekwondo April 2026 Rules Update.
const DATA = {};

DATA.tenets = [
  {en:"Courtesy", ko:"Ye Ui", hg:"예의", gist:"Treat others with politeness and fairness, respect seniority and possessions, and practise mutual concession.", src:"ENC Vol. II, pp. 8–10"},
  {en:"Integrity", ko:"Yom Chi", hg:"염치", gist:"Know right from wrong and feel conscience when wrong — no fixed breaks, no bought rank, no teaching what you don't know.", src:"ENC Vol. II, p. 11"},
  {en:"Perseverance", ko:"In Nae", hg:"인내", gist:"Set a goal — a degree, a technique — and keep at it patiently until it is reached.", src:"ENC Vol. II, p. 11"},
  {en:"Self-Control", ko:"Guk Gi", hg:"극기", gist:"Command yourself inside and outside the do jang; loss of control in free sparring can be disastrous.", src:"ENC Vol. II, p. 12"},
  {en:"Indomitable Spirit", ko:"Baekjul Boolgool", hg:"백절불굴", gist:"Face any opponent or obstacle with courage, without fear or hesitation, whatever the odds.", src:"ENC Vol. II, p. 12"}
];

DATA.oath = "The student oath is not printed in this edition of the Encyclopedia; source it from a later ITF text.";
DATA.secrets = {src:"ENC Vol. I, Training Secret of Taekwon-Do, p. 80", intro:"Diligence alone does not make good technique: a qualified instructor matters, and an unqualified one is worse than none. Keep these eight principles in mind:", items:[
 "Study the theory of power thoroughly.",
 "Understand the purpose and meaning of every movement.",
 "Coordinate eyes, hands, feet and breath into one action.",
 "Match the right attacking tool to each vital spot.",
 "Learn the correct angle and distance for attack and defence.",
 "Keep arms and legs slightly bent while a movement is in motion.",
 "Begin almost every movement with a backward motion.",
 "Make a sine wave through the movement with proper knee spring."]};
DATA.rankSystem = {src:"ENC Vol. I, System of Rank (Dan Gup Jedo), pp. 91–95", points:[
 ["19 ranks","10 grades (gup), counted down from 10th to 1st, then 9 degrees (dan), counted up from 1st to 9th. Character, fortitude and tenacity are graded alongside technique."],
 ["Why nine","Nine is the highest single digit and three times three; three is the most esteemed number in the Orient (heaven, mortals, earth), so 9th Dan is “the highest of the high”."],
 ["Three classes of black belt","1st–3rd Dan: novice stage · 4th–6th Dan: expert class · 7th–9th Dan: masters."],
 ["First Dan is a beginning","A new black belt has built a foundation, like a fledgling just able to leave the nest; Choi warns against treating every black belt as an expert."],
 ["Time to 1st Dan","Three course options in the text: 18 months (1½ h/day, 6 days/week, 702 h), 30 months (1½ h/day, 3 days/week, 585 h) or 12 months (4 h/day, 6 days/week, 1,248 h)."]]};
DATA.itfRulesHistoric = {src:"ENC Vol. I, Competition & Rules for Competition, pp. 128–136", text:"The Encyclopedia's competition rules list four events: patterns (optional and designated), sparring, power test (forefist, knife-hand, footsword and others) and special techniques (flying high kick, overhead kick, flying turning kick, 360° mid-air kick, flying reverse turning kick), with team and individual divisions. Shown here as a historical record; current ITF tournament rules differ by federation."};

// ITF Chang-Hon tul. moves: standard counts; meaning paraphrased from ENC Vol. VIII "Interpretation of Patterns".
DATA.itfTul = [
 {id:"chon-ji", name:"Chon-Ji", hg:"천지", moves:19, rank:"9th Gup", belt:"White · yellow stripe", vol:"VIII", diagram:"+", meaning:"“Heaven and Earth” — the creation of the world and the beginning of human history, so it is the first pattern a beginner learns. Two similar halves stand for heaven and earth."},
 {id:"dan-gun", name:"Dan-Gun", hg:"단군", moves:21, rank:"8th Gup", belt:"Yellow", vol:"VIII", diagram:"I", meaning:"Named for the holy Dan-Gun, legendary founder of Korea in 2333 B.C."},
 {id:"do-san", name:"Do-San", hg:"도산", moves:24, rank:"7th Gup", belt:"Yellow · green stripe", vol:"VIII", meaning:"Pseudonym of patriot Ahn Chang-Ho (1876–1938). The 24 movements represent his whole life, given to Korean education and independence."},
 {id:"won-hyo", name:"Won-Hyo", hg:"원효", moves:28, rank:"6th Gup", belt:"Green", vol:"IX", meaning:"The noted monk who introduced Buddhism to the Silla Dynasty (686 A.D.)."},
 {id:"yul-gok", name:"Yul-Gok", hg:"율곡", moves:38, rank:"5th Gup", belt:"Green · blue stripe", vol:"IX", diagram:"士", meaning:"Pseudonym of philosopher-scholar Yi I (1536–1584), the “Confucius of Korea”. 38 movements = his birthplace on the 38th parallel; the diagram means “scholar”."},
 {id:"joong-gun", name:"Joong-Gun", hg:"중근", moves:32, rank:"4th Gup", belt:"Blue", vol:"IX", meaning:"Patriot Ahn Joong-Gun, who assassinated Hiro-Bumi Ito. 32 movements = his age at execution in Lui-Shung prison (1910)."},
 {id:"toi-gye", name:"Toi-Gye", hg:"퇴계", moves:37, rank:"3rd Gup", belt:"Blue · red stripe", vol:"X", diagram:"士", meaning:"Pen name of neo-Confucian scholar Yi Hwang (16th c.). 37 movements = his birthplace on the 37th parallel; diagram = “scholar”."},
 {id:"hwa-rang", name:"Hwa-Rang", hg:"화랑", moves:29, rank:"2nd Gup", belt:"Red", vol:"X", meaning:"The Hwa-Rang youth group of the early-7th-century Silla Dynasty. 29 movements = the 29th Infantry Division, where Taekwon-Do matured."},
 {id:"choong-moo", name:"Choong-Moo", hg:"충무", moves:30, rank:"1st Gup", belt:"Red · black stripe", vol:"X", meaning:"Admiral Yi Soon-Sin, credited with the armoured turtle ship (Kobukson, 1592). It ends with a left-hand attack to symbolise his untimely death."},
 {id:"kwang-gae", name:"Kwang-Gae", hg:"광개", moves:39, rank:"1st Dan", belt:"Black", vol:"XI", diagram:"土", meaning:"Gwang-Gae-Toh-Wang, 19th king of Koguryo, who regained lost territory including much of Manchuria. 39 movements = 391 A.D., his accession."},
 {id:"po-eun", name:"Po-Eun", hg:"포은", moves:36, rank:"1st Dan", belt:"Black", vol:"XI", diagram:"—", meaning:"Pseudonym of loyal subject and poet Chong Mong-Chu (1400). The straight-line diagram represents his unerring loyalty at the end of Koryo."},
 {id:"ge-baek", name:"Ge-Baek", hg:"계백", moves:44, rank:"1st Dan", belt:"Black", vol:"XI", diagram:"I", meaning:"Ge-Baek, great general of the Baek Je Dynasty (660 A.D.). The diagram represents his severe, strict military discipline."},
 {id:"eui-am", name:"Eui-Am", hg:"의암", moves:45, rank:"2nd Dan", belt:"Black", vol:"XII", diagram:"I", meaning:"Pseudonym of Son Byong Hi, leader of the March 1, 1919 independence movement. 45 = his age when he renamed Dong Hak to Chondo Kyo (1905)."},
 {id:"choong-jang", name:"Choong-Jang", hg:"충장", moves:52, rank:"2nd Dan", belt:"Black", vol:"XII", meaning:"Pseudonym of General Kim Duk Ryang. Ends with a left-hand attack for the tragedy of his death in prison at 27."},
 {id:"juche", name:"Juche", hg:"주체", moves:45, rank:"2nd Dan", belt:"Black", vol:"XII", diagram:"⩛", meaning:"The idea that man is master of everything and decides his own destiny, said to be rooted in Baekdu Mountain; the diagram represents the mountain. Replaced Ko-Dang (1986); some organisations still teach Ko-Dang.", note:"Lineage-sensitive: content varies by federation."},
 {id:"sam-il", name:"Sam-Il", hg:"삼일", moves:33, rank:"3rd Dan", belt:"Black", vol:"XIII", meaning:"The independence movement of March 1, 1919. 33 movements = the 33 patriots who planned it."},
 {id:"yoo-sin", name:"Yoo-Sin", hg:"유신", moves:68, rank:"3rd Dan", belt:"Black", vol:"XIII", meaning:"General Kim Yoo Sin of Silla. 68 = 668 A.D., the year Korea was united. The ready posture draws the sword on the right side, for his mistake of fighting alongside foreign forces."},
 {id:"choi-yong", name:"Choi-Yong", hg:"최영", moves:46, rank:"3rd Dan", belt:"Black", vol:"XIII", meaning:"General Choi Yong, premier and commander-in-chief in 14th-century Koryo, respected for loyalty and humility; executed by subordinates under Yi Sung Gae."},
 {id:"yon-gae", name:"Yon-Gae", hg:"연개", moves:49, rank:"4th Dan", belt:"Black", vol:"XIV", meaning:"Koguryo general Yon Gae Somoon. 49 = 649 A.D., when he forced the Tang Dynasty out of Korea at Ansi Sung."},
 {id:"ul-ji", name:"Ul-Ji", hg:"을지", moves:42, rank:"4th Dan", belt:"Black", vol:"XIV", diagram:"ㄱ", meaning:"General Ul-Ji Moon Dok, who defended Korea against a Tang invasion force in 612 A.D. with hit-and-run tactics. 42 = the author's age when he designed it."},
 {id:"moon-moo", name:"Moon-Moo", hg:"문무", moves:61, rank:"4th Dan", belt:"Black", vol:"XIV", meaning:"The 30th king of Silla, buried at sea near Dae Wang Am to defend his land forever. 61 = 661 A.D., his accession."},
 {id:"so-san", name:"So-San", hg:"서산", moves:72, rank:"5th Dan", belt:"Black", vol:"XV", meaning:"The great monk Choi Hyong Ung (1520–1604). 72 = his age when he organised monk soldiers who helped repel the 1592 invasion."},
 {id:"se-jong", name:"Se-Jong", hg:"세종", moves:24, rank:"5th Dan", belt:"Black", vol:"XV", diagram:"王", meaning:"King Se-Jong, who invented the Korean alphabet in 1443 and was a noted meteorologist. 24 movements = the 24 letters of the alphabet; diagram = “king”."},
 {id:"tong-il", name:"Tong-Il", hg:"통일", moves:56, rank:"6th Dan", belt:"Black", vol:"XV", diagram:"I", meaning:"The resolution to reunify Korea, divided since 1945. The diagram symbolises a homogeneous people."}
];
DATA.historicTul = [
 {name:"Ko-Dang", hg:"고당", moves:39, note:"Listed among the 20 Chang-Hon patterns in the 1965 book; retired in favour of Juche. Some federations teach it instead of Juche.", src:"1965 Table of Contents, p. 208"}
];

// Step-by-step sequences: compact paraphrase of ENC Vol. VIII. x,y = schematic floor position; f = facing (A right, B left, D forward, C back, E/F far-end left/right).
DATA.sequences = {
 "chon-ji": {ready:"Parallel ready stance (narani junbi sogi) facing D.", end:"Bring the left foot back to the ready posture.", src:"ENC Vol. VIII, Pattern Chon-Ji", steps:[
  {m:"Left foot → B", s:"Left walking stance", t:"Low block · left forearm", f:"B", x:-1,y:0},
  {m:"Right foot → B", s:"Right walking stance", t:"Middle punch · right fist", f:"B", x:-2,y:0},
  {m:"Right foot → A, turn clockwise", s:"Right walking stance", t:"Low block · right forearm", f:"A", x:-1,y:0},
  {m:"Left foot → A", s:"Left walking stance", t:"Middle punch · left fist", f:"A", x:0,y:0},
  {m:"Left foot → D, turn counter-clockwise", s:"Left walking stance", t:"Low block · left forearm", f:"D", x:0,y:1},
  {m:"Right foot → D", s:"Right walking stance", t:"Middle punch · right fist", f:"D", x:0,y:2},
  {m:"Right foot → C, turn clockwise", s:"Right walking stance", t:"Low block · right forearm", f:"C", x:0,y:1},
  {m:"Left foot → C", s:"Left walking stance", t:"Middle punch · left fist", f:"C", x:0,y:0},
  {m:"Left foot → A", s:"Right L-stance", t:"Middle block · left inner forearm", f:"A", x:1,y:0},
  {m:"Right foot → A", s:"Right walking stance", t:"Middle punch · right fist", f:"A", x:2,y:0},
  {m:"Right foot → B, turn clockwise", s:"Left L-stance", t:"Middle block · right inner forearm", f:"B", x:1,y:0},
  {m:"Left foot → B", s:"Left walking stance", t:"Middle punch · left fist", f:"B", x:0,y:0},
  {m:"Left foot → C", s:"Right L-stance", t:"Middle block · left inner forearm", f:"C", x:0,y:-1},
  {m:"Right foot → C", s:"Right walking stance", t:"Middle punch · right fist", f:"C", x:0,y:-2},
  {m:"Right foot → D, turn clockwise", s:"Left L-stance", t:"Middle block · right inner forearm", f:"D", x:0,y:-1},
  {m:"Left foot → D", s:"Left walking stance", t:"Middle punch · left fist", f:"D", x:0,y:0},
  {m:"Right foot → D", s:"Right walking stance", t:"Middle punch · right fist", f:"D", x:0,y:1},
  {m:"Right foot → C (step back)", s:"Left walking stance toward D", t:"Middle punch · left fist", f:"D", x:0,y:0},
  {m:"Left foot → C (step back)", s:"Right walking stance toward D", t:"Middle punch · right fist", f:"D", x:0,y:-1}
 ]},
 "dan-gun": {ready:"Parallel ready stance (narani junbi sogi) facing D.", end:"Bring the left foot back to the ready posture.", src:"ENC Vol. VIII, Pattern Dan-Gun", steps:[
  {m:"Left foot → B", s:"Right L-stance", t:"Middle guarding block · knife-hand", f:"B", x:-1,y:0},
  {m:"Right foot → B", s:"Right walking stance", t:"High punch · right fist", f:"B", x:-2,y:0},
  {m:"Right foot → A, turn clockwise", s:"Left L-stance", t:"Middle guarding block · knife-hand", f:"A", x:-1,y:0},
  {m:"Left foot → A", s:"Left walking stance", t:"High punch · left fist", f:"A", x:0,y:0},
  {m:"Left foot → D, turn counter-clockwise", s:"Left walking stance", t:"Low block · left forearm", f:"D", x:0,y:1},
  {m:"Right foot → D", s:"Right walking stance", t:"High punch · right fist", f:"D", x:0,y:2},
  {m:"Left foot → D", s:"Left walking stance", t:"High punch · left fist", f:"D", x:0,y:3},
  {m:"Right foot → D", s:"Right walking stance", t:"High punch · right fist", f:"D", x:0,y:4},
  {m:"Left foot → E, turn counter-clockwise", s:"Right L-stance", t:"Twin forearm block", f:"E", x:-1,y:4},
  {m:"Right foot → E", s:"Right walking stance", t:"High punch · right fist", f:"E", x:-2,y:4},
  {m:"Right foot → F, turn clockwise", s:"Left L-stance", t:"Twin forearm block", f:"F", x:-1,y:4},
  {m:"Left foot → F", s:"Left walking stance", t:"High punch · left fist", f:"F", x:0,y:4},
  {m:"Left foot → C, turn counter-clockwise", s:"Left walking stance", t:"Low block · left forearm", f:"C", x:0,y:3},
  {m:"Stay in place", s:"Left walking stance", t:"Rising block · left forearm", f:"C", x:0,y:3},
  {m:"Right foot → C", s:"Right walking stance", t:"Rising block · right forearm", f:"C", x:0,y:2},
  {m:"Left foot → C", s:"Left walking stance", t:"Rising block · left forearm", f:"C", x:0,y:1},
  {m:"Right foot → C", s:"Right walking stance", t:"Rising block · right forearm", f:"C", x:0,y:0},
  {m:"Left foot → B, turn counter-clockwise", s:"Right L-stance", t:"Middle side strike · left knife-hand", f:"B", x:-1,y:0},
  {m:"Right foot → B", s:"Right walking stance", t:"High punch · right fist", f:"B", x:-2,y:0},
  {m:"Right foot → A, turn clockwise", s:"Left L-stance", t:"Middle side strike · right knife-hand", f:"A", x:-1,y:0},
  {m:"Left foot → A", s:"Left walking stance", t:"High punch · left fist", f:"A", x:0,y:0}
 ]}
};

DATA.kkPoomsae = [
 {name:"Taegeuk Il Jang", hg:"태극 1장", trigram:"Geon · heaven", level:"Color belt"},
 {name:"Taegeuk I Jang", hg:"태극 2장", trigram:"Tae · joyfulness (lake)", level:"Color belt"},
 {name:"Taegeuk Sam Jang", hg:"태극 3장", trigram:"Ri · fire", level:"Color belt"},
 {name:"Taegeuk Sa Jang", hg:"태극 4장", trigram:"Jin · thunder", level:"Color belt"},
 {name:"Taegeuk O Jang", hg:"태극 5장", trigram:"Seon · wind", level:"Color belt"},
 {name:"Taegeuk Yuk Jang", hg:"태극 6장", trigram:"Gam · water", level:"Color belt"},
 {name:"Taegeuk Chil Jang", hg:"태극 7장", trigram:"Gan · mountain", level:"Color belt"},
 {name:"Taegeuk Pal Jang", hg:"태극 8장", trigram:"Gon · earth", level:"Color belt"},
 {name:"Koryo", hg:"고려", level:"1st Dan"}, {name:"Keumgang", hg:"금강", level:"2nd Dan"}, {name:"Taebaek", hg:"태백", level:"3rd Dan"},
 {name:"Pyongwon", hg:"평원", level:"4th Dan"}, {name:"Sipjin", hg:"십진", level:"5th Dan"}, {name:"Jitae", hg:"지태", level:"6th Dan"},
 {name:"Cheonkwon", hg:"천권", level:"7th Dan"}, {name:"Hansu", hg:"한수", level:"8th Dan"}, {name:"Ilyeo", hg:"일여", level:"9th Dan"}
];

DATA.belts = [
 {rank:"10th Gup", color:"White", c:["#f4f1ea"], tul:null},
 {rank:"9th Gup", color:"White · yellow stripe", c:["#f4f1ea","#e8c33a"], tul:"chon-ji"},
 {rank:"8th Gup", color:"Yellow", c:["#e8c33a"], tul:"dan-gun"},
 {rank:"7th Gup", color:"Yellow · green stripe", c:["#e8c33a","#3f8f4f"], tul:"do-san"},
 {rank:"6th Gup", color:"Green", c:["#3f8f4f"], tul:"won-hyo"},
 {rank:"5th Gup", color:"Green · blue stripe", c:["#3f8f4f","#2f5fa8"], tul:"yul-gok"},
 {rank:"4th Gup", color:"Blue", c:["#2f5fa8"], tul:"joong-gun"},
 {rank:"3rd Gup", color:"Blue · red stripe", c:["#2f5fa8","#b5322a"], tul:"toi-gye"},
 {rank:"2nd Gup", color:"Red", c:["#b5322a"], tul:"hwa-rang"},
 {rank:"1st Gup", color:"Red · black stripe", c:["#b5322a","#111"], tul:"choong-moo"},
 {rank:"1st Dan", color:"Black", c:["#111"], tul:"kwang-gae"}
];
DATA.beltMeaning = [
 ["White","Innocence — the beginner with no prior knowledge."],
 ["Yellow","The earth, from which a plant sprouts and roots as the foundation is laid."],
 ["Green","The plant's growth as skill begins to develop."],
 ["Blue","Heaven, toward which the plant matures into a towering tree."],
 ["Red","Danger — cautioning the student toward control and warning the opponent away."],
 ["Black","The opposite of white: maturity and proficiency, and imperviousness to darkness and fear."]
];

DATA.stances = [
 {en:"Walking stance", ko:"Gunnun sogi", kk:"Ap-kubi (front stance) — similar role", spec:"1½ shoulder widths long (big toe to big toe), 1 width wide. Front knee over heel, rear leg straight, weight 50/50. Front toes forward, rear foot ~25° out.", src:"ENC Vol. II, Stance"},
 {en:"L-stance", ko:"Niunja sogi", kk:"Dwit-kubi (back stance) — similar role", spec:"~1½ shoulder widths from rear footsword to front toes, feet near right angle, both ~15° inward. Rear knee over toes. Weight ~70% rear / 30% front. Always half-facing.", src:"ENC Vol. II, Stance"},
 {en:"Sitting stance", ko:"Annun sogi", kk:"Juchum-seogi (horse-riding stance)", spec:"Feet ~1½ shoulder widths apart, toes forward, weight even, knees pushed out until kneecaps are over the balls of the feet.", src:"ENC Vol. II, Stance"},
 {en:"Fixed stance", ko:"Gojung sogi", spec:"Like an L-stance but weight even on both legs, ~1½ shoulder widths between feet.", src:"ENC Vol. II, Stance"},
 {en:"Rear foot stance", ko:"Dwitbal sogi", kk:"Beom-seogi (tiger stance) — similar role", spec:"One shoulder width between small toes, rear knee over toes, front foot light and ready to kick or adjust distance.", src:"ENC Vol. II, Stance"},
 {en:"Bending stance", ko:"Guburyo sogi", spec:"A one-leg stance: the standing knee is bent and the other foot is drawn up beside it, ready to deliver a side piercing or side thrusting kick.", src:"ENC Vol. II, Stance"},
 {en:"X-stance", ko:"Kyocha sogi", kk:"Kkoa-seogi", spec:"Cross one foot over or behind the other, touching lightly with the ball of the foot; weight on the stationary foot.", src:"ENC Vol. II, Stance"},
 {en:"Close stance", ko:"Moa sogi", kk:"Moa-seogi", spec:"Feet together, toes forward.", src:"ENC Vol. II, Stance"},
 {en:"Parallel stance", ko:"Narani sogi", kk:"Naranhi-seogi", spec:"Feet parallel at shoulder width, toes forward.", src:"ENC Vol. II, Stance"},
 {en:"Attention stance", ko:"Charyot sogi", kk:"Charyeot", spec:"Heels together, toes apart ~45°, hands at sides — the posture for bowing.", src:"ENC Vol. II, p. 160"}
];

// Glossary: en, ko = ITF romanisation (ENC), kk = Kukkiwon romanisation where commonly used, cat, src
DATA.glossary = [
 // numbers
 ["One","Hana","Hana","Counting"],["Two","Dool","Dul","Counting"],["Three","Set","Set","Counting"],["Four","Net","Net","Counting"],["Five","Dasaul","Daseot","Counting"],
 ["Six","Yosaul","Yeoseot","Counting"],["Seven","Ilgop","Ilgop","Counting"],["Eight","Yodoll","Yeodeol","Counting"],["Nine","Ahop","Ahop","Counting"],["Ten","Yol","Yeol","Counting"],
 // commands
 ["Attention","Charyot","Charyeot","Commands"],["Bow","Kyong ye","Gyeongrye","Commands"],["Ready","Junbi","Junbi","Commands"],["Begin","Si jak","Sijak","Commands"],
 ["Stop","Goman","Geuman","Commands"],["Return to ready","Baro","Baro","Commands"],["At ease","Swiyo","Swieo","Commands"],["Dismiss","Haesan","Haesan","Commands"],
 ["About turn","Dwiro torah","Dwiro dora","Commands"],["Spirit shout","Kihap","Kihap","Commands"],
 // places & people
 ["Training hall","Do jang","Dojang","Training"],["Practice suit","Do bok","Dobok","Training"],["Belt","Ti","Tti","Training"],["Instructor","Sabum","Sabeom-nim","Training"],
 ["Student","Jeja","Jeja","Training"],["Pattern","Tul","Poomsae","Training"],["Sparring","Matsogi","Gyeorugi","Training"],["Self-defence","Hosin sul","Hosinsul","Training"],
 ["Breaking / power test","Wirok","Gyeokpa","Training"],["Fundamental exercise","Gibon yonsup","Gibon dongjak","Training"],["Free sparring","Jayu matsogi","Jayu gyeorugi","Training"],
 ["Three-step sparring","Sambo matsogi","Sebeon gyeorugi","Training"],["Two-step sparring","Ibo matsogi","Dubeon gyeorugi","Training"],["One-step sparring","Ilbo matsogi","Hanbeon gyeorugi","Training"],
 ["Semi-free sparring","Ban jayu matsogi","","Training"],["Calisthenics","Dosoo dallyon","","Training"],["Ready posture","Junbi jase","Junbi","Training"],
 // levels & sections
 ["High section","Nopunde","Eolgul","Targets"],["Middle section","Kaunde","Momtong","Targets"],["Low section","Najunde","Arae","Targets"],["Vital spots","Kupso","Geupso","Targets"],
 ["Front","Ap","Ap","Directions"],["Side","Yop","Yeop","Directions"],["Back / rear","Dwit","Dwit","Directions"],["Inward","Anuro","An","Directions"],["Outward","Bakuro","Bakkat","Directions"],
 ["Obverse (same side)","Baro","Baro","Directions"],["Reverse (opposite side)","Bandae","Bandae","Directions"],["Twin / double","Sang","Sang","Directions"],["Flying","Twimyo","Twieo","Directions"],
 // tools
 ["Forefist","Ap joomuk","Jumeok","Tools"],["Back fist","Dung joomuk","Deung-jumeok","Tools"],["Knife-hand","Sonkal","Sonnal","Tools"],["Reverse knife-hand","Sonkal dung","Sonnal-deung","Tools"],
 ["Palm","Sonbadak","Batangson","Tools"],["Fingertip","Sonkut","Pyeonsonkkeut","Tools"],["Elbow","Palkup","Palkup","Tools"],["Forearm","Palmok","Palmok","Tools"],
 ["Inner forearm","An palmok","An-palmok","Tools"],["Outer forearm","Bakat palmok","Bakkat-palmok","Tools"],["Knee","Moorup","Mureup","Tools"],["Ball of the foot","Ap kumchi","Apchuk","Tools"],
 ["Footsword","Balkal","Balnal","Tools"],["Back heel","Dwit chook","Dwichuk","Tools"],["Instep","Baldung","Baldeung","Tools"],["Open fist","Pyun joomuk","Pyeon-jumeok","Tools"],
 ["Arc-hand","Bandal son","Agwison","Tools"],["Bear hand","Gomson","Gomson","Tools"],
 // stances
 ["Stance","Sogi","Seogi","Stances"],["Walking stance","Gunnun sogi","Ap-kubi*","Stances"],["L-stance","Niunja sogi","Dwit-kubi*","Stances"],["Sitting stance","Annun sogi","Juchum-seogi","Stances"],
 ["Fixed stance","Gojung sogi","","Stances"],["Rear foot stance","Dwitbal sogi","Beom-seogi*","Stances"],["X-stance","Kyocha sogi","Kkoa-seogi","Stances"],["Close stance","Moa sogi","Moa-seogi","Stances"],
 ["Parallel stance","Narani sogi","Naranhi-seogi","Stances"],["One-leg stance","Waebal sogi","Hakdari-seogi*","Stances"],["Bending stance","Guburyo sogi","","Stances"],["Diagonal stance","Sasun sogi","","Stances"],
 ["Vertical stance","Soojik sogi","","Stances"],["Low stance","Nachuo sogi","","Stances"],
 // blocks
 ["Block","Makgi","Makgi","Blocks"],["Low block","Najunde makgi","Arae makgi","Blocks"],["Rising block","Chookyo makgi","Eolgul makgi","Blocks"],["Middle block","Kaunde makgi","Momtong makgi","Blocks"],
 ["Guarding block","Daebi makgi","","Blocks"],["Twin forearm block","Sang palmok makgi","","Blocks"],["X-fist / X block","Kyocha joomuk makgi","Eotgeoreo makgi","Blocks"],["Wedging block","Hechyo makgi","Hecheo makgi","Blocks"],
 ["Pressing block","Noollo makgi","Nulleo makgi","Blocks"],["Hooking block","Golcho makgi","","Blocks"],["Circular block","Dollimyo makgi","","Blocks"],["Checking block","Momchau makgi","","Blocks"],
 ["U-shape block","Mongdung-i makgi","","Blocks"],["W-shape block","San makgi","Santeul makgi","Blocks"],["Scooping block","Duro makgi","","Blocks"],["Pushing block","Miro makgi","","Blocks"],
 // attacks
 ["Punch","Jirugi","Jireugi","Attacks"],["Strike","Taerigi","Chigi","Attacks"],["Thrust","Tulgi","Jjireugi","Attacks"],["Upset punch","Dwijibo jirugi","","Attacks"],
 ["Vertical punch","Sewo jirugi","","Attacks"],["Turning punch","Dollyo jirugi","Dollyeo jireugi","Attacks"],["Angle punch","Giokja jirugi","","Attacks"],["Double punch","Doo jirugi","Dubeon jireugi","Attacks"],
 // kicks
 ["Kick","Chagi","Chagi","Kicks"],["Front snap kick","Apcha busigi","Ap-chagi","Kicks"],["Side piercing kick","Yopcha jirugi","Yeop-chagi","Kicks"],["Side thrusting kick","Yopcha tulgi","","Kicks"],
 ["Turning kick","Dollyo chagi","Dollyeo-chagi","Kicks"],["Back piercing kick","Dwitcha jirugi","Dwit-chagi","Kicks"],["Reverse turning kick","Bandae dollyo chagi","Dwi-huryeo-chagi","Kicks"],["Downward kick","Naeryo chagi","Naeryeo-chagi","Kicks"],
 ["Crescent kick","Bandal chagi","Bandal-chagi","Kicks"],["Hooking kick","Golcho chagi","Huryeo-chagi","Kicks"],["Twisting kick","Bituro chagi","Biteureo-chagi","Kicks"],["Pushing kick","Milgi","Mireo-chagi","Kicks"],
 ["Rising kick","Cha olligi","","Kicks"],["Checking kick","Cha momchugi","","Kicks"],["Pressing kick","Noollo chagi","","Kicks"],["Consecutive kick","Yonsok chagi","Yeonsok-chagi","Kicks"],
 ["Flying kick","Twimyo chagi","Twieo-chagi","Kicks"],["Skip kick","Durokamyo chagi","","Kicks"],["Sweeping kick","Suroh chagi","Huryeo-chagi","Kicks"],["Vertical kick","Sewo chagi","","Kicks"],
 // theory
 ["Theory of power","Him ui wolli","","Theory"],["Reaction force","Bandong ryok","","Theory"],["Concentration","Jip joong","","Theory"],["Equilibrium","Kyun hyung","","Theory"],
 ["Breath control","Hohup jojul","","Theory"],["Mass","Zilyang","","Theory"],["Speed","Sokdo","","Theory"],["Tenets","Jungshin","","Theory"]
];
DATA.glossaryNote = "ITF column follows the romanisation printed in the Encyclopedia's volume indexes (Vols. II–VII). Kukkiwon column uses common Revised Romanisation; * marks a near-equivalent technique rather than an identical one. Every row needs native-speaker and lineage review before release.";


DATA.charter = {src:"ENC Vol. I, Charter of Taekwon-Do (Taekwon-Do Hun Jang), pp. 12–13", parts:[
 ["Preamble","Taekwon-Do aims at moral rearmament, intellect, graceful technique, power and physical beauty, so it can be part of daily life like breathing and thinking. The founder sets out its philosophy so morality, beauty and power can flourish together."],
 ["Part 1","Scientific practice improves health and nourishes the intellect, and equips one to help others in the cause of justice, toward a happier, more peaceful society."],
 ["Part 2","To come to terms with life's hard aspects and with death, keep studying for power, grace and a larger spiritual life; the motivation to study is itself an inheritance for later generations."],
 ["Part 3","Stay humble and merciful rather than greedy; never compromise principles or act from selfish motives, so the art passes on free, independent and pure."],
 ["Part 4","All students follow the same rules and are judged by the same standards whatever their station, origin or religion, showing the equality and brotherhood of people."],
 ["Part 5","Against a society absorbed in material excess and dependence on machines, dedication to the art promotes a moral society of self-discipline, sacrifice and devotion."],
 ["Part 6","Those who serve others and follow their conscience help their juniors and respect their instructors and seniors."],
 ["Conclusion","A beginning is a large part of any undertaking: act whenever acting would benefit society, and you yourself benefit most."]]};

DATA.ideals = {src:"ENC Vol. I, History of Taekwon-Do, pp. 40–41", intro:"Formulated by Gen. Choi during the 1959 overseas demonstration tour:", items:[
 "With an upright mind and a strong body, gain the confidence to stand for justice at all times.",
 "Unite with everyone in common brotherhood, regardless of religion, race, nation or ideology.",
 "Help build a peaceful society where justice, morality, trust and humanism prevail."]};

DATA.principles = {src:"ENC Vol. I, History of Taekwon-Do, pp. 42–43", intro:"The twelve design principles Gen. Choi says every technique was built on — what makes Taekwon-Do “a martial art, an aesthetic art, a science and sport”:", items:[
 "Maximum power, following scientific formulas and kinetic energy.",
 "Principles clear enough that even a layperson can tell correct from incorrect movement.",
 "Exactly defined distance and angle for every movement.",
 "A clear, simple purpose and method for each movement, to make teaching easy.",
 "Rational teaching methods so everyone — young and old, men and women — can benefit.",
 "Correct breathing that adds speed and reduces fatigue.",
 "The ability to attack any vital spot and defend against any attack.",
 "Attacking tools clearly defined and grounded in the body's structure.",
 "Movements easy enough to enjoy as sport and recreation.",
 "Special care for health and injury prevention.",
 "Harmony and rhythm, so the art is aesthetically pleasing.",
 "Each pattern movement expressing the character of the person it is named after."]};

DATA.spiritual = {src:"ENC Vol. I, History of Taekwon-Do, p. 41", text:"Gen. Choi describes the spiritual side as fusing oneself with the ideals of Taekwon-Do and understanding the full meaning of each pattern. If practitioners see themselves as one with the art, they will respect it as they respect their own bodies and never use it dishonourably — “life and work become one.” He also says the pattern names honour notable figures from Korean history, so understanding them shows the art is for self-defence and justice only."};

DATA.tenetDetail = {src:"ENC Vol. I, Explanation of Tenets, pp. 15–17", items:[
 ["Courtesy","Nine elements: mutual concession; shame at one's own faults rather than contempt for others'; politeness; a sense of justice and humanity; distinguishing instructor and student, senior and junior, elder and younger; etiquette; respect for others' possessions; fairness and sincerity; declining doubtful gifts."],
 ["Integrity","Defined as knowing right from wrong and feeling guilt when wrong. Lapses include teaching improper technique, “fixing” breaking boards, hiding poor technique behind fancy halls or flattery, requesting or buying rank, seeking rank for ego, teaching for material gain, not living up to one's words, and being too proud to ask juniors' opinions."],
 ["Perseverance","Set a goal — a degree or a perfected technique — and persist. Choi cites Robert Bruce and the spider, and Confucius: impatience in small matters rarely brings success in great ones."],
 ["Self-control","Vital in sparring and in personal affairs; living beyond one's capability is also a lack of it. Choi cites Lao-Tzu: the stronger person is the one who wins over oneself."],
 ["Indomitable spirit","Courage when principles meet overwhelming odds, as with Leonidas at Thermopylae. A serious student stays modest and honest but faces injustice without fear or hesitation."]]};

DATA.theory = [
 {en:"Reaction force", ko:"Bandong ryok", gist:"Pulling the opposite hand back as the attacking hand goes out — and an opponent moving in — multiplies impact."},
 {en:"Concentration", ko:"Jip joong", gist:"Focus force onto the smallest target area and into the shortest time."},
 {en:"Equilibrium", ko:"Kyun hyung", gist:"Keep the body balanced — static and dynamic stability — so force is not lost."},
 {en:"Breath control", ko:"Hohup jojul", gist:"Exhale sharply at impact; never inhale at the moment of attack or block."},
 {en:"Mass", ko:"Zilyang", gist:"Use the whole body's weight — hip twist and the knee-spring 'sine wave' — not just the limb."},
 {en:"Speed", ko:"Sokdo", gist:"The most important factor: force rises with the square of speed."}
];
DATA.theorySrc = "ENC Vol. II, Theory of Power (pp. 14–48)";

DATA.wt2026 = {
 title:"WT Kyorugi rule changes — Tashkent General Assembly (April 2026)",
 effective:"Ratified April 10, 2026; WT implementation from June 2026; USA Taekwondo from the American Open East (May 29, 2026).",
 items:[
  ["Point gap raised to 15","The gap that ends a round goes from 12 to 15 points, because spinning head kicks rose from 5 to 6 points."],
  ["Double points for passivity","A gam-jeom for passive behaviour in the last 10 seconds of a round gives the opponent 2 points (still counted as 1 gam-jeom). Passive: crossing the boundary, falling, avoiding the match, a rejected technical-card request."],
  ["Boundary line","Any part of the foot crossing the boundary line now draws a gam-jeom — not only the whole foot."],
  ["Winner declaration","Athletes return to centre; “Chung, Hong”, then “Cha-ryeot” and “Kyeong-rye” before the winner is announced. Helmets may stay on or come off for the bow."],
  ["Technical card (green)","Coaches now hold a challenge card (blue/red) for referee calls and a technical card (green) for time issues, phantom points, scoreboard entry and PSS tests. The green card is always kept; a rejected request gives the athlete a gam-jeom for misconduct (2 points to the opponent in the last 10 seconds)."]
 ],
 src:"USA Taekwondo April 2026 Rules Update (supplied PDF)"
};

DATA.history = [
 ["Age 15","Born frail, Choi begins Taek Kyon on the advice of his calligraphy teacher.","ENC Vol. I, p. 39"],
 ["1938","Leaves for Japan to study and resolves to earn a Karate black belt there.","ENC Vol. I, p. 39"],
 ["1940s","Initiates the Pyongyang Student Soldiers' independence movement and is jailed by the Japanese army.","ENC Vol. I, p. 39"],
 ["Jan 1946","Commissioned a second lieutenant; posted to the 4th Infantry Regiment, Kwangju, where he teaches Karate to his soldiers and resolves to create a Korean martial art.","ENC Vol. I, p. 39"],
 ["Mar 1946","Begins systematically developing new techniques.","ENC Vol. I, p. 40"],
 ["1954","Foundation of the new art nearly complete by year's end.","ENC Vol. I, p. 40"],
 ["11 Apr 1955","The art is named “Taekwon-Do”.","ENC Vol. I, p. 40"],
 ["Mar 1959","Leads the military demonstration team to South Vietnam and Taiwan — Korea's first such tour — and sets out the three ideals.","ENC Vol. I, p. 40"],
 ["1965","English edition, Taekwon-Do: The Art of Self Defence — 20 Chang-Hon patterns plus Shotokan-derived forms.","1965 book"],
 ["1966","International Taekwon-Do Federation founded in Seoul.","General sources"],
 ["1973","World Taekwondo Federation (now WT) founded; Kukkiwon becomes the Korean curriculum authority.","General sources"],
 ["1983","15-volume Encyclopedia of Taekwon-Do published.","General sources"],
 ["1986","Juche replaces Ko-Dang in the ITF syllabus.","General sources"],
 ["2000","Taekwondo (WT rules) becomes a full Olympic sport in Sydney.","General sources"],
 ["2002","Gen. Choi dies; the ITF later splits into three federations of the same name.","General sources"],
 ["2026","WT ratifies the Tashkent Kyorugi rule changes.","USAT26"]
];
DATA.historyNote = "Entries to 1959 follow Gen. Choi's own account in Vol. I. Historians and the Kukkiwon tradition give other accounts of Taekwondo's origins (e.g. the roles of the post-war kwans and Taekkyeon), so the full app should present these as perspectives, with sources.";

DATA.sources = [
 {k:"ENC", t:"Choi Hong Hi — Encyclopedia of Taekwon-Do, 15 vols. (supplied scan; Vol. I image-only, OCR-recovered)", role:"Primary ITF authority", status:"Copyrighted · license or cite-and-paraphrase"},
 {k:"1965", t:"Choi Hong Hi — Taekwon-Do: The Art of Self Defence (1965)", role:"Historical edition — evolution of the syllabus", status:"Copyrighted (© 1965) · scanned, OCR needed"},
 {k:"BTT", t:"Basic Taekwondo Techniques and Terminology (111 pp., Kukkiwon-style)", role:"Kukkiwon terminology cross-reference", status:"Provenance unknown · verify before use"},
 {k:"USAT26", t:"USA Taekwondo — April 2026 Rules Update (WT, Tashkent)", role:"Current WT Kyorugi rules", status:"Public summary · cite; link to WT originals"},
 {k:"WT", t:"World Taekwondo Competition Rules & Interpretation (in force June 1, 2026)", role:"Authoritative WT rules", status:"To license/link"},
 {k:"KKW", t:"Kukkiwon Taekwondo Textbook & Textbook of Taekwondo Poomsae", role:"Authoritative Kukkiwon curriculum", status:"To license"},
 {k:"ITF", t:"Current ITF federation syllabi & tournament rules", role:"Federation-specific variations", status:"To partner"}
];

// Video library: links supplied by the founder (24 Nov 2026). The app links out; nothing is embedded or copied.
// checked: "confirmed" = title/channel confirmed by search; "unchecked" = could not be verified from Claude's environment.
DATA.videoNote = "Links supplied by the founder on 24 Nov 2026. “Confirmed” means a search matched the title and channel. “Not yet checked” means the link could not be verified from where this was built, so open it and check before you rely on it. All videos open on YouTube; nothing is embedded or copied.";
DATA.videos = [
 {cat:"Poomsae · full curricula", lineage:"Kukkiwon/WT", items:[
  {t:"태권도 품새 (Taekwondo Poomsae) — all forms", by:"Kukkiwon World Taekwondo Headquarters (as listed)", url:"http://www.youtube.com/playlist?list=PLSFr5pEwo7gRNGXHlU-ZVxzha5A0c_M3i", kind:"playlist", official:true, checked:"unchecked", note:"Kukkiwon's education playlist exists; this ID not yet confirmed as that playlist."},
  {t:"Official Kukkiwon poomsae videos 2020", by:"Chung Do Taekwondo", url:"http://www.youtube.com/playlist?list=PLx1ZaPXDcgpZN0uxorV-fJsy8EggpbE_i", kind:"playlist", checked:"unchecked", note:"A re-upload playlist, not Kukkiwon's own channel."},
  {t:"All Taekwondo forms", by:"JYMOON Taekwondo", url:"http://www.youtube.com/playlist?list=PLamOLHCK6bE993h9x4GZ2eacLCSX5RzHV", kind:"playlist", checked:"unchecked"},
  {t:"Taeguk Poomsae 1–8 explained step by step", by:"Kickstart Taekwondo", url:"http://www.youtube.com/playlist?list=PLCOxDMIhWiR9QAsWbYw53Qp8IYp6PRhdS", kind:"playlist", checked:"unchecked"},
  {t:"Kukkiwon black belt poomsae (Koryo → Ilyeo)", by:"Fortunato Novelliere", url:"http://www.youtube.com/playlist?list=PLe2GMGM7xZNlpIr4KjTBeNsE-fcF-vo8z", kind:"playlist", checked:"unchecked"}]},
 {cat:"Poomsae · single-video references", lineage:"Kukkiwon/WT", items:[
  {t:"Taegeuk forms 1–8, walkthrough & instruction (39 min)", by:"HK Taekwondo", url:"http://www.youtube.com/watch?v=4E5nKA86M1Y", kind:"video", checked:"unchecked"},
  {t:"Taegeuk 1–8, full-speed reference (6 min)", by:"Team Sajado", url:"http://www.youtube.com/watch?v=7iutNejP51Y", kind:"video", checked:"unchecked"},
  {t:"Taekwondo Poomsae 1–8 (7 min)", by:"Taekwondo Taepoong", url:"http://www.youtube.com/watch?v=6ELApKxX3qk", kind:"video", checked:"unchecked"},
  {t:"Sipjin breakdown (30 min)", by:"Kukkiwon World Taekwondo Headquarters (as listed)", url:"http://www.youtube.com/watch?v=hOZB0IESJ38", kind:"video", official:true, checked:"unchecked"}]},
 {cat:"Stretching & mobility for kicks", lineage:"General", safety:true, items:[
  {t:"how to kick HIGHER (Taekwondo Tutorial) — flexibility & mobility (28 min)", by:"Tae Kwon Do Fury", url:"http://www.youtube.com/watch?v=oAHN-iAMrfM", kind:"video", checked:"confirmed", note:"Includes promotion for the creator's paid course."},
  {t:"Common stretching mistakes", by:"Tae Kwon Do Fury", url:"http://www.youtube.com/watch?v=Fm_QDLEnyc4", kind:"video", checked:"unchecked"},
  {t:"Stretch routine for higher kicks", by:"Nat Hearn", url:"http://www.youtube.com/watch?v=7WHwEvUOJQM", kind:"video", checked:"unchecked"},
  {t:"Stretches for higher kicks", by:"Nat Hearn", url:"http://www.youtube.com/watch?v=VUoy6ticasI", kind:"video", checked:"unchecked"},
  {t:"How to improve your axe kick", by:"Danikickz", url:"http://www.youtube.com/watch?v=VoCBHLXK8SY", kind:"video", checked:"unchecked"}]},
 {cat:"Kicks, hand techniques & form mechanics", lineage:"Mostly Kukkiwon/WT", items:[
  {t:"How to kick in Taekwondo — 9 essential kicks (24 min)", by:"Tae Kwon Do Fury", url:"http://www.youtube.com/watch?v=8obsO7lOkoM", kind:"video", checked:"unchecked"},
  {t:"How to master your basic kicks", by:"Nat Hearn", url:"http://www.youtube.com/watch?v=3XYbC5UbLOc", kind:"video", checked:"unchecked"},
  {t:"Hand techniques — all colour-belt curriculum", by:"Black Eagle Martial Arts", url:"http://www.youtube.com/watch?v=s4FcS03tZac", kind:"video", checked:"unchecked"},
  {t:"Basic Taekwondo blocks", by:"TaekwondoShawn", url:"http://www.youtube.com/watch?v=q7L9ImZH3Jo", kind:"video", checked:"unchecked"}]}
];
DATA.videoGaps = "No ITF (Chang-Hon) tul videos yet: the supplied list covers Kukkiwon/WT forms only. Sources to look for: an ITF federation's official channel, or instructor-filmed videos commissioned for Dojang.";
