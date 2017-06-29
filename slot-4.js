

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
}, 3000);
// generated - end
  