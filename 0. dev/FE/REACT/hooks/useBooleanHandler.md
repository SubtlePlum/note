# useBooleanHandler

```typescript
import { useState } from "react";

export const useBooleanHandler = () => {
  const [isTrue, setIsTrue] = useState(false);
  const booleanHandler = (bool: boolean) => {
    setIsTrue(bool);
  };

  return {
    isTrue,
    handler: booleanHandler,
  };
};
```

간단한 true/false 처리를 위해 사용할 수 있으며, 불러올때 어떤 이름을 통해서든 사용할 수 있다.

```typescript
import { useBooleanHandler } from "../../~~";

export const Component = () => {
  const arrowHandler = useBooleanHandler();
  const someHandler = useBooleanHandler();
  const ABHandler = useBooleanHandler();
  // const ... = useBooleanHandler()

  return <></>;
};
```
