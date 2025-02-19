class FenwickTree {
  constructor(arr) {
    this.tree = new Array(arr.length + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
      this.update(i, arr[i]);
    }
  }

  update(idx, val) {
    idx++;
    while (idx < this.tree.length) {
      this.tree[idx] += val;
      idx += idx & -idx;
    }
  }

  query(idx) {
    idx++;
    let sum = 0;
    while (idx > 0) {
      sum += this.tree[idx];
      idx -= idx & -idx;
    }
    return sum;
  }

  queryRange(startIdx, endIdx) {
    return this.query(endIdx) - this.query(startIdx - 1);
  }
}

const arr = [1, 3, 2, 4, 5];
const tree = new FenwickTree(arr);
console.log(tree.queryRange(0, 2)); // 6 (0번부터 2번 인덱스까지의 합)
tree.update(1, 1); // 1번 인덱스에 1을 더함
console.log(tree.queryRange(0, 2)); // 7
