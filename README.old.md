# useState

- 리액트에서 변수를 만드는 법
- `변수의 값이 변하면 웹브라우저의 화면도 변한다.`

```jsx
const [변수명, set변수명] = useState(초기값);
```

## 1. 일반 js 라면 ?

- 화면에 초기 값만 보이고 변화가 없음

```js
import React from "react";

function Test() {
  // js 자리
  let count = 0; // js 변수
  const add = () => {
    count = count + 1;
    console.log(count);
  };

  // jsx 자리
  return (
    <div>
      <button onClick={add}>함수실행</button>
      <p>count : {count} </p>
    </div>
  );
}

export default Test;
```

## 2. React 변수라면 ?

- 값이 set 으로 변하면 화면도 새로 그림

```js
import React, { useState } from "react";

function Test() {
  // js 자리
  const [count, setCount] = useState(0); // js 변수
  const add = () => {
    setCount(count + 1);
    console.log(count);
  };

  // jsx 자리
  return (
    <div>
      <button onClick={add}>함수실행</button>
      <p>count : {count} </p>
    </div>
  );
}

export default Test;
```

## 3. 다양한 예제

```jsx
import React, { useState } from "react";

function Test() {
  // js 자리
  const [userName, setUserName] = useState("");
  const handleChange = e => {
    // setUserName(e.target.value); //e.target = HTML 태그, value = e
  };
  const handleKeyUp = e => {
    if (e.key === "Enter") {
      const txt = e.target.value;
      // 추후 yup 라이브러리 사용해볼 것임.
      if (!txt) {
        alert("이름을 다시 입력해주세요.");
        return;
      }
      setUserName(txt);
    }
  };
  // jsx 자리
  return (
    <div>
      <h1>사용자 이름을 입력하면 이름 출력하기</h1>
      <input
        type="text"
        onChange={e => handleChange(e)}
        onKeyUp={e => handleKeyUp(e)}
        placeholder="이름을 입력하세요."
      />
      <h2>안녕하세요. {userName} 님 반갑습니다.</h2>
    </div>
  );
}

export default Test;
```

```jsx
import React, { useState } from "react";

function Test() {
  // js 자리
  const [agree, setAgree] = useState(false);
  const handleChange = e => {
    console.log(e.target);
    console.log(e.target.value);
    setAgree(e.target.checked);
  };
  // jsx 자리
  return (
    <div>
      <label>
        <input type="checkbox" onChange={e => handleChange(e)} />
        약관에 동의합니다.
      </label>
      <p>{agree ? "동의합니다" : "동의가 필요합니다"}</p>
    </div>
  );
}

export default Test;
```

- 더 쉽고 깔끔하게 하는 방법

```jsx
import React, { useState } from "react";

function Test() {
  const [agree, setAgree] = useState(false);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={agree}
          onChange={e => setAgree(e.target.checked)}
        />
        약관에 동의합니다.
      </label>
      <p>{agree ? "동의합니다" : "동의가 필요합니다"}</p>
    </div>
  );
}

export default Test;
```

```jsx
import React, { useState } from "react";

function Test() {
  const [todoList, setTodoList] = useState([]); // 할 일 목록
  const [text, setText] = useState(""); // 입력창 내용

  // 입력창이 바뀔 때마다 text 상태를 업데이트
  const handleInputChange = e => {
    setText(e.target.value);
  };

  // 버튼 눌렀을 때 목록에 추가
  const handleClick = () => {
    if (text.trim() === "") return; // 빈칸이면 추가 안 함
    setTodoList([...todoList, text]); // 기존 목록 + 새로운 할일
    setText(""); // 입력창 비우기
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={handleClick}>목록추가</button>

      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li> // 할 일 목록 표시
        ))}
      </ul>
    </div>
  );
}

export default Test;
```

- txt 바꾸기

```jsx
import React, { useState } from "react";

function Test() {
  const [todoList, setTodoList] = useState([]); // 할 일 목록
  const [text, setText] = useState(""); // 입력창 내용

  // 입력창이 바뀔 때마다 text 상태를 업데이트
  const handleInputChange = e => {
    setText(e.target.value);
  };

  // 버튼 눌렀을 때 목록에 추가
  const handleClick = () => {
    if (text.trim() === "") return; // 빈칸이면 추가 안 함
    setTodoList([...todoList, text]); // 기존 목록 + 새로운 할일
    setText(""); // 입력창 비우기
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={handleClick}>목록추가</button>

      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li> // 할 일 목록 표시
        ))}
      </ul>
    </div>
  );
}

export default Test;
```

```jsx
import React, { useState } from "react";

function Test() {
  // js 자리
  // 입력중인 할일
  const [todo, setTodo] = useState("");
  // 전체 목록
  const [todoList, setTodoList] = useState([]);

  const handleClick = () => {
    if (todo === "") {
      return;
    }
    setTodoList([...todoList, todo]);
    setTodo("");
  };

  const handleChange = e => {
    //console.log(e.target); // 태그가 들어옴
    setTodo(e.target.value);
  };
  const handleKeyUp = e => {
    if (e.key === "Enter") {
      if (todo === "") {
        return;
      }
      setTodoList([...todoList, todo]);
      setTodo("");
    }
  };
  // jsx 자리
  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={e => handleChange(e)}
        onKeyUp={e => handleKeyUp(e)}
      />
      <button onClick={handleClick}>목록추가</button>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
```

- 다크모드

```jsx
import React, { useState } from "react";

function Test() {
  const [dark, setDark] = useState(false);
  const handleClick = () => {
    setDark(!dark);
  };
  const AppStyle = {
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    padding: "20px",
    background: dark ? "#fff" : "#141414",
    color: dark ? "#141414" : "#fff",
  };
  return (
    <div style={AppStyle}>
      <button onClick={handleClick}>
        {dark ? "라이트 모드" : "다크 모드"}
      </button>
      <h1>{dark ? "현재 라이트 모드 입니다" : "현재 다크 모드 입니다"}</h1>
    </div>
  );
}

export default Test;
```

- 장바구니

```jsx
import React, { useState } from "react";

function Test() {
  // js 자리
  const [cart, setCart] = useState([]);
  const handleCartAdd = fruit => {
    setCart([...cart, fruit]);
  };
  // jsx 자리
  return (
    <div>
      <h2>장바구니</h2>
      <button onClick={() => handleCartAdd("딸기")}>딸기</button>
      <button onClick={() => handleCartAdd("사과")}>사과</button>
      <button onClick={() => handleCartAdd("바나나")}>바나나</button>
      <div>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Test;
```

# 4. 실전예제

### 4.1 회원가입

```jsx
import React, { useState } from "react";

function Test() {
  // js 자리
  // 변수 관리
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPw, setUserPw] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setFormData] = useState({});
  // 이벤트 처리 함수
  const handleUserId = e => {
    setUserId(e.target.value);
  };
  const handleUserEmail = e => {
    setUserEmail(e.target.value);
  };
  const handleUserPw = e => {
    setUserPw(e.target.value);
  };
  const handleSubmit = e => {
    // 웹브라우저 새로고침 방지 (prevent:방어하다)
    e.preventDefault();
    if (userId === "") {
      setErrorMessage("Please Enter your ID");
      return;
    }
    if (userEmail === "") {
      setErrorMessage("Please Enter your E-mail");
      return;
    }
    if (userPw === "") {
      setErrorMessage("Please Enter your Password");
      return;
    }
    console.log("BE로 Data 전송");
    console.log(`${userId} ${userEmail} ${userPw}`);
    // QueryString 으로 보내기
    console.log(`/login/?id=${userId}&email=${userEmail}&pw=${userPw}`);
    // 객체로 보내기
    setFormData({ id: userId, email: userEmail, pw: userPw });
    setErrorMessage("");
  };
  // jsx 자리
  return (
    <div>
      <h1>회원로그인</h1>
      <div>
        <form onSubmit={e => handleSubmit(e)}>
          <input
            type="text"
            value={userId}
            placeholder="Please Enter your ID"
            onChange={e => setUserId(e.target.value)}
          />
          <br />
          <input
            type="email"
            value={userEmail}
            placeholder="Please Enter your E-mail"
            onChange={e => setUserEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            value={userPw}
            placeholder="Please Enter your Password"
            onChange={e => handleUserPw(e)}
          />
          <br />
          <button type="submit">로그인</button>
        </form>
        <div>{errorMessage}</div>
      </div>
    </div>
  );
}

export default Test;
```

- 각 입력 항목을 컴포턴트화 한다
- 각 컴포넌트의 요소를 `emotion` 으로 스타일링 한다
- 컴포넌트를 재활용하여 보자
- Components/form 폴더 만들기
- Components/form/Input.jsx 만들기

### 4.2 기능 개선 이전 버전

```jsx
// src/pages/Test.jsx/
import React, { useState } from "react";
import LoginForm from "../components/form/LoginForm";

function Test() {
  // js 자리
  // 변수 관리
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPw, setUserPw] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({});
  // 이벤트 처리 함수
  const handleUserId = e => {
    setUserId(e.target.value);
  };
  const handleUserEmail = e => {
    setUserEmail(e.target.value);
  };
  const handleUserPw = e => {
    setUserPw(e.target.value);
  };
  const handleSubmit = e => {
    // 웹브라우저 새로고침 방지 (prevent:방어하다)
    e.preventDefault();
    if (userId === "") {
      setErrorMessage("Please Enter your ID");
      return;
    }
    if (userEmail === "") {
      setErrorMessage("Please Enter your E-mail");
      return;
    }
    if (userPw === "") {
      setErrorMessage("Please Enter your Password");
      return;
    }
    console.log("BE로 Data 전송");
    console.log(`${userId} ${userEmail} ${userPw}`);
    // QueryString 으로 보내기
    console.log(`/login/?id=${userId}&email=${userEmail}&pw=${userPw}`);
    // 객체로 보내기
    setFormData({ id: userId, email: userEmail, pw: userPw });
    setErrorMessage("");
  };
  // jsx 자리
  return (
    <div>
      <h1>회원로그인</h1>
      <LoginForm
        userId={userId}
        setUserId={setUserId}
        userEmail={userEmail}
        setUserEmail={setUserEmail}
        userPassword={userPw}
        setUserPassword={setUserPw}
        formData={formData}
        setFormData={setFormData}
        errorMessage={errorMessage}
        handleUserId={handleUserId}
        handleUserEmail={handleUserEmail}
        handleUserPassword={handleUserPw}
        handleSubmit={handleSubmit}
      ></LoginForm>
    </div>
  );
}

export default Test;
```

```jsx
// src/components/form/LoginForm.jsx/
import styled from "@emotion/styled";
import React from "react";
import InputField from "./InputField";

function LoginForm({
  userId,
  setUserId,
  userEmail,
  setUserEmail,
  userPw,
  setUserPw,
  formData,
  errorMessage,
  handleUserId,
  handleUserEmail,
  handleUserPw,
  handleSubmit,
}) {
  // js 자리
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

  // jsx 자리
  return (
    <FormContainer>
      <form onSubmit={e => handleSubmit(e)}>
        <InputField
          label="ID"
          type="text"
          value={userId}
          placeholder="Please Enter your ID"
          onChange={e => setUserId(e.target.value)}
        />
        <InputField
          label="E-mail"
          type="email"
          value={userEmail}
          placeholder="Please Enter your E-mail"
          onChange={e => setUserEmail(e.target.value)}
        />
        <InputField
          label="P.W"
          type="password"
          value={userPw}
          placeholder="Please Enter your Password"
          onChange={e => handleUserPw(e)}
        />
        <SubmitButton type="submit">로그인</SubmitButton>
      </form>
      <ErrorText>{errorMessage}</ErrorText>
    </FormContainer>
  );
}

export default LoginForm;
```

```jsx
// src/form/InputField.jsx/
import styled from "@emotion/styled";
import React from "react";

function InputField({ label, type, value, placeholder, onChange }) {
  // js 자리
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
  // jsx 자리
  return (
    <InputGroup>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputGroup>
  );
}

export default InputField;
```

### 4.3 기능 개선 버전

- useState 가 너무 많음 (즉, props 가 너무 많다)
- 알아야 하는 문법

```js
// sample
[...arr, 요소];

{...obj, [속성명]:속성값};

const {name, value} = e.target;
{...obj, [속성명]:속성값};
```

- Test.jsx

```jsx
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
```

- InputField.jsx

```jsx
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
```

- LoginForm.jsx

```jsx
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
```
