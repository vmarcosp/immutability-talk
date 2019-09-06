const fs = require('fs')

const quantity = 100000

const faker = Array(quantity).fill(null)

const data = faker.reduce(
  (acc, _, id) => ({
  ...acc,
  [id]: {
    name: `Task nº ${id}`,
    completed: false
  }
}), {})

fs.writeFileSync(`${quantity}.json`, JSON.stringify(data), 'utf8')
 