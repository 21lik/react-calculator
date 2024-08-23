import React from "react";
import { disabledButtonClass, enabledButtonClass } from "../constants";

/**
 * Props for the button component.
 */
export type ButtonComponentProps = {
  symbol: string; // a string or character representing the symbol, letter(s), or digit on the button
  action: () => void; // a function to execute when the button is pressed
  disabled?: boolean;
};

/**
 * Execute the action if the button clicked is enabled.
 * @param id the button id
 * @param action the function to execute, if button is enabled
 */
function actionIfEnabled(id: string, action: () => void) {
  if (document.getElementById(id)!.className !== "button_disabled") action();
}

/**
 * Create a button component.
 * @param props the button component props, consisting of a string or character for the symbol and a function for the action
 * @returns a button component
 */
export default function ButtonComponent(props: ButtonComponentProps) {
  const thisId: string = "button_" + props.symbol;
  return (
    <span
      id={thisId}
      className={props.disabled ? disabledButtonClass : enabledButtonClass}
      onClick={() => actionIfEnabled(thisId, props.action)}
    >
      {props.symbol}
    </span>
  );
}
