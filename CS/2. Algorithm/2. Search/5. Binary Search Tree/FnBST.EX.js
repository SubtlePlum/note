// 함수형 이진 탐색 트리
// 함수형 이진 탐색 트리
// 함수형 이진 탐색 트리
// 함수형 이진 탐색 트리
let arr = [5, 3, 7, 2, 4, 6, 8];

const Node = (value, left = null, right = null) => ({ value, left, right });

const insert = (root, value) => {
  if (root === null) {
    return Node(value);
  }

  if (value < root.value) {
    return Node(root.value, insert(root.left, value), root.right);
  } else if (value > root.value) {
    return Node(root.value, root.left, insert(root.right, value));
  }

  return root;
};

const search = (root, value) => {
  if (root === null || root.value === value) {
    return root;
  }

  if (value < root.value) {
    return search(root.left, value);
  } else {
    return search(root.right, value);
  }
};

const inorder = (root) => {
  if (root === null) {
    return [];
  }

  return [...inorder(root.left), root.value, ...inorder(root.right)];
};

const bst = arr.reduce((root, value) => insert(root, value), null);

console.log(inorder(bst));
console.log(search(bst, 4));
console.log(search(bst, 9));
