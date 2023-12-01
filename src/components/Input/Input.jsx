import { InputSpace } from "./InputStyled";

export function Input({ type, placeholder, name, onChange }) {

  return (
    <InputSpace type={type} placeholder={placeholder} onChange={onChange} />
  );
}