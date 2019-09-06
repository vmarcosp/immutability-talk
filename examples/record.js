const { Record } = require('immutable')

const contactFactory = Record({
  name: null,
  email: null,
  age: null
})

const contact = contactFactory({ 
  name: 'Linux Torvalds', 
  email: 'torvalds@transmeta.com',
  age: 49
})

// console.log(contact.toObject())
// Output: { name: 'Linus Torvalds', email: 'torvalds@transmeta.com', age: '49' }

const newContact = contactFactory({ phoneNumber: '+1 (408) 327 9830 x328' })

console.log(newContact.toObject())
// Output: { name: null, email: null, age: null }

const updatedContact = contact.update('name', () => 'Linus Torvalds')
console.log(updatedContact.toObject())
// Output: { name: 'Linus Torvalds', email: 'torvalds@transmeta.com', age: 49 }

const updatedContact = contact.update('names', () => 'Linus Torvalds')
console.log(updatedContact.toObject())
// Output: { name: 'Linux Torvalds', email: 'torvalds@transmeta.com', age: 49 }


