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
  
  activeDiv();
}

function activeDiv() {
  if (ldiv.contains(img)) {
    ldiv.style.border = '4px solid #007bff';
    rdiv.style.border = '2px solid #007bff';
  }

  if (rdiv.contains(img)) {
    ldiv.style.border = '2px solid #007bff';
    rdiv.style.border = '4px solid #007bff';
  }
}