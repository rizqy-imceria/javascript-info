class User {
  constructor(name) {
    // invokes the setter
    this.name = name
  }

  get name() {
    return this._name
  }

  set name(value) {
    if (value.length < 4) {
      console.log('name is too short');
      return
    }

    this._name = value
  }
}

const user = new User('John')
console.log(user.name);


const user1 = new User('Joh')
console.log(user1.name);