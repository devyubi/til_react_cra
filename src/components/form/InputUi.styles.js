import styled from "@emotion/styled";

// styled 코드 자리
export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #444;
  white-space: nowrap;
  min-width: 60px;
`;
export const InputStyled = styled.input`
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
