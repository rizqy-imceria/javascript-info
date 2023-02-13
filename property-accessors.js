"use strict"
const user = {
  name: "john",
  surname: "smith",
  get fullName() {
    return `${this.name} ${this.surname}`
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ")
  }
}

// console.log(user.fullName);
user.fullName = "ujang wawan"
// console.log(user.name);
// console.log(user.surname);

const user2 = {
  _name: 'coy',
  get name() {
    return this._name
  },
  set name(value) {
    if (value.length < 4) {
      console.log("name is too short");
      return
    }

    this._name = value
  }
}

// user2.name = "coyyy"
// console.log(user2.name);

user2.name = ""

console.log(user2.name);

function User(name, birthday) {
  this.name = name
  this.birthday = birthday

  Object.defineProperty(this, 'age', {
    get() {
      const todayYear = new Date().getFullYear()
      return todayYear - this.birthday.getFullYear()
    }
  })
}

const john = new User('John', new Date(1992, 6, 1))

console.log(john.age);


