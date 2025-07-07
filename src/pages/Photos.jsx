import React, { useState } from "react";
import PhotosList from "../components/photos/PhotosList";

function Photos() {
  const [photosData, setPhotosData] = useState([]);
  async function getPhotos() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const result = await res.json();
      console.log(result);
      setPhotosData(result);
    } catch (error) {
      console.log(error);
    }
  }
  function makePhotosList() {
    let list = [];
    list = photosData.map(function (item, index) {
      return <PhotosList key={index} />;
    });
    return list;
  }
  function resetList() {
    setPhotosData([]);
  }

  return (
    <div>
      <h1>
        Photos 목록
        <button onClick={getPhotos}>목록가져오기</button>
        <button onClick={resetList}>목록초기화</button>
      </h1>
      <div>
        {photosData.map(function (item, index) {
          return (
            <PhotosList
              id={item.id}
              title={item.title}
              thumbnailurl={item.thumbnailUrl}
              albumid={item.albumId}
              key={index}
            ></PhotosList>
          );
        })}
      </div>
    </div>
  );
}

export default Photos;
