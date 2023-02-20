let animal = {
  eats: true
}

function Rabbit(name) {
  this.name = name
}

console.log(Rabbit.prototype.constructor == Rabbit)
Rabbit.prototype = animal

let rabbit = new Rabbit('White rabbit')

console.log(rabbit.eats)
