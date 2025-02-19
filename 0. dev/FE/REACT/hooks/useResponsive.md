# useResponsive

react-responsive 패키지를 통해 사용할 수 있는 훅으로, 반응형 페이지 조작에 쉽게 사용할 수 있다.

```typescript
import { useMediaQuery } from "react-responsive";

export const useResponsive = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const thisMedia = isMobile ? 1 : isTablet ? 3 : 4; // thisMedia return값은 어떻게든 사용할 수 있다.
  return { thisMedia };
};
```
