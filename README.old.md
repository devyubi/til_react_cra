# Context API

- React 는 컴포넌트를 위한 state 가 있음 (useState)
- React 는 글로벌 state 가 있음 (Context)
- React 에서 전역 변수를 context 라고 함
- 모든 각각의 컴포넌트는 전역 변수, 즉 Context 를 활용 할 수 있음

## 예시

- 로그인 인증 기능
- 테마 (스킨) 기능 (다크모드, 화이트모드 등)
- 과도하게 쓰는 것은 추천하지 않음

## 편리한 npm 들이 추천됨

- Redux Tool kit : 가장 난이도가 높음
- Recoil : 가장 난이도 낮음
- Zustands : 적극 추천 (해외 갈 때 무조건 필수)

## Props Drilling 의 문제 Sample

- 컴포넌트의 useState 에서 발생하는 state 관리 문제

### 1.1 기본 구조

```jsx
import React from "react";

// Header 컴포넌트
function Header() {
  return <header>헤더</header>;
}
// Footer 컴포넌트
function Footer() {
  return <footer>하단</footer>;
}
// Main 컴포넌트
function Main() {
  return (
    <main>
      <Character></Character>
      <Friend></Friend>
      <Point></Point>
      <Map></Map>
      <FAQ></FAQ>
    </main>
  );
}
// Character : 캐릭터 관리
function Character() {
  return <div>캐릭터 컴포넌트</div>;
}
// Character 선택
function ChoiceCharacter() {
  return <div>캐릭터 선택</div>;
}
// 친구 관리
function Friend() {
  return <div>친구관리</div>;
}
// Point 구매
function Point() {
  return <div>포인트 구매 서비스</div>;
}
// 주변 지도 서비스
function Map() {
  return <div>주변 지도 서비스</div>;
}
// 고객센터
function FAQ() {
  return <div>고객센터</div>;
}

function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
```

### 1.2 useState 로 사용자 정보 전달

- 단계 1. 첫번째 props 전달

```jsx
import React, { useState } from "react";

// Header 컴포넌트
function Header({ userInfo }) {
  return <header>헤더</header>;
}
// Footer 컴포넌트
function Footer({ userInfo }) {
  return <footer>하단</footer>;
}
// Main 컴포넌트
function Main({ userInfo }) {
  return (
    <main>
      <Character></Character>
      <Friend></Friend>
      <Point></Point>
      <Map></Map>
      <FAQ></FAQ>
    </main>
  );
}
// 캐릭터 관리
function Character() {
  return <div>캐릭터 컴포넌트</div>;
}
// 캐릭터 선택
function ChoiceCharacter() {
  return <div>캐릭터 선택 서비스</div>;
}
// 친구관리
function Friend() {
  return <div>친구관리 서비스</div>;
}
// 포인트 구매
function Point() {
  return <div>포인트구매서비스</div>;
}

// 주변 지도 서비스
function Map() {
  return <div>주변 지도 서비스</div>;
}

// 고객센터
function FAQ() {
  return <div>고객센터</div>;
}

function App() {
  // 사용자 정보를 위한 리액트변수
  const [userInfo, setUserInfo] = useState({
    userId: "",
    userName: "",
    userRole: "GUEST",
  });
  return (
    <div>
      <Header userInfo={userInfo}></Header>
      <Main userInfo={userInfo}></Main>
      <Footer userInfo={userInfo}></Footer>
    </div>
  );
}

export default App;
```

- 단계 2. 두번째 props 전달

```jsx
import React, { useState } from "react";

// Header 컴포넌트
function Header({ userInfo, setUserInfo }) {
  const handleClickLogin = () => {
    const user = { userId: "ub", userName: "문유비", userRole: "MEMBER" };
    setUserInfo(user);
  };
  const handleClickLogout = () => {
    const user = { userId: "", userName: "", userRole: "GUEST" }; // 로그아웃 상태
    setUserInfo(user);
  };
  return (
    <header>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>로고</p>
        <nav>
          {/* 사용자가 로그인에 따라 화면 구성 */}
          {userInfo.userId === "" ? (
            <div>
              <button onClick={handleClickLogin}>로그인</button>
              <button>회원가입</button>
            </div>
          ) : (
            <div>
              <button onClick={handleClickLogout}>로그아웃</button>
              <button>{userInfo.userName}님 회원정보 수정</button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
// Footer 컴포넌트
function Footer({ userInfo }) {
  return (
    <footer>
      {userInfo.userId === "" ? (
        <div>로그인해주세요</div>
      ) : (
        <div>{userInfo.userName}님 로그인 되었습니다.</div>
      )}
    </footer>
  );
}
// Main 컴포넌트
function Main({ userInfo }) {
  return (
    <main>
      {userInfo.userId === "" ? (
        <div>로그인이 필요한 서비스 입니다</div>
      ) : (
        <div>
          <Character userInfo={userInfo}></Character>
          <Friend userInfo={userInfo}></Friend>
          <Point userInfo={userInfo}></Point>
          <Map userInfo={userInfo}></Map>
          <FAQ userInfo={userInfo}></FAQ>
        </div>
      )}
    </main>
  );
}
// 캐릭터 관리
function Character({ userInfo }) {
  return (
    <div>
      <h2>{userInfo.userName}님 캐릭터 관리</h2>
      <ChoiceCharacter userInfo={userInfo}></ChoiceCharacter>
    </div>
  );
}
// 캐릭터 선택
function ChoiceCharacter({ userInfo }) {
  return <div>{userInfo.userName}님 캐릭터 선택 서비스</div>;
}
// 친구관리
function Friend({ userInfo }) {
  return <div>{userInfo.userName}님 친구관리 서비스</div>;
}
// 포인트 구매
function Point({ userInfo }) {
  return <div>{userInfo.userName}님 포인트구매서비스</div>;
}

// 주변 지도 서비스
function Map({ userInfo }) {
  return <div>{userInfo.userName}님 주변 지도 서비스</div>;
}

// 고객센터
function FAQ({ userInfo }) {
  return <div>{userInfo.userName}님 고객센터</div>;
}

function App() {
  // 사용자 정보를 위한 리액트변수
  const [userInfo, setUserInfo] = useState({
    userId: "",
    userName: "",
    userRole: "GUEST",
  });
  return (
    <div>
      <Header userInfo={userInfo} setUserInfo={setUserInfo}></Header>
      <Main userInfo={userInfo}></Main>
      <Footer userInfo={userInfo}></Footer>
    </div>
  );
}

export default App;
```

### 1.3 useState 로 전달한 경우 기준

- useState 변수는 3단계 이상 (3번 이상) 전달하지 않도록 하자
- 공통으로 사용하는 변수. 즉, state 라면 context를 활용하자

## context 로 해결하기

- /src/contexts 라는 폴더로 관리를 함
- `UserInfoContext`.jsx 생성

```jsx
import { Children, createContext } from "react";

// context : 리엑트용 글로벌 변수
export const UserInfoContext = createContext();
// Provider : 리엑트용 글로벌 변수를 사용하는 JSX
export const UserInfoProvider = ({ children }) => {
  // js 자리
  const [userInfo, setUserInfo] = useState({
    userId: "",
    userName: "",
    userRole: "GUEST",
  });
  // jsx 자리
  return (
    <UserInfoContext.Provider value={(userInfo, setUserInfo)}>
      {children}
    </UserInfoContext.Provider>
  );
};
```

alt+shift+o : 안쓰는거 한방에 다 날려줌
.eslintrc.json 에 "react/react-in-jsx-scope": "off" 해당 문구 있어야함

### 2. context 활용 (App.jsx)

```jsx
import { useContext } from "react";
import { UserInfoContext, UserInfoProvider } from "./contexts/UserInfoContext";

// Header 컴포넌트
function Header() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo, setUserInfo } = useContext(UserInfoContext);

  const handleClickLogin = () => {
    const user = { userId: "ub", userName: "문유비", userRole: "MEMBER" };
    setUserInfo(user);
  };
  const hanldeClickLogout = () => {
    const user = { userId: "", userName: "", userRole: "GUEST" };
    setUserInfo(user);
  };
  return (
    <header>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>로고</p>
        <nav>
          {/* 사용자가 로그인에 따라 화면구성 */}
          {userInfo.userId === "" ? (
            <div>
              <button onClick={handleClickLogin}>로그인</button>
              <button>회원가입</button>
            </div>
          ) : (
            <div>
              <button onClick={hanldeClickLogout}>로그아웃</button>
              <button>{userInfo.userName}님 회원정보수정</button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
// Footer 컴포넌트
function Footer() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  return (
    <footer>
      {userInfo.userId === "" ? (
        <div>현재 로그인 안되었어요.</div>
      ) : (
        <div>{userInfo.userName}님 로그인되었어요.</div>
      )}
    </footer>
  );
}
// Main 컴포넌트
function Main() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  return (
    <main>
      {userInfo.userId === "" ? (
        <div>로그인을 하셔야 서비스 이용가능합니다.</div>
      ) : (
        <div>
          <Character></Character>
          <Friend></Friend>
          <Point></Point>
          <Map></Map>
          <FAQ></FAQ>
        </div>
      )}
    </main>
  );
}
// 캐릭터 관리
function Character() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  return (
    <div>
      <h2>{userInfo.userName}님 캐릭터 관리</h2>
      <ChoiceCharacter userInfo={userInfo}></ChoiceCharacter>
    </div>
  );
}
// 캐릭터 선택
function ChoiceCharacter() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  return <div>{userInfo.userName}님 캐릭터 선택 서비스</div>;
}
// 친구관리
function Friend() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  return <div>{userInfo.userName}님 친구관리 서비스</div>;
}
// 포인트 구매
function Point() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  return <div>{userInfo.userName}님 포인트구매서비스</div>;
}

// 주변 지도 서비스
function Map() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  return <div>{userInfo.userName}님 주변 지도 서비스</div>;
}

// 고객센터
function FAQ() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  return <div>{userInfo.userName}님 고객센터</div>;
}

function App() {
  return (
    <div>
      <UserInfoProvider>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </UserInfoProvider>
    </div>
  );
}

export default App;
```

## 응용 / 테마 만들어 적용하기

- /src/contexts/UserThemeContext.jsx 파일 생성

```jsx
import { createContext, useContext, useState } from "react";

export const UserThemeContext = createContext();
export const UserThemeProvider = ({ children }) => {
  const [bg, setBg] = useState("#ffdff8");
  return (
    <UserThemeContext.Provider value={{ bg, setBg }}>
      {children}
    </UserThemeContext.Provider>
  );
};
```

- 응용 (App.jsx)

```jsx
import { useContext } from "react";
import { UserInfoContext, UserInfoProvider } from "./contexts/UserInfoContext";
import {
  UserThemeContext,
  UserThemeProvider,
} from "./contexts/UserThemeContext";

// Header 컴포넌트
function Header() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  const { bg } = useContext(UserThemeContext);

  const handleClickLogin = () => {
    const user = { userId: "ub", userName: "문유비", userRole: "MEMBER" };
    setUserInfo(user);
  };
  const hanldeClickLogout = () => {
    const user = { userId: "", userName: "", userRole: "GUEST" };
    setUserInfo(user);
  };
  return (
    <header style={{ background: bg }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>로고</p>
        <nav>
          {/* 사용자가 로그인에 따라 화면구성 */}
          {userInfo.userId === "" ? (
            <div>
              <button onClick={handleClickLogin}>로그인</button>
              <button>회원가입</button>
            </div>
          ) : (
            <div>
              <button onClick={hanldeClickLogout}>로그아웃</button>
              <button>{userInfo.userName}님 회원정보수정</button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
// Footer 컴포넌트
function Footer() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  const { bg } = useContext(UserThemeContext);
  return (
    <footer style={{ background: bg }}>
      {userInfo.userId === "" ? (
        <div>현재 로그인 안되었어요.</div>
      ) : (
        <div>{userInfo.userName}님 로그인되었어요.</div>
      )}
    </footer>
  );
}
// Main 컴포넌트
function Main() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  const { bg } = useContext(UserThemeContext);
  return (
    <main style={{ background: bg }}>
      {userInfo.userId === "" ? (
        <div>로그인을 하셔야 서비스 이용가능합니다.</div>
      ) : (
        <div>
          <Character></Character>
          <Friend></Friend>
          <Point></Point>
          <Map></Map>
          <FAQ></FAQ>
        </div>
      )}
    </main>
  );
}
// 캐릭터 관리
function Character() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  const { setBg } = useContext(UserThemeContext);
  const handleClick = _color => {
    setBg(_color);
  };
  return (
    <div>
      <h2>{userInfo.userName}님 캐릭터 관리</h2>
      <div>
        <button onClick={() => handleClick("#fef0ca")}>테마1</button>
        <button onClick={() => handleClick("#f6ffb6")}>테마2</button>
        <button onClick={() => handleClick("#cbfff5")}>테마3</button>
        <button onClick={() => handleClick("#ffd3f9")}>테마4</button>
        <button onClick={() => handleClick("#ffd2eb")}>테마5</button>
      </div>
    </div>
  );
}
// 캐릭터 선택
function ChoiceCharacter() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  return <div>{userInfo.userName}님 캐릭터 선택 서비스</div>;
}
// 친구관리
function Friend() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  return <div>{userInfo.userName}님 친구관리 서비스</div>;
}
// 포인트 구매
function Point() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  return <div>{userInfo.userName}님 포인트구매서비스</div>;
}

// 주변 지도 서비스
function Map() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  return <div>{userInfo.userName}님 주변 지도 서비스</div>;
}

// 고객센터
function FAQ() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  return <div>{userInfo.userName}님 고객센터</div>;
}

function App() {
  return (
    <div>
      <UserThemeProvider>
        <UserInfoProvider>
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </UserInfoProvider>
      </UserThemeProvider>
    </div>
  );
}

export default App;
```

## 응용 버켓 만들어 적용하기

- /src/contexts/UserBucketContext.jsx 파일 생성

```jsx
import { createContext, useState } from "react";

export const UserBucketContext = createContext();
export const UserBucketProvider = ({ children }) => {
  const [bucketList, setBucketList] = useState([]);
  const [total, setTotal] = useState(0);
  return (
    <UserBucketContext.Provider value={{ bucketList, setBucketList }}>
      {children}
    </UserBucketContext.Provider>
  );
};
```

- App.jsx

```jsx
import { useContext } from "react";
import {
  UserBucketContext,
  UserBucketProvider,
} from "./contexts/UserBucketContext";
import { UserInfoContext, UserInfoProvider } from "./contexts/UserInfoContext";
import {
  UserThemeContext,
  UserThemeProvider,
} from "./contexts/UserThemeContext";

// Header 컴포넌트
function Header() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  const { bg } = useContext(UserThemeContext);
  const { bucketList } = useContext(UserBucketContext);

  const handleClickLogin = () => {
    const user = { userId: "ub", userName: "문유비", userRole: "MEMBER" };
    setUserInfo(user);
  };
  const handleClickLogout = () => {
    const user = { userId: "", userName: "", userRole: "GUEST" };
    setUserInfo(user);
  };
  return (
    <header style={{ background: bg }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>로고</p>
        <nav>
          {/* 사용자가 로그인에 따라 화면구성 */}
          {userInfo.userId === "" ? (
            <div>
              <button onClick={handleClickLogin}>로그인</button>
              <button>회원가입</button>
            </div>
          ) : (
            <div>
              <button onClick={handleClickLogout}>로그아웃</button>
              <button>{userInfo.userName}님 회원정보수정</button>
              <span>{bucketList.length} 개의 상품 장바구니</span>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
// Footer 컴포넌트
function Footer() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  const { bg } = useContext(UserThemeContext);
  return (
    <footer style={{ background: bg }}>
      {userInfo.userId === "" ? (
        <div>현재 로그인 안되었어요.</div>
      ) : (
        <div>{userInfo.userName}님 로그인되었어요.</div>
      )}
    </footer>
  );
}
// Main 컴포넌트
function Main() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  const { bg } = useContext(UserThemeContext);
  return (
    <main style={{ background: bg }}>
      {userInfo.userId === "" ? (
        <div>로그인을 하셔야 서비스 이용가능합니다.</div>
      ) : (
        <div>
          <Character></Character>
          <Friend></Friend>
          <Point></Point>
          <Map></Map>
          <FAQ></FAQ>
        </div>
      )}
    </main>
  );
}
// 캐릭터 관리
function Character() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  const { setBg } = useContext(UserThemeContext);
  const handleClick = _color => {
    setBg(_color);
  };
  return (
    <div>
      <h2>{userInfo.userName}님 캐릭터 관리</h2>
      <div>
        <button onClick={() => handleClick("#fef0ca")}>테마1</button>
        <button onClick={() => handleClick("#f6ffb6")}>테마2</button>
        <button onClick={() => handleClick("#cbfff5")}>테마3</button>
        <button onClick={() => handleClick("#ffd3f9")}>테마4</button>
        <button onClick={() => handleClick("#ffd2eb")}>테마5</button>
      </div>
    </div>
  );
}
// 캐릭터 선택
function ChoiceCharacter() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  return <div>{userInfo.userName}님 캐릭터 선택 서비스</div>;
}
// 친구관리
function Friend() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  return <div>{userInfo.userName}님 친구관리 서비스</div>;
}
// 포인트 구매
function Point() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  const { bucketList, setBucketList } = useContext(UserBucketContext);
  const handleClick = _goodId => {
    setBucketList([...bucketList, _goodId]);
  };
  return (
    <div onClick={() => handleClick("사과")}>
      {userInfo.userName}님 포인트구매서비스
    </div>
  );
}

// 주변 지도 서비스
function Map() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  return <div>{userInfo.userName}님 주변 지도 서비스</div>;
}

// 고객센터
function FAQ() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  return <div>{userInfo.userName}님 고객센터</div>;
}

function App() {
  return (
    <div>
      <UserThemeProvider>
        <UserBucketProvider>
          <UserInfoProvider>
            <Header />
            <Main />
            <Footer />
          </UserInfoProvider>
        </UserBucketProvider>
      </UserThemeProvider>
    </div>
  );
}

export default App;
```

# useReducer

# useReducer + Context
