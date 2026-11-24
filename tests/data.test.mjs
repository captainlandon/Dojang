// Content-integrity tests. Run: node --test tests/
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const ctx = {};
vm.createContext(ctx);
vm.runInContext(readFileSync(new URL("../src/data.js", import.meta.url), "utf8") + "\n" +
  readFileSync(new URL("../src/shell.js", import.meta.url), "utf8") + "\nthis.DATA = DATA;", ctx);
const D = JSON.parse(JSON.stringify(ctx.DATA)); // plain objects (avoid cross-realm comparisons)

test("24 Chang-Hon tul with unique ids", () => {
  assert.equal(D.itfTul.length, 24);
  assert.equal(new Set(D.itfTul.map(t => t.id)).size, 24);
});
test("every step sequence matches its pattern's movement count", () => {
  for (const [id, seq] of Object.entries(D.sequences)) {
    const t = D.itfTul.find(x => x.id === id);
    assert.ok(t, `sequence for unknown pattern ${id}`);
    assert.equal(seq.steps.length, t.moves, `${id}: ${seq.steps.length} steps vs ${t.moves} moves`);
    for (const s of seq.steps) assert.match(s.f, /^[A-F]$/, `${id}: bad facing ${s.f}`);
  }
});
test("belt path references real patterns, in syllabus order", () => {
  const order = D.belts.filter(b => b.tul).map(b => D.itfTul.findIndex(t => t.id === b.tul));
  assert.ok(order.every(i => i >= 0));
  assert.deepEqual(order, [...order].sort((a, b) => a - b));
});
test("glossary rows are well-formed and English terms are unique", () => {
  for (const g of D.glossary) assert.equal(g.length, 4, JSON.stringify(g));
  const en = D.glossary.map(g => g[0]);
  assert.equal(new Set(en).size, en.length, "duplicate English term");
});
test("every tenet, stance and charter part carries a source", () => {
  for (const x of [...D.tenets, ...D.stances]) assert.ok(x.src, JSON.stringify(x));
  assert.ok(D.charter.src && D.secrets.src && D.rankSystem.src);
});
test("evidence registry entries are complete and labelled", () => {
  const labels = new Set(["Supported", "Promising", "Outcome-specific", "Mixed", "Not supported"]);
  for (const e of D.dojang.evidence) {
    for (const k of ["topic", "label", "pop", "find", "use", "src"]) assert.ok(e[k], `${e.topic}: missing ${k}`);
    assert.ok(labels.has(e.label), `${e.topic}: unknown label ${e.label}`);
  }
});
test("track statuses are valid and only live tracks link to a module", () => {
  for (const t of D.dojang.tracks) {
    assert.ok(["live", "planned", "blocked", "research"].includes(t.status));
    assert.equal(Boolean(t.href), t.status === "live", t.id);
  }
});
test("video library: https/http YouTube links, a check status, no duplicates", () => {
  const all = D.videos.flatMap(g => g.items);
  assert.ok(all.length >= 22);
  assert.ok(D.videos.some(g => g.lineage === "ITF"), "no ITF video group");
  for (const id of Object.keys(D.tulVideo)) assert.ok(D.itfTul.some(x => x.id === id), id);
  for (const v of all) {
    if (v.kind === "page") assert.match(v.url, /^https:\/\//, v.url);
    else assert.match(v.url, /^https?:\/\/www\.youtube\.com\/(watch\?v=|playlist\?list=)[\w-]+$/, v.url);
    assert.ok(["confirmed", "unchecked"].includes(v.checked), v.t);
  }
  assert.equal(new Set(all.map(v => v.url)).size, all.length, "duplicate link");
});
