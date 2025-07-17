import styled from "@emotion/styled";
import React from "react";
import { FadeLoader } from "react-spinners";
// 전역(window) 자리

const Loading = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function LoadingDiv() {
  // js 자리

  // jsx 자리
  return (
    <Loading>
      <FadeLoader color="#59007e" />
    </Loading>
  );
}

export default LoadingDiv;
