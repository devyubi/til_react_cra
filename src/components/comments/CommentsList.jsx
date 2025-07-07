import styled from "@emotion/styled";
import React from "react";

function CommentsList({ id, title, body, postId, email }) {
  // js 자리
  const CommentCard = styled.div`
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
  const CommentTitle = styled.h2`
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const CommentBody = styled.div`
    font-size: 15px;
    color: #555;
    line-height: 1.6;
    margin-bottom: 10px;
  `;
  const CommentUser = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;
  return (
    <CommentCard>
      <CommentTitle>
        {id}.{title}
      </CommentTitle>
      <CommentBody>
        {body}.{postId}
      </CommentBody>
      <CommentUser>{email}</CommentUser>
    </CommentCard>
  );
}

export default CommentsList;
