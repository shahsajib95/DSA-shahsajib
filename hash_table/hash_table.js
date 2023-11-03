class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hashFunction(value) {
    value = value + ""; //apple
    let sum = 0;
    for (let i = 0; i < value.length; i++) {
      sum = sum + value.charCodeAt(i);
    }
    return sum % this.size;
  }

  set(value) {
    let index = this.hashFunction(value);
    let arr = this.table[index];
    if (!arr) {
      arr = [value];
    } else {
      arr.push(value);
    }
    this.table[index] = arr;
  }

  get(value) {
    let index = this.hashFunction(value);
    let arr = this.table[index];
    for (let i = 0; i < arr.length; i++) {
      if (value == arr[i]) {
        return `${value} found at ${index}`;
      }
    }
    return `${value} not found`;
  }
}

let hash = new HashTable(5);

hash.set(10);
hash.set(30);
hash.set(50);

console.log(hash.get(50));

// console.log(hash);
