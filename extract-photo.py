"""Pull the embedded portrait out of your original biplabsubedi.html.

Usage (from the folder that holds your original file):
    python3 extract-photo.py biplabsubedi.html

Writes images/biplab-subedi.webp next to this script.
"""
import base64, pathlib, re, sys

src = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "biplabsubedi.html")
m = re.search(r'data:image/webp;base64,([A-Za-z0-9+/=]+)', src.read_text(encoding="utf-8"))
if not m:
    sys.exit("No embedded WebP found in " + str(src))
out = pathlib.Path(__file__).parent / "images" / "biplab-subedi.webp"
out.parent.mkdir(exist_ok=True)
out.write_bytes(base64.b64decode(m.group(1)))
print(f"Saved {out} ({out.stat().st_size // 1024} KB)")
