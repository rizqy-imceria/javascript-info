let worker = {
  someMethod() {
    return 1
  },
  slow(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x * this.someMethod())
      }, 3000)
    })   
  }
}

function cachingDecorator(func) {
  const cache = new Map()
  return function(x) {
    if (cache.get(x)) {
      return cache.get(x)
    }

    const result = func.call(this, x)
    cache.set(x, result)

    return result
  }
}

worker.slow = cachingDecorator(worker.slow)

async function callWorker() {
  const result1 = await worker.slow(1)

  console.log(result1)

  const result2 = await worker.slow(1)

  console.log(result2)
}

callWorker()