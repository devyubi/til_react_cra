import styled from "@emotion/styled";
import React from "react";
import { InputGroup, InputStyled, Label } from "./InputUi.styles";
// 전역자리 (window) : 리랜더링 반영 안됨.

function InputUi({ id, type, name, value, placeholder, label, onChange }) {
  // js

  // jsx
  return (
    <InputGroup>
      <Label htmlFor={id}>{label}</Label>
      <InputStyled
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
      ></InputStyled>
    </InputGroup>
  );
}

export default InputUi;
