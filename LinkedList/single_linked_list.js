// Array => Contigous block of memory

// In linked list two values needs to store => values, next value's memory => multiple value so why object

// List = {
//     head => address of the first data,
//     tail => address of the last data,
//     length
// }

// ndoe = {
//     value,
//     next
// }

//10 -> 20 -> 30 -> X

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

  prepend(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  appendAtPosition(value, n) {
    if (n == 1) {
      this.prepend(value);
      return;
    }
    if (n == this.length + 1) {
      this.append(value);
      return;
    }

    let node = new Node(value);
    let prevNode = this.findNode(n - 1);
    const temp = prevNode.next;
    prevNode.next = node;
    node.next = temp;
    this.length++;
  }

  findNode(n) {
    let data = this.head;
    let count = 0;

    while (true) {
      count++;

      if (count == n) {
        break;
      }

      data = data.next;
    }

    return data;
  }

  print() {
    let data = this.head;
    while (data) {
      console.log(data.value);
      data = data.next;
    }
  }

  update(value, n) {
    this.findNode(n).value = value;
  }

  delete(n) {
    let prevNode = this.findNode(n - 1);
    prevNode.next = prevNode.next.next;
    this.length--;
  }
}

let list = new LinkedList(10);
list.append(20);
list.append(30);
list.appendAtPosition(100, 2);
list.appendAtPosition(1000, 1);
list.update(50, 3);
list.update(500, 5);
list.delete(5);

// console.log(list);

