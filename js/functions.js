const updateValue = (object) => {
    let values = [object.getAttribute("value") || object.innerText, object.innerText];
    expression += values[0];
    output.innerText += values[1];
};

const deleteLast = (field) => {
    const result = [expression.slice(0, -1), field.innerText.slice(0, -1)];
    expression = result[0];
    field.innerText = result[1];
};

const clearDisplay = (field) => {
    expression = "";
    field.innerText = "";
};

const calculate = (field) => {
    let result;
    try {
        result = eval(expression);
    } catch (e) {
        console.log(e);
        result = "Syntax Error";
    }
    field.innerText = `${result}`;
};