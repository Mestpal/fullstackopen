import { useState } from 'react'
import Contacts from './components/contacts'
import Filter from './components/filter'
import PersonForm from './components/personForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const onChangeName = (event) => setNewName(event.target.value);
  const onChangeNumber = (event) => setNewNumber(event.target.value);
  const onChangeFilter = (event) => setFilter(event.target.value)

  const filteredResults = () => persons.filter((person) => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  const getContacts = () => filter ? filteredResults(): persons

  const onSubmitForm = (event) => {
    event.preventDefault()
    const names = persons.map((person) => person.name)    
    
    if (!names.includes(newName)) {      
      const newPerson = {
        name: newName,
        number: newNumber
      }

      setPersons(persons.concat(newPerson))
      setNewName("")
      setNewNumber("")
    } else{
      alert(`${newName} is already added to phonebook`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} action={onChangeFilter}/>
      <h2>Add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} actionName={onChangeName} actionNumber={onChangeNumber} submit={onSubmitForm}/>
      <h2>Numbers</h2>
      <Contacts contacts={getContacts()}/>
    </div>
  )
}

export default App