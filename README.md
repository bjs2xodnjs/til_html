# CSS

- html 을 꾸며주기
- display 중요함.
- position 중요함.

## 1. css 작성법 3가지

- 작성법 3가지 중에 누가 최종적으로 적용되는가? (누가 힘이 쎈가?)

### 1.1. inline 방식

- html 태그에 직접 작성해 주는 방식

### 1.2. link 방식

- file 로 작성해서 link 하는 방식 (경로/파일명.css)
- link 방식

```
<link rel="stylesheet" href="css/commom.css">
```

- css 폴더/ commom.css 파일을 생성

```css
body {
  background-color: hotpink;
  color: rgb(255, 255, 255);
}

div.wrap {
  border: 5px solid black;
}

header {
  background-color: yellow;
}
```

### 1.3. @import 방식

- css 파일에서 또다른 css 파일을 참조하는 방식

## 2. 모든 태그에 초기화 진행하기

- 웹브라우저 마다 기본적인 css 는 적용이 되어있음.
- 그래서 웹브라우저 마다 모양이 다르게 보인다.
- 아래 내용은 기본 css 값으로 추천합니다.

```css
@charset "uft-8"; /* 처음엔 항상 요렇게... 그리고 마침표 꼭 하기 */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  /* outline-style: none; */
}
```

## 3. 선택하는 법 (selector)

### 1. 태그 선택법

```css
태그 {
}
```

- css/commom 예재

```css
/* 태그 선택: 추천하는 각 태그별 기본값 */
a {
  text-decoration: none;
  color: #000000;
  /* 검색하는 주소에 글자가 검은색으로 바뀜 */
  /* 디자인 보고 수정 */
}
ul {
  list-style: none;
}
html {
  width: 100%;

  /* 디자인 보고 수정 */
  font-size: 12px;
}
body {
  width: 100%;
  font-size: 1rem;

  /* 디자인 보고 수정 */
  color: #000000;
  /* 글꼴이 필요함. */
}
```

### 2. 클래스 선택법

```css
클래스명 {
}
```
