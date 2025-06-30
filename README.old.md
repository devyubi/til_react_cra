# React CRA 프로젝트

- `Create React App` 의 줄임말

## 1. VSCode 플러그인 설치

- ESLint : 필수 (추후 세팅)
- Error Lens (JS 코드 에러 체크)
- ES7+ React/Redux/React-Native snipp (React 단축키)
- Prettier (기존에 설치했었음) : 포맷유지
- Simple React Snippets :  (필수는 아니지만 좋은 기능)

## 2. React Project 생성 규칙

- Project 명은 (즉, 폴더명) 무조건 `소문자` 영문입니다. (대문자 절 대 XXXXXXXXX)
- 폴더명에 특수기호는 `-` 이외에는 절대 금지. (`emotion-diary`)
- 프로젝트를 생성하면 기본적으로 `git init`이 자동 세팅됨.
- 숨김폴더에 있는 폴더 (.git)을 삭제한다.
- 나중에 추가로 또 git remote add origin 필요. (자세한 설명은 Notion에.)

## 3. 리엑트 프로젝트 `보일러블레이트`

```bash
npx create-react-app@latest . (원래는 . 대신 회사에서는 프로젝트명을 씀)

git remote add origin 주소
```

## 4. 생성된 파일 살펴보기

- 만약에 회사에 가면 기존 소스를 fork 받을 겁니다.

### 4.1 `package.json` 최초로 알아야 하는 파일

- node_modules 에 다운로드 받아서 파일을 관리하는 용도
- 전체 프로젝트에서 활용한 npm 목록을 관리함
- 절대로 package.json 은 삭제하면 안된다!!!!!!!!!!!!!!!!!!!!!!!! (절대 손대지않기 / 수정은 손으로도 하는거 아님.)

- node_modules 폴더 다운 명령

```bash
npm install
또는
npm i
```

## 4.2 package.json 용어정리 (절대 손대선 안된다. 그냥 용어만 정리해줌)

- package.json의 `dependencies` : 인터넷 홈페이지 웹에 올라가는 js 라이브러리 소스임.
- package.json의 `scripts` : npm `명령어`

```bash
# 서비스 배포 버전 생성
npm run build

프로젝트 끝나고 서비스 들어가요~ 할 때 압축해서 백엔드팀 주면 된다.

# 개발 버전 실행
npm run start

# test 버전 실행 : test Driven Develop (테스트 주도 개발)
npm run test
```

- 우리는 당분간 testing은 하지 않을 거라서 package.json을 한번 수정해보는 작업을 해보자 (회사에선 절 대 안된다.)
- package.json 을 수정합니다 (`testing 관련 npm 제거`)
- `npm install` 하기 전에 반드시 `package-lock.json` 제거 후 진행

### 4.2 `.gitignore` 파일

- GitHub 에 업로드 되면 절대 안되는 파일과 폴더 목록 리스트
- 실습
- `.env` 파일 생성.

```txt
PASS=1234 를 적었음
```

- gitignore 에 .env 를 적었다.
- git push 후 확인해보면 안올라간다.

### 4.3 public 폴더 살펴보기

- public 폴더는 `npm run build`시 압축제외 된다.
- 우리가 필요로 한 image, fonts 와 같은 리소스를 배치함
- favicon.ico : 즐겨찾기, 주소 공유시 보여질 아이콘
- logo192.png, logo512.png : 휴대폰에서 바로가기 저장시 보여질 아이콘
- mainifest.json : react도 웹 앱. 앱의 설명서 (PWA)
- robots.txt : 웹 크롤링 허용 여부, 검색엔진 탐색 허용 여부
- sitemap.xml : 검색엔진 노출 (생성 권장)

#### 4.4 src 폴더 살펴보기

### 4.4.1 파일 삭제 권장 항목

- testing 항목 관련 파일 삭제 권장
- 파일명에 `test`가 있거나 폴더가 `test 폴더`면 삭제.
- `App.test.js`삭제
- `setipTests.js` 삭제
- `reportWebVitals.js` 삭제 (예쁘게 성능 표현 해주는 파일)
- `logo.svg` 삭제

#### 4.4.2 삭제 하지 않길 권장하는 파일

- logo.svg 교체
- index.js 삭제 금지
- 하단 index.js 최종 모양

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

- App.js : 최초로 보여주는 내용 컴포넌트
- 단축키 `rfce` : React Function Component Export 단축키
- `rafce` :

```js
import React from "react";

function App() {
  // js 코딩자리
  // return 자리에 html 태그 (jsx) 를 작성
  return <div>App</div>;
}

export default App;
```

## 5. 협업 환경 세팅

### 5.1 (제일 중요한) ESLint 설정

- 반드시 플러그인을 설치하고 진행해야 함.
- 회사마다 ESLint 설정이 다름.
- 반드시 회사 선임에게 물어보고 세팅하는 것을 추천
- (터미널) npm install eslint@7 -D
- 예시로 `ESLint 7` 버전으로 세팅해봤음.

### 5.1.1 ESLint 7

### 5.1.2 초기 ESLint 환경 설정 생성하기

- 우선은 json 파일로 생성해줌 `.eslintrc.json`

```bash
npx eslint --init
```

### 5.2 Prettier 설정

- Prettier 는 VSCode 설치가 되어 있어야함.

### 5.2.1 npm 설치

```bash
npm i prettier -D
```

#### 5.2.2 `prettierrc.json`

- prettierrc.json 파일을 만든다.
- 폴더 안에 하단 내용 복붙

```json
{
  "singleQuote": false,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "avoid",
  "endOfLine": "auto"
}
```

#### 5.3 ESLint 와 Prettier 와 통합 관리

- ESLint 가 Prettier 규칙도 체크해 줬으면 좋겠음.

  5.3.1 npm 설치

```bash
- npm i  eslint-config-prettier -D
- npm i  eslint-plugin-prettier -D --force
```

#### 5.3.2 `.eslintrc.json` 파일 수정

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {}
}
```

#### 5.3.2 설정 작동 확인
- App.js 에 복사 붙여넣기

```js
import React from "react";

function App() {
  // js 코딩자리
  var test = 1;
  console.log(test);
  // return 자리에 html 태그 (jsx) 를 작성
  return <div>App</div>;
}

export default App;
```
### 5.4 ESLint 기본 사용법

- rules 를 수정하시기를 추천

```json
"rules": {
   "no-unused-vars": "off"
 }
```

### 5.5 VSCode 프로젝트 세팅
- `.vscode` 파일 생성 후 그 안에 setting.json 파일 생성.
- 하단에 복사 붙여넣기.
```json
{"editor.formatOnSave": true,

"editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
},}
```

