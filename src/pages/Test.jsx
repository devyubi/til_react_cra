import React from "react";

function Test() {
  // js 자리
  const handleFocus = () => {
    console.log("포커스 됨");
  };
  const handleBlur = () => {
    console.log("포커스 해제 됨");
  };
  // jsx 자리
  return (
    <div>
      <input type="text" onFocus={handleFocus} onBlur={handleBlur}></input>
    </div>
  );
}

export default Test;
