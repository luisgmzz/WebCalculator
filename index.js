const buttons = document.getElementsByTagName("button");
const output = document.getElementById("output");


const del = document.getElementById("del");
const ac = document.getElementById("ac");
const equals = document.getElementById("equal");

// Getting numeric buttons' values
for (let i of buttons) {
    if (i.id) continue;
    i.addEventListener("click", function() {
        let value = this.innerText;
        output.innerText += value;
    })
}

// Deleting last input
del.addEventListener("click", () => deleteLast(output))

// Cleaning the output
ac.addEventListener("click", () => clearDisplay(output));

// Showing the result
equals.addEventListener("click", () => calculate(output));




