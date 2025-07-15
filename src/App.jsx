import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import IndexPage from "./pages/Index";
import AboutPage from "./pages/about/About";
import MissionPage from "./pages/about/Mission";
import TeamPage from "./pages/about/Team";
import ServicePage from "./pages/service/Service";
import BlogPage from "./pages/blog/Blog";
import DesignPage from "./pages/blog/Design";
import DetailPage from "./pages/blog/Detail";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // js 자리
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    console.log(isLogin);
  }, [isLogin]);
  // jsx 자리
  return (
    <Router>
      <Header
        company={"좋은 회사"}
        service={"Todo 서비스"}
        setIsLogin={setIsLogin}
      >
        <div>😀 나는 자식입니다.</div>
        <div>😎 자식은 여러명일 수 있습니다.</div>
      </Header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<IndexPage first={"첫 페이지입니다"} />}
          ></Route>
          {/* About 관련 */}
          <Route path="/about">
            <Route index element={<AboutPage />}></Route>
            <Route path="mission" element={<MissionPage />}></Route>
            <Route path="team" element={<TeamPage />}></Route>
          </Route>

          <Route path="/service" element={<ServicePage />}></Route>

          {/* blog 관련 */}
          <Route path="/blog">
            <Route index element={<BlogPage />}></Route>
            {/* design 중첩 관련 */}
            <Route path="design">
              <Route path=":id" element={<DesignPage />}></Route>
              <Route path="detail" element={<DetailPage />}></Route>
            </Route>
          </Route>
          {/* 잘못된 경로 접근 처리 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer>
        {" "}
        {isLogin ? (
          <p>🌹 로그인 중이시네요.</p>
        ) : (
          <p>😎 로그아웃 중이시군요.</p>
        )}
      </Footer>
    </Router>
  );
}

export default App;
