const Immutable = require('immutable')
const mock = require('../100000.json')

const todos = Immutable.fromJS(mock)

console.time('Immutable')

todos.update('95000', 
  todo => todo.update(
    'completed',
    _ => true
  )
)

console.timeEnd('Immutable')
// 1.509ms

