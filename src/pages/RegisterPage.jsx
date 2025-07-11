import React, { useState } from "react";
import RegisterForm from "../components/form/RegisterForm";

function RegisterPage() {
  // js 자리
  // 백엔드로 보낼 데이터를 위한 리액트 변수
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_pw: "",
    user_pw_confirm: "",
    user_nickname: "",
    user_birth: "",
    user_gender: "남성",
    user_interest_default: ["코딩", "여행", "디자인", "운동", "기타"],
    user_interest: "",
    user_location_default: ["서울", "경기", "대구", "부산", "광주"],
    user_location: "",
    user_intro: "",
    user_image: null,
    user_image_prev: "",
  });
  // 필수 항목 체크 오류 메시지 리액트 변수
  const [errMessage, setErrMessage] = useState("");

  // 이벤트 생성
  const handelChange = e => {
    // console.log(e.target);
    // const temp = { [e.target.name]: e.target.value };
    // const newData = { ...formData, ...temp };
    // setFormData({ ...newData });
    const temp = { [e.target.name]: e.target.value };
    setFormData({ ...formData, ...temp });
    // setFormData
  };

  // 체크박스 배열 처리
  const handleCheckBoxChange = e => {
    const { name, value, checked } = e.target;
    if (checked) {
      // 체크된 항목 추가하는 경우
      const arr = [...formData.user_interest, value];
      setFormData({ ...formData, user_interest: arr });
    } else {
      // 체크를 해제하는 경우
      const arr = formData.user_interest.filter(item => item !== value);
      setFormData({ ...formData, user_interest: arr });
    }
  };

  // 핸들 이미지 미리보기 및 파일 업로드 관리
  const handleFilePreview = e => {
    // console.log(e.target.files);
    const imageFile = e.target.files[0];
    // value 초기화로 동일 파일 선택도 감지 가능하게
    e.target.value = "";
    if (imageFile) {
      // 웹브라우저에 임시 주소를 생성하자
      const imageUrl = URL.createObjectURL(imageFile);
      setFormData({
        ...formData,
        user_image_prev: imageUrl,
        user_image: imageFile,
      });
    }
  };

  // 이미지 파일 미리보기 제거 ? 안되는데
  const handleDeleteFile = () => {
    console.log("click");
    setFormData({
      ...formData,
      user_image_prev: "",
      user_image: null,
    });
  };

  // 최종 백엔드로 내용 보내기 : string 만 보낼 수 있음.
  // 만약 파일, 또는 배열이면 먼저 선작업이 필요함.
  // 아래 interest = 배열, img = 파일 이라서 다른것과 보내는 방식이 다름.
  const handleSubmit = e => {
    // 웹브라우저 새로고침 방지
    e.preventDefault();
    const {
      user_name,
      user_email,
      user_pw,
      user_pw_confirm,
      user_nickname,
      user_birth,
      user_gender,
      user_interest,
      user_location,
      user_intro,
      user_image,
    } = formData;
    // 항목이 누락된다면 처리하기
    if (!user_name) {
      alert("이름을 작성해주세요.");
      return;
    }
    if (!user_email) {
      alert("이메일을 작성해주세요.");
      return;
    }
    if (!user_pw) {
      alert("비밀번호를 작성해주세요.");
      return;
    }
    if (user_pw !== user_pw_confirm) {
      alert("비밀번호가 다릅니다. 다시 확인해주세요.");
      return;
    }
    // 실제로 저장하면서 보는게 좋음
    // 미니프로젝트는 임시로 저장하는 형태로 진행
    // 아래는 파일이 첨부 되었다는 가정으로 진행함
    const sendData = new FormData();
    for (let key in formData) {
      // key 는 객체의 속성명
      if (key === "user_interest") {
        // 배열 처리하기 ["운동", "개발"]
        formData.user_interest.forEach((item, index) => {
          // 하나씩 꺼내서 sendData 에 담기
          sendData.append("user_interest[]", item);
        });
      } else if (key === "user_image" && formData.user_image) {
        // 이미지 파일 처리하기
        sendData.append("user_image", formData.user_image);
      } else {
        // 그냥 일반적 글자라면
        sendData.append(key, formData[key]);
        // sendData.append("user_name","홍길동"); 으로 들어감
      }
    }
    alert("데이터가 전송되었습니다.");
  };

  // jsx 자리
  return (
    <div>
      <h1>회원가입</h1>
      <RegisterForm
        formData={formData}
        errMessage={errMessage}
        handelChange={handelChange}
        handleCheckBoxChange={handleCheckBoxChange}
        handleFilePreview={handleFilePreview}
        handleDeleteFile={handleDeleteFile}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default RegisterPage;
