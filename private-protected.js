class CoffeMachine {
  constructor(power) {
    this._power = power
  }

  get power() {
    return this._power
  }
}

class CoffeMachine2 extends CoffeMachine {
  cm2() {
    console.log('coffe machine 2')
  }
}

const coffeMachine = new CoffeMachine(100)
const coffeMachine2 = new CoffeMachine2(100)

console.log(`Power is: ${coffeMachine.power}`)
console.log(`Power is: ${coffeMachine2._power}`)


