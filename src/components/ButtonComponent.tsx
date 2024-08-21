import React from "react";

export type ButtonComponentProps = {
  symbol: string;
  action: React.MouseEventHandler<HTMLSpanElement>;
};

export default function ButtonComponent(props: ButtonComponentProps) {
  return (
    <span className="button" onClick={props.action}>
      {props.symbol}
    </span>
  );
}
