class Animal {
  age=12;//ES7语法
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    console.log('setter: ' + value);
  }
}

let a = new Animal('Kitty'); // setter: Kitty
console.log(a.name);
a.name = 'Tom'; // setter: Tom
console.log(a.name); // Jack
a.name = 'BOB'; 
console.log(a.name); 
console.log(a.age);
