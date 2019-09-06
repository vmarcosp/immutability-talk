const { Map } = require('immutable')

const contacts = Map({
  1: 'Alonzo Church',
  2: 'Alan Turing'
})

const updatedContacts = contacts.set('3', 'Alan Kay')

console.log(contacts.values())
// Output: { '1': 'Alonzo Church', '2': 'Alan Turing' }

console.log(updatedContacts.values())
// Output: { '1': 'Alonzo Church', '2': 'Alan Turing', '3': 'Alan Kay' }

