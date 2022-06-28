/**
 * pay attension for this one https://0.30000000000000004.com/
 * you need do something with this
 *
 */

const calc = document.querySelector(".calc");
const calcButtons = document.querySelectorAll(".calc__btn");
const output = document.querySelector(".calc__display__output");
const clear = document.querySelector(".clear");
const history = document.querySelector(".history");

/**
 * need add more operators
 */

const operators = ["+", "-"];

const doClear = () => {
  output.value = "0";
};

const doCalc = () => {
  /**
   * need fix eval use js from html
   * regex?
   */

  try {
    if (/^[\d ()+-.e]+$/.test(output.value)) {
      const result = eval(output.value);

      const time = new Date().toLocaleTimeString([], { timeStyle: "short" });
      const resultStrig = `${time} | ${output.value} = ${result}`;
      const p = document.createElement("p");

      p.innerHTML = resultStrig;
      history.appendChild(p);
      output.value = result;

      return;
    }
    output.value = "0";
  } catch (error) {
    output.value = "0";
    console.warn(error);
  }
};

const doAppend = (value) => {
  if (output.value === "0") {
    if (value !== "=" && value !== "+") {
      output.value = value;
      return;
    }
  }

  if (
    operators.includes(value) &&
    operators.includes(output.value[output.value.length - 1])
  ) {
    return;
  }

  if (output.value === "0" && value === "+") {
    return;
  }

  if (value === "=") {
    doCalc();
    return;
  }

  if (value === "0" && output.value === "-") {
    return;
  }

  output.value += value;
};

clear.onclick = doClear;

for (let i = 0; i < calcButtons.length; i++) {
  const button = calcButtons[i];
  button.onclick = () => doAppend(button.value);
}
