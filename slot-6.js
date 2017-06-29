

// generated - start
console.log('slot 6 loaded.')

setTimeout(function() {
  function trigger() {
    return {
      fired: (5 == 6),
      num: 6
    };
  }
  window.trigger = trigger;
  console.log('slot 6 registered.')
}, 2000 + Math.random() * 2000);
// generated - end
  