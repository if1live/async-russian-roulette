

// generated - start
console.log('slot 2 loaded.')

setTimeout(function() {
  function trigger() {
    return {
      fired: (5 == 2),
      num: 2
    };
  }
  window.trigger = trigger;
  console.log('slot 2 registered.')
}, 2000 + Math.random() * 2000);
// generated - end
  