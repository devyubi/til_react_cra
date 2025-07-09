import React, { useState } from "react";
import LoginForm from "../components/form/LoginForm";

function Test() {
  // js 자리
  // 변수 관리
  const [errorMessage, setErrorMessage] = useState("");

  // 모든 데이터가 모여지는 변수다.
  const [formData, setFormData] = useState({
    user_id: "",
    user_email: "",
    user_pw: "",
  });
  const handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    // 웹브라우저 새로고침 방지 (prevent:방어하다)
    e.preventDefault();
    if (formData.user_id === "") {
      setErrorMessage("Please Enter your ID");
      return;
    }
    if (formData.user_email === "") {
      setErrorMessage("Please Enter your E-mail");
      return;
    }
    if (formData.user_pw === "") {
      setErrorMessage("Please Enter your Password");
      return;
    }
    console.log("BE로 Data 전송");

    // QueryString 으로 보내기
    console.log(
      `/login/?id=${formData.user_id}&email=${formData.user_email}&pw=${formData.user_pw}`,
    );
    // 객체로 보내기
    const data = { ...formData };
    setErrorMessage("");
  };
  // jsx 자리
  return (
    <div>
      <h1>회원로그인</h1>
      <LoginForm
        formData={formData}
        errorMessage={errorMessage}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Test;
