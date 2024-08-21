export type TitleComponentProps = {
  text: string;
};

/**
 * Create the title component.
 * @param props the title component props, consisting of a string of the title text
 * @returns the title component
 */
export default function TitleComponent(props: TitleComponentProps) {
  return <h1 id="title">{props.text}</h1>;
}
