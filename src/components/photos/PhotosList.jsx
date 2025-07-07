import styled from "@emotion/styled";
import React from "react";

function PhotosList({ id, title, url, albumId, thumbnailUrl }) {
  const PhotoCard = styled.div`
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
  const PhotoTitle = styled.h2`
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const PhotoBody = styled.div`
    font-size: 15px;
    color: #555;
    line-height: 1.6;
    margin-bottom: 10px;
  `;
  const PhotoUser = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;
  return (
    <PhotoCard>
      <PhotoTitle>
        {id}. {title}
      </PhotoTitle>
      <PhotoBody>Album ID: {albumId}</PhotoBody>
      <PhotoUser>
        {/*  alt={`${title} thumbnail`} 는 대신 보여줄 텍스트. 
        title에 변수값을 넣어서 사진 제목 + thumbnai(썸네일) 만들었는데 이미지가 깨지네 왜지  */}
        Thumbnail: <img src={thumbnailUrl} alt={`${title} thumbnail`} />
      </PhotoUser>
      <PhotoUser>
        Full Image: <img src={url} alt={title} />
      </PhotoUser>
    </PhotoCard>
  );
}

export default PhotosList;
