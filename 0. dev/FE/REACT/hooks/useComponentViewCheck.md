# useComponentViewCheck

useScrollPosition 훅과 함께 사용

```typescript
import { useState, useEffect } from "react";
import { useScrollPosition } from "./useScrollPosition";

export const useComponentViewCheck = (elementId: string) => {
  const [inView, setInView] = useState(false);
  const { scrollPosition } = useScrollPosition();

  const checkInView = () => {
    const element = document.querySelector(`#${elementId}`) as HTMLElement;
    const clientHeight = element.getBoundingClientRect().y;
    const absolutePos = clientHeight + scrollPosition - window.innerHeight;

    if (absolutePos <= scrollPosition) {
      setInView(true);
    } else {
      setInView(false);
    }
  };
  useEffect(() => {
    checkInView();
  }, [scrollPosition]);

  return { inView };
};
```

특정 컴포넌트의 아이디를 통해 스크롤이 특정 컴포넌트를 노출시킬 정도 이상의 위치에 있을 때 inView를 boolean 값으로 갱신해준다.
