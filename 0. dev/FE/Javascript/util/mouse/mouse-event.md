# 마우스 현재 위치 가져오기

```typescript
const mouseLocation = useRef({
  x: 0,
  y: 0,
});
useEffect(() => {
  const getMouseLocation = (e: MouseEvent) => {
    mouseLocation.current.x = e.clientX;
    mouseLocation.current.y = e.clientY;
  };
  window.addEventListener("mousemove", getMouseLocation);
  return () => {
    window.removeEventListener("mousemove", getMouseLocation);
  };
}, []);
```
