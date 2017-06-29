

// generated - start
console.log('slot 3 loaded.')

setTimeout(function() {
  function trigger() {
    return {
      fired: (5 == 3),
      num: 3
    };
  }
  window.trigger = trigger;
  console.log('slot 3 registered.')
}, Math.random() * 3000);
// generated - end
  