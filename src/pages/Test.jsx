import React, { useState } from "react";

function Test() {
  const [todoList, setTodoList] = useState([]); // 할 일 목록
  const [text, setText] = useState(""); // 입력창 내용

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
