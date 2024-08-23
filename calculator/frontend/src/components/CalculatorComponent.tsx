import React, { ReactElement } from "react";
import ButtonComponent from "./ButtonComponent";
import {
  addDecimal,
  addDigit,
  backspace,
  clearCalculator,
  clearEntry,
  execute,
  negate,
  setOperator,
} from "../functions/CalculatorFunctions";
import { OPERATOR_TYPE } from "../functions/OperatorType";
import DisplayComponent from "./DisplayComponent";
import MemoryButtonSectionComponent from "./MemoryButtonSectionComponent";

/**
 * Create the simple calculator component.
 * @returns the calculator component
 */
export default function CalculatorComponent() {
  const clearButton = <ButtonComponent symbol="C" action={clearCalculator} />;
  const clearEntryButton = <ButtonComponent symbol="CE" action={clearEntry} />;
  const digitButtons: ReactElement<any, any>[] = [];
  for (let i: number = 0; i <= 9; i++)
    digitButtons[i] = (
      <ButtonComponent
        symbol={i.toString()}
        action={() => addDigit(i.toString())}
      />
    );
  const addButton = (
    <ButtonComponent symbol="+" action={() => setOperator(OPERATOR_TYPE.ADD)} />
  );
  const subButton = (
    <ButtonComponent
      symbol="-"
      action={() => setOperator(OPERATOR_TYPE.SUBTRACT)}
    />
  );
  const mulButton = (
    <ButtonComponent
      symbol="*"
      action={() => setOperator(OPERATOR_TYPE.MULTIPLY)}
    />
  );
  const divButton = (
    <ButtonComponent
      symbol="/"
      action={() => setOperator(OPERATOR_TYPE.DIVIDE)}
    />
  );
  const equalButton = <ButtonComponent symbol="=" action={execute} />;
  const decButton = <ButtonComponent symbol="." action={addDecimal} />;
  const negButton = <ButtonComponent symbol="±" action={negate} />;
  const backspaceButton = <ButtonComponent symbol="←" action={backspace} />;
  return (
    <div>
      <div id="calculator">
        <DisplayComponent />
        {clearButton} {clearEntryButton} {backspaceButton} {divButton}
        <br />
        {digitButtons[7]} {digitButtons[8]} {digitButtons[9]} {mulButton}
        <br />
        {digitButtons[4]} {digitButtons[5]} {digitButtons[6]} {subButton}
        <br />
        {digitButtons[1]} {digitButtons[2]} {digitButtons[3]} {addButton}
        <br />
        {negButton} {digitButtons[0]} {decButton} {equalButton}
      </div>
      <br />
      <MemoryButtonSectionComponent />
    </div>
  );
}
