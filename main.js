const keys = document.querySelector(".container");
let anzeige = document.querySelector("#zahl");
let aktuelleEingabe = "";

function calculate(action) {
  if (action === "+") {
  } else if (action === "-") {
    console.log("subtrahieren");
  }
}

function showNumber(eingabe) {
  aktuelleEingabe += eingabe;
  anzeige.innerHTML = aktuelleEingabe;
}

function clear() {
  anzeige.innerHTML = 0;
  aktuelleEingabe = "";
}

function decimal() {
  console.log("decimal");
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
      showNumber(action);
      calculate(action);
    }

    if (action === ".") {
      console.log("der dezimalpunkt wurde geklickt");
    }

    if (action === "clear") {
      clear();
    }
  });
}

listenToKeys();
