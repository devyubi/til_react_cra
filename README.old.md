# JSX 1

- React 에서 사용하는 html 태그
- 용도 : 컴포넌트 만들기

## 1. Component 란?

- HTML 태그 형태를 return 하는 함수
- 화살표이든, 일반 함수이든 HTML 태그를 리턴하면 인정함
- JSX 는 `반드시 하나의 태그` 에 `포함되도록 배치` 하여야 함
- `<></>` 를 Fragment 라고 함
- 파일명 및 Component 함수는 반드시 `Pascal case` 여야 함

## 2. Component 와 Page 구분

- 폴더명은 반드시 소문자로 해야 함.
- 한장의 HTML 을 구성한다면 `pages 폴더`에 저장
- 하나의 HTML 을 완성하기 위한 배치 요소라면 `componets` 폴더에 저장

# CSS

## 1. JSX 에 css 추가하기

- 일반적으로 `src 폴더 하단`에 css 폴더를 생성함
- css 파일은 모두 이곳에 배치함 (혼자 할 경우. 협업 들어가면 다르게 함)
- css 파일명은 `Component명`과 동일하게 `Pascal case` 를 사용함.
- 예) Header.css / Footer.css / Slide.css

## 2. css 사용하기

### src/index.css

- 기본적인 css 적용
- index.js 에 적용되는 css
- css 를 불러들이는 import 형태 확인

```js
import "./index.css";
```

### src/pages/StartPage.jsx

- src/css/StartPage.css 파일 생성
- css 파일 불러들이기

```jsx
import "../css/StartPage.css";
```

- Footer.jsx

```jsx
import "../css/Footer.css";
```

- Header.jsx

```jsx
import "../css/Header.css";
```

- Slide.jsx

```jsx
import "../css/Slide.css";
```

## 3. 외부 css 라이브러리 사용하기

### 3.1 링크 방식

- 위처럼 React 에서 활용은 추천 하지 않습니다.
- 일반 웹 퍼블리싱에서만 활용하시길 추천드립니다.
- reset.css : https://meyerweb.com/eric/tools/css/reset/
- nomalize.css : https://necolas.github.io/normalize.css/8.0.1/normalize.css
- font-awsome : https://cdnjs.com/libraries/font-awesome
- google-font : https://fonts.google.com/
- public/index.html 파일에 추가

### 3.2 npm 설치 방식 (권장)

- https://www.npmjs.com/

```bash
npm install normalize
npm i reset-css
npm install react-icons --save
# 안되면 --force 집어넣기
```

### 3.3 구글 폰트는 `index.css` 에서 작성 권장

- index.css 에 모든 페이지에 적용되는 기본 파일임
- link 방식보다는 @import url 방식 권장

```bash
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap");
```

## 4. 일반 css 적용해보기

- css : `import "../css/StartPage.css";`
- jsx : `<div className="box">로고</div>`
- css 내용 : `.box {  background-color: red;}`

- StartPage.jsx

```jsx
import React from "react";
// css
import "../css/StartPage.css";
// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slide from "../components/Slide";

function StartPage() {
  return (
    <>
      <div className="box">로고</div>
      {/* 해더 컴포넌트 */}
      <Header></Header>
      {/* 슬라이드 컴포넌트 */}
      <Slide></Slide>
      {/* 분류메뉴 컴포넌트 */}
      {/* 공지 컴포넌트 */}
      {/* 추천 컴포넌트 */}
      {/* 새목록 컴포넌트 */}
      {/* 앱설치안내 컴포넌트 */}
      {/* 하단 컴포넌트 */}
      <Footer></Footer>
    </>
  );
}

export default StartPage;
```

- StartPage.css

```css
.box {
  background-color: tomato;
}
```

## 5. `module.css` 적용해 보기

- index.css : 공통 적용 내용. (class 명 충돌 가능성 있음)
- StartPage.css 를 파일명 변경 : `StartPage.module.css`
- css 가 아니라 module.css 를 불러들임

```jsx
// import from "../css/StartPage.css"
import styles from "../css/StartPage.module.css";
```

```jsx
// <div className="box">로고</div> ← 원래 사용했던 문구
<div className={styles.box}>로고</div>
```

## 6. SCSS 활용하기

- 소스 가독성이 상당히 좋음
- css 를 체계적으로 생성 및 관리

### 6.1 SCSS npm 설치

- VSCode 플러그인은 설치 되어있음. (Live sass compiler)

```bash
npm i sass -D (--force)
```

## 6.2 기본 폴더 생성

- src/scss 폴더 생성 권장
- src/scss/test.scss 파일 생성