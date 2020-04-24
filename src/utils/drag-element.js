export default function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  console.log('reach drag Element' + elmnt.id);
  if (document.getElementById(elmnt.id + '-drag')) {
    // if present, the header is where you move the DIV from:
    console.log('tie mouse down');
    document.getElementById(elmnt.id + '-drag').onmousedown = dragMouseDown;
  } else {
    console.log('reach else case');
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    console.log('on Mouse down');
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    let newTop = elmnt.offsetTop - pos2;
    let newLeft = elmnt.offsetLeft - pos1;
    if (newTop > 0) {
      elmnt.style.top = newTop + 'px';
    }
    if (newLeft > 0) {
      elmnt.style.left = newLeft + 'px';
    }
    elmnt.style.bottom = null;
    elmnt.style.right = null;
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
