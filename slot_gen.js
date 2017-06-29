var fs = require('fs');

function buildSlotSource(num, target) {
  return `
// generated - start
console.log('slot ${num} loaded.')

setTimeout(function() {
  function trigger() {
    return {
      fired: (${target} == ${num}),
      num: ${num}
    };
  }
  window.trigger = trigger;
  console.log('slot ${num} registered.')
}, 3000);
// generated - end
  `;
}

var dummy = fs.readFileSync('dummy.js', 'utf8');

var total = 6;
var target = 5;
for (var i = 1; i <= total; i++) {
  var src = buildSlotSource(i, target);
  var full = dummy + '\n' + src;
  var filename = `slot-${i}.js`
  fs.writeFile(filename, full, function (err) {
    if (err) {
      return console.log(err);
    }
  });
}
