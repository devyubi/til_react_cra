import styled from "@emotion/styled";
import React from "react";

function TodosList({ id, title, completed }) {
  const TodoCard = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    border: 6px solid #ffb703;
    margin: 20px;
    padding: 20px;
    transition: all 0.2s;
    &:hover {
      transform: translateY(-10px);
    }
  `;
  const TodoTitle = styled.h2`
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const TodoCompleted = styled.div`
    font-size: 15px;
    color: #555;
    line-height: 1.6;
    margin-bottom: 10px;
  `;

  return (
    <TodoCard>
      <TodoTitle>
        {id}. {title}
      </TodoTitle>
      <TodoCompleted>
        완료 여부:
        {completed ? "완료" : " 완료X "}
      </TodoCompleted>
    </TodoCard>
  );
}

export default TodosList;
