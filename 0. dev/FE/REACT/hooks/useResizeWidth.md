# useResizeWidth

브라우저 창의 변화에 따라 현재 창의 가로 길이를 구할 수 있다.

```typescript
import { useState, useEffect } from "react";

export const useResizeWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageWidthFetch = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", imageWidthFetch);
    return () => {
      window.removeEventListener("resize", imageWidthFetch);
    };
  }, []);

  return { windowWidth };
};
```
