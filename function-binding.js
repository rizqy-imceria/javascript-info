let user = {
  firstName: 'John',
  sayHi() {
    console.log(`Hi ${this.firstName}`)
  }
}

user.sayHi()

setTimeout(() => user.sayHi(), 1000)

user.sayHi = function() {
  console.log('another user in setTimeout');
}


const user2 = {
  firstName: 'Johhhn'
}

function func() {
  console.log(this.firstName)
} 

let funcUser = func.bind(user2)

funcUser()