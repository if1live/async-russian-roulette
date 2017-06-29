

// generated - start
console.log('slot 1 loaded.')

setTimeout(function() {
  function trigger() {
    return {
      fired: (5 == 1),
      num: 1
    };
  }
  window.trigger = trigger;
  console.log('slot 1 registered.')
}, 2000 + Math.random() * 2000);
// generated - end
  