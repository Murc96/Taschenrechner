const keys = document.querySelector(".container");
let display = document.querySelector("#display");
let aktuelleEingabe = null;
let zahl1 = 0;
let wartenZahl2 = false;
let operator = null;

function calculate(action, zahl1, zahl2) {
  if (action === "+") {
    return zahl1 + zahl2;
  } else if (action === "-") {
    return zahl1 - zahl2;
  } else if (action === "*") {
    return zahl1 * zahl2;
  } else if (action === "/") {
    return zahl1 / zahl2;
  }

  return ergebnis;
}

function updateDisplay() {
  display.textContent = aktuelleEingabe;
}

function handleDecimal() {
  if (wartenZahl2 === false && aktuelleEingabe === null) {
    aktuelleEingabe = "0.";
    return;
  }
  if (!aktuelleEingabe.includes(".")) {
    aktuelleEingabe += ".";
  }
}

function handleOperator(currentOperator) {
  if (zahl1 === 0) {
    zahl1 = parseFloat(aktuelleEingabe);
  } else if (operator) {
    let ergebnis = calculate(operator, zahl1, parseFloat(aktuelleEingabe));
    aktuelleEingabe = parseFloat(ergebnis);
    zahl1 = parseFloat(ergebnis);
  }

  wartenZahl2 = true;
  operator = currentOperator;
}

function inputDigits(eingabe) {
  if (wartenZahl2) {
    aktuelleEingabe = eingabe;
    wartenZahl2 = false;
  } else {
    aktuelleEingabe =
      aktuelleEingabe === null
        ? (aktuelleEingabe = eingabe)
        : (aktuelleEingabe += eingabe);
  }
}

function clear() {
  display.textContent = 0;
  aktuelleEingabe = null;
  zahl1 = 0;
  operator = null;
}

function listenToKeys() {
  keys.addEventListener("click", (e) => {
    let key = e.target;
    let action = key.dataset.action;
    let zahl = key.dataset.value;

    if (!action) {
      inputDigits(zahl);
      updateDisplay();
    }

    if (
      action === "+" ||
      action === "-" ||
      action === "*" ||
      action === "/" ||
      action === "="
    ) {
      handleOperator(action);
      updateDisplay();
    }

    if (action === ".") {
      handleDecimal();
    }

    if (action === "clear") {
      clear();
    }
  });
}

listenToKeys();
