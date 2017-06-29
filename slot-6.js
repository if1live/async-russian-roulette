

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
}, Math.random() * 3000);
// generated - end
  