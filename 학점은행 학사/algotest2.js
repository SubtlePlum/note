//// 배열 사용

let numbers = [];
let sum = 0;

function pushNumber(value) {
  numbers.push(value);
}

function addNumbers(numbers) {
  let init = 0;
  for (let i = 0; i < numbers.length; i++) {
    init += numbers[i];
  }
  sum = init;
}

pushNumber(1);
pushNumber(2);
pushNumber(3);
pushNumber(4);
addNumbers(numbers);
console.log(sum); // 10
console.log(numbers); // [ 1, 2, 3, 4 ]

//// 연결 리스트 사용

// 객체 생성
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  addNumbers() {
    let sum = 0;
    let current = this.head;
    while (current) {
      sum += current.value;
      current = current.next;
    }
    return sum;
  }
}

// 적용
const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
console.log(linkedList.addNumbers()); // 6

console.log(linkedList); // LinkedList {
// head: Node { value: 1, next: Node { value: 2, next: [Node] } },
// tail: Node { value: 3, next: null }
// }
