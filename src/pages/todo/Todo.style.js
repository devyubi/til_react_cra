import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import React from "react";

/* 별 반짝임 애니메이션 */
const twinkle = keyframes`
  0%, 100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.3);
  }
`;

/* 별 스타일 */
export const Star = styled.span`
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: ${twinkle} infinite ease-in-out;
`;

/* 전체 컨테이너 + 몽환 배경 + 별 */
export const Container = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 50px auto;
  padding: 40px;
  border-radius: 20px;
  overflow: hidden;

  background: linear-gradient(
    180deg,
    #ffe0e9,
    #f5c8e7,
    #e6b3f7,
    #d3bce8,
    #c2c1ee,
    #a89adf,
    #8672d0,
    #5c5ea3,
    #3b3b6d,
    #3a3a74
  );

  box-shadow: 0px 0px 20px rgba(0, 179, 250, 0.25);
`;

/* 타이틀 */
export const Title = styled.h1`
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
  color: #ffffffee;
  text-shadow: 0 0 10px #ffffff55;
`;

/* 서브 타이틀 */
export const SubTitle = styled.h2`
  font-size: 18px;
  text-align: center;
  margin-bottom: 16px;
  color: #ffffffcc;
`;

/* 섹션 */
export const Section = styled.div`
  margin-bottom: 20px;
`;

/* 폼 */
export const Form = styled.form`
  position: relative;
`;

/* 입력 감싸는 부분 */
export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
`;

/* 라벨 */
export const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  color: #ffffff;
`;

/* 인풋창 */
export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  font-size: 13px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  backdrop-filter: blur(4px);
  ::placeholder {
    color: #ffffff99;
  }
`;

/* 텍스트에어리어 */
export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  resize: vertical;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 13px;
  backdrop-filter: blur(4px);
  ::placeholder {
    color: #ffffff99;
  }
`;

/* 버튼 */
export const Button = styled.button`
  padding: 8px 16px;
  background: linear-gradient(135deg, #7a42a4ff, #fda4ffff);
  color: #222;
  border: none;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(162, 203, 255, 0.4);
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
`;

/* 할일 아이템 */
export const TodoItem = styled.div`
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 10px 14px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(6px);
`;

/* 할일 내용 */
export const TodoContent = styled.div`
  font-size: 13px;
  color: #ffffffdd;
`;

/* 버튼들 감싸는 박스 */
export const TodoButtonWrap = styled.div`
  display: flex;
  gap: 6px;
`;

/* 메시지 */
export const TodoListMessage = styled.p`
  text-align: center;
  font-size: 12px;
  color: #ffb6c1;
  padding: 20px;
  font-style: italic;
`;
