class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLL {
  constructor(value) {
    //Head, Tail, Length
    let newNode = new Node(value);
    this.head = this.tail = newNode;
    this.length = 1;
  }

  append(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    let newNode = new Node(value);
    this.head.prev = newNode
    newNode.next = this.head
    this.head = newNode
    this.length++;
  }

  getNode(n) {
    let count;
    let data = this.head;

    while (true) {
      count++;

      if (count == n) {
        break;
      }

      data = data.next;
    }
    return data;
  }

  //insertAtPosition
  //update
  //delete
  //printFromLast

  print() {
    let data = this.head;
    while (data) {
      console.log(data.value)
      data = data.next;
    }
  }
}

let list = new DoublyLL(10);
list.append(20);
list.append(30);
list.prepend(50);
// console.log(list);
console.log(list.print());
