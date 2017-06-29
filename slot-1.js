

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
}, Math.random() * 3000);
// generated - end
  