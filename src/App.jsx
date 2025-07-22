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
