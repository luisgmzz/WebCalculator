const buttons = document.getElementsByTagName("button");
const output = document.getElementById("output");

// Special buttons
const del = document.getElementById("del");
const ac = document.getElementById("ac");
const equals = document.getElementById("equal");

var ANS;
// Expression to be evaluated
var expression = "";

// Getting numeric buttons' values
for (let i of buttons) {
    if (i.id) continue;
    i.addEventListener("click", () => updateValue(i));
}

// Deleting last input
del.addEventListener("click", () => deleteLast(output));

// Cleaning the output
ac.addEventListener("click", () => clearDisplay(output));

// Showing the result
equals.addEventListener("click", () => {
    calculate(output);
    ANS = output.innerText;
});




