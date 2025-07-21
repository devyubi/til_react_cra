#useMemo

## 1. 최적화 참고사항

- **면접 시 질문할 수 있음** : 최적화 해 보셨나요?

### 1.1 레이아웃

- Shift Layout 현상을 가능하면 제거하기
- css 로 꾸준히 작업, npm 으로 가짜 배치
- 대표적으로 skeleton 레이아웃
- 반응형 코드 꾸준히 작업해야함

### 1.2 React 성능 최적화

- lazy, suspense 로 Roading 처리
- 코드상으로 **useMemo, useCallBack, React.memo()** 로 판별함 - 프로젝트 거의 다 끝나고 하는 것

### 1.3 SEO 최적화

- meta 태그
- favicon
- title
- 모바일 icon 등등
- **GA4 적용** ( 기획팀에서 하는 것이지만 해놓으면 + 요소)

## 2. useMemo

- 개발 중에는 적용하지 않음 (시간이 많이 걸림)
- 최적화를 고민하면서 개발하면 시간이 오래 걸린다.
- 개발 중에 틈틈이 최적화 하는 것을 권장

### 2.1. useMemo : 리액트 변수 저장하기

- 성능 이슈가 발생함
  - 문제점
    - `count` 값 변경시
    - 다시 계산할 필요없는 `num * 2` 가 실행됨
    - 원하는 것 : num 값이 변할 때만 다시 계산할 필요 `num * 2` 가 실행됨

```jsx
import React, { useState } from "react"; // React와 useState 불러오기

function App() {
  console.log("APP : 리랜더링"); // 컴포넌트가 리렌더링될 때마다 실행되는 로그

  const [count, setCount] = useState(0); // count 상태 값 (초기값 0)
  const [num, setNum] = useState(1); // num 상태 값 (초기값 1)

  const now = num * 2; // num이 바뀔 때마다 now는 계산됨 (2배)

  console.log("now : ", now); // 현재 now 값 출력

  return (
    <div>
      <h2>count 값 : {count}</h2> {/* 현재 count 값 표시 */}
      <h2>num 값 : {num}</h2> {/* 현재 num 값 표시 */}
      <h2>now 값 : {now}</h2> {/* num * 2 계산 결과 표시 */}
      <button onClick={() => setCount(count + 1)}>count 증가</button>{" "}
      {/* count 증가 버튼 */}
      <button onClick={() => setNum(num + 1)}>num 증가</button>{" "}
      {/* num 증가 버튼 */}
    </div>
  );
}

export default App;
```

- useMemo를 적용해 해결한 버전

```jsx
import React, { useState, useMemo } from "react"; // useMemo도 불러오기

function App() {
  // js 자리
  console.log("APP : 리렌더링");

  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  // useMemo: num이 바뀔 때만 계산함
  const now = useMemo(() => {
    console.log("now 계산됨");
    return num * 2;
  }, [num]);

  console.log("now : ", now);
  // jsx 자리
  return (
    <div>
      <h2>count 값 : {count}</h2>
      <h2>num 값 : {num}</h2>
      <h2>now 값 : {now}</h2>

      <button onClick={() => setCount(count + 1)}>count 증가</button>
      <button onClick={() => setNum(num + 1)}>num 증가</button>
    </div>
  );
}

export default App;
```

- useMemo 연습 2

```jsx
import React, { useMemo, useState } from "react";

function App() {
  // js 자리
  const [num, setNum] = useState(0);
  const [text, setText] = useState("");

  const refeltFN = useMemo(() => {
    return num * num;
  }, [num]);

  const helloFN = useMemo(() => {
    return text + " 안녕 !";
  }, [text]);

  // jsx 자리
  return (
    <div>
      <h1>간단한 계산 출력</h1>
      <div>
        <input
          type="number"
          placeholder="숫자입력"
          value={num}
          onChange={e => setNum(parseInt(e.target.value))}
        />
        <div>{refeltFN}</div>
        <h1>글자 최적화</h1>
        <div>
          <input
            onChange={e => setText(e.target.value)}
            type="text"
            value={text}
          />
        </div>
        <div>{helloFN}</div>
      </div>
    </div>
  );
}

export default App;
```

# useCallback

- 왜 함수를 랜더링마다 새로 만들까?

- 성능 이슈가 발생함
  - 문제점
    - `count` 값 변경시
    - 다시 만들 필요없는 `const add = () {...}` 가 만들어짐
    - 원하는 것 : ``const add = () { ... }` 한번 만들고 다시는 새로 만들지 마라.

```jsx
import React, { useState } from "react";
import { Button } from "./pages/todo/Todo.style";

function App() {
  console.log("App:리렌더링");
  // js 자리
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  // jsx 자리
  return (
    <div>
      <h2>Count: {count}</h2>
      <Button onClick={add}>함수 실행</Button>
    </div>
  );
}

export default App;
```

- 위 예제 문제 성능 개선

```jsx
import React, { useCallback, useState } from "react";

function App() {
  console.log("App : 리랜더링");
  // js 자리
  const [count, setCount] = useState(0);

  // 과연 add 함수는 다시 정의가 될까?
  const add = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // jsx 자리
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={add}>함수 실행</button>
    </div>
  );
}

export default App;
```

# React.memo

- 불필요한 리랜더링을 막아줌
- props 가 전달되면 리랜더링이 일어남
- 이를 최적화 하기 위함.

## 1. 문제점

- 리액트 변수. 즉, `useState 에 의해서 값이 변해서 리랜더링 된 것은 정상`임
- 그러나 리랜더링에서 제외되어야 하는 컴포넌트를 설정할 필요성이 있음.

```jsx
import React, { memo } from "react";

function Child() {
  // js 자리
  console.log("Child:리랜더링");
  // jsx 자리
  return <div>Child</div>;
}

export default memo(Child);
```
