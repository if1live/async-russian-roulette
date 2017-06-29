

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
}, 3000);
// generated - end
  