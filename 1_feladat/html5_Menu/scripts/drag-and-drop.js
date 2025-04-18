let count = 0;

function tick() {
  count++;
  postMessage(count);
}

setInterval(tick, 1000);



const ldiv = document.getElementById('lDiv');
const rdiv = document.getElementById('rDiv');
const img = document.getElementById('iphone');

function dragstartHandler(ev) {
  ev.dataTransfer.setData("text", ev.target.id);

  if (ldiv.contains(img)) {
    rdiv.style.borderStyle = 'dashed';
  }

  if (rdiv.contains(img)) {
    ldiv.style.borderStyle = 'dashed';
  }
}

function dragoverHandler(ev) {
  ev.preventDefault();
}

function dropHandler(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  asd();
}

function asd() {
  if (ldiv.contains(img)) {
    ldiv.style.border = 'none';
    rdiv.style.border = 'solid';
  }

  if (rdiv.contains(img)) {
    ldiv.style.border = 'solid';
    rdiv.style.border = 'none';
  }
}
