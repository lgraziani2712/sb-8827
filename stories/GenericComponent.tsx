import { useState, Dispatch, SetStateAction } from "react";

export interface Props<P> {
  initial?: P;
  children(
    state: P | null,
    setState: Dispatch<SetStateAction<P | null>>
  ): JSX.Element;
}

export default function GenericComponent<P>({ initial, children }: Props<P>) {
  const [state, setState] = useState(initial || null);

  return children(state, setState);
}
