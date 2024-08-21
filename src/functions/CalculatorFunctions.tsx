import { OPERATOR_TYPE } from "./OperatorType";

let result: number = 0;
let operandString: string = "0";
let done: boolean = true;

let operatorFunction: ((arg0: number, arg1: number) => number) = add;

function add(arg0: number, arg1: number) {
    return arg0 + arg1;
}

function subtract(arg0: number, arg1: number) {
    return arg0 - arg1;
}

function multiply(arg0: number, arg1: number) {
    return arg0 * arg1;
}

function divide(arg0: number, arg1: number) {
    return arg0 / arg1;
}

function setDisplay(str: string) {
    document.getElementById("display")!.innerText = str;
}

export function clearEntry() {
    operandString = "0";
    setDisplay(operandString);
}

export function clearCalculator() {
    result = 0;
    clearEntry();
    operatorFunction = add;
    done = true;
}

export function addDigit(digit: string) {
    if (done || operandString === "0")
        operandString = digit;
    else
        operandString += digit;
    setDisplay(operandString);
    done = false;
}

export function addDecimal() {
    if (done || operandString === "0")
        operandString = "0.";
    else
        operandString += ".";
    setDisplay(operandString);
    done = false;
}

export function negate() {
    if (operandString === "0")
        return;
    else if (operandString.charAt(0) === '-')
        operandString = operandString.substring(1);
    else
        operandString = "-" + operandString;
    setDisplay(operandString);
}

export function backspace() {
    if (done || operandString === "0")
        return;
    else if (operandString.length === 1)
        operandString = "0";
    else {
        operandString = operandString.substring(0, operandString.length - 1);
        if (operandString === "-")
            operandString = "0";
    }
    setDisplay(operandString);
}

export function execute() {
    if (!done) {
        result = operatorFunction(result, Number.parseFloat(operandString));
        setDisplay(result.toString());
    }
    operandString = "0";
    done = true;
}

export function setOperator(operator: OPERATOR_TYPE) {
    execute();
    switch (operator) {
        case OPERATOR_TYPE.ADD:
            operatorFunction = add;
            break;
        case OPERATOR_TYPE.SUBTRACT:
            operatorFunction = subtract;
            break;
        case OPERATOR_TYPE.MULTIPLY:
            operatorFunction = multiply;
            break;
        case OPERATOR_TYPE.DIVIDE:
            operatorFunction = divide;
            break;
    }
}