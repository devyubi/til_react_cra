import styled from "@emotion/styled";
import React from "react";
import InputField from "./InputField";

// 전역 자리
const FormContainer = styled.div`
  width: 100%;
  padding: 25px;
  max-width: 400px;
  margin: 30px auto;
  border-radius: 16px;
  background-color: #fafafa;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
const ErrorText = styled.div`
  color: "red";
  margin-top: 10px;
  font-size: 12px;
`;
const SubmitButton = styled.button`
  border-radius: 15px;
  width: 100%;
  padding: 15px;
  max-width: 500px;
  margin: 15px auto;
  display: block;
  background-color: #007bff;
  color: #fff;
  border: 1px solid #0036cb;
  font-size: 12px;
  &:hover {
    background-color: #0061c8;
  }
`;

function LoginForm({ formData, errorMessage, handleSubmit, handleChange }) {
  // js 자리

  // jsx 자리
  return (
    <FormContainer>
      <form onSubmit={e => handleSubmit(e)}>
        <InputField
          label="ID"
          type="text"
          name="user_id"
          value={formData.user_id}
          placeholder="Please Enter your ID"
          // 점점 짧아짐 (하단 onChange 참고)
          onChange={handleChange}
        />
        <InputField
          label="E-mail"
          type="email"
          name="user_email"
          value={formData.user_email}
          placeholder="Please Enter your E-mail"
          // 또 짧아짐 (하단 onChange 참고)
          onChange={e => handleChange(e)}
        />
        <InputField
          label="P.W"
          type="password"
          name="user_pw"
          value={formData.user_pw}
          placeholder="Please Enter your Password"
          // 최종
          onChange={handleChange}
        />
        <SubmitButton type="submit">로그인</SubmitButton>
      </form>
      <ErrorText>{errorMessage}</ErrorText>
    </FormContainer>
  );
}

export default LoginForm;
