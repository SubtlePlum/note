# 스크롤 이동의 상/하 확인

```typescript
import { useState, useEffect, useRef } from "react";

interface MutableRefObject<T> {
  current: T;
}

export const useScroll = () => {
  const [scrollCheck, setScrollCheck] = useState("");
  const prevScrollPos: MutableRefObject<number> = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > prevScrollPos.current) {
        setScrollCheck("DOWN");
      } else {
        setScrollCheck("UP");
      }
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return {
    scrollCheck,
  };
};
```
