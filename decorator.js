let worker = {
  slow(max, min) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(min + max)
      }, 3000)
    })   
  }
}

function cachingDecorator(func, hash) {
  const cache = new Map()
  return function() {
    const key = hash(arguments)
    if (cache.get(key)) {
      return cache.get(key)
    }

    const result = func.call(this, ...arguments)
    cache.set(key, result)

    return result
  }
}

function hash(args) {
  return args[0] + ' ' + args[1]
}

worker.slow = cachingDecorator(worker.slow, hash)

async function callWorker() {
  const result1 = await worker.slow(1, 10)

  console.log(result1)

  const result2 = await worker.slow(1, 10)

  console.log(result2)
}

callWorker()