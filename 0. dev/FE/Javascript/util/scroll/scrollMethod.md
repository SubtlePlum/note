# 스크롤 메서드

```javascript
// 문서의 절대 위치로 스크롤 이동
scroll(0, 100);

// 옵션
window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth", // 부드럽게 전환
    });

// scrollTo scroll과 동일하게 설정된 위치로 스크롤 이동
window.scrollTo( x: 100, y: 100 );

// 옵션
window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // 부드럽게 전환
    });

// 페이지별 사용 - 특정 길이만큼 스크롤 이동
window.scrollBy( x: 100, y: 100 );

// 한 페이지 아래
window.scrollBy(0, window.innerHeight);

// 한 페이지 위
window.scrollBy(0, -window.innerHeight);

// 옵션
window.scrollBy({
      top: 0,
      left: 0,
      behavior: "smooth", // 부드럽게 전환
    });
```
