const user = {}

Object.defineProperty(user, 'name', {
  value: 'John',
  writable: false
})

const descriptor = Object.getOwnPropertyDescriptor(user, 'name')

// console.log(JSON.stringify(descriptor, null, 2))

user.name = 'coy'

// console.log(user.name) // user.name didn't change to 'coy'

const user1 = {
  name: 'John',
  toString() {
    return this.name
  }
}

Object.defineProperty(user1, 'toString', {
  enumerable: false
})

for (const key in user1) console.log(key)
