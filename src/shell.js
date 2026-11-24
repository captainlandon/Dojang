// Dojang shell content (Tao Institute offering). Source: Dojang Foundational Dossier v0.1 (24 Nov 2026) + Claude review v0.2.
DATA.dojang = {
 motto: "For all that you may become.",
 summary: "Dojang is an applied offering of the Tao Institute for Actualization: a research-informed environment for cultivating the whole person. Intellectual, physical, creative and psychological development are treated as one interacting system, not separate pursuits.",
 nameNote: "道場 (dojang) means “place of the Way”. Its 道 is the Tao of the Tao Institute.",
 tracks: [
  {id:"taekwondo", name:"Taekwon-Do", hg:"태권도", status:"live", href:"#home", kind:"Martial arts & training",
   scope:"Patterns, terminology, stances, philosophy, belt path, training timer, quizzes and rules, built on Gen. Choi's Encyclopedia with lineage-labelled sources.",
   guard:"Study companion between classes, not a substitute for a qualified instructor. No automatic rank certification."},
  {id:"health", name:"Whole-Body Health", hg:"전신 건강", status:"planned", kind:"Constituent facet",
   scope:"Physiology, anatomy, nutrition, sleep, movement, preventive wellness and health literacy.",
   guard:"Education only, not diagnosis or treatment. No identifiable health data until counsel reviews FTC Health Breach Notification Rule and COPPA obligations."},
  {id:"life", name:"Life Curriculum", hg:"삶", status:"blocked", kind:"Constituent facet · 23 modules",
   scope:"Preserve all 23 established modules and their competencies.",
   guard:"The canonical module list must be recovered from the founder's files before anything is mapped; modules are not invented or renumbered."},
  {id:"shaolin", name:"Shaolin Kung Fu", hg:"少林", status:"planned", kind:"Martial arts & training",
   scope:"Progressive technique, conditioning, coordination and ethical practice.",
   guard:"Needs a named lineage, partner instructor and licensed or original content: there is no single canonical corpus comparable to Gen. Choi's."},
  {id:"mindbody", name:"Mind–body wellness", hg:"心身", status:"planned", kind:"Practice track",
   scope:"Tai Chi, meditation, mindful movement and breathing practices.",
   guard:"Intake screen, opt-outs and accessible alternatives; adverse effects are reported in a minority of meditators."},
  {id:"sound", name:"Sound & auditory inquiry", hg:"소리", status:"research", kind:"Research topic",
   scope:"Binaural beats as a research topic with evidence labels and safe-volume guidance.",
   guard:"Solfeggio frequencies: historical and cultural explanation only. No listening feature and no health claims (founder decision pending)."},
  {id:"cognitive", name:"Cognitive & creative development", hg:"創", status:"planned", kind:"Cross-cutting",
   scope:"Attention, memory, reasoning, imagination, musical and artistic practice, reflection and metacognition.",
   guard:"Designed for near transfer; cross-domain transfer is treated as a hypothesis to test, not a product claim."}
 ],
 axioms: [
  ["Embodiment","Cognition and agency are embodied."],
  ["Interdependence","Physiological, intellectual, emotional and creative development interact."],
  ["Developmental synergy","Cultivating one capability may support others; transfer is an empirical question."],
  ["Practice","Knowledge becomes capability through application, feedback and refinement."],
  ["Accessibility & individuality","Opportunities should be broadly accessible and adaptable."],
  ["Empirical accountability","Claims stay open to criticism, measurement and revision."]
 ],
 axiomStatus: "Provisional — proposed for founder review (Dossier §1).",
 cycle: [
  {k:"Reality & body", obj:"Physiology, health and environment", tkd:"Conditioning, stances that build leg strength, the training hall itself.", link:"#techniques"},
  {k:"Sense", obj:"Sensory access and observation", tkd:"Watching a partner's shoulders and hips; hearing the count in Korean.", link:"#train"},
  {k:"Perceive", obj:"Attention, awareness and interpretation", tkd:"Reading distance and timing in sparring; noticing your own stance width.", link:"#techniques"},
  {k:"Model", obj:"Knowledge, reasoning and accurate mental models", tkd:"Theory of power; the pattern floor diagram; knowing which tool fits which target.", link:"#pattern-chon-ji"},
  {k:"Value / imagine", obj:"Ethical judgment, practical wisdom and creativity", tkd:"The tenets and the Charter; the meaning behind each pattern's name.", link:"#philosophy"},
  {k:"Decide", obj:"Deliberation and choice", tkd:"Choosing a technique under time pressure; choosing to train today.", link:"#train"},
  {k:"Act", obj:"Skill, coordination and execution", tkd:"Executing a pattern movement with sine wave, breath and focus.", link:"#pattern-dan-gun"},
  {k:"Feedback", obj:"Observe consequences and detect errors", tkd:"Instructor correction, quiz results, rep log.", link:"#quiz"},
  {k:"Learn", obj:"Adapt models, skills and future choices", tkd:"Revising technique; the belt path's next step.", link:"#path"}
 ],
 cycleNote: "A proposed interpretation of the founder's cognition-and-action diagram, not a literal neural sequence (Dossier §2). Action changes the world and the body; feedback and learning reshape what comes next.",
 evidence: [
  {topic:"Acute exercise → executive function", label:"Supported", pop:"Children, adolescents, young adults", find:"Meta-analysis: acute exercise improved executive functions (d = 0.52); the chronic-exercise effect was not significant in the same analysis.", use:"Short movement before study blocks; no claims about long-term cognitive gains.", src:"Verburgh et al., Br J Sports Med 2014"},
  {topic:"Taekwondo → children's self-regulation", label:"Promising", pop:"Children", find:"Randomized field trial: a standard 11-week beginners' course improved self-regulation. Reviews call the evidence promising but note few well-controlled studies.", use:"Research hypothesis for the Institute; cite the trial, not anecdote.", src:"Dev Psychol 2022;58(3):522–534"},
  {topic:"Tai Chi → balance and falls", label:"Supported", pop:"Older adults; Parkinson's disease", find:"May improve balance and prevent falls in older adults and people with Parkinson's; unknown for stroke, osteoarthritis or heart failure.", use:"Balance-focused practice for older learners, with medical-clearance prompts.", src:"NCCIH, Tai Chi: What You Need To Know"},
  {topic:"Meditation — benefits and harms", label:"Outcome-specific", pop:"General", find:"Benefits depend on outcome and population. A systematic review found adverse events in about 8.3% of participants overall (3.7% experimental, 33.2% observational).", use:"Intake screen, opt-outs, adverse-event reporting.", src:"Farias et al., Acta Psychiatr Scand 2020"},
  {topic:"Binaural beats", label:"Mixed", pop:"Mostly adults, lab settings", find:"A 2018 meta-analysis found a medium effect (g = 0.45) on memory, attention, anxiety and pain; a 2023 systematic review found brainwave-entrainment evidence inconclusive and studies heterogeneous.", use:"Research topic only; optional, labelled, safe volume.", src:"Garcia-Argibay et al. 2019; Ingendoh et al., PLoS One 2023"},
  {topic:"Solfeggio frequencies", label:"Not supported", pop:"—", find:"No scientific basis; fact-checkers trace the frequencies to numerology from Bible verse numbers.", use:"Cultural and historical context only; no listening feature.", src:"Science Feedback; Skeptoid #474"},
  {topic:"Cognitive training → far transfer", label:"Not supported", pop:"Children and adults", find:"Second-order meta-analyses: near transfer is reliable; far transfer is close to zero.", use:"Design for near transfer; test any cross-domain claim.", src:"Sala & Gobet, Perspect Psychol Sci 2023"}
 ]
};
