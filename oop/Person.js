class Person {
  name;
  email;

  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  print() {
    return `my name is ${this.name}`;
  }
}

const obj1 = new Person("Sajib", "email@email.com");
console.log(obj1.print());

const obj2 = new Person("Sajid", "sajid@email.com");
console.log(obj2.print());

