import 이름 from "../../assets/logo192.png";

import { lazy, Suspense, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoadingDiv from "../../components/ui/LoadingDiv";

// import Todo from "./Todo";
const TodoPage = lazy(() => import("./Todo"));
// const TodoPage = lazy(
//   () =>
//     new Promise(resolve => setTimeout(() => resolve(import("./Todo")), 1500)),
// );

// import TodoAdd from "./TodoAdd";
const TodoAdd = lazy(() => import("./TodoAdd"));

// import TodoDetail from "./TodoDetail";
const TodoDetail = lazy(() => import("./TodoDetail"));

// import TodoEdit from "./TodoEdit";
const TodoEdit = lazy(() => import("./TodoEdit"));

// import Layout from "../company/Layout";
const Layout = lazy(() => import("../company/Layout"));

// import CompanyDetail from "../company/CompanyDetail";
const CompanyDetail = lazy(() => import("../company/CompanyDetail"));

// import CompanyList from "../company/CompanyList";
const CompanyList = lazy(() => import("../company/CompanyList"));

// import CompanyLocation from "../company/CompanyLocation";
const CompanyLocation = lazy(() => import("../company/CompanyLocation"));

function Index() {
  // js 자리
  // 전체 목록
  const [todoList, setTodoList] = useState([]);

  // 현재 작성중인 목록
  const initTodo = { title: "", content: "" };
  const [todo, setTodo] = useState(initTodo);

  // uid 를 이용해서 구분한다.(예.uuid 라이브러리)
  const [uid, setUid] = useState(0);

  // 수정 중인 내용 - 관리할 필요가 없음
  // const editInitTodo = { id: 0, title: "", content: "" };
  // const [editTodo, setEditTodo] = useState(editInitTodo);

  // 새로운 할일 등록 함수 생성
  const handleAddChange = e => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const handleAddSubmit = () => {
    // 전체 목록 갱신 해주자.
    setTodoList([...todoList, { ...todo, id: uid }]);
    setUid(uid + 1);
    setTodo(initTodo);
  };
  // 수정 Submit 처리하기
  const handleEditSubmit = editItem => {
    console.log(editItem);
    const tempArr = todoList.map(item => {
      if (item.id === editItem.id) {
        return { ...editItem };
      } else {
        return item;
      }
    });
    setTodoList(tempArr);
  };
  // 목록 삭제하기
  const handleDelete = deletedId => {
    const tempArr = todoList.filter(item => item.id !== deletedId);
    setTodoList(tempArr);
  };

  useEffect(() => {
    const result = localStorage.getItem("mind-todo");
    if (!result) {
      localStorage.setItem("mind-todo", JSON.stringify([])); // 글자만 담을 수 있음!! 조심
    } else {
      try {
        const json = JSON.parse(result);
        const check = Array.isArray(json);
        if (check) {
          setTodoList(json);
          setUid(json.length);
        } else {
          setTodoList([]);
          setUid(0);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("mind-todo", JSON.stringify(todoList));
  }, [todoList]);

  // jsx 자리
  return (
    <div className="wrap">
      <img src="/logo192.png" alt="logo" />
      <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="logo" />
      <h2>/src/assets 폴더 이미지 활용</h2>
      <img src={이름} alt="logo" />
      <Router>
        <Routes>
          <Route
            path="/"
            // element={<Todo todoList={todoList} handleDelete={handleDelete} />}
            element={
              <Suspense
                fallback={
                  <div>
                    <LoadingDiv />
                  </div>
                }
              >
                <TodoPage todoList={todoList} handleDelete={handleDelete} />
              </Suspense>
            }
          />
          <Route
            path="/add"
            element={
              <Suspense
                fallback={
                  <div>
                    <LoadingDiv />
                  </div>
                }
              >
                <TodoAdd
                  todo={todo}
                  handleAddChange={handleAddChange}
                  handleAddSubmit={handleAddSubmit}
                />
              </Suspense>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <Suspense
                fallback={
                  <div>
                    <LoadingDiv />
                  </div>
                }
              >
                <TodoDetail todoList={todoList} />
              </Suspense>
            }
          />
          <Route
            path="/edit"
            element={
              <Suspense
                fallback={
                  <div>
                    <LoadingDiv />
                  </div>
                }
              >
                <TodoEdit
                  // editTodo={editTodo}
                  todoList={todoList}
                  handleEditSubmit={handleEditSubmit}
                />
              </Suspense>
            }
          />
          {/* 회사소개 */}
          <Route
            path="/company"
            element={
              <Suspense
                fallback={
                  <div>
                    <LoadingDiv />
                  </div>
                }
              >
                <Layout />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <Suspense
                  fallback={
                    <div>
                      <LoadingDiv />
                    </div>
                  }
                >
                  <CompanyDetail />
                </Suspense>
              }
            />
            <Route
              path="list"
              element={
                <Suspense
                  fallback={
                    <div>
                      <LoadingDiv />
                    </div>
                  }
                >
                  <CompanyList />
                </Suspense>
              }
            />
            <Route
              path="location"
              element={
                <Suspense
                  fallback={
                    <div>
                      <LoadingDiv />
                    </div>
                  }
                >
                  <CompanyLocation />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Index;
