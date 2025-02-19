// 펜윅 트리 구현 (함수형)
const createFenwickTree = (arr) => {
  const tree = arr.slice();

  const getParent = (index) => {
    return index - (index & -index);
  };

  const getNext = (index) => {
    return index + (index & -index);
  };

  const update = (index, value) => {
    while (index < tree.length) {
      tree[index] += value;
      index = getNext(index);
    }
  };

  const query = (index) => {
    let sum = 0;
    while (index > 0) {
      sum += tree[index];
      index = getParent(index);
    }
    return sum;
  };

  return {
    update,
    query,
  };
};

// 예제 실행
const arr = [1, 2, 3, 4, 5];
const tree = createFenwickTree(arr);
console.log(tree.query(3)); // 7 (0번부터 3번 인덱스까지의 합)
tree.update(2, 2); // 2번 인덱스에 2를 더함
console.log(tree.query(3)); // 9
