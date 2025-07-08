# 리액트 Event

- 사용자의 인터렛션 (마우스 관련, 내용 입력 등등)
- `카멜케이스`임

## 1. 이벤트 종류

- onClick : 마우스 클릭
- onChange : form 태그의 내용이 바뀔 때
- onSubmit : form 을 확인해서 전송할 때
- onKeyDown : 키보드를 누를 때
- onKeyUp : 키보드를 뗄 때
- onMouseEnter : 마우스 커서가 영역에 걸쳐질 때
- onMouseLeave : 마우스 커서가 영역에서 벗어날 때
- onFocus : form 요소에 포커스가 될 때
- onBlur : form 요소에 포커스가 해제될 때
- onInput : form 요소에 입력 될 때 마다
- onDoubleClick : 더블 클릭 할 때

## 2. 예제

- 매개변수가 `없는 경우` 와 `존재하는 경우` 를 꼭 구분해야함

### 2.1 onClick 이벤트

```jsx
import React from "react";

function Test() {
  // js 자리
  const handleClick = () => {
    alert("클릭");
  };
  const handleClickParam = a => {
    alert(a);
  };

  // jsx 자리
  return (
    <div>
      <button onClick={handleClick}>매개변수 없는 클릭이벤트</button>
      <button onClick={() => handleClickParam("안녕")}>
        매개변수가 존재하는 클릭이벤트
      </button>
    </div>
  );
}

export default Test;
```

### 2.2 onChange 이벤트

- event.taget : 현재는 input 태그를 가르킴
- event.taget.value : 현재 input 태그의 값 (내용을 말함)

```jsx
import React, { useState } from "react";

function Test() {
  // js 자리
  const [txt, setTxt] = useState("");
  // jsx 자리
  return (
    <div>
      <input type="text" onChange={event => setTxt(event.target.value)} />
      <p>입력된 값:{txt}</p>
    </div>
  );
}

export default Test;
```

### onSubmit 이벤트 (아주 중요함)

```jsx
import React from "react";

// 백엔드에 데이터를 보낼 때
function Test() {
  const handleSubmit = event => {
    // 반드시 체크해야함
    event.preventDefault(); // 새로고침 막기 (새로고침을 할 경우 js 코드가 날아감)
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.id.value);
    console.log(event.target.pw);
    console.log(event.target.pw.value);
    if (!event.target.id.value) {
      alert("아이디를 입력하세요");
    }
    if (!event.target.pw.value) {
      alert("비밀번호를 입력하세요");
    }
    alert("로그인 시도 중");
  };
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" name="id" />
        <input type="password" name="pw" />
        <input type="submit" name="제출" />
      </form>
    </div>
  );
}

export default Test;
```

### 2.4 Keyboard (키보드) 이벤트

- onKeyDown 은 키보드 누르고 있으면 무한하게 발생한다. (조심해서 사용해야함. 주로 게임에서 많이 쓰임)
- onKeyUp 은 키보드에서 뗐을 때. (주로 `Enter키 눌렀다가 뗐을 때`)

```jsx
import React from "react";

function Test() {
  // js 자리
  const handleSearch = e => {
    console.log(e.target);
    const txt = e.target.value;
    if (e.key === "Enter") {
      alert(`${txt} 검색합니다.`);
    }
  };
  // jsx 자리
  return (
    <div>
      <input type="text" name="id" onKeyUp={e => handleSearch(e)} />
    </div>
  );
}

export default Test;
```

### 2.5 Mouse (마우스) 이벤트

- onMouseOver, onMouseOut : 사용 X
- onMouseEnter, onMouseLeave : 이걸 사용해야 함.

```jsx
import React from "react";

function Test() {
  // js 자리
  const handleOver = () => {
    console.log("마우스 오버");
  };
  const handleOut = () => {
    console.log("마우스 아웃");
  };
  // jsx 자리
  return (
    <div onMouseEnter={handleOver} onMouseLeave={handleOut}>
      <div style={{ border: "5px solid red", margin: "20px" }}>박스1</div>
      <div style={{ border: "5px solid blue", margin: "20px" }}>박스2</div>
    </div>
  );
}

export default Test;
```

### 2.6 Focus 이벤트

- onFocus, onBlur : 포커스가 된 경우와 포커스가 해제 된 경우 (input 태그)

```jsx
import React from "react";

function Test() {
  // js 자리
  const handleFocus = () => {
    console.log("포커스 됨");
  };
  const handleBlur = () => {
    console.log("포커스 해제 됨");
  };
  // jsx 자리
  return (
    <div>
      <input type="text" onFocus={handleFocus} onBlur={handleBlur}></input>
    </div>
  );
}

export default Test;
```