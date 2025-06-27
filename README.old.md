# 리액트 CRA 프로젝트
- `Create React App` 의 줄임말

## 1. VSCode 플러그인 설치

- ESLint
- Error Lens
- ES7+ React/Redux/React-Native snipp
- Prettier (기존에 설치했었음)

## 2. React Project 생성 규칙

- Project 명은 (즉, 폴더명) 무조건 `소문자` 영문입니다. (대문자 절 대 XXXXXXXXX)
- 폴더명에 특수기호는 `-` 이외에는 절대 금지.
- 프로젝트를 생성하면 기본적으로 `git init`이 자동 세팅됨.
- 숨김폴더에 있는 폴더 (.git)을 삭제한다.

## 3. 리엑트 프로젝트 `보일러블레이트`
```bash
npx create-react-app@latest . (원래는 . 대신 회사에서는 프로젝트명을 씀)
```