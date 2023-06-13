const keys = document.querySelector(".container");
let anzeige = document.querySelector("#zahl");
let aktuelleEingabe = "";
let zahl1 = "";
let zahl2 = "";
let ergebnis = "";

function calculate(action) {
  if (action === "+") {
    ergebnis = zahl1 + zahl2;
    showNumber(ergebnis);
  } else if (action === "-") {
    ergebnis = zahl1 - zahl2;
    console.log(ergebnis);
  } else if (action === "*") {
    ergebnis = zahl1 * zahl2;
  } else if (action === "/") {
    ergebnis = zahl1 / zahl2;
  }
}

function showNumber(eingabe) {
  aktuelleEingabe += eingabe;
  anzeige.innerHTML = aktuelleEingabe;
}

function saveNumber(action, zahl) {
  if (zahl1 === "") {
    zahl1 = parseInt(aktuelleEingabe);
    aktuelleEingabe = "";
  } else if (zahl1 >= 0) {
    zahl2 = parseInt(aktuelleEingabe);
    aktuelleEingabe = "";
  } else if (zahl1 >= 0 && zahl2 >= 0) {
    calculate(action);
  }
}

function clear() {
  anzeige.innerHTML = 0;
  aktuelleEingabe = "";
}

function listenToKeys() {
  keys.addEventListener("click", (e) => {
    let key = e.target;
    let action = key.dataset.action;
    let zahl = parseInt(key.dataset.value);

    if (!action) {
      showNumber(zahl);
    }

    if (
      action === "+" ||
      action === "-" ||
      action === "*" ||
      action === "/" ||
      action === "="
    ) {
      saveNumber(action, aktuelleEingabe);
      calculate(action);
    }

    if (action === ".") {
      showNumber(action);
    }

    if (action === "clear") {
      clear();
    }
  });
}

listenToKeys();
