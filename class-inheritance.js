class Animal {
  constructor(name) {
    this.speed = 0
    this.name = name
  }
  run(speed) {
    this.speed = speed
    console.log(`${this.name} runs with speed ${this.speed}`)
  }
  stop() {
    this.speed = 0
    console.log(`${this.name} stands still`)
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`)
  }
}

const animal = new Animal("my animal")
const rabbit = new Rabbit("White rabbit")

animal.run(200)
rabbit.run(300)
rabbit.hide()
