import { useState, useEffect } from 'react'
import Contacts from './components/contacts'
import Filter from './components/filter'
import PersonForm from './components/personForm'
import personServices from './services/person'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const getAllContacts = () => {
   personServices.getAll()
    .then( persons => setPersons(persons))
  }

  useEffect(getAllContacts, [])

  const getContacts = () => filter ? filteredResults(): persons
  const onChangeName = (event) => setNewName(event.target.value);
  const onChangeNumber = (event) => setNewNumber(event.target.value);
  const onChangeFilter = (event) => setFilter(event.target.value)

  const filteredResults = () => persons.filter((person) => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  )
  
  const deleteContact = (person) => {
    const isConfirm = confirm(`Delete ${person.name}`)

    if (isConfirm) {
      personServices
        .deletePerson(person.id)
        .then(() => getAllContacts()) 
    }
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    const names = persons.map((person) => person.name)    
    
    if (!names.includes(newName)) {
      const newPerson = {
        name: newName,
        number: newNumber
      }

      personServices
        .create(newPerson)
        .then(() => {
          setPersons(persons.concat(newPerson))
          setNewName("")
          setNewNumber("")
          getAllContacts()
        }) 
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
      <Contacts contacts={getContacts()} action={deleteContact}/>
    </div>
  )
}

export default App