import React from "react";
import ButtonComponent from "./ButtonComponent";
import {
  memoryClear,
  memoryRecall,
  memoryAdd,
  memorySubtract,
  memoryStore,
  memory,
} from "../functions/CalculatorFunctions";

/**
 * Create the memory button section component.
 * @returns the memory button section component
 */
export default function MemoryButtonSectionComponent() {
  const memClear = <ButtonComponent symbol="MC" action={memoryClear} />;
  const memRecall = <ButtonComponent symbol="MR" action={memoryRecall} />;
  const memAdd = <ButtonComponent symbol="M+" action={memoryAdd} />;
  const memSub = <ButtonComponent symbol="M-" action={memorySubtract} />;
  const memStore = <ButtonComponent symbol="MS" action={memoryStore} />;
  const mem = <ButtonComponent symbol="MS" action={memory} />;

  return (
    <div>
      <div id="memoryButtonSection">
        {memClear} {memRecall} {memAdd} {memSub} {memStore} {mem}
      </div>
    </div>
  );
}
