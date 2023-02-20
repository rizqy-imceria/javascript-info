const animal = {
  eats: true
}

const rabbit = Object.create(animal)

console.log(rabbit.eats)

console.log(Object.getPrototypeOf(rabbit) === animal)