const deleteLast = (field) => {
    const result = field.innerText.slice(0, -1);
    field.innerText = result;
}

const calculate = (field) => {
    let result;
    try {
        result = eval(field.innerText);
    } catch (e) {
        result = "Syntax Error";
    }
    field.innerText = `${result}`;
}

const clearDisplay = (field) => field.innerText = ""

const fact = (number) => {
    let result = 1;
    for (i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}




