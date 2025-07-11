import styled from "@emotion/styled";
import React, { useState } from "react";
import InputUi from "./InputUi";
import {
  CheckBoxGroup,
  CheckBoxInput,
  CheckBoxLabel,
  FormContainer,
  FormLabel,
  ImagePreview,
  ImageUpladButton,
  ImageUpladLabel,
  RadioGroup,
  RadioInput,
  RadioLabel,
  SelectGroup,
  SelectList,
  SelectOption,
  SubmitButton,
  TextArea,
  TextAreaGroup,
  UploadImageGroup,
} from "./RegisterForm.styles";

// 전역(windonw) 자리 : 리랜더링에서 배제됨.

function RegisterForm({
  formData,
  errMessage,
  handelChange,
  handleCheckBoxChange,
  handleFilePreview,
  handleDeleteFile,
  handleSubmit,
}) {
  // js 자리
  // 이미지 미리보기 기능

  const handlePreviewImg = e => {
    const file = e.target.files[0]; // 업로드 해야 하는 파일
    if (file) {
      const 임시주소 = URL.createObjectURL(file);
    }
  };
  // jsx 자리
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <InputUi
          id={"user_name"}
          type="text"
          name={"user_name"}
          value={formData.user_name}
          placeholder="아이디를 입력하세요."
          label="아이디"
          onChange={handelChange}
        />
        <InputUi
          id={"user_email"}
          type="email"
          name={"user_email"}
          value={formData.user_email}
          placeholder="이메일을 입력하세요."
          label="이메일"
          onChange={handelChange}
        />
        <InputUi
          id={"user_pw"}
          type="password"
          name={"user_pw"}
          value={formData.user_pw}
          placeholder="비밀번호를 입력하세요."
          label="비밀번호"
          onChange={handelChange}
        />
        <InputUi
          id={"user_pw_confirm"}
          type="password"
          name={"user_pw_confirm"}
          value={formData.user_pw_confirm}
          placeholder="비밀번호를 확인해주세요."
          label="비밀번호 확인"
          onChange={handelChange}
        />
        <InputUi
          id={"user_nickname"}
          type="text"
          name={"user_nickname"}
          value={formData.user_nickname}
          placeholder="닉네임을 입력해주세요."
          label="닉네임"
          onChange={handelChange}
        />
        <InputUi
          id={"user_birth"}
          type="date"
          name={"user_birth"}
          value={formData.user_birth}
          placeholder="생년월일을 입력해주세요."
          label="생년월일"
          onChange={handelChange}
        />

        <FormLabel>성별</FormLabel>
        <RadioGroup>
          <RadioLabel>
            <RadioInput
              type="radio"
              value={"남성"}
              name="user_gender"
              checked={formData.user_gender === "남성"}
              onChange={handelChange}
            />
            남성
          </RadioLabel>
          <RadioLabel>
            <RadioInput
              type="radio"
              value={"여성"}
              name="user_gender"
              checked={formData.user_gender === "여성"}
              onChange={handelChange}
            />
            여성
          </RadioLabel>
        </RadioGroup>
        <FormLabel>관심사</FormLabel>
        <CheckBoxGroup>
          {formData.user_interest_default.map((item, index) => (
            <CheckBoxLabel key={index}>
              <CheckBoxInput
                type="checkbox"
                name="user_interest"
                value={item}
                checked={formData.user_interest.includes(item)}
                onChange={
                  // 현재 user_interest 는 배열임.
                  // 배열에 추가하거나 뺴야함
                  handleCheckBoxChange
                }
              />
              {item}
            </CheckBoxLabel>
          ))}
        </CheckBoxGroup>
        <FormLabel>거주 지역</FormLabel>
        <SelectGroup>
          <SelectList
            id="user_location"
            name="user_location"
            value={formData.user_location}
            onChange={handelChange}
          >
            <SelectOption value="">---지역을 선택하세요---</SelectOption>
            {formData.user_location_default.map((item, index) => (
              <SelectOption value={`${item}`} key={index}>
                {item}
              </SelectOption>
            ))}
          </SelectList>
        </SelectGroup>
        <FormLabel>프로필 이미지</FormLabel>
        <UploadImageGroup>
          {/* 미리보기 이미지 */}
          {/* <ImagePreview src={form.user_image_prev} /> */}
          {/* {form.user_image_prev ? <ImagePreview src={form.user_image_prev} /> : null} */}
          {formData.user_image_prev && (
            <ImagePreview
              src={formData.user_image_prev}
              onClick={handleDeleteFile}
            />
          )}

          <ImageUpladLabel htmlFor="user_image">이미지 선택</ImageUpladLabel>
          <ImageUpladButton
            type="file"
            accept="image/*" // 이미지 미리보기
            id="user_image"
            name="user_image"
            onChange={handleFilePreview}
          />
        </UploadImageGroup>

        <FormLabel>자기소개</FormLabel>
        <TextAreaGroup>
          <TextArea
            id="user_intro"
            name="user_intro"
            rows="4"
            value={formData.user_intro}
            onChange={handelChange}
          />
        </TextAreaGroup>
        <SubmitButton type="submit">회원가입</SubmitButton>
      </form>
    </FormContainer>
  );
}

export default RegisterForm;
