import React, { useState } from "react";
import TodosList from "../components/todos/TodosList";

function Todos() {
  const [todosData, setTodosData] = useState([]);
  async function getTodos() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await res.json();
      console.log(result);
      setTodosData(result);
    } catch (error) {
      console.log(error);
    }
  }

  function makeTodoList() {
    let list = [];
    list = todosData.map(function (item, index) {
      return <TodosList key={index} />;
    });
    return list;
  }
  function resetList() {
    setTodosData([]);
  }

  return (
    <div>
      <h1>
        Todos 목록
        <button onClick={getTodos}>목록가져오기</button>
        <button onClick={resetList}>목록초기화</button>
      </h1>
      <div>
        {todosData.map(function (item, index) {
          return (
            <TodosList
              id={item.id}
              title={item.tltle}
              completed={item.completed}
              key={index}
            ></TodosList>
          );
        })}
      </div>
    </div>
  );
}

export default Todos;
