

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
}, 2000 + Math.random() * 2000);
// generated - end
  