

// generated - start
console.log('slot 5 loaded.')

setTimeout(function() {
  function trigger() {
    return {
      fired: (5 == 5),
      num: 5
    };
  }
  window.trigger = trigger;
  console.log('slot 5 registered.')
}, 3000);
// generated - end
  