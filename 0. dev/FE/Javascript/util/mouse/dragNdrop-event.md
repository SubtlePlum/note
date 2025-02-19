# Drag and Drop 드래그 앤 드랍

상태 체크 함수

```typescript
const dragFunction = (e, type) => {
  e.preventDefault();
  e.stopPropagation();
  console.log(type);
};
```

## DragStart, DragOver 에는 위 함수를 적용하지 않는다.

(사용 시 나머지 drag 이벤트를 무시해버리게됨. 상황에 따라 preventDefault와 stopPropagation을 적절히 적용해 사용하는 것이 좋음)

### **이벤트 순서**

dragstart

drag

dragenter

dragover

drop

dragleave

dragend

```typescript
onDragStart = { onDragStart };
onDrop = { onDrop };
onDragEnter = { onDragEnter };
onDragLeave = { onDragLeave };
onDragOver = { onDragOverTop };
```
