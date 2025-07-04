import React from "react";
import "../css/Slide.css";
import styled from "@emotion/styled";
import Button from "./ui/Button";
import Tag from "./ui/Tag";
import Avatar from "./ui/Avatar";
import Toast from "./ui/Toast";
import Alert from "./ui/Alert";
import Chip from "./ui/Chip";
import Modal from "./ui/Modal";
import ProgressBar from "./ui/ProgressBar";
import Skeleton from "./ui/Skeleton";
import Tooltip from "./ui/Tooltip";

function Slide() {
  // js 자리

  // jsx 자리
  return (
    <div style={{ padding: "30px" }}>
      <h1>CSS-in-JS 예제</h1>
      <Button size="lg">기본버튼 : large 버튼</Button>
      <Button>기본버튼</Button>
      <br />
      <br />
      <Button variant="primary" size="lg" disabled>
        기본버튼 : disabled 버튼
      </Button>
      <Button variant="primary" disabled>
        disabled 기본버튼
      </Button>
      <br />
      <br />
      <Button variant="primary" size="lg">
        기본버튼 : large 버튼
      </Button>
      <Button variant="primary">기본버튼</Button>

      <br />
      <br />

      <Button variant="danger" size="lg">
        경고버튼 : large 경고버튼
      </Button>
      <Button variant="danger">경고</Button>

      <br />
      <br />

      <Button variant="success" size="lg">
        경고버튼 : large 경고버튼
      </Button>
      <Button variant="success">경고</Button>

      <Button variant="success" size="lg">
        경고버튼 : large 경고버튼
      </Button>
      <Button variant="success">경고</Button>

      <h2>태그 예제</h2>
      <Tag variant="success" rounded={true} size="lg">
        성공
      </Tag>
      <Tag variant="danger" rounded={true} size="lg">
        위험
      </Tag>
      <Tag variant="warning" rounded={true} size="lg">
        경고
      </Tag>
      <Tag variant="info" rounded={true} size="lg">
        정보
      </Tag>
      <Tag>기본</Tag>
      <div>
        <Avatar />
        <Avatar
          src="https://i.pravatar.cc/100"
          alt="큰거"
          size="80px"
          shadow={false}
        />
        <Avatar
          src="https://i.pravatar.cc/100"
          alt="큰거"
          size="120px"
          shadow={false}
        />
        <Avatar
          src="https://i.pravatar.cc/100"
          alt="큰거"
          size="100px"
          shadow={false}
        />
        <Avatar
          src="https://i.pravatar.cc/100"
          alt="큰거"
          size="40px"
          shadow={false}
        />
        <div>
          <Toast></Toast>
          <Toast message="로그인 되었습니다." bg="#28A745"></Toast>
        </div>
        <div>
          <Alert>기본</Alert>
          <Alert type="success">성공</Alert>
          <Alert type="error">오류</Alert>
          <Alert type="warning">경고</Alert>
          <Alert type="info">정보</Alert>
        </div>
        <div>
          <Chip></Chip>
          <Chip label="React"></Chip>
          <Chip label="JavaScript"></Chip>
          <Chip label="Styled"></Chip>
        </div>
        <div>
          {/* <Modal>
            <h3>Modal Title</h3>
            <p>Modal content</p>
          </Modal> */}
        </div>

        <div>
          <ProgressBar />
          <ProgressBar percent={30} color="#f00" />
          <ProgressBar percent={50} color="#0f0" />
          <ProgressBar percent={80} color="#00f" />
          <ProgressBar percent={100} />
        </div>
        <div>
          <Skeleton width="80%" height="20px" />
          <Skeleton width="60%" height="10px" />
          <Skeleton width="100%" height="400px" />
        </div>
      </div>
      <div>
        <Tooltip text="click here">
          <button>회원가입</button>
        </Tooltip>
      </div>
    </div>
  );
}

export default Slide;
