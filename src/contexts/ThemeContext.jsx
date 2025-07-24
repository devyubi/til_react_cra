import { createContext, useEffect, useReducer } from "react";

// 1. 초기값 세팅
const initialState = "light";
// 2. Reducer 함수 세팅
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      const nowTheme = state === "light" ? "dark" : "light";
      // 글자보관
      localStorage.setItem("theme", nowTheme);
      return nowTheme;
    case "INIT":
      return action.payload || "light";
    default:
      return state;
  }
}

export const ThemeContext = createContext();
export const ThemeContextProvider = ({ children }) => {
  // js 자리

  // 3. 위 코드 안씀
  const [theme, dispatch] = useReducer(reducer, initialState);

  // 최초로 local Storage 에서 값 불러들임
  useEffect(() => {
    const result = localStorage.getItem("theme");
    dispatch({ type: "INIT", payload: result });
  }, []);
  // jsx 자리
  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
