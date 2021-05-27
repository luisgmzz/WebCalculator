const buttons = document.getElementsByTagName("button")
const equals = document.getElementById("equal")
const ac = document.getElementById("AC")
const output = document.getElementById("output")

// Getting numeric buttons' values
for (let i of buttons) {
    if (i.innerText === "=") break
    i.addEventListener("click", function() {
        let value = this.innerText
        output.innerText += value
    })
}

// Showing the result
equals.addEventListener("click", () => {
    let result;
    try {
        result = eval(output.innerText)
    } catch (e) {
        result = "Syntax Error"
    }
    output.innerText = `Output: ${result}`
})

// Cleaning the output
ac.addEventListener("click", () => output.innerText = `Output:`)


