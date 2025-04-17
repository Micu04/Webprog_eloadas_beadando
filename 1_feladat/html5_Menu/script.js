let count = 0;

function tick() {
  count++;
  postMessage(count);
}

setInterval(tick, 1000);

