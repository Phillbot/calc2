let enterButtion = null;

window.onkeydown = (event) => {
  const key = event.key;

  for (let i = 0; i < calcButtons.length; i++) {
    const button = calcButtons[i];

    if (button.value === key) {
      button.dispatchEvent(new Event("click"), {});
      button.classList.add("calc__btn__active");
    }
    if (button.value === "=") {
      enterButtion = button;
    }
  }

  switch (key) {
    case "Backspace":
      {
        doClear();
        clear.classList.add("calc__btn__active");
      }
      break;

    case "Enter":
      {
        doCalc();
        enterButtion.classList.add("calc__btn__active");
      }
      break;
  }
};

window.onkeyup = (event) => {
  const key = event.key;

  for (let i = 0; i < calcButtons.length; i++) {
    const button = calcButtons[i];

    if (button.value === key) {
      button.classList.remove("calc__btn__active");
    }
  }
  switch (key) {
    case "Backspace":
      {
        clear.classList.remove("calc__btn__active");
      }
      break;
    case "Enter": {
      enterButtion.classList.remove("calc__btn__active");
    }
  }
};
