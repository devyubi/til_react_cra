import styled from "@emotion/styled";
import React from "react";

// 전역자리
const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px Solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  &:focus {
    outline: none;
    border: 1px solid #007bff;
  }
`;
const StyledLabel = styled.label`
  font-size: 13px;
  display: block;
  padding-left: 10px;
  color: #333;
  font-weight: 600;
  min-width: 55px;
  white-space: nowrap; // 줄내림 x (일자로 한줄처리)
`;
const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
`;

function InputField({ label, type, name, value, placeholder, onChange }) {
  // js 자리

  // jsx 자리
  return (
    <InputGroup>
      <StyledLabel htmlfor={name}>{label}</StyledLabel>
      <StyledInput
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputGroup>
  );
}

export default InputField;
