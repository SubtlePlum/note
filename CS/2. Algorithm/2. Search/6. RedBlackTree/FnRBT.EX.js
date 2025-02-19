// 함수형 RBT 예제
// 함수형 RBT 예제
// 함수형 RBT 예제

function Node(data, parent = null, left = null, right = null, color = "red") {
  return {
    data,
    parent,
    left,
    right,
    color,
  };
}

function RedBlackTree() {
  const tree = { root: null };

  function insert(data) {
    const newNode = Node(data);

    if (tree.root === null) {
      tree.root = newNode;
      tree.root.color = "black";
      return;
    }

    let current = tree.root;

    while (current !== null) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          newNode.parent = current;
          fixTreeAfterInsert(newNode);
          break;
        } else {
          current = current.left;
        }
      } else if (data > current.data) {
        if (current.right === null) {
          current.right = newNode;
          newNode.parent = current;
          fixTreeAfterInsert(newNode);
          break;
        } else {
          current = current.right;
        }
      } else {
        break;
      }
    }
  }

  function fixTreeAfterInsert(node) {
    while (
      node !== tree.root &&
      node.parent.color === "red" &&
      node.color === "red"
    ) {
      let parent = node.parent;
      let grandParent = parent.parent;

      if (parent === grandParent.left) {
        let uncle = grandParent.right;

        if (uncle !== null && uncle.color === "red") {
          parent.color = "black";
          uncle.color = "black";
          grandParent.color = "red";
          node = grandParent;
        } else {
          if (node === parent.right) {
            rotateLeft(parent);
            node = parent;
            parent = node.parent;
          }

          parent.color = "black";
          grandParent.color = "red";
          rotateRight(grandParent);
        }
      } else {
        let uncle = grandParent.left;

        if (uncle !== null && uncle.color === "red") {
          parent.color = "black";
          uncle.color = "black";
          grandParent.color = "red";
          node = grandParent;
        } else {
          if (node === parent.left) {
            rotateRight(parent);
            node = parent;
            parent = node.parent;
          }

          parent.color = "black";
          grandParent.color = "red";
          rotateLeft(grandParent);
        }
      }
    }

    tree.root.color = "black";
  }

  function rotateLeft(node) {
    let rightNode = node.right;
    node.right = rightNode.left;

    if (rightNode.left !== null) {
      rightNode.left.parent = node;
    }

    rightNode.parent = node.parent;

    if (node.parent === null) {
      tree.root = rightNode;
    } else if (node === node.parent.left) {
      node.parent.left = rightNode;
    } else {
      node.parent.right = rightNode;
    }

    rightNode.left = node;
    node.parent = rightNode;
  }

  function rotateRight(node) {
    let leftNode = node.left;
    node.left = leftNode.right;

    if (leftNode.right !== null) {
      leftNode.right.parent = node;
    }

    leftNode.parent = node.parent;

    if (node.parent === null) {
      tree.root = leftNode;
    } else if (node === node.parent.right) {
      node.parent.left = leftNode;
    } else {
      node.parent.left = leftNode;
    }

    leftNode.right = node;
    node.parent = leftNode;
  }
  return { tree, insert };
}

const tree = new RedBlackTree();
tree.insert(1);
tree.insert(15);
tree.insert(2);

console.log(tree);
