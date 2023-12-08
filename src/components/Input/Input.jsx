import { InputSpace } from "./InputStyled";

export function Input({ type, placeholder, name, onChange, value }) {

  return (
    <InputSpace type={type} placeholder={placeholder} onChange={onChange} value={value} />
  );
}