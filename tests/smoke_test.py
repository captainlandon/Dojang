"""Browser smoke test: every route renders without script errors, and
saved progress written under the original 'dj_' localStorage keys survives.
Run: python3 tests/smoke_test.py   (needs: pip install playwright && playwright install chromium)"""
import asyncio, pathlib, sys
from playwright.async_api import async_playwright

DIST = pathlib.Path(__file__).resolve().parent.parent / "dist" / "index.html"
ROUTES = ["dojang", "tracks", "cycle", "evidence", "home", "patterns", "pattern-chon-ji", "pattern-dan-gun",
          "pattern-yul-gok", "watch", "glossary", "techniques", "philosophy", "path", "train", "quiz", "rules", "about"]
EXPECT = {"dojang": "become", "tracks": "Tracks", "cycle": "agency cycle", "evidence": "Evidence", "home": "focus",
          "patterns": "Patterns", "pattern-chon-ji": "Chon-Ji", "pattern-dan-gun": "Dan-Gun", "pattern-yul-gok": "Yul-Gok",
          "watch": "Watch", "glossary": "Terms", "techniques": "Technique", "philosophy": "Philosophy", "path": "Belt path",
          "train": "Train", "quiz": "Quiz", "rules": "Rules", "about": "History"}
LEGACY = {"dj_belt": "3", "dj_learned": '{"chon-ji":true}', "dj_reps": '{"chon-ji":7}',
          "dj_terms": '{"Hana":true}', "dj_streak": '{"days":[]}'}

async def main():
    fails = []
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page()
        errors = []
        pg.on("pageerror", lambda e: errors.append(str(e)))
        await pg.goto(DIST.as_uri())
        await pg.evaluate("kv => { for (const [k,v] of Object.entries(kv)) localStorage.setItem(k,v) }", LEGACY)
        await pg.reload()
        for r in ROUTES:
            await pg.evaluate(f"location.hash = '{r}'"); await pg.wait_for_timeout(120)
            h1 = await pg.evaluate("(document.querySelector('#main h1')||{}).innerText||''")
            want = EXPECT.get(r)
            if not h1.strip(): fails.append(f"#{r}: no heading rendered")
            elif want and want not in h1: fails.append(f"#{r}: expected heading containing {want!r}, got {h1!r} (route fell through?)")
        # progress preserved
        await pg.evaluate("location.hash='home'"); await pg.wait_for_timeout(150)
        txt = await pg.inner_text("#main")
        if "7th Gup" not in txt: fails.append("saved belt (dj_belt=3 → 7th Gup) not restored")
        await pg.evaluate("location.hash='pattern-chon-ji'"); await pg.wait_for_timeout(150)
        if (await pg.inner_text("#repn")).strip() != "7": fails.append("saved reps for Chon-Ji not restored")
        # step player advances
        await pg.evaluate("go(1); go(1)")
        if "2" not in await pg.inner_text("#stepnow .stepnum"): fails.append("step player did not advance")
        # default route is the hub
        await pg.evaluate("history.replaceState(null,'',location.pathname); route()"); await pg.wait_for_timeout(100)
        if "For all that you may become" not in await pg.inner_text("#main"): fails.append("no-hash start view is not the Dojang hub")
        fails += [f"script error: {e}" for e in errors]
        await b.close()
    for f in fails: print("FAIL", f)
    print(f"{len(ROUTES)} routes checked; {'all passed' if not fails else str(len(fails)) + ' failure(s)'}")
    sys.exit(1 if fails else 0)

asyncio.run(main())
