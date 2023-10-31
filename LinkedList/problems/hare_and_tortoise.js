class Node {
  constructor(data, next = null) {
    this.value = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(data) {
    let node = new Node(data);
    this.head = this.tail = node;
    this.length = 1;
  }

  append(value) {
    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  findMiddle() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.value;
  }
}

let list = new LinkedList(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.append(60);
list.append(70);
list.append(80);

console.log(list.findMiddle());
