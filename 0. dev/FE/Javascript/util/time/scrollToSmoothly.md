# 스크롤을 부드럽게 작동시키는 함수

> 크롬 설정에 따라 부드러운 화면 전환이 이뤄지지 않을 때 JS를 통해 강제적으로 스크롤 애니메이션을 부여할 수 있다.

requestAnimationFrame 예제

https://developer.mozilla.org/ko/docs/Web/API/window/requestAnimationFrame

```typescript
/**
 *
 * @param pos 이동하려는 절대 위치
 * @param time 이동하는 총 시간(ms)
 * @return ex) scrollToSmoothly(100, 1000); // 1000ms 동안 100px 아래로 부드럽게 스크롤
 */
export const scrollToSmoothly = (pos: number, time: number) => {
  // 현재 스크롤 위치
  let currentPos = window.pageYOffset;
  // 이동 거리
  let distance = pos - currentPos;
  // 애니메이션 시작시간
  let startTime: null | number = null;

  /**
   * @param currentTime requestAnimationFrame의 callback 인자
   */
  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    // 애니메이션 진행 시간
    let runningTime = currentTime - startTime;
    // 현재 위치
    let ease = easeInOut(runningTime, currentPos, distance, time);
    window.scrollTo(0, ease);
    if (runningTime < time) requestAnimationFrame(animation);
  };

  /**
   *
   * @param a 애니메이션 진행 시간
   * @param b 현재 스크롤 위치
   * @param c 이동 거리
   * @param d 이동하는 총 시간(ms) - props
   * @returns
   */
  function easeInOut(a: number, b: number, c: number, d: number) {
    a = a / (d / 2);
    if (a < 1) return (c / 2) * a * a + b;
    a--;
    return (-c / 2) * (a * (a - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
};
```
