import { createContext, useReducer } from "react";

// 1. 초기값 설정
const initialState = "white";

// 2. Reducer 함수 만들기
function reducer(state, action) {
  switch (action.type) {
    case "#FCF3FB":
      return "#FCF3FB";
    case "#C2C1EE":
      return "#C2C1EE";
    case "RESET":
      return initialState;
    default:
      return state;
  }
}
export const ColorContext = createContext();
export const ColorContextProvider = ({ children }) => {
  // 3번 state 생성
  const [color, dispatch] = useReducer(reducer, initialState);
  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};
