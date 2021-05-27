const numericButtons = document.getElementsByTagName("button")
const equals = document.getElementById("equal")
const ac = document.getElementById("AC")
const output = document.getElementById("output")

for (let i of numericButtons) {
    console.log(i)
    if (i.innerText === "=") break
    i.addEventListener("click", function() {
        let value = this.innerText
        output.innerText += value
    })
}

equals.addEventListener("click", function() {
    output.innerText = `Output: ${eval(output.innerText)}`
})

ac.addEventListener("click", function() {
    output.innerText = `Output:`
})


