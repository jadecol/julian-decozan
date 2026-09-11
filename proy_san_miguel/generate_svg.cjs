const fs = require('fs');
const path = require('path');

const rawPoints = {
  1: { y: 2144813.907, x: 4910814.055 },
  2: { y: 2144810.111, x: 4910818.292 },
  3: { y: 2144803.580, x: 4910825.408 },
  4: { y: 2144799.521, x: 4910829.831 },
  5: { y: 2144763.677, x: 4910798.872 },
  6: { y: 2144722.112, x: 4910763.295 },
  7: { y: 2144726.101, x: 4910758.812 },
  8: { y: 2144734.436, x: 4910749.447 },
  9: { y: 2144739.155, x: 4910753.163 },
  10: { y: 2144743.873, x: 4910756.879 },
  11: { y: 2144748.591, x: 4910760.594 },
  12: { y: 2144749.963, x: 4910761.675 },
  13: { y: 2144751.898, x: 4910759.836 },
  14: { y: 2144754.899, x: 4910762.460 },
  15: { y: 2144759.416, x: 4910766.410 },
  16: { y: 2144763.933, x: 4910770.359 },
  17: { y: 2144768.450, x: 4910774.309 },
  18: { y: 2144772.967, x: 4910778.258 },
  19: { y: 2144777.484, x: 4910782.208 },
  20: { y: 2144782.001, x: 4910786.158 },
  21: { y: 2144786.518, x: 4910790.107 },
  22: { y: 2144791.035, x: 4910794.057 },
  23: { y: 2144780.868, x: 4910805.886 },
  24: { y: 2144776.317, x: 4910801.975 },
  25: { y: 2144771.767, x: 4910798.064 },
  26: { y: 2144767.217, x: 4910794.153 },
  27: { y: 2144762.667, x: 4910790.242 },
  28: { y: 2144758.117, x: 4910786.331 },
  29: { y: 2144753.567, x: 4910782.420 },
  30: { y: 2144749.017, x: 4910778.509 },
  31: { y: 2144744.466, x: 4910774.598 },
  32: { y: 2144739.916, x: 4910770.687 },
  33: { y: 2144735.366, x: 4910766.776 },
  34: { y: 2144730.816, x: 4910762.865 },
};

const lotesData = [
  { id: 1, area: "467.00", v: [1, 2, 3, 23, 22] },
  { id: 2, area: "93.74", v: [22, 23, 24, 21] },
  { id: 3, area: "94.05", v: [21, 24, 25, 20] },
  { id: 4, area: "94.35", v: [20, 25, 26, 19] },
  { id: 5, area: "94.66", v: [19, 26, 27, 18] },
  { id: 6, area: "94.96", v: [18, 27, 28, 17] },
  { id: 7, area: "95.27", v: [17, 28, 29, 16] },
  { id: 8, area: "95.57", v: [16, 29, 30, 15] },
  { id: 9, area: "95.88", v: [15, 30, 31, 14] },
  { id: 10, area: "91.11", v: [14, 31, 32, 11, 12, 13] },
  { id: 11, area: "79.08", v: [11, 32, 33, 10] },
  { id: 12, area: "77.53", v: [10, 33, 34, 9] },
  { id: 13, area: "77.34", v: [9, 34, 7, 8] },
];

const viaVertices = [3, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 7, 6, 5, 4];

let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
Object.values(rawPoints).forEach(p => {
  if (p.x < minX) minX = p.x;
  if (p.x > maxX) maxX = p.x;
  if (p.y < minY) minY = p.y;
  if (p.y > maxY) maxY = p.y;
});
const paddingX = (maxX - minX) * 0.1 || 10;
const paddingY = (maxY - minY) * 0.1 || 10;
const bounds = {
  x: minX - paddingX,
  y: minY - paddingY,
  width: (maxX - minX) + (paddingX * 2),
  height: (maxY - minY) + (paddingY * 2),
};

const sw = bounds.width * 0.002;

let svgStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"" + bounds.x + " " + (-bounds.y - bounds.height) + " " + bounds.width + " " + bounds.height + "\">\n";
svgStr += "  <g transform=\"scale(1, -1)\">\n";

const viaPoints = viaVertices.map(vid => rawPoints[vid].x + "," + rawPoints[vid].y).join(" ");
svgStr += "    <polygon points=\"" + viaPoints + "\" fill=\"rgba(0,0,0,0.05)\" stroke=\"#888\" stroke-width=\"" + sw + "\" stroke-dasharray=\"" + (sw*2.5) + " " + (sw*2.5) + "\" />\n";

lotesData.forEach(lote => {
  const points = lote.v.map(vid => rawPoints[vid].x + "," + rawPoints[vid].y).join(" ");
  svgStr += "    <polygon points=\"" + points + "\" fill=\"white\" stroke=\"#D32F2F\" stroke-width=\"" + (sw*1.2) + "\" />\n";
});

svgStr += "  </g>\n</svg>";

const dir = path.join(__dirname, 'src', 'assets');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, 'plano.svg'), svgStr);
console.log('SVG generated successfully.');
