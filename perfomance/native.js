const R = require('ramda')
const todos = require('../100000.json')

console.time('Native')

const key = 95000
const todo = todos[key]

const updatedTodos = {
  ...todos,
  [key]: { ...todo, completed: false }
}

console.timeEnd('Native')
// 39.412ms

updatedTodos;
