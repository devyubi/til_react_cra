import styled from "@emotion/styled";
import React from "react";
// 전역자리 (window) : 리랜더링 반영 안됨.
// styled 코드 자리
const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #444;
  white-space: nowrap;
  min-width: 60px;
`;
const InputStyled = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  font-size: 12px;
  margin-bottom: 8px;

  &:focus {
    outline: none;
    border: 1px solid #007bff;
  }
`;

function InputUi({ id, type, name, value, placeholder, label }) {
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
      ></InputStyled>
    </InputGroup>
  );
}

export default InputUi;
