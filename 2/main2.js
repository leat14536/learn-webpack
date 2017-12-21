setTimeout(() => {
  require.ensure([], () => {
    const comp1 = require('./component1.js').default
    comp1()
  })
}, 5000)

setTimeout(() => {
  require.ensure([], () => {
    const comp2 = require('./component2.js').default
    comp2()
  })
}, 10000)