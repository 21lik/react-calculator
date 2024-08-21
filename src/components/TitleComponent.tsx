import React from "react";

export type TitleComponentProps = {
  text: string;
};

export default function TitleComponent(props: TitleComponentProps) {
  return <h1>{props.text}</h1>;
}
