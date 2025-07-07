import React, { useState } from "react";
import CommentsList from "../components/comments/CommentsList";

function Comments() {
  const [commentsData, setCommentsData] = useState([]);
  async function getComments() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const result = await res.json();
      console.log(result);
      setCommentsData(result);
    } catch (error) {
      console.log(error);
    }
  }
  function makeCommentsList() {
    let list = [];
    list = commentsData.map(function (요소, 인덱스) {
      return <CommentsList key={인덱스}></CommentsList>;
    });
    return list;
  }
  function resetList() {
    setCommentsData([]);
  }

  // jsx 자리
  return (
    <div>
      <h1>
        Comments 목록
        <button onClick={getComments}>목록가져오기</button>
        <button onClick={resetList}>목록초기화</button>
      </h1>
      <div>
        {commentsData.map(function (요소, 인덱스) {
          return (
            <CommentsList
              id={요소.id}
              title={요소.title}
              body={요소.body}
              postid={요소.postId}
              email={요소.email}
              key={인덱스}
            ></CommentsList>
          );
        })}
      </div>
    </div>
  );
}
export default Comments;
