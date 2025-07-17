import React, { useEffect } from "react";
import {
  createSearchParams,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Button } from "../todo/Todo.style";

function Layout() {
  // js 자리
  const navigate = useNavigate();
  const handleClickHome = () => {
    const path = "/";
    const 숨긴정보 = {
      memo: "회사소개에서 왔어요",
      good: "제품도 봤어요",
      favorite: "이사람 제품1에 관심있네요?",
    };
    navigate({ pathname: path, search: "?hi=100" }, { state: { 숨긴정보 } });
  };

  // 현재 path 알아내기 (사용자 몰래 정보 전달하기)
  const { pathname, search, state } = useLocation();
  console.log(pathname); //      /company/list
  console.log(search); //        ?age=1
  console.log(state); //         null 이 나옴

  useEffect(() => {
    const user = {
      name: "iu",
      age: 29,
      id: 100,
    };
    const queryStr = createSearchParams({ ...user }).toString();
    console.log(queryStr);
  }, []);

  // jsx 자리
  return (
    <div>
      <div>로컬메뉴</div>
      <div>
        <div>
          <Button onClick={handleClickHome}>홈</Button>
          <br />
          <Link to="/company">회사 소개</Link>
          <br />
          <Link to="/company/list">제품 소개</Link>
          <br />
          <Link to="/company/location">회사 위치 소개</Link>
        </div>
        <h2>Outlet 자리</h2>
        <div style={{ background: "yellow", minHeight: 100 }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
