

// generated - start
console.log('slot 4 loaded.')

setTimeout(function() {
  function trigger() {
    return {
      fired: (5 == 4),
      num: 4
    };
  }
  window.trigger = trigger;
  console.log('slot 4 registered.')
}, 2000 + Math.random() * 2000);
// generated - end
  