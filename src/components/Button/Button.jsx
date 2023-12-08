import { ButtonSpace, ButtonSpaceOnClick, ButtonSpaceCrud } from "./ButtonStyled";

export function Button({ type, text }) {
  return <ButtonSpace type={type}>{text}</ButtonSpace>;
}

export function ButtonOnClick({ type, text, onClick }) {
  return <ButtonSpaceOnClick type={type} onClick={onClick}>{text}</ButtonSpaceOnClick>;
}

export function ButtonCrud({ type, text, onClick }) {
  return <ButtonSpaceCrud type={type} onClick={onClick}>{text}</ButtonSpaceCrud>;
}