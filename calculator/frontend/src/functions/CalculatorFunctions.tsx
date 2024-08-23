import React from "react";
import ReactDOM from "react-dom/client";
import { OPERATOR_TYPE } from "../constants/OperatorType";
import { disabledButtonClass, enabledButtonClass } from "../constants";
import {
  deleteMemoryList,
  getLatestMemoryEntry,
  getMemoryEntry,
  getMemoryList,
  postNewMemoryEntry,
  setLatestMemoryEntry,
} from "../api/CalculatorAPI";
import MemoryListComponent from "../components/MemoryListComponent";
import { MemoryEntry } from "../constants/MemoryEntry";
import { AxiosResponse } from "axios";

let result: number = 0;
let operandString: string = "0";
let doneStep: boolean = false,
  doneEquation = false;

let operatorFunction: (arg0: number, arg1: number) => number = add;

let root: ReactDOM.Root | undefined = undefined;

/**
 * Add the arguments.
 * @param arg0 the augend
 * @param arg1 the addend
 * @returns the sum
 */
function add(arg0: number, arg1: number) {
  return arg0 + arg1;
}

/**
 * Subtract the arguments.
 * @param arg0 the minuend
 * @param arg1 the subtrahend
 * @returns the difference
 */
function subtract(arg0: number, arg1: number) {
  return arg0 - arg1;
}

/**
 * Multiply the arguments.
 * @param arg0 the multiplicand
 * @param arg1 the multiplier
 * @returns the product
 */
function multiply(arg0: number, arg1: number) {
  return arg0 * arg1;
}

/**
 * Divide the arguments.
 * @param arg0 the dividend
 * @param arg1 the divisor
 * @returns the quotient
 */
function divide(arg0: number, arg1: number) {
  return arg0 / arg1;
}

/**
 * Display the given value in the calculator display component.
 * @param str the value to display on the calculator
 */
function setDisplay(str: string) {
  document.getElementById("display")!.innerText = str;
}

/**
 * Clear the current operand shown on the calculator.
 * This function is equivalent to `clearCalculator()` if the equation is solved.
 */
export function clearEntry() {
  if (doneEquation) clearCalculator();
  else {
    operandString = "0";
    setDisplay(operandString);
  }
}

/**
 * Clear the calculator.
 */
export function clearCalculator() {
  result = 0;
  operandString = "0";
  setDisplay(operandString);
  operatorFunction = add;
  doneStep = false;
  doneEquation = false;
}

/**
 * Append a digit to the operand string. It is reset if an equation is solved.
 * @param digit the digit to append
 */
export function addDigit(digit: string) {
  if (doneEquation) {
    result = 0;
    operandString = digit;
  } else if (doneStep || operandString === "0") operandString = digit;
  else operandString += digit;
  setDisplay(operandString);
  doneStep = false;
  doneEquation = false;
}

/**
 * Add a decimal point to the end of the calculator's operand string, if it is not present.
 * To delete a decimal point in the operand string, use `backspace()` instead.
 */
export function addDecimal() {
  if (doneEquation) {
    operandString = "0.";
    result = 0;
  } else if (operandString === "0") operandString = "0.";
  else if (!operandString.includes(".")) operandString += ".";
  setDisplay(operandString);
  doneStep = false;
  doneEquation = false;
}

/**
 * Turn the calculator value to its negative.
 */
export function negate() {
  if (doneEquation) {
    result = -result;
    setDisplay(result.toString());
    return;
  } else if (doneStep) operandString = (-result).toString();
  else if (operandString === "0") return;
  else if (operandString.charAt(0) === "-")
    operandString = operandString.substring(1);
  else operandString = "-" + operandString;
  setDisplay(operandString);
  doneStep = false;
  doneEquation = false;
}

/**
 * Delete the last digit in the calculator's operand string, if possible.
 * This function does nothing if a step has been completed (an operator or equals button has been pressed)
 * or if the operand shown is 0.
 */
export function backspace() {
  if (doneStep || operandString === "0") return;
  else if (operandString.length === 1) operandString = "0";
  else {
    operandString = operandString.substring(0, operandString.length - 1);
    if (operandString === "-") operandString = "0";
  }
  setDisplay(operandString);
}

/**
 * Solve the expression.
 */
export function execute() {
  if (!doneStep) {
    result = operatorFunction(result, parseFloat(operandString));
    setDisplay(result.toString());
  }
  operandString = "0";
  operatorFunction = add;
  doneStep = true;
  doneEquation = true;
}

/**
 * Solve the expression, if necessary, and append an operator to the expression.
 * @param operator the new operator
 */
export function setOperator(operator: OPERATOR_TYPE) {
  execute();
  doneEquation = false;
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

/**
 * Enable the button with the id.
 * @param id the button id
 */
function enableButton(id: string) {
  document.getElementById(id)?.setAttribute("class", enabledButtonClass);
}

/**
 * Disable the button with the id.
 * @param id the button id
 */
function disableButton(id: string) {
  document.getElementById(id)?.setAttribute("class", disabledButtonClass);
}

/**
 * Enable all memory buttons.
 */
function enableAllMemoryButtons() {
  enableButton("button_MC");
  enableButton("button_MR");
  enableButton("button_M+");
  enableButton("button_M-");
  enableButton("button_MS");
  enableButton("button_M");
  console.log("All memory buttons enabled");
}

/**
 * Enable all memory buttons that require memory entries.
 */
function enableAllMemoryButtonsRequireEntries() {
  enableButton("button_MC");
  enableButton("button_MR");
  enableButton("button_M");
  console.log("All memory buttons requiring memory entries enabled");
}

/**
 * Disable all memory buttons.
 */
function disableAllMemoryButtons() {
  disableButton("button_MC");
  disableButton("button_MR");
  disableButton("button_M+");
  disableButton("button_M-");
  disableButton("button_MS");
  disableButton("button_M");
  console.log("All memory buttons disabled");
}

/**
 * Disable all memory buttons that require memory entries.
 */
function disableAllMemoryButtonsRequireEntries() {
  disableButton("button_MC");
  disableButton("button_MR");
  disableButton("button_M");
  console.log("All memory buttons requiring memory entries disabled");
}

/**
 * Re-render, or update, the memory list display, if it is currently open.
 */
async function updateMemoryListDisplay() {
  if (root !== undefined) {
    root.render(
      <MemoryListComponent entries={(await getMemoryEntryArray()).reverse()} />
    );
    console.log("Re-rendered memory list");
  }
}

/**
 * Close the memory list display.
 */
function closeMemoryListDisplay() {
  if (root !== undefined) {
    root.unmount();
    root = undefined;
    console.log("Closed memory list");
  }
}

/**
 * Toggle the memory list display.
 */
async function toggleMemoryListDisplay() {
  if (root === undefined) {
    const container = document.getElementById("memoryListContainer")!;
    root = ReactDOM.createRoot(container);
    root.render(
      <MemoryListComponent entries={(await getMemoryEntryArray()).reverse()} />
    );
    console.log("Opened memory list");
  } else {
    root.unmount();
    root = undefined;
    console.log("Closed memory list");
  }
}

/**
 * Get the memory list as an array of entries.
 * @return the array of memory entries
 */
export function getMemoryEntryArray() {
  return getMemoryList().then((response) => {
    console.log(response.statusText);
    const data: MemoryEntry[] = response.data;
    return data;
  });
}

/**
 * Clear the calculator memory.
 */
export function memoryClear() {
  deleteMemoryList().then((response) => {
    console.log(response.statusText);
    disableAllMemoryButtonsRequireEntries();
    closeMemoryListDisplay();
    console.log("Memory cleared");
  });
}

/**
 * Recall the memory entry with the given id, or the latest calculator memory entry if no id is given.
 */
export function memoryRecall(id?: number) {
  const response: Promise<AxiosResponse<any, any>> =
    id === undefined ? getLatestMemoryEntry() : getMemoryEntry(id);
  response.then((response) => {
    console.log(response.statusText);
    operandString = response.data.value.toString();
    setDisplay(operandString);
    doneStep = false;
    doneEquation = false;
    if (id === undefined) console.log("Latest memory recalled");
    else console.log("Memory recalled with id", id);
  });
}

/**
 * Add the current calculator value to the latest memory entry.
 */
export function memoryAdd() {
  const operand: number = doneStep ? result : parseFloat(operandString);
  getLatestMemoryEntry()
    .then((response0) => {
      console.log(response0.statusText);
      setLatestMemoryEntry(response0.data.value + operand).then((response1) => {
        console.log(response1.statusText);
        console.log(
          "Added to latest memory entry",
          response0.data.value,
          "to",
          response0.data.value + operand
        );
        updateMemoryListDisplay();
      });
    })
    .catch((reason) => {
      console.log(reason);
      postNewMemoryEntry(operand).then((response) => {
        console.log(response.statusText);
        console.log("Memory empty, added to 0:", operand);
        enableAllMemoryButtonsRequireEntries();
        updateMemoryListDisplay();
      });
    });
}

/**
 * Subtract the current calculator value from the latest memory entry.
 */
export function memorySubtract() {
  const operand: number = doneStep ? result : parseFloat(operandString);
  getLatestMemoryEntry()
    .then((response0) => {
      console.log(response0.statusText);
      setLatestMemoryEntry(response0.data.value - operand).then((response1) => {
        console.log(response1.statusText);
        console.log(
          "Subtracted to latest memory entry",
          response0.data.value,
          "to",
          response0.data.value - operand
        );
        updateMemoryListDisplay();
      });
    })
    .catch((reason) => {
      console.log(reason);
      postNewMemoryEntry(-operand).then((response) => {
        console.log(response.statusText);
        console.log("Memory empty, subtracted from 0:", -operand);
        enableAllMemoryButtonsRequireEntries();
        updateMemoryListDisplay();
      });
    });
}

/**
 * Store the current calculator value to the memory list.
 */
export function memoryStore() {
  const newValue: number = doneStep ? result : parseFloat(operandString);
  postNewMemoryEntry(newValue).then((response) => {
    console.log(response.statusText);
    enableAllMemoryButtonsRequireEntries();
    console.log("Stored latest memory entry", newValue);
    updateMemoryListDisplay();
  });
}

/**
 * Toggle the memory list.
 */
export function memory() {
  toggleMemoryListDisplay();
}
