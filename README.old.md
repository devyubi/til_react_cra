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
  const [text, setText] = useState("");         // 입력창 내용

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
  const [text, setText] = useState("");         // 입력창 내용

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