import React from "react";

/**
 * Props for the button component.
 */
export type ButtonComponentProps = {
  symbol: string; // a string or character representing the symbol, letter(s), or digit on the button
  action: React.MouseEventHandler<HTMLSpanElement>; // a function to execute when the button is pressed
};

/**
 * Create a button component.
 * @param props the button component props, consisting of a string or character for the symbol and a function for the action
 * @returns a button component
 */
export default function ButtonComponent(props: ButtonComponentProps) {
  return (
    <span className="button" onClick={props.action}>
      {props.symbol}
    </span>
  );
}
