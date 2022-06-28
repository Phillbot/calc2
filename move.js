calc.onmousedown = function (e) {
  /**
   * need change e.target.id to stop child bubles
   * need check to document width
   */

  if (e.target.id !== "calc") {
    return;
  }

  var coords = getCoords(calc);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;

  calc.style.position = "absolute";
  document.body.appendChild(calc);
  moveAt(e);

  calc.style.zIndex = 1000; // над другими элементами

  function moveAt(e) {
    calc.style.left = e.pageX - shiftX + "px";
    calc.style.top = e.pageY - shiftY + "px";
  }

  document.onmousemove = function (e) {
    if (e.target.id !== "calc") {
      return;
    }
    moveAt(e);
  };

  calc.onmouseup = function () {
    if (e.target.id !== "calc") {
      return;
    }
    document.onmousemove = null;
    calc.onmouseup = null;
  };
};

calc.ondragstart = function () {
  return false;
};

function getCoords(elem) {
  // кроме IE8-
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + scrollY,
    left: box.left + scrollX,
  };
}
