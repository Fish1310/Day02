let a = 2;
let b = 4;
let action = "sub"; 

function addition() {
  return a + b;
}

function subtraction() {
  return a - b;
}

function calculator() {
  if (action === "add") {
    return addition(); 
  } else if (action === "sub") {
    return subtraction(); 
  } else {
    return "Invalid action"; 
  }
}

// Ne pas toucher à cette partie - C'est ici que le résultat est affiché
if (typeof calculator === "function" && typeof a === "number" &&
    typeof b === "number" && typeof action === "string") {
  displayResult(calculator, a, b, action);
} else {
  console.error("Missing/bad variables or calculator function");
}
