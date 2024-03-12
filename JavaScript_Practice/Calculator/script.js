var result_display = document.getElementById('result');
var result = "";
function getDisplay(value) {
    if (value == "C") {
        result = "";
        result_display.value = "";
        return;
    }
    if (value == "=") {
        performOperation();
        result = "";
        return;
    }
    result += value;
    result_display.value = result;
}

function performOperation() {
    var operands = result.split(/[+\-x/]/);
    console.log(operands);
    var operator = result.match(/[+\-x/]/);
    console.log(operator);

    if (operands.length === 2 && operator !== null) {
        var operand1 = parseFloat(operands[0]);
        var operand2 = parseFloat(operands[1]);

        switch (operator[0]) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case 'x':
                result = operand1 * operand2;
                break;
            case '/':
                result = operand1 / operand2;
                break;
            default:
                break;
        }

        result_display.value = result;
    }
}
