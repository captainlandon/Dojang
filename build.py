"""Build dist/index.html: inject src/data.js + src/shell.js into src/app.html."""
from pathlib import Path
root = Path(__file__).parent
html = (root / "src/app.html").read_text()
data = (root / "src/data.js").read_text() + "\n" + (root / "src/shell.js").read_text()
assert "/*__DATA__*/" in html
(root / "dist").mkdir(exist_ok=True)
(root / "dist/index.html").write_text(html.replace("/*__DATA__*/", data))
print("built dist/index.html")
