// 클래스형 RBT 예제

class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.left = null;
    this.right = null;
    this.color = "red"; // 초기값
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      // 루트가 없으면 새로운 노드가 루트가 됨
      this.root = newNode;
      this.root.color = "black"; // 루트 노드는 검은색
      return;
    }

    let current = this.root;

    while (current !== null) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          newNode.parent = current;
          this.fixTreeAfterInsert(newNode);
          break;
        } else {
          current = current.left;
        }
      } else if (data > current.data) {
        if (current.right === null) {
          current.right = newNode;
          newNode.parent = current;
          this.fixTreeAfterInsert(newNode);
          break;
        } else {
          current = current.right;
        }
      } else {
        break;
      }
    }
  }

  fixTreeAfterInsert(node) {
    while (
      node !== this.root &&
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
            this.rotateLeft(parent);
            node = parent;
            parent = node.parent;
          }

          parent.color = "black";
          grandParent.color = "red";
          this.rotateRight(grandParent);
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
            this.rotateRight(parent);
            node = parent;
            parent = node.parent;
          }

          parent.color = "black";
          grandParent.color = "red";
          this.rotateLeft(grandParent);
        }
      }
    }

    this.root.color = "black";
  }

  rotateLeft(node) {
    let rightNode = node.right;
    node.right = rightNode.left;

    if (rightNode.left !== null) {
      rightNode.left.parent = node;
    }

    rightNode.parent = node.parent;

    if (node.parent === null) {
      this.root = rightNode;
    } else if (node === node.parent.left) {
      node.parent.left = rightNode;
    } else {
      node.parent.right = rightNode;
    }

    rightNode.left = node;
    node.parent = rightNode;
  }

  rotateLeft(node) {
    let rightNode = node.right;
    node.right = rightNode.left;
    if (rightNode.left !== null) {
      rightNode.left.parent = node;
    }

    rightNode.parent = node.parent;

    if (node.parent === null) {
      this.root = rightNode;
    } else if (node === node.parent.left) {
      node.parent.left = rightNode;
    } else {
      node.parent.right = rightNode;
    }

    rightNode.left = node;
    node.parent = rightNode;
  }

  rotateRight(node) {
    let leftNode = node.left;
    node.left = leftNode.right;
    if (leftNode.right !== null) {
      leftNode.right.parent = node;
    }

    leftNode.parent = node.parent;

    if (node.parent === null) {
      this.root = leftNode;
    } else if (node === node.parent.right) {
      node.parent.right = leftNode;
    } else {
      node.parent.left = leftNode;
    }

    leftNode.right = node;
    node.parent = leftNode;
  }
}

const tree = new RedBlackTree();

tree.insert(7);
tree.insert(3);
tree.insert(18);

console.log(tree); // RedBlackTree { root: Node { ... } }
