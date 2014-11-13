var vec2 = require('vec2');

var start = vec2(0, 0);
var end = vec2(50, 50); var n = start.subtract(end, true).normalize();

var dist = Math.round(start.distance(end));

// dots per mm
var dpmm = 1;
var dots = dpmm/dist

function num(n) {
  return (n).toFixed(2);
}

var pos = start.clone();
for (var i=0; i<=1; i+=dots) {

  var lerped = start.lerp(end, i, true);

  console.log([
    'G1',
    'X' + num(lerped.x),
    'Y' + num(lerped.y),
  ].join(' '))

  console.log('G1 Z-1');
  console.log('G1 Z0');
}

