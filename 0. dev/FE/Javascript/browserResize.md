# resize 이벤트를 통해 브라우저 변화를 감지할 수 있다.

```javascript
window.addEventListener("resize", imageWidthFetch);
```

## React 예제

```typescript
useEffect(() => {
  window.addEventListener("resize", imageWidthFetch);
  return () => {
    window.removeEventListener("resize", imageWidthFetch);
  };
}, []);
```
