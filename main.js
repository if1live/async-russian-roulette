var fired = false;
var watcher = null;
var result = null;

function watchTrigger() {
  if (fired) {
    return;
  }

  try {
    if (!fired) {
      result = trigger();
      console.log(result);
      fired = true;

      updateMessage("Ready");
      document.querySelector('#btn-trigger').disabled = false;

      if(watcher) {
        clearTimeout(watcher);
      }
    }
  } catch (e) {
    console.log("wait bullet loading...: " + e);
    watcher = setTimeout(watchTrigger, 10);
  }
}

document.querySelector('#btn-trigger').disabled = true;
watchTrigger();

function updateMessage(text) {
  var el = document.querySelector('#trigger-result');
  el.innerHTML = text;
}

document.querySelector('#btn-trigger').onclick = function() {
  if(!result) {
    return;
  }

  this.disabled = true;

  var msg = '';
  msg += 'slot ' + result.num + ' is triggered.<br/>';
  if(result.fired) {
    msg += "<strong>Bang.</strong>"
  } else {
    msg += "<strong>click.</strong>";
  }
  updateMessage(msg);

}

function runTrigger(val) {

}
