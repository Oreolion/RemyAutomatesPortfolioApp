import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, "..", "public", "assets", "icon", "og-image.png");

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050508" />
      <stop offset="100%" stop-color="#13131f" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00f0ff" />
      <stop offset="100%" stop-color="#a78bfa" />
    </linearGradient>
    <radialGradient id="orb1" cx="15%" cy="30%" r="40%">
      <stop offset="0%" stop-color="#00f0ff" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#00f0ff" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="orb2" cx="85%" cy="80%" r="40%">
      <stop offset="0%" stop-color="#a78bfa" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#a78bfa" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)" />
  <rect width="1200" height="630" fill="url(#orb1)" />
  <rect width="1200" height="630" fill="url(#orb2)" />

  <!-- Top gradient line -->
  <rect x="0" y="0" width="1200" height="2" fill="url(#accent)" opacity="0.6" />

  <!-- Badge -->
  <g transform="translate(80, 140)">
    <rect width="280" height="44" rx="22" fill="rgba(0,240,255,0.08)" stroke="rgba(0,240,255,0.25)" stroke-width="1" />
    <circle cx="22" cy="22" r="4" fill="#00f0ff" />
    <text x="38" y="29" font-family="JetBrains Mono, monospace" font-size="14" font-weight="500" fill="#00f0ff" letter-spacing="1.5">AI AUTOMATION AGENCY</text>
  </g>

  <!-- Headline -->
  <text x="80" y="290" font-family="Outfit, system-ui, sans-serif" font-size="92" font-weight="800" fill="#ffffff" letter-spacing="-2">Automate the</text>
  <text x="80" y="390" font-family="Outfit, system-ui, sans-serif" font-size="92" font-weight="800" fill="url(#accent)" letter-spacing="-2">boring stuff.</text>

  <!-- Subhead -->
  <text x="80" y="465" font-family="Outfit, system-ui, sans-serif" font-size="28" font-weight="400" fill="#94a3b8">Save 10+ hours every week with AI-powered workflows.</text>

  <!-- Brand mark bottom-left -->
  <g transform="translate(80, 530)">
    <rect width="44" height="44" rx="10" fill="url(#accent)" opacity="0.2" />
    <text x="14" y="30" font-family="Outfit, system-ui, sans-serif" font-size="22" font-weight="800" fill="url(#accent)">R</text>
    <text x="60" y="32" font-family="Outfit, system-ui, sans-serif" font-size="22" font-weight="700" fill="#ffffff">Remy Automates</text>
  </g>

  <!-- Domain bottom-right -->
  <text x="1120" y="560" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="16" font-weight="500" fill="#475569" letter-spacing="1.2">remyautomates.com</text>
</svg>
`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(out);
console.log("Wrote", out);
