import { useState } from 'react'

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

  const Agenda = ({contacts}) => {    
    return contacts.map((person) => <div key={person.name}><b>{person.name}</b> {person.number}<br/></div>)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={filter} onChange={onChangeFilter}/>
      </div>
      <h2>Add a new</h2>
      <form onSubmit={onSubmitForm}>
        <div>
          name: <input value={newName} onChange={onChangeName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={onChangeNumber}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Agenda contacts={getContacts()}/>
    </div>
  )
}

export default App