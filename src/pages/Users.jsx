import React, { useState } from "react";
import UsersList from "../components/users/UsersList";

function Users() {
  const [usersData, setUsersData] = useState([]);
  async function getUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await res.json();
      console.log(result);
      setUsersData(result);
    } catch (error) {
      console.log(error);
    }
  }
  function makeUsersList() {
    let list = [];
    list = usersData.map(function (item, index) {
      return <UsersList key={index} />;
    });
    return list;
  }
  function resetList() {
    setUsersData([]);
  }

  return (
    <div>
      <h1>
        Users 목록
        <button onClick={getUsers}>목록가져오기</button>
        <button onClick={resetList}>목록초기화</button>
      </h1>
      <div>
        {usersData.map(function (item, index) {
          return (
            <UsersList
              id={item.id}
              title={item.name}
              body={item.email}
              completed={item.completed}
              userid={item.username}
              address={item.address}
              key={index}
            ></UsersList>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
