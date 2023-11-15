// 1 Multiple Type Data Can be stored
// 2 Search => 0(1)

class Map {
  constructor() {
    this.map = {};
  }

  put(key, value) {
    this.map[key] = value;
  }

  get(key) {
    if (this.map[key]) {
      return this.map[key];
    }
  }
}

let myMap = new Map();

myMap.put("name", "Sajib");
myMap.get("Sajib");

console.log(myMap);
