const contacts = new Map()

contacts
  .set(1, 'Alonzo Church')
  .set(2, 'Alan Turing')

const updatedContacts = contacts.set(3, 'Alan Kay')

console.log(contacts.values())
// Output: { 'Alonzo Church', 'Alan Turing', 'Alan Kay' }

console.log(updatedContacts.values())
// Output: { 'Alonzo Church', 'Alan Turing', 'Alan Kay' }


