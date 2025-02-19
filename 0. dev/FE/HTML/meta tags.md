## 메타태그 정리

> 메타태그 : 눈에 보이지 않는 문서가 가지고 있는 정보들을 담을 수 있는 태그

- name="정보 이름"
- context="정보값"
- htto-equiv="항목명"

### **주로 사용해볼 수 있는 태그**

```html
<!-- 검색 엔진에 검색되는 단어 지정 -->
<meta name="keywords" content="" />

<!-- 홈페이지 주제 지정 -->
<meta http-equiv="Subject" content="" />

<!-- 제목 지정 -->
<meta http-equiv="title" content="" />

<!-- 검색 결과에 표시되는 문자 지정 -->
<meta name="description" content="" />

<!-- 검색 로봇 제어 -->
<meta name="robots" content="" />

<!-- 날짜(제작일) -->
<meta name="date" content="2023-03-15T07:45:37+09:00" />

<!-- 제작자명 지정 -->
<meta http-equiv="author" content="" />
```

### **사용 빈도 낮을 것 같은 태그**

```html
<!-- 제작사 지정 -->

<meta http-equiv="publisher" content="" />

<!-- 웹 책임자 지정 -->

<meta http-equiv="other agent" content="" />

<!-- 제작 도구 지정 -->

<meta http-equiv="generator" content="" />

<!-- 메일 주소 지정 -->

<meta http-equiv="Reply-To" content="naver@naver.com" />
<meta http-equiv="email" content="naver@naver.com" />

<!-- 파일 이름 지정 -->

<meta http-equiv="filename" content="index.html" />

<!-- 위치 지정 -->

<meta http-equiv="Location" content="" />

<!-- 배포자 지정 -->

<meta http-equiv="distribution" content="" />

<!-- 저작권 지정 -->

<meta http-equiv="copyright" content="copyright@~~" />

<!-- 제작 년/월/일 지정 -->

<meta http-equiv="build" content="date" />

<!-- 최종 수정일 정의 -->

<meta http-equiv="Last-Modified" content="Mon,20 Jul 2016 19:30:30" />
```

### **사용 빈도 많이 낮을 것 같은 태그**

```html
<!-- 그림 위에 마우스 오버시 이미지 관련 툴바 생성하지 않음 -->

<meta http-equiv="imagetoolbar" content="no" />

<!-- 캐시 금지 -->

<meta http-equiv="Cache-Control" content="no-cache" />
<meta http-equiv="Pragma" content="no-cache" />

<!-- 캐시 만료일 정의 -->

<meta http-equiv="expires" content="Mon, 08 Sep 2016 10:10:10 GMT" />

<!-- 60초마다 새로고침 -->

<meta http-equiv="refresh" content="60" />

<!-- 입력한 주소로 5초후 이동하는 것을 정의 -->

<meta http-equiv="refresh" content="5;url=주소" />

<!-- 브라우저 호환성 지정 -->

<meta http-equiv="X-UA-Compatible" content="IE=edge" />

<!-- 웹 페이지에 쓰인 언어 지정 -->

<meta http-equiv="Content-Script-Type" content="text/javascript" />
<meta http-equiv="Content-Style-Type" content="text/css" />
```

### **써볼만한 태그**

```html
<!-- 페이지 인입 시 장면 전환 효과 -->
<meta http-equiv="Page-Enter" content="revealtrans(Duration=1,Transition=12)" />

Box out : 네모난 박스가 안쪽에서 바깥쪽으로 Circle in : 원이 바깥에서 안쪽으로
Circle out : 원이 안쪽에서 바깥쪽으로 Wipe up : 이미지의 아래에서 위쪽으로 수직
이동 Wipe down : 이미지의 위에서 아래쪽으로 수직 이동 Wipe right : 이미지의
왼쪽에서 오른쪽으로 수평 이동 Wipe left : 이미지의 오른쪽에서 왼쪽으로 수평 이동
Vertical blinds : 수직 블라인드가 쳐지는 형태로 변환 Horizontal blinds : 수평
블라인드가 쳐지는 형태로 변환 Checkerboard across : 바둑판 형태의 격자가
왼쪽에서 오른쪽으로 생성 Checkerboard down : 바둑판 형태의 격자가 위에서 아래로
생성 Random dissove : 안개와 비슷한 형태로 전환 Split vertical in : 왼쪽과
오른쪽 끝에서 중앙으로 수직 이동 Split vertical out : 중앙에서 양쪽 끝으로 수직
이동 Split Horizontal in : 양쪽에서 중앙으로 수평 이동 Split Horizontal out :
중앙에서 양쪽끝으로 수직이동 Strips left down : 대각선 형태로 오른쪽 상단에서
왼쪽 하단으로 이동 Strips left up : 대각선 형태로 오른쪽 하단에서 왼쪽 상단으로
이동 Strips right down : 대각선 형태로 왼쪽 상단에서 오른쪽 하단으로 이동 Strips
right up : 대각선 형태로 왼쪽 하단에서 오른쪽 상단으로 이동 Random bars
horizontal : 수평선이 무작위로 생성 Random bars vertical : 수직선이 무작위로
생성 Random : 임의로 생성
```
